# Marca — Arreglo de Lavadoras

Identidad aplicada al sitio (versión 2, 4 de noviembre de 2026). No hay manual de marca del
cliente: esto es lo construido y lo que hay que respetar al editar.

## La idea visual

Identidad azul del manual de marca del cliente (`MANUAL-MARCA.md`): azul marino, azul intenso y
turquesa sobre blanco. El logo es una **A que integra lavadora, nevera y estufa**. La forma que
sigue usando la web es el **ojo de buey** (la foto de la portada en círculo, con anillo turquesa).

- **Tema claro por defecto.** El oscuro solo se activa si el visitante pulsa la luna; se recuerda
  en el navegador. Nunca sigue la preferencia del sistema.
- **Bandas azul marino** (selector de ciudad, pie, Nosotros): iguales en los dos temas.
- **Un bloque de azul intenso** (la garantía por escrito) es el momento más fuerte del inicio.
- Los degradados existen solo dentro del logo. La web no usa degradados decorativos.

## Colores (`src/styles/global.css`)

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--fondo` / `--fondo-alt` | `#f3f6fb` / `#fff` | `#050d1c` / `#08142b` | Fondos de sección |
| `--texto` | `#0a1a3a` | `#eaf1fb` | Texto principal |
| `--marca` | `#0053b6` | `#0875d1` | Botones, bloque de garantía, enlaces |
| `--grafito` | `#001640` | igual | Bandas oscuras y pie (azul marino) |
| `--acento` | `#00bfea` | igual | Turquesa: solo detalles (anillo de la portada). **No para texto pequeño sobre blanco** |
| `--acento-claro` | `#4fd3f5` | igual | Íconos sobre bandas oscuras |
| `--wa` | `#0f7f3d` | `#138a46` | **Solo** botones de WhatsApp |

Los valores salen del manual (`#001640`, `#0053B6`, `#00BFEA`), que a su vez son aproximados:
hay que confirmarlos con el vector original.

## Tipografía

| Uso | Fuente |
|---|---|
| Títulos y cifras | **Sora** (600–800) |
| Texto | **Instrument Sans** (400–600) |

Auto-hospedadas en `public/fonts/` y declaradas en `Layout.astro`. No se enlaza Google Fonts.
JetBrains Mono ya no se usa (el archivo sigue en `public/fonts/` sin cargarse).

## Logo

Archivos oficiales en `brand-fuente/` (PNG, **sin vector todavía**). Versiones derivadas en
`public/brand/` (recorte de fondo y adaptaciones técnicas, pendientes de aprobación):

| Archivo | Uso |
|---|---|
| `logo.png` | Menú: símbolo + nombre, sin descriptor (en tema oscuro va sobre placa blanca) |
| `logo-completo.png` | Logo con descriptor «Reparación de Electrodomésticos»; datos para Google |
| `logo-blanco.png` | Pie y bandas oscuras (versión blanca apilada) |
| `isotipo.png`, `favicon*.png`, `apple-touch-icon.png`, `og.jpg` | Pestaña, iPhone y tarjeta al compartir |

El logo anterior (con «Servicio Técnico Autorizado») está en `old/`. No se estira, no se recolorea
y no se le agregan sombras.

## Tono de voz

De oficio, no de agencia. Frases cortas. No promete de más. No usa «autorizado» ni
«certificado» (no hay papel que lo respalde).

## Movimiento

- **Firma:** el ojo de buey se abre. La foto de la portada aparece desde el centro del
  círculo y el anillo exterior gira al entrar. Al bajar, la foto se acerca muy despacio
  (solo en navegadores que lo permiten).
- **Entrada por partes:** cada sección sube 26 px con aparición, una sola vez, y sus
  elementos (filas del catálogo, preguntas, logos, pasos) entran escalonados cada 80 ms.
- **Respuesta de controles:** los botones se hunden al pulsar; las filas del catálogo
  desplazan el nombre; los pasos y principios agrandan su círculo; al elegir ciudad, los
  servicios entran uno tras otro.
- Tokens en `global.css`: `--dur-rapida`, `--dur-media`, `--dur-entrada`, `--dur-firma`.
- Solo `transform` y `opacity` (más `clip-path` en la firma). Se respeta
  `prefers-reduced-motion` y, si el JavaScript falla, todo se ve igual.
