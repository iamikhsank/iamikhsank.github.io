import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
for (const directory of ['dist', 'exports']) {
  fs.rmSync(path.join(root, directory), { recursive: true, force: true });
}
console.log('Removed generated dist/ and exports/ directories.');
