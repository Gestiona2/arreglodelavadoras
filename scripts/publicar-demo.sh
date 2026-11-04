#!/usr/bin/env bash
# Publica la demo en https://demos.emp2web.com/arreglodelavadoras
#
# Uso (desde cualquier carpeta):  bash scripts/publicar-demo.sh
#
# Compila el sitio y sube SOLO el resultado a la rama gh-pages.
# La rama main conserva el código; GitHub Pages sirve gh-pages.
set -euo pipefail
cd "$(dirname "$0")/.."

echo "→ Compilando…"
PUBLIC_SITE=https://demos.emp2web.com PUBLIC_BASE=/arreglodelavadoras npm run build

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
cp -a dist/. "$tmp/"
touch "$tmp/.nojekyll"

cd "$tmp"
git init -q -b gh-pages
git add -A
git -c user.name="Gestiona2" -c user.email="gestiona2@users.noreply.github.com" \
  commit -q -m "Publicar demo $(date '+%Y-%m-%d %H:%M')"
git remote add origin https://github.com/Gestiona2/arreglodelavadoras.git
git -c credential.helper= -c credential.helper='!gh auth git-credential' \
  push -q -f origin gh-pages

echo "✓ Publicado: https://demos.emp2web.com/arreglodelavadoras"
echo "  GitHub tarda 1 a 2 minutos en reflejarlo. Recarga con Ctrl+F5."
