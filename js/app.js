(function () {
  'use strict';

  const ICONS = {
    home: '<path d="m3 10 9-7 9 7"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-7h6v7"/>',
    map: '<path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
    report: '<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.7 2.9 17a2 2 0 0 0 1.74 3h14.72a2 2 0 0 0 1.74-3L13.7 3.7a2 2 0 0 0-3.4 0Z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    close: '<path d="m6 6 12 12"/><path d="m18 6-12 12"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z"/>',
    location: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    target: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    water: '<path d="M12 3s5 5.3 5 9a5 5 0 0 1-10 0c0-3.7 5-9 5-9Z"/><path d="M9.5 14.5c.6.7 1.4 1 2.5 1"/>',
    bottle: '<path d="M10 3h4"/><path d="M10.5 3v3L8 9v9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9l-2.5-3V3"/><path d="M8 10h8"/>',
    trash: '<path d="M4 7h16"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M6 7l1 13h10l1-13"/><path d="M9 7V4h6v3"/>',
    tire: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v5"/><path d="m18.9 9.5-4.8 1.8"/><path d="m15.5 17.9-3-4.1"/><path d="m8.5 17.9 3-4.1"/><path d="M5.1 9.5 9.9 11.3"/>',
    leaf: '<path d="M20 4C11 4 5 8 4 16c5.1 1.2 10-.4 13.1-3.7C19.1 10.1 20 7 20 4Z"/><path d="M4 20c4-4 7-7 12-9"/>',
    flag: '<path d="M5 21V4"/><path d="M5 5c4-3 6 3 14 0v9c-8 3-10-3-14 0"/>',
    chart: '<path d="M5 20V10"/><path d="M12 20V4"/><path d="M19 20v-7"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3 3 0 0 1 0 5.9"/><path d="M17 14c2.8.8 4 2.7 4 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    external: '<path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 4.1 1.5c-.9 1-1.9 1.2-1.9 2.7"/><path d="M12 17h.01"/>',
    dot: '<circle cx="12" cy="12" r="5" fill="currentColor" stroke="none"/>',
    send: '<path d="m3 11 18-8-7 18-2.5-7.5L3 11Z"/><path d="M11.5 13.5 21 3"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
    back: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>'
  };

  function icon(name, size) {
    const paths = ICONS[name] || ICONS.info;
    const s = size || 20;
    return `<svg class="icon icon-${name}" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  }

  window.AFIcon = icon;

  function applyIcons() {
    document.querySelectorAll('[data-icon]').forEach((el) => {
      if (el.dataset.iconReady) return;
      el.innerHTML = icon(el.dataset.icon, Number(el.dataset.iconSize || 20));
      el.dataset.iconReady = '1';
    });
  }

  function setTheme(theme) {
    const root = document.documentElement;
    root.dataset.theme = theme;
    localStorage.setItem('alertafoco-theme', theme);
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      const label = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
      btn.setAttribute('aria-label', label);
      btn.title = label;
      btn.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon', 18);
    });
  }

  function initTheme() {
    const saved = localStorage.getItem('alertafoco-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved || (prefersDark ? 'dark' : 'light'));
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
      });
    });
  }

  function initMenu() {
    const btn = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.innerHTML = icon(open ? 'close' : 'menu', 22);
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('is-open')));
  }

  function initPageTransitions() {
    document.body.classList.add('page-ready');
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || link.target === '_blank') return;
      link.addEventListener('click', (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        document.body.classList.add('page-leaving');
        setTimeout(() => window.location.href = href, 170);
      });
    });
  }

  function initReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
  }

  function initYear() {
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  }

  function init() {
    applyIcons();
    initTheme();
    initMenu();
    initPageTransitions();
    initReveal();
    initYear();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
