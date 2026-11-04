# Stack — Arreglo de Lavadoras

## Qué es

Sitio **estático** generado con **Astro 7**. Se compila a HTML, CSS y un puñado de líneas de
JavaScript; se puede alojar en cualquier hosting estático. **No hay servidor, base de datos
ni API keys.**

- **CSS:** Tailwind 4 solo como base de utilidades; el diseño real está escrito a mano en
  `src/styles/global.css` con variables (`--texto`, `--fondo`, `--marca`…).
- **JavaScript:** mínimo y sin librerías. Dos scripts propios:
  - el cambio de tema claro/oscuro (recuerda la elección),
  - el formulario que valida y abre WhatsApp.
- **Animaciones:** CSS + `IntersectionObserver`. No hay GSAP, ni Framer, ni Lenis.
- **Iconos:** SVG dibujados dentro del sitio en `src/components/Icon.astro`. Sin CDN.
- **Fuentes:** Sora, Instrument Sans y JetBrains Mono, auto-hospedadas en `public/fonts/`.

## Arrancar

```bash
npm install
npm run dev       # vista previa en http://localhost:4321
npm run build     # compila a dist/ (29 páginas)
npm run preview   # sirve lo compilado
```

Requiere Node 20 o superior.

## Mapa de archivos

```
src/
  datos/                 ← TODO el contenido editable (9 archivos JSON)
    sitio.json           ← lo que se repite: contacto, menú, cobertura, pie
    inicio.json          ← página de inicio
    servicios.json       ← los 8 servicios y sus páginas de detalle
    servicios-pagina.json← textos del listado y etiquetas del detalle
    marcas.json          ← 22 marcas; 12 con página propia
    nosotros.json
    contacto.json        ← canales, oficina, formulario y sus errores
    legales.json         ← 3 documentos legales
    404.json
  styles/global.css      ← tokens, base, todas las secciones, tema oscuro
  layouts/Layout.astro   ← metadatos, menú, pie, tema, WhatsApp flotante, barra móvil
  components/
    Icon.astro           ← íconos SVG
    Formulario.astro     ← formulario + validación + armado del mensaje de WhatsApp
  lib/ruta.js            ← ruta(), enlace(), wa()
  pages/
    index.astro          ← /
    servicios.astro      ← /servicios/
    [slug].astro         ← las 8 páginas de servicio + las 3 legales
    marcas/index.astro   ← /marcas/
    marcas/[slug].astro  ← las 12 páginas de marca
    nosotros.astro, contacto.astro, 404.astro
    sitemap.xml.js, robots.txt.js
public/
  brand/                 ← logos, favicons y la tarjeta og.jpg
  fonts/                 ← 3 archivos .woff2
  img/                   ← fotos (.webp)
```

## Cómo fluyen los datos

Astro lee los JSON **al compilar**. No hay consultas en el navegador: si se cambia un JSON,
hay que volver a compilar para verlo. Eso es lo que hace el sitio rápido y lo que permite
publicarlo en cualquier parte.

## Reglas técnicas que no se rompen

### 1. Las rutas internas pasan por `ruta()`

El sitio puede publicarse en la raíz (`/`) o en una subcarpeta (`/arreglodelavadoras`). Por
eso los enlaces y las imágenes no se escriben a mano:

```astro
import { ruta } from "../lib/ruta.js";
<img src={ruta("/img/hero-lavadora.webp")} alt="…" />
<a href={ruta("/contacto/")}>Contacto</a>
```

En los JSON, los `href` se escriben normales (`/contacto/`); el `.astro` les aplica `ruta()`.
**Un enlace escrito a mano se rompe en la demo.**

### 2. El contenido no se escribe en los `.astro`

Ver `SECCIONES.md`. Si un texto no está en `src/datos/`, es un error de construcción.

### 3. Los colores salen de tokens

Nunca `#310263` dentro de un `.astro`. Siempre `var(--marca)`, `var(--texto)`, etc. El tema
oscuro depende de eso.

### 4. El formulario no tiene backend

`Formulario.astro` valida en el navegador y abre:

```
https://wa.me/573123444325?text=<mensaje codificado>
```

No guarda nada, no envía correos y no expone credenciales. Si el navegador bloquea la
ventana nueva, muestra un enlace manual con la misma URL. **No agregar un servicio de correo
sin cambiar este diseño**: implicaría backend, spam y tratamiento de datos.

### 5. El HTML tiene que seguir siendo semántico

Un solo `<h1>` por página, secciones con `<section>`, formularios con `<label>`, botones que
son `<button>`. Los enlaces que abren WhatsApp llevan `target="_blank"` y `rel="noopener"`.

## Accesibilidad

- Enlace «Saltar al contenido» al principio.
- Foco visible en todos los controles.
- El menú móvil atrapa el foco y se cierra con `Escape`.
- `prefers-reduced-motion` desactiva las animaciones.
- Los errores del formulario se anuncian con `aria-invalid` y texto asociado.
- Contraste revisado en tema claro y oscuro.

## SEO

- Títulos y descripciones por página en cada `meta` de los JSON.
- Datos estructurados `HomeAndConstructionBusiness` en `Layout.astro` (teléfono, dirección,
  horario, ciudades atendidas).
- `sitemap.xml` y `robots.txt` generados en cada compilación.
- Las URLs del sitio anterior se conservan a propósito.

## Lo que no se instaló (y por qué)

| Se evitó | Motivo |
|---|---|
| React/Vue | No hace falta interactividad de aplicación |
| GSAP | Las animaciones son de entrada; CSS alcanza |
| Librería de iconos | 30 íconos no justifican un paquete ni un CDN |
| Google Fonts | Privacidad, velocidad y dependencia externa |
| Formulario con backend | No hay dónde alojarlo ni quién lo mantenga; WhatsApp ya es el canal real |
| Blog / Telegram | Módulos opcionales que el cliente no pidió |
