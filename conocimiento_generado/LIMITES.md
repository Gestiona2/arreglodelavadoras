# Límites — Arreglo de Lavadoras

## Lo que sí se puede hacer sin consultar

- Cambiar textos, teléfonos, correos y direcciones en `src/datos/`.
- Corregir errores de ortografía.
- Actualizar fotos por otras equivalentes (mismo tamaño y proporción).
- Agregar o quitar preguntas frecuentes dentro de los límites de `SECCIONES.md`.
- Actualizar la fecha de los documentos legales cuando cambie su contenido.
- Ajustar un texto para que quepa mejor, sin cambiar lo que dice.

## Lo que se consulta antes de hacer

| Cambio | Por qué |
|---|---|
| Precios, descuentos, plazos o promociones | Son compromisos comerciales. Si no están confirmados, no se publican |
| Nuevos testimonios | Necesitan autorización del cliente que los dio |
| Nuevas ciudades | Es una promesa de cobertura |
| Agregar un servicio | Implica foto, contenidos, menú y una URL nueva |
| Cambiar el horario | Hay que tocar también los datos para Google |
| Cambiar los documentos legales | Requieren revisión legal |
| Cambiar el número de WhatsApp | Hay que probar el formulario y todos los botones después |

## Lo que NO se hace

### Nunca en el contenido

- **Inventar cifras, casos, clientes, testimonios, premios o certificaciones.**
- **Afirmar que son «técnicos autorizados» o «certificados»** sin documento que lo respalde.
- Prometer tiempos de llegada exactos si no están confirmados.
- Publicar precios o «diagnóstico gratis» sin que el dueño lo haya aprobado.

### Nunca en el código

- Escribir texto de negocio dentro de un `.astro` (viola la regla del sitio).
- Escribir colores a mano en vez de usar los tokens (`var(--texto)`, `var(--marca)`…).
- Cambiar un `slug` o una URL del sitio anterior sin plan de redirecciones.
- Escribir enlaces internos sin `ruta()`.
- Cambiar la estructura del formulario (campos, orden, validaciones) sin revisar el script
  que arma el mensaje de WhatsApp.
- Agregar un backend, una base de datos o un servicio de correo.
- Instalar dependencias nuevas, actualizar Astro o Tailwind «por si acaso».
- Borrar historial de cambios, forzar publicaciones o tocar ramas.

### Nunca en la infraestructura

- Dominio, DNS, certificado de seguridad.
- Configuración de GitHub Pages o del hosting.
- Credenciales, tokens o accesos.
- Correos corporativos.

Todo eso lo hace **Emp2Web**. La respuesta al dueño es:
**«Eso lo hace Emp2Web, tu proveedor. Escríbeles al +57 302 552 6058.»**

## Cuándo detenerse y avisar

- La vista previa no abre o muestra un error.
- La compilación falla **dos veces seguidas**.
- Un cambio hizo desaparecer textos o imágenes de varias páginas.
- El formulario deja de abrir WhatsApp.
- Aparece un aviso de seguridad, de certificado o una pantalla de contraseña.
- El dueño pide algo que no está en este documento.

En esos casos: **no seguir intentando**. Explicar qué pasó, en palabras simples, y detenerse.

## La regla de oro

> Si hay que preguntar si un dato es verdad, **no se publica hasta confirmarlo**.

Un sitio con menos promesas y datos reales vende más que uno lleno de frases que el cliente
no puede sostener cuando le preguntan por WhatsApp.
