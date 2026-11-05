# Cómo editar — Arreglo de Lavadoras

Recetas para los cambios más pedidos. Todas se hacen en `src/datos/`, sin tocar diseño.

> **Antes de guardar:** abre la vista previa (`npm run dev`) y mira el cambio en escritorio y
> en celular. Después publica (ver `PUBLICAR.md`). Nada se publica solo.

---

## Cambiar un teléfono

`sitio.json`:

```json
"whatsapp": "573123444325",
"telefono": "312 344 4325"
```

- `whatsapp` es el número que recibe los mensajes. **Sin `+`, sin espacios, con indicativo
  de país**: `57` + número.
- `telefono` es el que se muestra y al que llama el botón «Llamar».
- El número de WhatsApp aparece en el menú, el pie, la barra móvil, el botón flotante, las
  fichas de servicio, las páginas de marca y el formulario. **Se cambia una sola vez.**
- Después de cambiarlo, prueba el formulario: llena los datos y confirma que abre el chat
  del número nuevo.

## Cambiar el correo o la dirección

El correo está en `sitio.json → correo` y solo se muestra en las páginas legales. **El sitio
no muestra dirección ni sede**: el cliente pidió solo celular y WhatsApp.

## Cambiar el horario

Hay **dos lugares**:

1. `sitio.json → horario` — el texto que se ve en contacto y en las páginas de marca.
2. `src/layouts/Layout.astro` — el horario que leen Google y los buscadores
   (`openingHours`), dentro de los datos estructurados.

Si solo cambias el primero, el sitio se ve bien pero Google sigue mostrando el horario
viejo. Ver `PENDIENTES.md`.

## Cambiar el texto de un servicio

`servicios.json → items[]`. Busca el servicio por `slug` y edita:

- `titulo` y `subtitulo` — encabezado de la página.
- `intro` — dos párrafos.
- `fallas` — entre 6 y 8. Cada línea es una falla concreta, en palabras del cliente.
- `incluye` — cuatro tarjetas (título + texto).
- `faq` — tres preguntas.
- `meta.titulo` y `meta.descripcion` — lo que sale en Google.

**No cambies el `slug`.** Es la dirección de la página y viene del sitio anterior.

## Agregar una ciudad

1. Agrega una línea a `sitio.json → ciudades` con el `grupo` que le corresponde
   (`bogota`, `cercanos`, `barranquilla` o `ibague`). El grupo decide qué equipos se ofrecen.
2. Aparece sola en el selector del inicio, el formulario, el pie y contacto.
3. Si la ciudad ofrece equipos distintos a los de cualquier grupo, pide al proveedor un grupo nuevo.

**No agregues una ciudad si no hay ruta confirmada.** Es una promesa comercial.

## Agregar una marca

En `marcas.json → items[]`:

```json
{
  "nombre": "Marca",
  "slug": "marca",
  "pagina": false,
  "tipos": ["Lavadoras", "Neveras"],
  "nota": "Una o dos frases concretas sobre la marca.",
  "focos": ["Punto 1", "Punto 2", "Punto 3", "Punto 4"]
}
```

- Con `"pagina": false` solo aparece en la lista de `/marcas/`. Es lo normal.
- Con `"pagina": true` se crea `/marcas/marca/` y hay que llenar `tipos`, `nota` y `focos`
  con información real. **No inventes fallas típicas de una marca que no conoces.**
- Las páginas de marca toman el nombre del campo `nombre`; no se escribe dos veces.

## Agregar un servicio nuevo

1. Copia un objeto completo de `servicios.json → items[]` y cámbialo.
2. Usa un `slug` en minúsculas, sin tildes y con guiones (`reparacion-de-campanas`).
3. Agrega su entrada al desplegable del menú en `sitio.json → menu` (dentro de Servicios).
4. Agrega una foto en `public/img/servicios/` (1200 × 900, `.webp`) y actualiza `imagen` e
   `imagenAlt`.
5. Revisa que no pase de 8 servicios: el listado y el formulario están pensados para ocho.

## Cambiar una foto

1. Deja la imagen en `public/img/` (o `public/img/servicios/`), **`.webp`, 1200 × 900** para
   servicios y 1800 × 1100 para la portada.
2. Cambia la ruta en el JSON (`/img/...`, siempre empezando con `/`).
3. **Cambia también el `imagenAlt`**: describe lo que se ve, no la marca ni el servicio.

Las fotos actuales son de banco (licencia libre). Cuando el dueño entregue fotos reales, se
reemplazan una por una. Ver `PENDIENTES.md`.

## Cambiar los textos del formulario

Todo vive en `contacto.json → formulario`:

- `campos.*.etiqueta` y `placeholder` — lo que lee el cliente.
- `franjas` — las tres opciones de horario.
- `boton`, `aviso`, `exito`, `enlaceManual` — textos alrededor del botón.
- `errores` — mensajes de validación.
- `mensaje` — etiquetas que se escriben dentro del mensaje de WhatsApp.

**No cambies la estructura de los campos** (no agregues ni quites campos) sin avisar al
proveedor: el código que arma el mensaje está escrito para estos siete.

## Cambiar el mensaje precargado de WhatsApp

`sitio.json → mensajes`. Hay cuatro:

- `general` — botón flotante, barra móvil y formulario.
- `ayuda` — bloque «no sé qué servicio necesito».
- `servicio` — botón de cada página de servicio (se le agrega el nombre del equipo).
- `marca` — botón de cada página de marca (se le agrega el nombre de la marca).

## Cambiar los testimonios

`inicio.json → testimonios.items`. Son tres comentarios reales del sitio anterior.

**No se inventan.** Si el dueño consigue uno nuevo, se reemplaza uno existente (el diseño
es para tres) y se pide autorización para publicarlo.

## Editar los documentos legales

`legales.json → paginas[]`. Cada documento tiene bloques con título y párrafos.

Después de editarlos, **actualiza `actualizado`** con el mes y año. Y recuerda: son
plantillas que deben revisarse legalmente antes de publicar en el dominio definitivo.

## Cambiar el título o la descripción de una página

Cada archivo de datos tiene un bloque `meta`:

```json
"meta": {
  "titulo": "…lo que sale en la pestaña y en Google…",
  "descripcion": "…una o dos frases…"
}
```

- Título: hasta ~60 caracteres.
- Descripción: 120–160 caracteres.
- No repitas la misma descripción en todas las páginas.

## Enlaces internos

Si un texto del JSON lleva un enlace (`href`), escríbelo empezando con `/`:
`/contacto/`, `/reparacion-de-lavadoras/`. El sitio agrega la base sola cuando se publica en
una subcarpeta; **no escribas la dirección completa**.
