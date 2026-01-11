const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const mapButton = document.querySelector('[data-map-button]');
const mapContainer = document.querySelector('[data-map-container]');

if (mapButton && mapContainer) {
  mapButton.addEventListener('click', () => {
    const src = mapContainer.getAttribute('data-src');
    if (!src) {
      return;
    }
    mapContainer.innerHTML = `<iframe class="map-frame" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${src}" title="Anfahrt"></iframe>`;
    mapButton.remove();
  });
}
