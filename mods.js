// Renderizado de la página de overview de mods (grid con imagen + descripción,
// más filtros por categoría y ordenación).

const CATEGORY_LABELS = {
  Musica: 'Música',
  Vehiculos: 'Vehículos',
  Ropa: 'Ropa y apariencia',
  Ocio: 'Ocio',
  Interfaz: 'Interfaz',
  Jugabilidad: 'Jugabilidad',
  Utilidad: 'Utilidad',
  Mapas: 'Mapas',
};

const state = {
  query: '',
  category: 'all',
  sort: 'name',
};

function formatSize(mb) {
  if (mb >= 1024) return `${(mb / 1024).toFixed(1)} GB`;
  if (mb < 1) return '< 1 MB';
  return `${mb.toFixed(1)} MB`;
}

function modCard(mod) {
  const img = mod.img
    ? `<img class="mod-card-img" src="${mod.img}" alt="" loading="lazy" width="300" height="169">`
    : `<div class="mod-card-img mod-card-img-empty">Sin imagen</div>`;
  return `
    <a class="mod-card" href="https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.id}" target="_blank" rel="noopener">
      ${img}
      <div class="mod-card-body">
        <div class="mod-card-top">
          <h3 class="mod-card-name">${mod.name}</h3>
          <span class="mod-card-size">${formatSize(mod.sizeMB)}</span>
        </div>
        <p class="mod-card-desc">${mod.desc || ''}</p>
        <span class="mod-card-tag">${CATEGORY_LABELS[mod.category] || mod.category}</span>
      </div>
    </a>
  `;
}

function getFiltered() {
  const q = state.query.trim().toLowerCase();
  let list = MODS.filter((m) => {
    if (state.category !== 'all' && m.category !== state.category) return false;
    if (q && !m.name.toLowerCase().includes(q) && !(m.desc || '').toLowerCase().includes(q)) return false;
    return true;
  });

  if (state.sort === 'size-desc') list = list.slice().sort((a, b) => b.sizeMB - a.sizeMB);
  else if (state.sort === 'size-asc') list = list.slice().sort((a, b) => a.sizeMB - b.sizeMB);
  // 'name' ya viene alfabético desde data.js

  return list;
}

function render() {
  const list = getFiltered();
  const grid = document.getElementById('modsGrid');
  const empty = document.getElementById('modsEmpty');
  grid.innerHTML = list.map(modCard).join('');
  empty.hidden = list.length > 0;
  document.getElementById('modsResultCount').textContent =
    list.length === MODS.length ? `${MODS.length} mods` : `${list.length} de ${MODS.length} mods`;
}

function setupFilters() {
  const counts = { all: MODS.length };
  MODS.forEach((m) => { counts[m.category] = (counts[m.category] || 0) + 1; });

  const categories = ['all', ...Object.keys(CATEGORY_LABELS).filter((c) => counts[c])];
  const container = document.getElementById('modsFilters');
  container.innerHTML = categories.map((cat) => {
    const label = cat === 'all' ? 'Todos' : CATEGORY_LABELS[cat];
    return `<button type="button" class="mods-filter-chip${cat === 'all' ? ' active' : ''}" data-cat="${cat}">${label} <span class="mods-filter-count">${counts[cat]}</span></button>`;
  }).join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.mods-filter-chip');
    if (!btn) return;
    state.category = btn.dataset.cat;
    container.querySelectorAll('.mods-filter-chip').forEach((b) => b.classList.toggle('active', b === btn));
    render();
  });
}

function setupSearch() {
  const input = document.getElementById('modsSearch');
  input.addEventListener('input', () => {
    state.query = input.value;
    render();
  });
}

function setupSort() {
  const select = document.getElementById('modsSort');
  select.addEventListener('change', () => {
    state.sort = select.value;
    render();
  });
}

document.getElementById('modsCount').textContent = `${MODS.length} mods instalados · haz clic en uno para verlo en Steam Workshop`;
setupFilters();
setupSearch();
setupSort();
render();
