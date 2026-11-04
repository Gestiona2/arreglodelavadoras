# Conocimiento del sitio — Arreglo de Lavadoras

Estos ocho archivos explican el sitio de **arreglodelavadoras.com.co** tal como quedó
construido. Viajan con el sitio: son la documentación que se le entrega al cliente.

## Para qué sirven

Un asistente nuevo (o una persona) debe poder cambiar textos, teléfonos o fotos **sin
leer el código**. Estos archivos son ese puente.

| Archivo | Qué responde |
|---|---|
| `SITIO.md` | Qué hace el negocio, a quién atiende y qué páginas tiene |
| `SECCIONES.md` | **Dónde vive cada texto y cuánto cabe.** El más importante |
| `COMO-EDITAR.md` | Recetas para los cambios más pedidos |
| `MARCA.md` | Colores, tipografías, logo y tono de voz |
| `STACK.md` | Con qué está hecho y dónde está cada archivo |
| `PUBLICAR.md` | Cómo se publica, cómo se deshace |
| `PENDIENTES.md` | Datos sin confirmar y trabajo que falta |
| `LIMITES.md` | Qué no se toca y cuándo llamar al proveedor |

## La regla que sostiene todo

> **En los `.astro` no hay texto de negocio. Todo el contenido vive en `src/datos/`.**

Los `.astro` dicen **cómo se ve**; los JSON dicen **qué dice**. Si un cambio parece exigir
editar un `.astro`, casi siempre hay un campo en el JSON que hace el trabajo.

## Lo que se aprendió construyendo

- **El formulario no envía correos ni guarda datos.** Valida en el navegador y abre
  WhatsApp con el mensaje armado. Eso simplifica la privacidad y elimina el backend, pero
  también significa que **el número de WhatsApp es infraestructura crítica**: si cambia,
  se cambia en `sitio.json` y se revisa en todo el sitio.
- **La reputación del negocio son tres testimonios y doce años.** No hay que inventar más.
  Cualquier cifra nueva debe venir del dueño y poder sostenerse.
- **Las 22 marcas no son 22 páginas.** Solo 12 tienen página propia; las otras 10 aparecen
  en la lista y en el buscador interno. Así se evita publicar 22 textos casi iguales.
- **El sitio conserva las direcciones del sitio anterior** (`/reparacion-de-lavadoras/`,
  `/reparacion-de-neveras/`, etc.). Cambiarlas rompe posicionamiento y enlaces viejos.

## Cómo se mantiene

Cada vez que se agrega una página, una sección o un dato de contacto, se actualiza el
archivo correspondiente **en el mismo cambio**. La documentación desactualizada es peor que
no tenerla: hace que el siguiente asistente busque donde ya no está.
