# Secciones — dónde vive cada texto

Regla: **los textos están en `src/datos/`**, un archivo por página. Los `.astro` no llevan
texto. Si cambias un campo y no se ve, revisa que el JSON siga siendo válido.

## Datos globales — `sitio.json`

| Qué | Campo | Nota |
|---|---|---|
| Nombre, descripción | `nombre`, `razonSocial`, `tagline`, `descripcion` | |
| Celular y WhatsApp | `whatsapp`, `telefono` | `whatsapp` va sin `+` ni espacios: `573123444325`. Se usa en todos los botones |
| Horario | `horario` | Por confirmar |
| Ciudades | `ciudades` | Cada una con su `grupo`. Alimenta el selector, el formulario, el pie y contacto |
| Qué se repara por grupo | `grupos.<grupo>.servicios` | Lista de `slug` de `servicios.json`. Decide el selector y «Dónde lo atendemos» de cada servicio |
| Mensajes de WhatsApp | `mensajes` | `ciudad` usa `{ciudad}` |
| Menú | `menu` | «Servicios» se despliega solo con los servicios |
| Pie, textos de botones | `pie` | |
| Redes, legales | `redes`, `legales` | Redes vacías no se muestran |

`correo` existe pero **no se muestra** (solo en legales). No hay `direccion`, `ciudad` ni `fijo`.

## Inicio — `inicio.json` (en orden de aparición)

1. **Portada** `hero`: título (máx. 2 líneas), texto, botones (`tipo`: `whatsapp` o `llamar`),
   `placa`, foto, `hechos` (3). **Límite del título: ~40 caracteres.**
2. **Marcas** `marcas`: lista de nombres.
3. **Dónde atendemos** `donde`: título, texto, `tituloPanel` (usa `{ciudad}`), `boton`,
   nota. Las ciudades y servicios salen de `sitio.json`.
4. **Catálogo** `servicios`: título, texto, enlace. Las categorías están en
   `servicios.json → categorias`.
5. **Proceso** `proceso`: 4 pasos (`titulo`, `texto`). **Límite: 4.**
6. **Garantía** `garantia`: `cifra`, `unidad`, `titulo`, `texto`, `items` (5).
7. **Testimonios** `testimonios`: el primero se muestra grande. Son reales: no se inventan.
8. **Preguntas** `faq`: sin límite, pero conviene ≤ 9.
9. **Agendar** `agendar`: título, texto, 3 `puntos`. El formulario sale de `contacto.json`.

## Servicios — `servicios.json`

Un objeto por servicio: `slug`, `nombre`, `titulo`, `subtitulo`, `icono`, `categoria`,
`imagen` (**puede ir vacía**: la página se arma sin foto), `resumen`, `intro` (2 párrafos),
`fallas` (6, máx. 8), `incluye` (4), `marcas` (vacío = no se muestra el bloque), `faq`, `meta`.

- **Dónde se ofrece** no se escribe aquí: sale de `sitio.json → grupos`.
- Para **agregar un servicio**: nuevo objeto aquí + su `slug` en los grupos donde aplique.
  Íconos disponibles: ver `src/components/Icon.astro`.
- `servicios-pagina.json`: textos del listado y de los títulos de bloque del detalle.

## Marcas — `marcas.json`
`items`: `nombre`, `slug`, `pagina` (true = tiene página), `tipos` (slugs de servicio), `nota`,
`focos`. Las que tienen `pagina: true` generan `/marcas/<slug>/`.

## Nosotros — `nosotros.json`
`hero`, `historia`, `principios` (3), `equipo`, `compromiso`, `cifras` (4), `cierre`.

## Contacto — `contacto.json`
`hero`, `canales` (WhatsApp y llamar), `cobertura`, `formulario` (campos, errores, mensaje),
`faq`. El formulario arma el mensaje y abre WhatsApp; no envía a ningún servidor.

**Trampa:** las opciones de ciudad del formulario salen de `sitio.json → ciudades`; las de
equipo, de `servicios.json`.

## Legales — `legales.json`
Tres páginas con bloques. Pendiente de revisión por abogado (ver `PENDIENTES.md`).

## 404 — `404.json`
Título, texto y botones.
