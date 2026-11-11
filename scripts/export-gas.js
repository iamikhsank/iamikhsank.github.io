import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'dist/index.html'));
const output = path.join(root, 'exports');
fs.mkdirSync(output, { recursive: true });
for (const name of ['Dashboard-for-Spreadsheet.html', 'Dashboard-for-Spreadsheet.txt']) {
  fs.writeFileSync(path.join(output, name), html);
  // Keep the existing bundle filenames available on the published website.
  fs.writeFileSync(path.join(root, 'dist', name), html);
}
for (const name of ['code.gs', 'setup.gs']) {
  fs.copyFileSync(path.join(root, 'gas-src', name), path.join(output, name));
}
console.log('✓ Apps Script bundles generated in exports/');
