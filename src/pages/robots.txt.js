export function GET({ site }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const origen = site ?? new URL("https://www.arreglodelavadoras.com.co");
  const sitemap = new URL(`${base}/sitemap.xml`, origen).href;

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${sitemap}
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
