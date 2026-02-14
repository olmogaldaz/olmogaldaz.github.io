# gomezaldaz.com — Web structure

Este repositorio contiene la estructura y el contenido estático de la web gomezaldaz.com.

El proyecto está organizado por idioma y por bloques conceptuales. La estructura de carpetas es interna (no visible para el usuario final) y responde a un criterio de orden, claridad y estabilidad a largo plazo.

La web se publica exclusivamente mediante rutas. No se utilizan subdominios.

---

## Estructura general del repositorio

/
├── index.html        # Home principal (idioma por defecto)
├── en/               # Contenido completo en inglés
├── es/               # Contenido completo en español
├── css/              # Hojas de estilo
├── js/               # JavaScript (menú, interacción)
├── img/              # Imágenes y recursos gráficos
├── _layouts/         # Layouts (Jekyll)
├── config.yml        # Configuración del sitio
├── sitemap.xml
├── robots.txt
└── README.md

---

## Idioma por defecto — /

La raíz del sitio (`/`) actúa como punto de entrada principal y como única home oficial.

No duplica estructuras internas. Las estructuras completas por idioma viven exclusivamente en `/en/` y `/es/`.

---

## Inglés — /en/

Estructura completa en inglés, organizada por bloques conceptuales.

Estructura:

/en/
├── index.html        # General index
├── author/           # Author
├── story/            # Story
├── sentence/         # Court ruling / judgment
├── books/            # Books
├── press/            # Press
│   └── media/        # Media

---

## Español — /es/

Traducción editorial estructural del contenido en inglés.

Estructura:

/es/
├── index.html        # Índice general
├── autor/            # Autor
├── historia/         # Historia
├── sentencia/        # Sentencia
├── libros/           # Libros
├── prensa/           # Prensa
│   └── medios/       # Medios

---

## Recursos comunes

Los recursos compartidos por todos los idiomas se alojan en la raíz del proyecto:

- `css/` → estilos globales
- `js/` → lógica de navegación y comportamiento
- `img/` → imágenes y elementos gráficos

Estas rutas son absolutas y comunes a todo el sitio.

---

## Notas importantes

- La web se organiza exclusivamente por rutas, no por subdominios.
- La estructura por idiomas es explícita y estable.
- La raíz (`/`) es la única home oficial.
- Los menús utilizan URLs absolutas.
- El selector de idioma enlaza páginas equivalentes entre `/en/` y `/es/`.
- La estructura de carpetas no debe modificarse sin una razón clara, ya que es la base de la coherencia editorial y técnica del sitio.

Este README documenta la arquitectura real y vigente del proyecto.
