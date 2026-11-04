import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// El sitio se publica en https://www.arreglodelavadoras.com.co
// Para una vista previa en una subcarpeta (GitHub Pages), se compila con:
//   PUBLIC_SITE=https://demos.emp2web.com PUBLIC_BASE=/arreglodelavadoras npm run build
// Todos los enlaces y recursos pasan por src/lib/ruta.js.
export default defineConfig({
  site: process.env.PUBLIC_SITE || "https://www.arreglodelavadoras.com.co",
  base: process.env.PUBLIC_BASE || "/",
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
