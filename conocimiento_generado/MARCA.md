# Marca — Arreglo de Lavadoras

Identidad aplicada al sitio. No hay manual de marca del cliente: lo que sigue es la
dirección construida y lo que hay que respetar al editar.

## La idea visual

**Oficio + tecnología.** El negocio repara electrodomésticos, no vende humo. El sitio se ve
como un taller bien ordenado: fondo crema, tinta profunda, un violeta de marca que viene del
logo y un azul eléctrico que se usa con cuentagotas para señalar lo importante.

- **Base clara de día**, oscura de noche. El tema se recuerda.
- **Bloques oscuros** (portada, proceso, equipo, cierre) para separar sin dibujar líneas.
- **Etiquetas monoespaciadas** para datos: ciudad, garantía, «12 años», teléfono.
- Nada de degradados decorativos en todas partes ni de tarjetas flotando sin motivo.

## Colores

| Nombre | Claro | Oscuro | Dónde se usa |
|---|---|---|---|
| **Tinta** | `#08070f` | `#08070f` | Portada, bloques oscuros, texto principal |
| **Violeta de marca** | `#310263` | `#7c3aed` | Botones, enlaces, detalles de marca |
| **Azul eléctrico** | `#2ea3f2` | `#6cc5ff` | Acentos pequeños: punto del epígrafe, focos |
| **Ámbar** | `#ffb020` | `#ffb020` | Solo la garantía de 6 meses. Es el sello |
| **Crema** | `#faf8f4` | — | Fondo general en tema claro |
| **Verde WhatsApp** | `#1e9e52` | `#1e9e52` | Solo botones de WhatsApp |

**Dónde viven:** `src/styles/global.css`, en `:root` (tema claro), `[data-theme="dark"]` y
`.oscuro` (bloques oscuros).

### Reglas de color

1. **El ámbar no se usa para otra cosa.** Si aparece en tres sitios distintos, deja de
   significar "garantía".
2. **El violeta de marca no es texto sobre fondo violeta.** Para texto sobre superficies
   oscuras existe `--enlace` (`#b39dff`), que sí contrasta.
3. **El verde es solo de WhatsApp.** No se usa para "éxito" ni para confirmaciones.
4. **No se escribe un color a mano en un `.astro`.** Siempre `var(--token)`.

## Tipografías

| Uso | Fuente | Dónde |
|---|---|---|
| Títulos | **Sora** (600–700) | `--display` |
| Texto | **Instrument Sans** (400–600) | `--cuerpo` |
| Etiquetas y datos | **JetBrains Mono** (400–500) | `--mono` |

- Se auto-hospedan en `public/fonts/` (`.woff2`, subset latino). **No se enlazan a Google
  Fonts**: eso rompe la privacidad y agrega una dependencia externa.
- Se declaran en `src/layouts/Layout.astro` (no en el CSS) para que respeten la subcarpeta
  cuando el sitio se publica en una demo.
- Sora se usa con moderación: títulos y cifras. Nunca párrafos largos.

## Logo

Archivos en `public/brand/`:

| Archivo | Uso |
|---|---|
| `logo-blanco.png` | Sobre fondo oscuro: pie y portada |
| `logo-tinta.png` | Sobre fondo claro |
| `isotipo.png` | Solo el símbolo, para espacios cuadrados |
| `favicon.png` / `favicon-32.png` | Pestaña del navegador |
| `apple-touch-icon.png` | Ícono en iPhone |
| `og.jpg` | Tarjeta al compartir en WhatsApp y redes |

**Trampa:** el logo actual es una reconstrucción tipográfica hecha para el sitio. **No es el
archivo original del cliente.** Antes de una entrega definitiva hay que pedir el vector
(`.svg` o `.ai`) y reemplazar los tres PNG. Ver `PENDIENTES.md`.

El logo no se estira, no se le cambia el color y no se le pone sombra. Su altura en el pie
es de 31 px; en el menú, 26 px.

## Tono de voz

- **De oficio, no de agencia.** «Revisamos el ciclo completo antes de entregar», no
  «brindamos soluciones integrales».
- **Frases cortas.** Una idea por párrafo.
- **Habla del equipo del cliente**, no de "los electrodomésticos en general".
- **No promete de más.** Nada de «los mejores», «número uno», «garantizado para siempre».
- **No usa la palabra «autorizado»** como si hubiera certificación de fábrica. Ver
  `PENDIENTES.md`.

### Palabras que sí

diagnóstico, visita, repuesto, referencia, garantía por escrito, a domicilio, falla,
tablero, bomba, sensor, nunca «sinergia», «solución 360» ni «experiencia premium».

## Tema oscuro

- Se activa con el botón de la luna en el menú y se guarda en el navegador
  (`arreglodelavadoras-tema`).
- Los bloques `.oscuro` son oscuros **en los dos temas**. No cambian con el interruptor.
- Al agregar una sección nueva: revisar contraste en claro **y** oscuro. Un gris que se ve
  bien sobre crema desaparece sobre tinta.
- Los campos del formulario en oscuro usan `--superficie-2`; si se agrega un campo nuevo,
  hereda el estilo solo.

## Movimiento

- Las apariciones al bajar son suaves y cortas (≤ 500 ms). No hay animaciones que duren más
  de lo que tarda en leerse el texto.
- Se respeta `prefers-reduced-motion`: quien pidió menos movimiento ve todo quieto.
- El único movimiento continuo es la cinta de garantías del inicio. Es intencional y se
  detiene si el usuario prefiere menos animación.
