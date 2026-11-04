import sitio from "../datos/sitio.json";
import servicios from "../datos/servicios.json";
import marcas from "../datos/marcas.json";
import legales from "../datos/legales.json";

const paginas = [
  { ruta: "/", prioridad: "1.0", frec: "monthly" },
  { ruta: "/servicios/", prioridad: "0.9", frec: "monthly" },
  { ruta: "/marcas/", prioridad: "0.8", frec: "monthly" },
  { ruta: "/nosotros/", prioridad: "0.6", frec: "yearly" },
  { ruta: "/contacto/", prioridad: "0.9", frec: "yearly" },
  ...servicios.items.map((s) => ({ ruta: `/${s.slug}/`, prioridad: "0.8", frec: "yearly" })),
  ...marcas.items.filter((m) => m.pagina).map((m) => ({ ruta: `/marcas/${m.slug}/`, prioridad: "0.5", frec: "yearly" })),
  ...legales.paginas.map((l) => ({ ruta: `/${l.slug}/`, prioridad: "0.2", frec: "yearly" })),
];

export function GET({ site }) {
  const hoy = new Date().toISOString().slice(0, 10);
  const origen = site ?? new URL(sitio.dominio);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const urls = paginas
    .map(
      (p) => `  <url>
    <loc>${new URL(`${base}${p.ruta}`, origen).href}</loc>
    <lastmod>${hoy}</lastmod>
    <changefreq>${p.frec}</changefreq>
    <priority>${p.prioridad}</priority>
  </url>`
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
}
