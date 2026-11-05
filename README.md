# Arreglo de Lavadoras — sitio web

Sitio estático para **Arreglo de Lavadoras**, servicio técnico de electrodomésticos a
domicilio en Bogotá norte, municipios cercanos, Barranquilla e Ibagué (sin sede pública).
Reparación de lavadoras, neveras, calentadores, estufas, hornos, microondas, secadoras,
lavavajillas, campanas, freidoras, cafeteras, aspiradoras y televisores.

Construido con **Astro 7**, CSS propio (Tailwind 4 como base), tipografías auto-hospedadas y
cero librerías de JavaScript. Sin base de datos y sin backend: el agendamiento se completa
por WhatsApp.

## Demo

**https://demos.emp2web.com/arreglodelavadoras**

La rama `main` tiene el código. La rama `gh-pages` tiene solo el sitio compilado y es la que
sirve GitHub Pages. Para actualizar la demo:

```bash
bash scripts/publicar-demo.sh
```

## Arrancar

```bash
npm install
npm run dev       # vista previa en http://localhost:4321
npm run build     # compila a dist/ (29 páginas)
npm run preview   # sirve la versión compilada
```

Producción se compila tal cual (`npm run build`). Para la demo, que vive en una subcarpeta:

```bash
PUBLIC_SITE=https://demos.emp2web.com PUBLIC_BASE=/arreglodelavadoras npm run build
```

Los enlaces y recursos internos pasan por `src/lib/ruta.js`; **cualquier enlace nuevo debe
usar `ruta()`**.

## Dónde está el contenido

Todo el texto editable vive en `src/datos/`:

| Archivo | Página |
|---|---|
| `sitio.json` | Datos globales: contacto, menú, cobertura, redes, legales, CTA |
| `inicio.json` | Inicio |
| `servicios.json` | Los ocho servicios y sus páginas de detalle |
| `servicios-pagina.json` | Listado de servicios y etiquetas del detalle |
| `marcas.json` | 22 marcas; 12 con página propia |
| `nosotros.json` | Nosotros |
| `contacto.json` | Contacto y textos del formulario |
| `legales.json` | Política de privacidad, tratamiento de datos y términos |
| `404.json` | Página no encontrada |

**No se escribe texto dentro de los `.astro`.** El diseño está en `src/pages/`,
`src/layouts/Layout.astro` y `src/styles/global.css`.

## El formulario

No envía correos ni guarda datos. Valida en el navegador y abre WhatsApp con el mensaje
armado para el número configurado en `sitio.json → whatsapp`. Si el navegador bloquea la
ventana, muestra un enlace de respaldo.

## Documentación

- `conocimiento_generado/` — qué es el sitio, dónde vive cada texto, cómo editarlo y cómo
  publicarlo. **Es lo primero que hay que leer.**
- `AGENTS.md` / `CLAUDE.md` — instrucciones para el asistente del sitio.

## Estructura

```
src/
  datos/          contenido editable (JSON)
  styles/         sistema visual completo
  layouts/        Layout.astro (menú, pie, tema, metadatos)
  components/     Icon.astro, Formulario.astro
  lib/            ruta.js
  pages/          una ruta por página
public/
  brand/          logos, favicons y og.jpg
  fonts/          Sora, Instrument Sans (.woff2)
  img/            fotos en .webp
scripts/          publicar-demo.sh
```
