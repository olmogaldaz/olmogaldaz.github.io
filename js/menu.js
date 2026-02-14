document.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('site-header');
  if (!header) return;

  const isEN = location.pathname.startsWith('/en/');
  const targetLang = isEN ? 'es' : 'en';
  
  const altLink = document.querySelector(
    `link[rel="alternate"][hreflang="${targetLang}"]`
  );
  
  const altHref = altLink ? altLink.getAttribute('href') : null;
    
  const navES = `
    <div class="site-title">
      <img src="/img/GA_512x512.png" alt="GA" class="logo-ga">
      <span>Olmo Gómez Aldaz</span>
    </div>
    <button class="menu-toggle" aria-label="Menú">☰</button>
    <nav class="main-nav">
      <a href="/">Inicio</a>
      <a href="/es/historia/">Historia</a>
      <a href="/es/demanda/">Demanda</a>
      <a href="/es/sentencia/">Sentencia</a>
      <a href="/es/libros/">Libros</a>
      <a href="/es/autor/">Autor</a>
      <a href="/es/prensa/">Prensa</a>
      <div class="small">
        <strong>ES</strong> |
        <a href="${altHref || '/en/'}">EN</a>
      </div>
    </nav>
  `;

  const navEN = `
    <div class="site-title">
      <img src="/img/GA_512x512.png" alt="GA" class="logo-ga">
      <span>Olmo Gómez Aldaz</span>
    </div>
    <button class="menu-toggle" aria-label="Menu">☰</button>
    <nav class="main-nav">
      <a href="/en/">Home</a>
      <a href="/en/story/">Story</a>
      <a href="/en/claim/">Claim</a>
      <a href="/en/sentence/">Sentence</a>
      <a href="/en/books/">Books</a>
      <a href="/en/author/">Author</a>
      <a href="/en/press/">Press</a>
      <div class="small">
        <a href="${altHref || '/'}">ES</a> |
        <strong>EN</strong>
      </div>
    </nav>
  `;

  header.innerHTML = isEN ? navEN : navES;

  const toggle = header.querySelector('.menu-toggle');
  const nav = header.querySelector('.main-nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

    // Mark active section in the menu
  const normalizePath = (p) => {
    if (!p) return '/';
    // drop query/hash just in case (pathname should not include them, but safe)
    p = p.split('?')[0].split('#')[0];
    // ensure trailing slash
    if (!p.endsWith('/')) p += '/';
    return p;
  };

  const currentPath = normalizePath(location.pathname);

  header.querySelectorAll('.main-nav a').forEach(a => {
    const hrefPath = normalizePath(new URL(a.getAttribute('href'), location.origin).pathname);
    if (hrefPath === currentPath) {
      a.classList.add('active');
    }
  });
  
});
