// Renderizado de la página de overview de mods (grid con imagen + descripción).

function modCard(mod) {
  const img = mod.img
    ? `<img class="mod-card-img" src="${mod.img}" alt="" loading="lazy" width="300" height="169">`
    : `<div class="mod-card-img mod-card-img-empty">Sin imagen</div>`;
  return `
    <a class="mod-card" href="https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.id}" target="_blank" rel="noopener">
      ${img}
      <div class="mod-card-body">
        <h3 class="mod-card-name">${mod.name}</h3>
        <p class="mod-card-desc">${mod.desc || ''}</p>
      </div>
    </a>
  `;
}

function renderMods(list) {
  const grid = document.getElementById('modsGrid');
  const empty = document.getElementById('modsEmpty');
  grid.innerHTML = list.map(modCard).join('');
  empty.hidden = list.length > 0;
}

function setupSearch() {
  const input = document.getElementById('modsSearch');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const filtered = q
      ? MODS.filter((m) => m.name.toLowerCase().includes(q) || (m.desc || '').toLowerCase().includes(q))
      : MODS;
    renderMods(filtered);
  });
}

document.getElementById('modsCount').textContent = `${MODS.length} mods instalados · haz clic en uno para verlo en Steam Workshop`;
renderMods(MODS);
setupSearch();
