# Inventario de secciones — Arreglo de Lavadoras

Qué hay en cada página, dónde vive su contenido y qué límites tiene.

> **Antes que nada: no hay texto de negocio dentro de los `.astro`.**
>
> Todo el contenido está en `src/datos/`, un archivo por página. Los `.astro` solo leen
> esos archivos y deciden cómo se ve. Las únicas palabras que quedan escritas en el código
> son etiquetas de accesibilidad (`aria-label`) y nombres de iconos; no se editan desde acá.
>
> Si un cambio de texto no aparece en este inventario, **no lo inventes**: pregúntale al
> dueño. Ver `LIMITES.md`.

---

## Lo que se repite en todas las páginas (`src/datos/sitio.json`)

| Qué | Dónde | Nota |
|---|---|---|
| Nombre, razón social, NIT | `nombre`, `razonSocial`, `nit` | El NIT está vacío |
| Teléfonos y correo | `whatsapp`, `telefono`, `fijo`, `correo` | `whatsapp` va sin `+` ni espacios: `573123444325` |
| Dirección y ciudad | `direccion`, `ciudad`, `departamento` | Se usa en el pie y en contacto |
| Horario | `horario` | Texto visible. El horario estructurado (JSON-LD) vive aparte, ver la trampa al final |
| Cobertura | `cobertura` | Lista de 7 ciudades; alimenta el formulario y la sección de cobertura |
| Mensajes de WhatsApp | `mensajes` | Cuatro saludos precargados: `general`, `ayuda`, `servicio`, `marca` |
| Menú | `menu` | 5 entradas; el desplegable de Servicios se arma de la misma lista |
| Botón principal | `ctaPrincipal` | «Agendar servicio» en el menú y en la barra móvil |
| Pie | `pie` | Descripción, títulos de columnas, aviso legal y textos de botones |
| Redes | `redes` | **Todas vacías** (`href: ""`). Un enlace vacío no se muestra |
| Legales | `legales` | Los tres enlaces del pie |

**Límite:** `cobertura` debe seguir teniendo 7 ciudades. Si se agrega una octava, el mapa
de tarjetas queda descuadrado en escritorio (Ibagué ocupa dos columnas a propósito).

---

## Inicio (`/`) — `src/datos/inicio.json`

Doce bloques, en este orden.

### 1. Portada (`hero`)
- **Cómo la llama el dueño:** "lo primero que se ve"
- **Qué tiene:** frase pequeña, titular partido en `titulo` + `acento` (el acento va en
  violeta), párrafo, dos botones, tres puntos (`bullets`), foto, sello y dos tarjetas
  flotantes (`tarjetas`).
- **Límites:** `titulo` y `acento` son dos líneas cortas; si crecen, el titular se parte mal.
  `bullets`: 3. `tarjetas`: 2.
- **Trampa:** el segundo botón apunta a `#agendar`, que es el formulario del final de la
  misma página. Si se borra el formulario, el botón deja de llevar a ninguna parte.

### 2. Cinta de garantías (`cinta`)
- Cuatro frases que se desplazan solas (`items`). **Límite: 4.** Más de 6 alargan la
  animación y cansan.

### 3. Marcas (`marcas`)
- Frase corta + lista de 12 nombres para la tira. **No son enlaces**: la tira es decorativa.
  Para editar las marcas reales se edita `marcas.json`, no esta lista.

### 4. Servicios (`servicios`)
- Encabezado (`eyebrow`, `titulo`, `texto`), botón «Ver todos los servicios» y
  `ctaTarjeta` (el texto de cada tarjeta).
- **Las ocho tarjetas salen de `servicios.json`.** Acá no se escribe ningún servicio.

### 5. Proceso (`proceso`)
- Cuatro pasos numerados (`pasos`): número, título y texto. **Límite: 4.** El diseño es una
  línea de tiempo; un quinto paso queda huérfano.

### 6. Diferenciales (`diferenciales`)
- Seis tarjetas en cuadrícula tipo *bento* (`items`). La primera y la última ocupan doble
  ancho. **Límite: 6.** Con 5 o 7 se abre un hueco en la cuadrícula.
- **Trampa:** los textos deben ser hechos comprobables. No agregar "los mejores" ni
  "número uno".

### 7. Cifras (`cifras`)
- Cuatro contadores (`items`): número, sufijo, texto e icono. **Límite: 4.**
- **Trampa:** los números se animan al entrar en pantalla. Si el número no es un dato real
  del negocio, no va.

### 8. Cobertura (`cobertura`)
- Título, texto y nota. Las siete ciudades salen de `sitio.json → cobertura`. La primera
  (Ibagué) se marca como sede.
- **Trampa:** no agregar ciudades "por si acaso". Si no hay ruta, no se promete.

### 9. Testimonios (`testimonios`)
- Tres comentarios reales (`items`): nombre, ciudad, equipo y texto.
- **Límite: 3.** Son los mismos tres del sitio anterior. **No se inventan testimonios.**
  La cuadrícula está pensada para tres; con cuatro se desbalancea.

### 10. Preguntas frecuentes (`faq`)
- Ocho preguntas (`items`), más un bloque de ayuda con botón a WhatsApp.
- **Límite: 8.** La lista abierta ocupa mucho alto en celular. Si hay que agregar, se quita
  una o se divide en otra página.

### 11. Agendar (`agendar`)
- Texto de la izquierda (`eyebrow`, `titulo`, `texto`, `prefieres`) y el formulario de la
  derecha.
- **El formulario no se edita acá:** sus etiquetas, botones y errores viven en
  `contacto.json → formulario`. Ver la ficha de Contacto.

### 12. Cierre (`cierre`)
- Titular, párrafo y botón final. Es el último empujón antes del pie.

---

## Servicios — listado (`/servicios/`) — `src/datos/servicios-pagina.json`

| Bloque | Campos | Límite |
|---|---|---|
| Portada | `hero.eyebrow`, `hero.titulo`, `hero.texto` | Una frase de apoyo |
| Lista de servicios | Sale de `servicios.json` | 8 servicios, ni uno más |
| Proceso | `proceso.titulo`, `proceso.pasos` | 4 pasos |
| Ayuda | `ayuda.titulo`, `ayuda.texto`, `ayuda.boton` | — |
| Cierre | `cierre.titulo`, `cierre.texto`, `cierre.boton` | — |

`enlaceDetalle` es el texto del enlace de cada tarjeta («Ver detalle»).

---

## Detalle de servicio (ocho páginas) — `servicios.json` + `servicios-pagina.json`

Cada objeto de `servicios.items` genera una página en `/{slug}/`. **El `slug` no se cambia**
sin redirecciones: son las direcciones del sitio anterior.

| Bloque | Campos | Límite / trampa |
|---|---|---|
| Encabezado | `nombre`, `titulo`, `subtitulo`, `icono` | El título lleva la ciudad para SEO |
| Introducción | `intro` (párrafos) | 2 párrafos |
| Fichas | `detalle.etiquetas` + `detalle.valores` en `servicios-pagina.json` | Valores fijos: garantía y cobertura |
| Fallas | `fallas` | **6 a 8.** Más de 8 saturan la lista en celular |
| Qué incluye | `incluye` (título + texto) | 4 tarjetas |
| Marcas | `marcas` | 10 nombres en chips |
| Preguntas | `faq` | 3 preguntas |
| Imagen | `imagen`, `imagenAlt` | 1200 × 900, `.webp` |
| Relacionados | Automático: los otros 4 servicios | No se edita |
| Formulario | Sale de `contacto.json` | — |

**Trampa:** `imagenAlt` describe la foto. Si se cambia la foto, hay que cambiar el texto:
un alt que no corresponde es peor que uno genérico.

---

## Marcas — listado (`/marcas/`) — `src/datos/marcas.json`

- Encabezado: `encabezado`, `titulo`, `texto`, `nota`.
- Cuadrícula: **22 marcas**. Las que tienen `pagina: true` (12) enlazan a su detalle; las
  otras 10 solo muestran nombre y `nota`.
- **Límite:** si se agrega una marca sin página, la cuadrícula la acomoda sola; si se
  agrega con página, hay que crear su contenido completo (ver `COMO-EDITAR.md`).

## Marca — detalle (12 páginas) — `marcas.json → items[]`

| Bloque | Campos |
|---|---|
| Encabezado | `nombre`, `nota` |
| Lo que se revisa | `focos` (4 puntos) |
| Servicios disponibles | Automático: los ocho servicios, como chips con enlace |
| Panel lateral | Nombre de la marca, botón de WhatsApp (`detalle.ctaMarca`) y teléfono |
| Otras marcas | Automático: las demás con página |

**Trampa:** los textos de la página usan el marcador `{marca}`. Si se borra el marcador, el
título deja de nombrar la marca. Ejemplo: `"Reparación de equipos {marca} a domicilio en Ibagué"`.

---

## Nosotros (`/nosotros/`) — `src/datos/nosotros.json`

| Bloque | Contenido | Límite |
|---|---|---|
| Portada | `hero.eyebrow`, `titulo`, `texto`, foto | — |
| Historia | `historia.titulo`, `parrafos` | 2 párrafos |
| Principios | `principios.items` | 3 |
| Equipo | `equipo.titulo`, `texto`, `nota` | Bloque oscuro |
| Compromiso | `compromiso.titulo`, `items` | 5, van al lado del equipo |
| Cifras | `cifras.items` | 4 |
| Cierre | `cierre.titulo`, `texto`, `boton` | — |

**Trampa:** la sección «Equipo» es un bloque oscuro con una lista de compromisos al lado.
Si los textos crecen mucho, en celular se separan y parecen dos secciones distintas.

---

## Contacto (`/contacto/`) — `src/datos/contacto.json`

| Bloque | Contenido | Límite |
|---|---|---|
| Portada | `hero.eyebrow`, `titulo`, `texto` | — |
| Canales | `canales.items` (WhatsApp, teléfono, correo) | 3 |
| Oficina | `oficina.titulo`, `direccion`, `nota`, enlace a Maps | — |
| Formulario | `formulario.*` | Ver abajo |
| Preguntas | `faq.items` | 3 |

### El formulario, en detalle

No envía a ningún servidor. Valida y abre WhatsApp con el mensaje armado.

| Campo del JSON | Qué controla |
|---|---|
| `formulario.titulo` / `texto` | Título y aclaración sobre privacidad |
| `formulario.campos.*.etiqueta` | Etiqueta visible de cada campo |
| `formulario.campos.*.placeholder` | Texto de ejemplo |
| `formulario.franjas` | Opciones del selector de horario (3) |
| `formulario.boton` | Texto del botón |
| `formulario.aviso` | Aclaración debajo del botón |
| `formulario.exito` | Mensaje tras abrir WhatsApp |
| `formulario.enlaceManual` | Enlace de respaldo si el navegador bloquea la ventana |
| `formulario.mensaje` | Etiquetas que se escriben dentro del mensaje de WhatsApp |
| `formulario.errores` | Mensajes de validación, uno por campo |

**Trampa 1:** el mensaje de WhatsApp se arma con `formulario.mensaje`. Si ahí se escribe
"Nombre completo" en vez de "Nombre", el mensaje del cliente queda más largo, pero funciona.

**Trampa 2:** las opciones de **ciudad** salen de `sitio.json → cobertura`; las de
**servicio**, de `servicios.json`. No hay listas duplicadas que mantener.

**Trampa 3:** el número que recibe el mensaje es `sitio.json → whatsapp`. Si se cambia, se
cambia en un solo lugar, pero hay que revisar que el nuevo número tenga WhatsApp activo.

---

## Legales (tres páginas) — `src/datos/legales.json`

Cada página tiene `slug`, `titulo`, `descripcion`, `actualizado` y `bloques` (título +
párrafos). El índice lateral se arma solo con los títulos.

**Trampa:** son plantillas. No se publican como definitivas sin revisión del dueño o de un
abogado. Ver `PENDIENTES.md`.

---

## Página no encontrada (`404.html`) — `src/datos/404.json`

`codigo`, `titulo`, `texto` y tres botones (`inicio`, `servicios`, `whats`).

---

## La trampa que no está en ningún JSON

**El horario del negocio vive en dos lugares.** El texto visible está en
`sitio.json → horario`, pero el dato que leen Google y los buscadores está escrito dentro de
`src/layouts/Layout.astro` (`openingHours`, `priceRange`). Si cambia el horario, hay que
cambiar los dos. Si solo se cambia el JSON, el sitio se ve bien pero Google sigue creyendo
el horario viejo. Ver `PENDIENTES.md`.
