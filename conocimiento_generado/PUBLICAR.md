# Publicar — Arreglo de Lavadoras

## Los dos destinos

| Destino | Dirección | Para qué |
|---|---|---|
| **Demo** | `https://demos.emp2web.com/arreglodelavadoras` | Mostrar avances al dueño |
| **Producción** | `https://www.arreglodelavadoras.com.co` | El sitio real, con su dominio |

El mismo código sirve para los dos. La diferencia es cómo se compila:

```bash
# Demo (subcarpeta)
PUBLIC_SITE=https://demos.emp2web.com PUBLIC_BASE=/arreglodelavadoras npm run build

# Producción (raíz del dominio)
npm run build
```

Esos dos valores están en `astro.config.mjs`; el script de la demo ya los pone.

## Publicar la demo

```bash
bash scripts/publicar-demo.sh
```

El script:

1. Compila el sitio.
2. Copia el resultado a una carpeta temporal.
3. Crea la rama `gh-pages` con **solo** el sitio compilado.
4. La sube a GitHub.
5. Avisa que GitHub tarda **1 a 2 minutos** en reflejarlo.

La rama `main` conserva el código. La rama `gh-pages` es la que sirve GitHub Pages.

El repositorio ya existe (`Gestiona2/arreglodelavadoras`) y la demo está publicada. No hay
que crear nada antes de publicar; solo correr el script.

## Publicar en producción

Se sube el contenido de `dist/` al hosting del dominio. **No hay nada que compilar en el
servidor:** son archivos estáticos.

Pasos:

1. `npm run build` (sin variables de entorno).
2. Subir **todo** `dist/` a la raíz pública del hosting.
3. Confirmar que `https://www.arreglodelavadoras.com.co/` abre y que el candado de
   seguridad es válido.
4. Probar un formulario real: llenar los datos y confirmar que el mensaje llega al
   WhatsApp `312 344 4325`.

**No publicar en producción** hasta resolver lo de `PENDIENTES.md`: correo, NIT, horario,
redes y revisión legal.

## Después de publicar, revisar

- [ ] Inicio, servicios, una marca, nosotros, contacto y una legal abren bien
- [ ] El formulario abre WhatsApp con todos los datos
- [ ] Los botones «Llamar» marcan al número correcto
- [ ] El menú y el pie no tienen enlaces roscos (404)
- [ ] Se ve bien en celular y en escritorio
- [ ] El tema oscuro no deja texto ilegible
- [ ] La tarjeta al compartir (`og.jpg`) aparece en WhatsApp

## Caché

Si el cambio no aparece:

1. Recargar con **Ctrl + F5** (o Cmd + Shift + R en Mac).
2. En celular, cerrar la pestaña y abrirla de nuevo.
3. Esperar 2 minutos: GitHub Pages a veces tarda.

No cambies nada de configuración para "forzar" la actualización.

## Deshacer

### Un cambio que aún no se publicó

Se descarta y listo. No llegó a verlo nadie.

### Un cambio que ya se publicó

1. Volver al estado anterior en el código.
2. Guardar ese cambio como uno nuevo (no borrar historial).
3. Publicar otra vez.

**Nunca** se usa `reset --hard` ni `push --force`. Siempre se revierte hacia adelante, para
que el deshacer también se pueda deshacer.

### Si la publicación falla

La demo **sigue mostrando la versión anterior**. No se rompe nada. Avisar al dueño y
contactar al proveedor. No intentar arreglar la configuración de publicación desde el
asistente del sitio.

## Lo que no se toca desde acá

- El dominio y el DNS.
- El certificado de seguridad.
- La configuración de GitHub Pages.
- Las credenciales de GitHub.

Eso lo hace Emp2Web. Ver `LIMITES.md`.
