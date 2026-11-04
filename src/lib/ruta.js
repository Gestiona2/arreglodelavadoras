/** Antepone la base del sitio (útil si se publica en una subcarpeta). */
export function ruta(p) {
  const base = (import.meta.env?.BASE_URL ?? "/").replace(/\/$/, "");
  return `${base}/${String(p).replace(/^\//, "")}`.replace(/\/{2,}/g, "/");
}

/** Respeta los enlaces externos y aplica la base solo a las rutas internas. */
export function enlace(href) {
  return /^(https?:|mailto:|tel:)/.test(href) ? href : ruta(href);
}

/** Enlace de WhatsApp con mensaje prellenado. */
export function wa(numero, texto = "") {
  const base = `https://wa.me/${numero}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}
