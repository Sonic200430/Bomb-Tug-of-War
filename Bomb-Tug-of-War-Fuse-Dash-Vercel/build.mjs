import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const source = resolve(root, 'index.html');
const output = resolve(root, 'dist');
const html = await readFile(source, 'utf8');

if (!html.toLowerCase().includes('<!doctype html>') || !html.includes('</html>')) {
  throw new Error('index.html is missing a valid HTML document shell.');
}

await mkdir(output, { recursive: true });
await copyFile(source, resolve(output, 'index.html'));
console.log('Static game built to dist/.');
