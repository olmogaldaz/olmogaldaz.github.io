document.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('site-header');
  if (!header) return;

  const isEN = location.pathname.startsWith('/en/');

  const navES = `
    <h1>Caso Olmo Gómez Aldaz</h1>
    <button class="menu-toggle" aria-label="Menú">☰</button>
    <nav class="main-nav">
      <a href="/es/">Inicio</a>
      <a href="/es/caso/">La historia</a>
      <a href="/es/sentencia/">Sentencia</a>
      <a href="/es/libros/">Libros</a>
      <a href="/es/autor/">Autor</a>
      <a href="/es/prensa/">Prensa</a>
      <div class="small">
        <strong>ES</strong> |
        <a href="/en/">EN</a>
      </div>
    </nav>
  `;

  const navEN = `
    <h1>Olmo Gómez Aldaz Case</h1>
    <button class="menu-toggle" aria-label="Menu">☰</button>
    <nav class="main-nav">
      <a href="/en/">Home</a>
      <a href="/en/story/">The Story</a>
      <a href="/en/sentence/">Sentence</a>
      <a href="/en/books/">Books</a>
      <a href="/en/author/">Author</a>
      <a href="/en/press/">Press</a>
      <div class="small">
        <a href="/es/">ES</a> |
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
});
