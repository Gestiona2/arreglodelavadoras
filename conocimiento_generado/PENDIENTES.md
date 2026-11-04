# Pendientes — Arreglo de Lavadoras

Lo que quedó abierto. Nada de esto impide mostrar el sitio, pero **sí impide publicarlo en
el dominio definitivo**.

## 1. Datos del negocio sin confirmar (bloquea producción)

| Dato | Estado actual | Qué falta |
|---|---|---|
| **Correo** | `contacto@arreglodelavadoras.com.co` | Confirmar que existe y que alguien lo lee |
| **NIT** | vacío (`sitio.json → nit`) | Pedirlo; va en el pie si el dueño lo quiere público |
| **Horario exacto** | «Lunes a sábado · 8:00 a 18:00» | Confirmar. Además hay que corregirlo en `Layout.astro` (ver abajo) |
| **Redes sociales** | Facebook, Instagram y TikTok con enlace vacío | Pedir las direcciones reales; si no hay, se dejan así (no se muestran) |
| **Ciudades con ruta** | 7 ciudades | Confirmar que se atienden las 6 fuera de Ibagué y con qué frecuencia |

### El horario está en dos lugares

El texto visible sale de `sitio.json → horario`. El dato que leen Google y los buscadores
está escrito a mano en `src/layouts/Layout.astro`:

```js
openingHours: "Mo-Sa 08:00-18:00",
priceRange: "$$",
```

Si el horario cambia, hay que cambiar los dos. `priceRange` también está inventado: no hay
precios publicados en el sitio; se puede quitar si el dueño prefiere no declarar rango.

## 2. Fotos

Las fotos actuales son de banco de imágenes (licencia libre). Se ven bien, pero **no son
del negocio**. Hay que pedir:

- Foto real de un técnico trabajando (idealmente en Ibagué).
- Foto del taller o de la sede.
- Tres o cuatro fotos de equipos abiertos o repuestos.
- Retrato del dueño, si quiere aparecer en «Nosotros».

Mientras no lleguen, no se presentan como «nuestro equipo»: los textos hablan del servicio,
no de las personas de la foto.

## 3. Logo

El logo del sitio es una **reconstrucción tipográfica** hecha para esta versión. El cliente
debe entregar el archivo original (`.svg`, `.ai` o `.pdf` vectorial). Con eso se regeneran
`logo-blanco.png`, `logo-tinta.png`, `isotipo.png` y los favicons.

Si el logo real es distinto, también hay que revisar el color de marca (`#310263`).

## 4. La palabra «autorizado»

El nombre comercial que usaba el sitio anterior incluye **«Servicio Técnico Autorizado»**.
No hay certificado de fábrica que respalde esa frase. Opciones:

1. Quitarla de `sitio.json → razonSocial` y del pie.
2. Dejarla solo si el dueño demuestra la autorización de alguna marca.

Mientras no se aclare, **no agregar «autorizado» en textos nuevos**. Lo mismo con «técnicos
certificados»: no hay certificados a la vista.

## 5. Documentos legales

`legales.json` contiene tres plantillas (privacidad, tratamiento de datos y términos). Están
bien redactadas, pero **no han sido revisadas por un abogado**. Antes de producción:

- Confirmar el responsable del tratamiento (nombre y NIT).
- Confirmar el correo para ejercer derechos de habeas data.
- Revisar si el negocio debe registrarse como responsable de datos ante la SIC.
- Actualizar la fecha de cada documento.

## 6. Repositorio y demo

- Repositorio: [Gestiona2/arreglodelavadoras](https://github.com/Gestiona2/arreglodelavadoras)
  (público, rama `main` con el código y `gh-pages` con el sitio compilado).
- Demo publicada: **https://demos.emp2web.com/arreglodelavadoras**
- Falta el repositorio del cliente. Cuando el dueño cree el suyo, se cambia el remoto de
  `main` y se ajusta `scripts/publicar-demo.sh` si cambia el nombre.

## 7. Búsqueda en Google

- Falta dar de alta el sitio en **Google Search Console** y enviar `sitemap.xml`.
- Falta confirmar que las URLs del sitio anterior siguen respondiendo (se conservaron, pero
  hay que verificar en el dominio real).
- La ficha de Google Business del negocio debe apuntar al dominio nuevo.

## 8. Detalles menores

- No hay analítica. Si el dueño la quiere, se decide entre una herramienta sin cookies o
  nada; no se instala por iniciativa propia.
- No hay blog ni Telegram: son módulos opcionales que no se activaron.
