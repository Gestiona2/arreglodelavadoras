# Marca — Arreglo de Lavadoras

Identidad aplicada al sitio (versión 2, 4 de noviembre de 2026). No hay manual de marca del
cliente: esto es lo construido y lo que hay que respetar al editar.

## La idea visual

**Línea blanca de diseño industrial.** Superficies claras, grafito y un solo acento (rojo
piloto, como la luz de un electrodoméstico). La forma que identifica a la marca es el **ojo de
buey de la lavadora**: el círculo. Aparece en la foto de la portada, en la foto de Nosotros
y en el logo.

- **Tema claro por defecto.** El oscuro solo se activa si el visitante pulsa la luna; se
  recuerda en el navegador (`arreglodelavadoras-tema`). Nunca sigue la preferencia del sistema.
- **Bandas oscuras** (selector de ciudad, cierre de Servicios, Nosotros, pie): grafito en los
  dos temas.
- **Un bloque de color de marca** (la garantía de 6 meses) es el momento más fuerte del inicio.
- Sin degradados, sin sombras en reposo, sin tipografía monoespaciada, sin etiquetas pequeñas
  sobre los títulos.

## Colores (`src/styles/global.css`, en `:root` y `[data-theme="dark"]`)

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--fondo` / `--fondo-alt` | `#f4f5f8` / `#fff` | `#0d1118` / `#111722` | Fondos de sección, alternados |
| `--texto` | `#10151f` | `#eef1f6` | Texto principal |
| `--marca` | `#bb3b18` | `#c9431f` | Bloque de garantía, botones de marca |
| `--marca-texto` | `#b23716` | `#ff8e6b` | Íconos y enlaces de acento |
| `--grafito` | `#11151e` | igual | Bandas oscuras, pie |
| `--wa` | `#0f7f3d` | `#138a46` | **Solo** botones de WhatsApp |

Reglas: el verde es solo de WhatsApp; el rojo de marca no se usa para "error"; no se escribe
un color a mano en un `.astro`, siempre `var(--token)`. Contraste comprobado: texto blanco
sobre `--marca` y `--wa` supera 4.5:1.

## Tipografía

| Uso | Fuente |
|---|---|
| Títulos y cifras | **Sora** (600–800) |
| Texto | **Instrument Sans** (400–600) |

Auto-hospedadas en `public/fonts/` y declaradas en `Layout.astro`. No se enlaza Google Fonts.
JetBrains Mono ya no se usa (el archivo sigue en `public/fonts/` sin cargarse).

## Logo

Dibujado en código (`src/components/Logo.astro`): frente de lavadora con ojo de buey + el
nombre. Cambia solo con el tema. **Es provisional**: hay que pedir al cliente el vector
original. Los PNG de `public/brand/` ya no se usan en el sitio (solo favicon, ícono de iPhone
y tarjeta al compartir).

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
