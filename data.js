// Datos estáticos del servidor. Editar aquí en vez de en el HTML.

const SERVER = {
  name: 'Server Poxillo',
  address: '54.38.81.169:11400',
  map: 'Muldraugh, KY',
  version: 'Stable · build 24775771',
  maxPlayers: 10,
  discordUrl: 'https://discord.gg/xgFmnhnsZ4',
  publicPageUrl: 'https://supercraft.host/s/pz-jzmarquez-com/',
};

const RULES = [
  'PVP desactivado en todo el servidor: no se puede dañar a otros jugadores.',
  'Respeta los refugios (safehouses) de otros jugadores: no se puede entrar, saquear ni prender fuego a refugios ajenos.',
  'Sé amable en el chat, nada de insultos ni spam.',
  'No se permite el griefing (destruir bases, robar recursos comunes, bloquear puertas ajenas, etc.).',
  'El botín reaparece cada 7 días; evita acumular todo en un solo refugio para que haya para todos.',
];

const HOW_TO_JOIN = [
  'Abre Project Zomboid → <strong>Unirse</strong> → <strong>Unirse por IP</strong>.',
  `IP: <code>54.38.81.169</code> · Puerto: <code>11400</code>`,
  'O usa el botón <strong>"Unirse ahora"</strong> de abajo para conectar directamente desde Steam.',
];

const ROSTER = [
  'Jezu', 'Chocapic9000', 'SERGIO', 'RafaZD', 'Sheratan', 'SeyXmo', 'alexu',
  'Claus', 'Du Lidl', 'D Lidl', 'diegogm18', 'SeyxmoXIII', 'Rainbowtrash',
  'CHatarras', 'Moiseh', 'Dea', 'Netsu',
];

// Ordenados alfabéticamente por nombre para mostrar.
const MODS = [
  { name: '1967 Chevrolet Impala', id: '3677217949' },
  { name: '[B42] Spanish Guitar Addon', id: '3673794502' },
  { name: 'CartoonTV', id: '2850170557' },
  { name: 'CleanUI', id: '3437629766' },
  { name: 'CNP España Mod', id: '3645161115' },
  { name: 'Fichin Lifestyle Hobbies (traducción ES)', id: '3784413438' },
  { name: 'Furgonetas de España / Vans of Spain', id: '2950529166' },
  { name: 'Has Been Read', id: '2544353492' },
  { name: 'KillCount', id: '2553809727' },
  { name: 'LifeStyle - Acoustic Guitar', id: '3412944806' },
  { name: 'LifeStyle: Guitar - The Last of Us', id: '3421651510' },
  { name: 'Lifestyle: Guts Theme', id: '3093045288' },
  { name: 'Lifestyle: Hobbies', id: '3403870858' },
  { name: 'Map Legend UI', id: '2710167561' },
  { name: 'Military Tool Kit', id: '2705406713' },
  { name: 'NeatUI Framework', id: '3508537032' },
  { name: 'Piano Music Lifestyle Addon', id: '3261836947' },
  { name: 'Project Arcade', id: '3645980077' },
  { name: 'Rain Cleans Blood', id: '2956146279' },
  { name: 'Red Library', id: '3705029261' },
  { name: 'Silent Hill Lifestyle Addon', id: '3538308427' },
  { name: 'Skateboard!', id: '3456675747' },
  { name: 'Spanish Female Voice Pack', id: '3469194888' },
  { name: 'Spanish Male Voice Pack', id: '3447058353' },
  { name: 'The Only Cure', id: '3580276809' },
  { name: 'Time-Period Accurate Music B42', id: '3407139462' },
  { name: 'True Moozic B42+', id: '3632610172' },
  { name: 'True Moozic: Video Game Mixtapes', id: '3673701089' },
  { name: 'TrueMoozic Made in Spain', id: '3715920784' },
  { name: 'Video Game Consoles', id: '2831786301' },
  { name: 'Violin Music Lifestyle Addon', id: '3177585116' },
];

const CONFIG_GROUPS = [
  {
    title: 'General',
    items: [
      ['Jugadores máximos', '10'],
      ['Semilla del mapa', 'WVPRSdwloeUSifrw', 'mono'],
      ['Chat de voz', 'Activado (10–300 casillas)'],
      ['Facciones', 'Activadas'],
      ['Copias de seguridad', 'Cada 60 min · 5 más recientes'],
    ],
  },
  {
    title: 'PVP y combate',
    items: [
      ['PVP', 'Desactivado'],
      ['Multi-hit de zombis', 'Activado'],
    ],
  },
  {
    title: 'Refugios',
    items: [
      ['Reclamables por jugadores', 'Sí'],
      ['Edificios no residenciales', 'Sí'],
      ['Entrada sin invitación', 'No'],
      ['Fuego daña refugios', 'No'],
      ['Robar en refugios ajenos', 'No'],
      ['Reaparecer en tu refugio', 'Sí'],
      ['Eliminación por inactividad', '144h sin visitar'],
    ],
  },
  {
    title: 'Supervivencia',
    items: [
      ['Dormir', 'Permitido (no obligatorio)'],
      ['Reaparición de botín', 'Cada 7 días'],
      ['Lectura de libros de habilidad', 'Acelerada (0.1 min/página)'],
    ],
  },
];
