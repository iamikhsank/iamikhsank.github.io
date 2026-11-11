import fs from 'node:fs';
import path from 'node:path';

// Keep previously shared project URLs working after moving to the user-site root.
const dist = path.resolve('dist');
const prefix = '/Web-Profile-iamikhsank';
const routes = ['', 'services/power-bi-dashboard', 'services/data-analysis',
  'services/business-intelligence', 'services/machine-learning-ai', 'case-studies', 'articles'];

function redirectHtml(destination) {
  const url = `https://iamikhsank.github.io${destination}`;
  return `<!doctype html><html lang="id"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ikhsan Kamal — Alamat Baru</title>
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="0;url=${url}">
<script>location.replace(${JSON.stringify(destination)} + location.search + location.hash);</script>
</head><body><p>Portofolio Ikhsan Kamal telah berpindah ke <a href="${url}">${url}</a>.</p></body></html>`;
}

for (const route of routes) {
  const dir = path.join(dist, prefix.slice(1), route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), redirectHtml(route ? `/${route}/` : '/'));
}
for (const file of ['index.html', 'Dashboard-for-Spreadsheet.html', 'Dashboard-for-Spreadsheet.txt']) {
  fs.writeFileSync(path.join(dist, prefix.slice(1), file), redirectHtml('/'));
}

// Legacy deep links not listed above can still remove their old prefix.
const fallback = path.join(dist, '404.html');
const script = `<script>if(location.pathname === ${JSON.stringify(prefix)} || location.pathname.startsWith(${JSON.stringify(prefix + '/')})){location.replace((location.pathname.slice(${prefix.length}) || '/') + location.search + location.hash);}</script>`;
fs.writeFileSync(fallback, fs.readFileSync(fallback, 'utf8').replace(/<head>/i, `<head>${script}`));
console.log('✓ Generated legacy project URL redirects');
