// Renderizado de las listas estáticas (a partir de data.js) + estado en vivo.

function renderStaticContent() {
  document.getElementById('serverName').textContent = SERVER.name;
  document.getElementById('mapValue').textContent = SERVER.map;
  document.getElementById('versionValue').textContent = SERVER.version;
  document.getElementById('joinBtn').href = `steam://connect/${SERVER.address}`;
  document.getElementById('discordBtn').href = SERVER.discordUrl;
  document.getElementById('publicPageBtn').href = SERVER.publicPageUrl;

  document.getElementById('rosterSummary').textContent = `Supervivientes registrados (${ROSTER.length})`;
  document.getElementById('rosterList').innerHTML =
    ROSTER.map((name) => `<li>${name}</li>`).join('');

  document.getElementById('modsSummary').textContent = `Mods (${MODS.length})`;

  document.getElementById('configGroups').innerHTML = CONFIG_GROUPS.map((group) => `
    <div class="config-group">
      <h4>${group.title}</h4>
      <ul class="config-list">
        ${group.items.map(([label, value, cls]) =>
          `<li><span>${label}</span><strong${cls ? ` class="${cls}"` : ''}>${value}</strong></li>`
        ).join('')}
      </ul>
    </div>
  `).join('');

  const diskPct = Math.min(100, (DISK.usedGB / DISK.maxGB) * 100);
  const diskFill = document.getElementById('diskBarFill');
  diskFill.style.width = `${diskPct.toFixed(1)}%`;
  diskFill.classList.toggle('warn', diskPct >= 70 && diskPct < 90);
  diskFill.classList.toggle('critical', diskPct >= 90);
  document.getElementById('diskValue').textContent = `${DISK.usedGB} GB / ${DISK.maxGB} GB`;
  document.getElementById('diskNote').textContent =
    `${diskPct.toFixed(0)}% usado · comprobado el ${DISK.checkedAt}`;
  document.getElementById('diskBreakdown').innerHTML = DISK.breakdown
    .map(([label, value]) => `<li><span>${label}</span><strong>${value}</strong></li>`)
    .join('');
}

function setupCopyButton() {
  const copyBtn = document.getElementById('copyBtn');
  const address = document.getElementById('address');

  copyBtn.addEventListener('click', async () => {
    const text = address.textContent;
    if (!text || text === '...') return;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = '¡Copiado!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = 'Copiar';
        copyBtn.classList.remove('copied');
      }, 1500);
    } catch (e) {
      copyBtn.textContent = 'Error';
      setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 1500);
    }
  });
}

function setupNotifyButton() {
  const notifyBtn = document.getElementById('notifyBtn');
  let enabled = localStorage.getItem('pz_notify') === '1';

  const refresh = () => {
    notifyBtn.textContent = enabled ? '🔔 Avisos activados' : '🔔 Avisarme cuando esté online';
    notifyBtn.classList.toggle('active', enabled);
  };
  refresh();

  notifyBtn.addEventListener('click', async () => {
    if (!('Notification' in window)) {
      alert('Tu navegador no soporta notificaciones.');
      return;
    }
    if (!enabled) {
      const perm = await Notification.requestPermission();
      if (perm !== 'granted') return;
      enabled = true;
    } else {
      enabled = false;
    }
    localStorage.setItem('pz_notify', enabled ? '1' : '0');
    refresh();
  });

  return () => enabled;
}

function setupShareButton() {
  const shareBtn = document.getElementById('shareBtn');
  shareBtn.addEventListener('click', async () => {
    const shareData = { title: `${SERVER.name} - Project Zomboid`, url: location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(location.href);
        shareBtn.textContent = '¡Enlace copiado!';
        setTimeout(() => { shareBtn.textContent = 'Compartir'; }, 1500);
      }
    } catch (e) { /* usuario canceló el share, ignorar */ }
  });
}

function setupStatusPolling(isNotifyEnabled) {
  const pill = document.getElementById('pill');
  const players = document.getElementById('players');
  const address = document.getElementById('address');
  const playerList = document.getElementById('playerList');
  const playerEmpty = document.getElementById('playerEmpty');
  let wasOnline = null;

  async function poll() {
    try {
      const res = await fetch('/.netlify/functions/status', { cache: 'no-store' });
      const data = await res.json();

      if (isNotifyEnabled() && wasOnline === false && data.online && Notification.permission === 'granted') {
        new Notification(`${SERVER.name} está online`, { body: '¡Ya puedes conectarte!' });
      }
      wasOnline = data.online;

      pill.className = 'pill ' + (data.online ? 'online' : 'offline');
      pill.textContent = data.online ? 'Online' : 'Offline';
      address.textContent = data.address || '...';

      playerList.innerHTML = '';
      if (data.online && data.players) {
        players.textContent = `${data.players.count} / ${SERVER.maxPlayers}`;
        if (data.players.count > 0) {
          playerList.style.display = 'flex';
          playerEmpty.style.display = 'none';
          data.players.names.forEach((name) => {
            const li = document.createElement('li');
            li.textContent = name;
            playerList.appendChild(li);
          });
        } else {
          playerList.style.display = 'none';
          playerEmpty.style.display = 'block';
        }
      } else if (data.online) {
        players.textContent = '...';
        playerList.style.display = 'none';
        playerEmpty.style.display = 'none';
      } else {
        players.textContent = `0 / ${SERVER.maxPlayers}`;
        playerList.style.display = 'none';
        playerEmpty.style.display = 'none';
      }
    } catch (e) {
      pill.className = 'pill offline';
      pill.textContent = 'Sin datos';
    }
  }

  poll();
  setInterval(poll, 300000);
}

renderStaticContent();
setupCopyButton();
const isNotifyEnabled = setupNotifyButton();
setupShareButton();
setupStatusPolling(isNotifyEnabled);
