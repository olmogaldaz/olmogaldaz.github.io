# gomezaldaz.com — Estructura, entornos y mantenimiento

Este proyecto contiene la estructura, el contenido y los recursos públicos de **gomezaldaz.com**. Se mantiene en dos repositorios de GitHub Pages: uno de pruebas y otro de producción.

El sitio es bilingüe, con la portada española en `/` y la versión inglesa en `/en/`.

---

## Publicación

Configuración común:

- Rama de publicación: `main`
- Carpeta publicada: raíz del repositorio
- HTTPS activado
- Generación estática mediante Jekyll

Jekyll procesa Liquid, los datos YAML, los layouts y los includes durante cada compilación. GitHub Pages publica después archivos HTML, XML, CSS y JavaScript ya generados. Las peticiones de visitantes y buscadores no vuelven a ejecutar Liquid.

La carpeta `_site/` es la salida local generada automáticamente por Jekyll durante una compilación. No forma parte del código fuente del proyecto, no debe versionarse y está excluida mediante `.gitignore`.

---

## Entornos de pruebas y producción

| Elemento | Pruebas | Producción |
|---|---|---|
| Repositorio | `olmogaldaz/enpruebas.gomezaldaz.com` | `olmogaldaz/olmogaldaz.github.io` |
| Dominio | `enpruebas.gomezaldaz.com` | `gomezaldaz.com` |
| `url` | `https://enpruebas.gomezaldaz.com` | `https://gomezaldaz.com` |
| `public_url` | `https://gomezaldaz.com` | `https://gomezaldaz.com` |
| `indexable` | `false` | `true` |
| Google Analytics | Desactivado | Activado |
| Meta `noindex` en páginas con el layout común | Sí | Solo con `noindex: true` |
| Sitemap anunciado en `robots.txt` | No | Sí |

### Archivos que deben ser diferentes

Solo estos dos archivos activos deben mantenerse distintos entre repositorios:

```text
_config.yml
CNAME
```

Configuración de pruebas:

```yml
url: https://enpruebas.gomezaldaz.com
public_url: https://gomezaldaz.com
indexable: false
markdown: kramdown
```

Configuración de producción:

```yml
url: https://gomezaldaz.com
public_url: https://gomezaldaz.com
indexable: true
markdown: kramdown
```

El archivo `CNAME` contiene el dominio propio de cada entorno.

La variable `indexable` controla automáticamente:

- la presencia de `noindex, nofollow, noarchive, nosnippet` en el layout;
- la activación o desactivación de Google Analytics;
- la inclusión o ausencia del sitemap en `robots.txt`.

`public_url` da a las URL canónicas el dominio de producción en ambos entornos. Las etiquetas `hreflang` del HTML usan `url`, de modo que apuntan al propio entorno.

### Google Analytics

En ambos repositorios existen:

```text
_includes/google-analytics.html
_includes/google-analytics-production.html
_includes/google-analytics-pruebas.html
```

`google-analytics.html` selecciona automáticamente la variante según `site.indexable`.

### `robots.txt`

El mismo archivo se utiliza en ambos repositorios. En pruebas permite el rastreo para que los buscadores puedan leer el `noindex`, pero no anuncia sitemap. En producción permite el rastreo y anuncia el sitemap público.

### Traslado de cambios entre entornos

Al copiar cambios de pruebas a producción:

1. No sobrescribir `_config.yml`.
2. No sobrescribir `CNAME`.
3. Copiar el resto de archivos sin cambiar la lógica de entorno.
4. Comprobar que producción genera `noindex` solo en las páginas excluidas expresamente, como los avisos de las rutas antiguas.
5. Comprobar que Analytics está activo solo en producción.
6. Comprobar que `robots.txt` anuncia el sitemap solo en producción.

---

## Copias de emergencia

Ambos repositorios contienen las dos variantes completas de los archivos de entorno:

```text
.github/environment-backups/
├── CNAME.production
├── CNAME.pruebas
├── _config.production.yml
└── _config.pruebas.yml
```

La carpeta `.github` se conserva en el repositorio, pero no se publica como parte de la web.

---

## Estructura general

```text
/
├── .github/
│   └── environment-backups/          # Copias de emergencia de ambos entornos
├── .gitignore                         # Exclusiones de Git; entre ellas, la salida generada _site/
├── index.html                         # Portada principal en español
├── en/                                # Versión inglesa
├── es/                                # Páginas interiores en español
├── _data/
│   ├── resources.yml                  # Catálogo central de páginas y PDF
│   └── media.yml                      # Fuente única de apariciones en medios
├── _includes/
│   ├── menu.html                      # Navegación principal
│   ├── media-items.html               # Generación de fichas del dosier de medios
│   ├── media-filters.html             # Interfaz bilingüe de búsqueda y filtros
│   ├── google-analytics.html          # Selector automático por entorno
│   ├── google-analytics-production.html
│   └── google-analytics-pruebas.html
├── _layouts/
│   └── default.html                   # Layout, metadatos, indexación y Schema
├── css/
│   ├── style.css                      # Estilos globales
│   ├── mobile.css                     # Responsive global y menú móvil
│   └── media-filters.css              # Estilos propios de búsqueda y filtros
├── js/
│   ├── menu.js                        # Comportamiento interactivo del menú
│   └── media-filters.js               # Búsqueda, filtros y estado en URL del dosier
├── img/                               # Imágenes y recursos gráficos
├── docs/                              # Documentos públicos y PDF
├── sitemap.xml                        # Plantilla Liquid del sitemap
├── robots.txt                         # Plantilla Liquid por entorno
├── _config.yml                        # Configuración activa del entorno
├── 404.html                           # Página de error
├── CNAME                              # Dominio activo del entorno
└── README.md                          # Documentación del proyecto
```

---

## Organización bilingüe

### Español

- `/` — portada oficial en español
- `/es/` — aviso de traslado con un botón a la portada `/`
- `/es/autor/`
- `/es/contacto/`
- `/es/historia/`
- `/es/demanda/`
- `/es/sentencia/`
- `/es/memoria/`
- `/es/genus-homo/`
- `/es/colaboraciones/` — incluye las [Jornadas Navarra–Argentina](https://gomezaldaz.com/es/colaboraciones/jornadas-navarra-argentina/)
- `/es/obra/`
- `/es/prensa/`

### Inglés

- `/en/` — portada oficial en inglés
- `/en/author/`
- `/en/contact/`
- `/en/story/`
- `/en/claim/`
- `/en/sentence/`
- `/en/memory/`
- `/en/genus-homo/`
- `/en/collaborations/` — incluye las [Jornadas Navarra–Argentina en inglés](https://gomezaldaz.com/en/collaborations/navarre-argentina-conference/)
- `/en/work/`
- `/en/press/`

Cada página declara su idioma y sus metadatos. El catálogo relaciona las páginas equivalentes y el layout genera sus enlaces `hreflang` con el dominio del entorno.

---

## Navegación

La estructura del menú se genera en `_includes/menu.html`. El layout lo incorpora mediante `{% include menu.html %}`. El archivo `/js/menu.js` se limita al comportamiento interactivo, especialmente en móvil.

El pie contiene una fila independiente de accesos de utilidad, sin duplicar el menú estructural. El orden vigente es:

- Español: `Libros · Notas de prensa · Contacto`
- Inglés: `Books · Press releases · Contact`

Sus destinos son `/es/obra/libros/`, `/es/prensa/notas-de-prensa/`, `/es/contacto/` y sus equivalentes ingleses. Los tres accesos se distribuyen en columnas izquierda, centro y derecha. El selector `ES | EN` permanece separado y no debe partirse entre líneas.

---

## Contacto

Las páginas generales de contacto son:

- `/es/contacto/`
- `/en/contact/`

Ofrecen dos vías:

- contacto general: `contacto@gomezaldaz.com`;
- prensa y medios de comunicación: `prensa@gomezaldaz.com`.

Las páginas `/es/autor/` y `/en/author/` ya no contienen formulario de contacto. Las páginas de Genus Homo tampoco utilizan formulario: mantienen un acceso contextual mediante `mailto:` a `contacto@gomezaldaz.com` con el asunto `Genus Homo`.

El antiguo JavaScript específico de formularios (`/js/contact.js`) fue eliminado al dejar de existir formularios de contacto en las páginas activas.

---

## CSS

Los estilos se organizan por alcance:

- `/css/style.css`: estilos globales de la web.
- `/css/mobile.css`: reglas responsive globales y menú móvil.
- `/css/media-filters.css`: estilos exclusivos de la búsqueda y los filtros del dosier de medios, incluido su responsive.

Las hojas globales `style.css` y `mobile.css` se cargan desde el layout con un parámetro de versión basado en la hora de compilación de Jekyll. Así, cada despliegue genera una URL distinta y evita que el navegador conserve una versión anterior de los estilos.

El layout permite que una página declare hojas de estilo adicionales mediante `extra_css` en el front matter. Así, los estilos específicos no se cargan en el resto del sitio.

Las páginas del dosier declaran:

```yml
extra_css:
  - /css/media-filters.css
```

---

## Layout, metadatos y Schema

El archivo `_layouts/default.html` centraliza:

- título y descripción;
- control automático de `noindex`;
- URL canónica basada en `public_url`;
- iconos y hojas de estilo globales;
- versionado de las hojas CSS globales para evitar caché obsoleta;
- carga opcional de CSS específico mediante `extra_css`;
- enlaces `hreflang` del HTML basados en `url`;
- nodo Schema `Person` común;
- incorporación de los nodos Schema específicos de cada página;
- Google Analytics según el entorno;
- menú, contenido, pie y JavaScript común.

El nombre registral anterior y las variantes sin tilde se conservan en `alternateName` del nodo `Person`. No se utiliza `additionalProperty`, cuyo dominio en Schema.org no incluye `Person`.

El nodo `Person` se genera siempre desde el layout. Los nodos específicos de cada página se declaran en su front matter mediante `schema_nodes` y el layout los serializa con `jsonify`.

Una página puede contener varios nodos Schema. El nodo que representa la URL concreta puede ser `WebPage` o uno de sus subtipos, como `ProfilePage` o `CollectionPage`.

---

## Catálogo central de recursos

`_data/resources.yml` contiene tres grupos:

- `html`: parejas ES/EN de páginas vigentes, en el orden en que aparecen en el sitemap. El campo `section` en la primera pareja de un bloque genera su encabezado en el XML.
- `legacy_html`: parejas ES/EN de avisos antiguos que conservan su selector de idioma y sus fechas. El sitemap omite este grupo.
- `pdf`: documentos PDF incluidos al final del sitemap.

Cada versión HTML admite `url`, `published`, `modified` e `images`. El layout busca la página en los dos grupos HTML. La otra versión proporciona el enlace del selector de idioma y el `hreflang`. `published` y `modified` proporcionan las fechas a los datos estructurados cuando están registradas.

El front matter de cada página indica mediante `schema_date_target` qué nodo Schema representa su URL concreta. Durante la compilación, el layout incorpora automáticamente `datePublished` y `dateModified` a ese nodo cuando existen las fechas correspondientes en `_data/resources.yml`.

---

## Sitemap

Jekyll usa la plantilla `sitemap.xml` y el catálogo `_data/resources.yml` para generar el XML que sirve la web. El resultado contiene:

- las URL HTML;
- `lastmod` cuando existe `modified`;
- los enlaces alternativos `hreflang`;
- los datos opcionales de imágenes;
- las URL de documentos PDF y su `lastmod` cuando existe.

En ambos entornos, el XML enumera direcciones de producción. `modified` se publica como `<lastmod>` y representa la última modificación registrada. `published` representa la fecha de publicación en los datos estructurados de la página.

Para revisar el archivo generado, abre [el sitemap de pruebas](https://enpruebas.gomezaldaz.com/sitemap.xml) o [el sitemap público](https://gomezaldaz.com/sitemap.xml) y pulsa **Ctrl+U** en Chrome. El código fuente muestra los encabezados por sección, las parejas ES/EN y los PDF al final.

---

## Indexación

### Pruebas

- `indexable: false`;
- el layout común genera `noindex, nofollow, noarchive, nosnippet`;
- la canónica apunta a producción y el `hreflang` del HTML apunta a pruebas;
- `robots.txt` permite el rastreo, pero no anuncia sitemap;
- Google Analytics permanece desactivado.

### Producción

- `indexable: true`;
- solo se genera `noindex` en las páginas con `noindex: true`;
- canonical y `hreflang` apuntan a producción;
- `robots.txt` anuncia `https://gomezaldaz.com/sitemap.xml`;
- Google Analytics permanece activo.

---

## Obra / Work

La sección Obra / Work organiza cuatro líneas principales:

- Libros / Books
- Testimonios / Testimonies
- Adopción / Adoption
- Bebés robados / Stolen babies

Rutas principales:

- `/es/obra/` y `/en/work/`
- `/es/obra/libros/` y `/en/work/books/`
- `/es/obra/testimonios/` y `/en/work/testimonies/`
- `/es/obra/adopcion/` y `/en/work/adoption/`
- `/es/obra/bebes-robados/` y `/en/work/stolen-babies/`

---

## Prensa y notas de prensa

Las secciones de prensa distinguen entre cobertura de medios externos y notas emitidas directamente por Olmo Gómez Aldaz.

Rutas principales:

- `/es/prensa/`
- `/en/press/`
- `/es/prensa/medios/`
- `/en/press/media/`
- `/es/prensa/notas-de-prensa/`
- `/en/press/press-releases/`

### Dosier de medios

Las apariciones en medios se mantienen en una única fuente de datos:

```text
_data/media.yml
```

Las páginas `/es/prensa/medios/` y `/en/press/media/` conservan el front matter, Schema, textos de presentación, cabeceras y organización de secciones, pero las fichas individuales ya no se escriben dos veces en HTML.

Durante la compilación:

```text
_data/media.yml
      ↓
_includes/media-items.html
      ↓
/es/prensa/medios/ + /en/press/media/
```

Cada registro puede contener, según el caso:

- `id`
- `section`
- `date`
- `type`
- `territory`
- `medium`
- `meta_es` / `meta_en`
- `title_es` / `title_en`
- `subtitle_es` / `subtitle_en`
- `url` o `url_es` / `url_en`
- `action_es` / `action_en`
- `original_url` y `archived` para noticias retiradas
- `title_note_es` / `title_note_en` para aclaraciones ligadas al título
- `extra_url_es` / `extra_url_en` y acciones correspondientes cuando una ficha necesita un segundo enlace

Los campos de subtítulo admiten HTML puntual cuando sea necesario conservar elementos de presentación existentes, por ejemplo cursivas o enlaces internos.

Los campos `date`, `type`, `territory` y `medium` alimentan los filtros y sus opciones disponibles. No existe una segunda lista independiente que determine qué valores existen.

### Búsqueda y filtros

La interfaz se genera desde `_includes/media-filters.html`, la lógica vive en `/js/media-filters.js` y su presentación en `/css/media-filters.css`.

Permite combinar:

- búsqueda de texto libre;
- año;
- tipo de medio;
- territorio;
- medio concreto.

La búsqueda de texto ignora mayúsculas, minúsculas y tildes, y recorre el contenido visible de cada ficha y sus metadatos. Los filtros se combinan entre sí y el contador muestra el número de resultados visibles.

Cuando una sección no contiene resultados, se oculta completa junto con su cabecera, texto introductorio y enlace «Volver arriba». Si no hay resultados se muestra un aviso bilingüe.

El estado se refleja en la query string mediante `q`, `year`, `type`, `territory` y `medium`. El canonical sigue siendo la URL base del dosier, ya que los filtros no crean páginas indexables independientes.

La interfaz utiliza mejora progresiva: sin JavaScript no se muestran controles inertes y el dosier completo permanece visible en el HTML generado por Jekyll.

### Mantenimiento del dosier

Para incorporar una nueva aparición en medios:

1. Añadir un único registro a `_data/media.yml`.
2. Completar las variantes ES/EN de los textos que procedan.
3. Asignar `section`, `type`, `territory`, `medium` y `date` normalizados.
4. Si la noticia ha desaparecido, conservar `original_url`, la URL archivada y `archived: true`.
5. No añadir manualmente la misma ficha a las dos páginas HTML.
6. Comprobar el resultado en pruebas antes de trasladarlo a producción.

Las páginas índice de notas de prensa pueden utilizar `CollectionPage`; las notas individuales, `NewsArticle`; y las páginas generales de prensa, `WebPage`.

---

## Queja sobre personas adoptadas y bebés robados

- Identificación principal: **expediente n.º 26037767** del Defensor del Pueblo.
- Número inicial de queja: **26097224**. Ambos corresponden al mismo asunto; el número inicial se explica como antecedente y las instrucciones de adhesión utilizan el expediente actual.
- Español: `/es/queja-adoptados-bebes-robados/`.
- Inglés: `/en/complaint-adoptees-stolen-babies/`.
- Las portadas enlazan directamente con estas rutas descriptivas. Las páginas y los banners comparten `/css/queja.css`.
- Las rutas antiguas `/es/queja-26097224/` y `/en/complaint-26097224/` muestran un aviso explicativo con un botón hacia la nueva página. No tienen redirección automática.
- La pareja antigua permanece en `legacy_html` para el selector de idioma y queda fuera del sitemap. Cada aviso declara `noindex: true` y canonical hacia la nueva página de su idioma; el layout admite esta exclusión por página.
- PDF actuales en español: `/docs/guia-adhesion-adoptados-bebes-robados.pdf` y `/docs/queja-adhesion-adoptados-bebes-robados.pdf`. El catálogo incluye sus rutas nuevas y las fechas de modificación.
- Los dos PDF anteriores, `/docs/Guia_adhesion_queja_26097224.pdf` y `/docs/01_Queja_Adhesion_Adoptados_Bebes_Robados_Filiacion_Identidad_Origen.pdf`, sirven copias de los PDF actualizados para conservar enlaces compartidos. No se duplican en el sitemap.
- Se parte de los dos Word aportados por Olmo el 27/09/2026, cotejados con los PDF publicados. Se conserva la última página «Documentación de referencia del caso ilustrativo» y las referencias bibliográficas corregidas. No utilizar como base la V1.1 anterior generada a partir de un Word incompleto.
- La guía conserva el texto de adhesión en la página 4 y las variantes en la 5; el documento de adhesión conserva sus 24 páginas.
- Al preparar una guía de pruebas, comprobar que el enlace del Word y el PDF permite revisar el recorrido en el dominio de pruebas antes de publicar.
- En producción, el texto y el vínculo de la guía apuntan a `https://gomezaldaz.com/docs/queja-adhesion-adoptados-bebes-robados.pdf`. El PDF se ha regenerado y su copia en la ruta antigua se actualiza a la vez. Conservar esta diferencia de dominio al trasladar futuras versiones entre entornos.
- La adhesión consiste en presentar una nueva queja vinculada al expediente 26037767, con el documento de adhesión adjunto. ES/EN enlazan con el formulario oficial en el idioma correspondiente.

### Actualización de prensa y sitemap

Los dosieres `/es/prensa/medios/` y `/en/press/media/` se generan automáticamente desde `_data/media.yml`. Las páginas generales `/es/prensa/` y `/en/press/` contienen una cronología editorial que se actualiza por separado.

Para añadir una publicación:

1. Incorporar un único registro en `_data/media.yml`, con títulos, resúmenes y enlaces de acción ES/EN, fecha, autoría en los metadatos, medio, sección, tipo y territorio.
2. Conservar el enlace al original; traducir la ficha inglesa sin dar a entender que el medio ofrece una traducción del artículo.
3. Si se amplía la cronología, actualizar las dos páginas generales de prensa y sus índices.
4. Actualizar `modified` en `_data/resources.yml` para las páginas cuyo contenido cambie, incluidos ambos dosieres. Mantener `published` cuando ya exista y usar fechas documentadas.
5. Añadir al grupo `pdf` los nuevos documentos públicos. Los enlaces externos de prensa se mantienen en `_data/media.yml`; no se añaden como URL propias al sitemap.
6. Dejar que `sitemap.xml` se genere desde el catálogo y comprobar el resultado en pruebas.

---
 
## Documentos públicos

La carpeta `/docs/` contiene PDF y otros documentos públicos enlazados desde la web o incluidos en el catálogo de recursos.

Los documentos anonimizados deben contener una eliminación real de los datos personales, no una simple cobertura visual.

---

## Cambios técnicos consolidados

### 5 y 6 de agosto de 2026

- Creación de `_data/resources.yml` como catálogo central de páginas HTML y PDF.
- Conversión de `sitemap.xml` en una plantilla generada desde ese catálogo.
- Generación automática de `lastmod`, `hreflang` e imágenes del sitemap.
- Separación de los estilos responsive en `css/mobile.css`.
- Centralización de la navegación estructural en `_includes/menu.html`.
- Actualización del nodo Schema `Person` y del pie bilingüe.
- Incorporación automática de `datePublished` y `dateModified` al nodo indicado por `schema_date_target`.
- Creación de los entornos diferenciados de pruebas y producción.
- Automatización de `noindex`, canonical, `hreflang`, Google Analytics y `robots.txt` según el entorno.
- Creación de copias de emergencia de `_config.yml` y `CNAME` para ambos entornos.

### 11 de agosto de 2026

- Creación de `_data/media.yml` como fuente única del dosier de medios.
- Creación de `_includes/media-items.html` para generar las fichas bilingües.
- Migración de `/es/prensa/medios/` y `/en/press/media/` desde fichas HTML duplicadas a datos estructurados.
- Conservación de noticias archivadas, URLs originales, enlaces documentales adicionales y formato HTML puntual.
- Normalización de `date`, `type`, `territory` y `medium` para búsqueda y filtros.
- Incorporación de búsqueda libre y filtros combinables por año, tipo, territorio y medio.
- Incorporación de contador de resultados, limpieza de filtros, ocultación de secciones vacías y estado compartible mediante query string.
- Mejora progresiva para conservar el dosier completo cuando JavaScript no está disponible.
- Creación de `/css/media-filters.css` y extracción de los estilos del buscador fuera de los CSS globales.
- Incorporación de `extra_css` en el layout para cargar hojas de estilo específicas solo en las páginas que las declaran.
- Creación de `/es/contacto/` y `/en/contact/` con contacto general y contacto específico para prensa y medios.
- Incorporación de `published` y `modified` para las nuevas páginas de contacto en `_data/resources.yml`.
- Eliminación de los formularios de `/es/autor/`, `/en/author/`, `/es/genus-homo/` y `/en/genus-homo/`, y eliminación de `/js/contact.js`.
- Sustitución de los formularios de Genus Homo por contacto directo mediante correo electrónico.
- Incorporación al pie de los accesos `Libros · Notas de prensa · Contacto` y sus equivalentes ingleses.
- Ajuste responsive del pie para conservar la distribución de los tres accesos y mantener `ES | EN` inseparable.
- Versionado automático de las hojas CSS globales en cada compilación para evitar caché obsoleta tras los despliegues.
- Eliminación del `_site/` generado accidentalmente en una compilación anterior y exclusión permanente de esa salida mediante `.gitignore`.

---

### 20 de septiembre de 2026

- Incorporación en pruebas de la página de la queja n.º 26097224 en inglés y del banner en la portada inglesa.
- Registro de la pareja ES/EN y de los PDF de la guía y la queja en `_data/resources.yml`; actualización de las fechas de modificación de las páginas afectadas.
- Incorporación del artículo de opinión de Iratxe Serrano, publicado el 19/09/2026 en elDiario.es, al dosier automático en ambos idiomas y a las dos cronologías generales de prensa.
- Incorporación de las etiquetas Canarias / Canary Islands al filtro territorial; sus opciones siguen derivándose de los registros.
- Documentación del circuito de actualización de prensa y sitemap.
- Corrección del Schema común: retirada de `additionalProperty` del nodo `Person`, conservando el nombre registral anterior en `alternateName`.

---

## Paso a producción — 20 de septiembre de 2026

- Versión de pruebas utilizada: `9783b5011e20462babd29325f16af74f7439c66e`.
- Estado anterior de producción para recuperación: `c8a5af3b915284e7778eb407cdf85b3a3ff125cf`.
- Traslado de las páginas y banners de la queja ES/EN, la actualización de prensa, el catálogo de recursos, la corrección de Schema y la documentación.
- Se conservan `_config.yml` y `CNAME` propios de producción: dominio `gomezaldaz.com`, indexación y Analytics activos.
- Recuperación: crear un commit que restaure el árbol de la versión anterior de producción, conservando el historial.

---

## Reglas de mantenimiento

- La raíz `/` es la portada oficial en español.
- `/en/` es la portada oficial en inglés.
- `/es/` conserva un aviso con un botón hacia la portada en español.
- Las páginas interiores españolas viven bajo `/es/`.
- Las páginas inglesas viven bajo `/en/`.
- Los documentos públicos viven bajo `/docs/`.
- Las URL públicas y sus fechas se mantienen en `_data/resources.yml`.
- Las apariciones del dosier de medios se mantienen en `_data/media.yml`.
- Los filtros del dosier deben derivar sus opciones de los registros existentes, no de una lista paralela.
- Los estilos específicos de una página deben declararse mediante `extra_css` cuando no sean globales.
- El sitemap no debe volver a convertirse en una lista manual de URL.
- El menú estructural debe mantenerse en `_includes/menu.html`.
- Los accesos de utilidad del pie se mantienen en `_layouts/default.html` y no deben confundirse con el menú principal.
- `menu.js` debe limitarse al comportamiento interactivo del menú.
- `media-filters.js` debe limitarse a la búsqueda y filtrado del dosier.
- Los estilos globales y responsive deben mantenerse separados de los estilos específicos de componentes o páginas cuando corresponda.
- Los nodos Schema específicos deben mantenerse en el front matter de cada página.
- El nodo Schema que representa cada URL será el destinatario de las fechas centralizadas.
- `_site/` es salida generada por Jekyll y no debe incorporarse al repositorio.
- `_config.yml` y `CNAME` no deben copiarse directamente entre entornos.
- Los archivos comunes deben mantenerse iguales en ambos repositorios.
- Tras cada despliegue debe comprobarse el estado de indexación, Analytics, canonical, `hreflang`, `robots.txt` y sitemap.


### Actualización preparada en pruebas — 27 de septiembre de 2026

- Migración a rutas descriptivas sin números administrativos y avisos en las dos rutas antiguas.
- Expediente 26037767 como referencia principal, con explicación del número inicial 26097224.
- Actualización coordinada de Word, PDF, portadas, páginas ES/EN, fichas editoriales de prensa, Schema y catálogo del sitemap.
- Enlaces de la guía adaptados al entorno de pruebas; traslado a producción pendiente de aprobación.

### Publicación de la migración · 27 de septiembre de 2026

Publicadas en producción las rutas descriptivas ES/EN, los avisos de las direcciones antiguas y los documentos actualizados. El sitemap incluye únicamente las nuevas rutas; los avisos antiguos declaran como canonical la nueva página de su idioma. La guía de producción utiliza el dominio definitivo.

### Formulario de adhesión por correo — producción, 05/11/2026

- Español: `/es/queja-adoptados-bebes-robados/adhesiones-por-correo/`.
- Inglés: `/en/complaint-adoptees-stolen-babies/join-by-email/`.
- Ambas páginas de la queja ofrecen envío automático y presentación directa.
- La versión inglesa traduce las etiquetas, el texto de adhesión, la identificación, los mensajes y los errores del servicio. Mantiene los nombres y valores de los campos requeridos por el PDF oficial; el formulario oficial y la queja original siguen en español.
- Ambas versiones del formulario permiten indexación en producción. Sus rutas y fechas están en `html` de `_data/resources.yml`, que alimenta los enlaces de idioma y el sitemap. En pruebas, `indexable: false` mantiene el `noindex` general del entorno.
- Ambos formularios tienen ya los textos definitivos de producción, sin avisos internos de pruebas ni instrucciones de usar datos ficticios. El entorno de pruebas conserva su protección general de indexación y su señalización común.
- Vercel tiene dos funciones independientes en el proyecto `adhesionesmail`: `/api/adhesiones_mail` para pruebas (origen y PDF de `enpruebas.gomezaldaz.com`, destinatario `olmo.gomez.aldaz@gmail.com`) y `/api/adhesiones_mail_produccion` para producción (origen y PDF de `gomezaldaz.com`, destinatario `registro@defensordelpueblo.es`).
- Los formularios ES/EN seleccionan la función con Liquid según `site.indexable`: `false` en pruebas y `true` en producción. Jekyll genera el endpoint definitivo al compilar; los mismos archivos sirven en ambos entornos.
- Ambas funciones están desplegadas y comprobadas. La función original de pruebas se conserva intacta; sus destinatario y origen no se sustituyen al publicar producción.
- Publicados ambos formularios y las páginas ES/EN de la queja con las dos vías de adhesión. El catálogo incluye las nuevas URL y las fechas de publicación/modificación. Se conservan el dominio, la configuración y los PDF específicos de producción.
