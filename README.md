# gomezaldaz.com — Web structure

Este repositorio contiene la estructura y el contenido estático de la web
gomezaldaz.com y de sus subdominios asociados.

El proyecto está organizado por idioma y por bloques conceptuales.
Los subdominios públicos se mapean internamente a directorios de este repositorio.
La estructura de carpetas es una capa interna (no visible para el usuario final)
y responde a un criterio de orden y estabilidad a largo plazo.

---

## Estructura general del repositorio

/
├── es/        # Español (idioma base)
├── en/        # English
├── assets/    # Recursos compartidos (CSS, imágenes, etc.)
└── README.md

---

## Español — /es/

El español es el idioma base del proyecto.

Dentro de /es/ se encuentran el índice general y los distintos bloques
conceptuales, cada uno de los cuales se publica externamente mediante
un subdominio propio.

Estructura:

/es/
├── index.html        # Índice general (español)
├── autor/            # Autor
├── caso/             # Caso Gómez Aldaz
├── sentencia/        # Sentencia
├── libros/           # Libros
└── prensa/           # Prensa

Correspondencia pública (subdominios → carpetas):

- gomezaldaz.com              → /es/
- autor.gomezaldaz.com        → /es/autor/
- caso.gomezaldaz.com         → /es/caso/
- sentencia.gomezaldaz.com    → /es/sentencia/
- libros.gomezaldaz.com       → /es/libros/
- prensa.gomezaldaz.com       → /es/prensa/

---

## English — /en/

El inglés es una traducción editorial del contenido en español.
No es un proyecto independiente ni dinámico, sino una versión equivalente
en otro idioma.

La estructura replica la organización conceptual del español, con los
nombres de los bloques traducidos.

Estructura:

/en/
├── index.html        # General index (English)
├── author/           # Author
├── case/             # Case
├── sentence/         # Court ruling / judgment
├── books/            # Books
└── press/            # Press

Correspondencia pública (subdominios → carpetas):

- gomezaldaz.com/en/          → /en/
- author.gomezaldaz.com       → /en/author/
- case.gomezaldaz.com         → /en/case/
- sentence.gomezaldaz.com     → /en/sentence/
- books.gomezaldaz.com        → /en/books/
- press.gomezaldaz.com        → /en/press/

---

## Notas importantes

- Cada bloque conceptual se publica en un subdominio propio.
- Los menús de navegación utilizan siempre URLs absolutas y canónicas.
- El selector de idioma enlaza explícitamente entre páginas equivalentes
  (por ejemplo, autor ↔ author).
- No se utilizan rutas relativas para saltar entre subdominios.
- La estructura de carpetas no debe modificarse sin una razón clara,
  ya que está pensada para estabilidad a largo plazo.

Este README documenta la arquitectura de referencia del proyecto.
