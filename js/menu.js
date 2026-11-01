document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.menu-preview-header');
  if (!header) return;
  const disclosure = header.querySelector('.preview-disclosure');
  const summary = disclosure.querySelector('summary');
  const closeMenu = (restoreFocus = false) => {
    if (!disclosure.open) return;
    disclosure.open = false;
    if (restoreFocus) summary.focus();
  };
  document.addEventListener('click', (event) => {
    if (!disclosure.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && disclosure.open) {
      event.preventDefault();
      closeMenu(true);
    }
  });
  document.addEventListener('focusin', (event) => {
    if (!disclosure.contains(event.target)) closeMenu();
  });
  disclosure.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
      if (link.getAttribute('href').startsWith('#')) {
        const target = document.getElementById(link.hash.slice(1));
        if (target) target.focus({ preventScroll: true });
      }
    });
  });
});
