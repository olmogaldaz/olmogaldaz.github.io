# gomezaldaz.com — Web structure

Este repositorio contiene la estructura y el contenido estático de la web
gomezaldaz.com.

El proyecto está organizado por idioma y por bloques conceptuales.
La estructura de carpetas es interna (no visible para el usuario final)
y responde a un criterio de orden, claridad y estabilidad a largo plazo.

La web se publica exclusivamente mediante rutas. No se utilizan subdominios.

---

## Estructura general del repositorio

/
├── index.html        # Índice principal (inglés)
├── en/               # Contenido en inglés
├── es/               # Contenido en español
├── css/              # Hojas de estilo
├── js/               # JavaScript (menú, interacción)
├── img/              # Imágenes y recursos gráficos
├── _layouts/         # Layouts (Jekyll)
├── config.yml        # Configuración del sitio
├── sitemap.xml
├── robots.txt
└── README.md

---

## Inglés — / y /en/

El inglés es el idioma de entrada principal del sitio.

Existe un índice en la raíz (`/index.html`) y una estructura completa
replicada en `/en/`, organizada por bloques conceptuales.

Estructura:

/en/
├── index.html        # General index
├── author/           # Author
├── story/            # Story
├── sentence/         # Court ruling / judgment
├── books/            # Books
└── press/            # Press

---

## Español — /es/

El español es una traducción editorial del contenido en inglés.

La estructura replica los mismos bloques conceptuales,
con los nombres traducidos.

Estructura:

/es/
├── index.html        # Índice general
├── autor/            # Autor
├── caso/             # Caso Gómez Aldaz
├── sentencia/        # Sentencia
├── libros/           # Libros
└── prensa/           # Prensa

---

## Recursos comunes

Los recursos compartidos por todos los idiomas se alojan en la raíz del proyecto:

- `css/` → estilos globales
- `js/` → lógica de navegación y comportamiento
- `img/` → imágenes y elementos gráficos

Estas rutas son absolutas y comunes a todo el sitio.

---

## Notas importantes

- La web se organiza exclusivamente por **rutas**, no por subdominios.
- La estructura por idiomas es explícita y estable.
- Los menús utilizan URLs absolutas.
- El selector de idioma enlaza páginas equivalentes entre `/en/` y `/es/`.
- La estructura de carpetas no debe modificarse sin una razón clara,
  ya que es la base de la coherencia editorial y técnica del sitio.

Este README documenta la arquitectura real del proyecto.
