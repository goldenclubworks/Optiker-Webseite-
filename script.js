// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Cookie banner handling
const banner = document.querySelector('.cookie-banner');
const acceptAllButton = document.querySelector('[data-cookie-accept]');
const saveButton = document.querySelector('[data-cookie-save]');
const essentialButton = document.querySelector('[data-cookie-essential]');
const marketingToggle = document.querySelector('#cookies-marketing');
const functionalToggle = document.querySelector('#cookies-functional');

const COOKIE_KEY = 'optiker-cookie-settings';

const showBannerIfNeeded = () => {
  if (!banner) {
    return;
  }
  const saved = localStorage.getItem(COOKIE_KEY);
  if (!saved) {
    banner.classList.add('active');
  }
};

const saveSettings = (settings) => {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(settings));
  if (banner) {
    banner.classList.remove('active');
  }
};

if (acceptAllButton) {
  acceptAllButton.addEventListener('click', () => {
    saveSettings({
      functional: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    });
  });
}

if (essentialButton) {
  essentialButton.addEventListener('click', () => {
    saveSettings({
      functional: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  });
}

if (saveButton) {
  saveButton.addEventListener('click', () => {
    saveSettings({
      functional: Boolean(functionalToggle?.checked),
      marketing: Boolean(marketingToggle?.checked),
      timestamp: new Date().toISOString(),
    });
  });
}

showBannerIfNeeded();
