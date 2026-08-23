const net = require('net');

const GAME_HOST = process.env.PZ_HOST || 'ew3.supercraft.host';
const GAME_PORT = Number(process.env.PZ_GAME_PORT) || 11400;
const RCON_HOST = process.env.PZ_RCON_HOST || GAME_HOST;
const RCON_PORT = Number(process.env.PZ_RCON_PORT) || 11405;
const RCON_PASSWORD = process.env.PZ_RCON_PASSWORD || '';

const TCP_TIMEOUT_MS = 2000;
const RCON_TIMEOUT_MS = 3000;

function checkOnline(host, port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let done = false;
    const finish = (online) => {
      if (done) return;
      done = true;
      socket.destroy();
      resolve(online);
    };
    socket.setTimeout(TCP_TIMEOUT_MS);
    socket.once('connect', () => finish(true));
    socket.once('timeout', () => finish(false));
    socket.once('error', () => finish(false));
    socket.connect(port, host);
  });
}

function rconBuildPacket(id, type, body) {
  const bodyBuf = Buffer.from(body + '\0', 'ascii');
  const size = 4 + 4 + bodyBuf.length + 1;
  const buf = Buffer.alloc(4 + size);
  let offset = 0;
  buf.writeInt32LE(size, offset); offset += 4;
  buf.writeInt32LE(id, offset); offset += 4;
  buf.writeInt32LE(type, offset); offset += 4;
  bodyBuf.copy(buf, offset); offset += bodyBuf.length;
  buf.writeUInt8(0, offset);
  return buf;
}

function rconParsePackets(buf) {
  const packets = [];
  let offset = 0;
  while (offset + 4 <= buf.length) {
    const size = buf.readInt32LE(offset);
    if (offset + 4 + size > buf.length) break;
    const id = buf.readInt32LE(offset + 4);
    const type = buf.readInt32LE(offset + 8);
    const body = buf.toString('ascii', offset + 12, offset + 4 + size - 2);
    packets.push({ id, type, body });
    offset += 4 + size;
  }
  return packets;
}

function rconCommand(command) {
  return new Promise((resolve, reject) => {
    if (!RCON_PASSWORD) {
      reject(new Error('RCON no configurado'));
      return;
    }
    const socket = net.createConnection(RCON_PORT, RCON_HOST);
    let recvBuf = Buffer.alloc(0);
    let authed = false;
    let settled = false;
    const responseParts = [];
    let quietTimer = null;

    const finish = (err, result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      clearTimeout(quietTimer);
      socket.destroy();
      if (err) reject(err);
      else resolve(result);
    };

    const timer = setTimeout(() => finish(new Error('RCON timeout')), RCON_TIMEOUT_MS);

    const scheduleQuietFinish = () => {
      clearTimeout(quietTimer);
      quietTimer = setTimeout(() => finish(null, responseParts.join('\n')), 400);
    };

    socket.on('connect', () => {
      socket.write(rconBuildPacket(1, 3, RCON_PASSWORD));
    });

    socket.on('data', (data) => {
      recvBuf = Buffer.concat([recvBuf, data]);
      const packets = rconParsePackets(recvBuf);
      recvBuf = Buffer.alloc(0);

      for (const p of packets) {
        if (!authed) {
          if (p.id === -1) {
            finish(new Error('RCON auth fallida'));
            return;
          }
          authed = true;
          socket.write(rconBuildPacket(2, 2, command));
        } else {
          if (p.body) responseParts.push(p.body);
          scheduleQuietFinish();
        }
      }
    });

    socket.on('error', (err) => finish(err));
  });
}

function parsePlayers(body) {
  const lines = body.split('\n').map((l) => l.trim()).filter(Boolean);
  const header = lines[0] || '';
  const match = header.match(/Players connected \((\d+)\)/);
  const count = match ? Number(match[1]) : 0;
  const names = lines
    .slice(1)
    .filter((l) => l.startsWith('-'))
    .map((l) => l.slice(1).trim());
  return { count, names };
}

exports.handler = async () => {
  // El puerto de juego (GAME_PORT) es UDP: una conexion TCP a el siempre
  // falla aunque el servidor este arriba. El puerto RCON si es TCP, asi que
  // se usa para detectar online/offline (igual que hacia el script local).
  const online = await checkOnline(RCON_HOST, RCON_PORT);

  let players = null;
  if (online) {
    try {
      const body = await rconCommand('players');
      players = parsePlayers(body);
    } catch (e) {
      players = null;
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify({
      online,
      address: `${GAME_HOST}:${GAME_PORT}`,
      players,
      checkedAt: new Date().toISOString(),
    }),
  };
};
