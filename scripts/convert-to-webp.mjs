// scripts/convert-to-webp.mjs
// Converts all .jpg, .jpeg, .png files in public/ to WebP format.
// Usage: node scripts/convert-to-webp.mjs

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { resolve, extname, basename, dirname, join } from 'path';

const PUBLIC_DIR = resolve('./public');
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getImageFiles(fullPath));
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (SUPPORTED_EXTENSIONS.has(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

async function convertToWebP(filePath) {
  const ext = extname(filePath);
  const webpPath = filePath.slice(0, -ext.length) + '.webp';

  if (existsSync(webpPath)) {
    console.log(`⏭️  Skipped (already exists): ${webpPath.replace(PUBLIC_DIR, 'public')}`);
    return;
  }

  await sharp(filePath)
    .webp({ quality: 85, effort: 6 })
    .toFile(webpPath);

  console.log(`✅ Converted: ${filePath.replace(PUBLIC_DIR, 'public')} → ${basename(webpPath)}`);
}

const files = await getImageFiles(PUBLIC_DIR);

if (files.length === 0) {
  console.log('No .jpg, .jpeg, or .png files found in public/.');
  process.exit(0);
}

console.log(`Found ${files.length} image(s) to process...\n`);

for (const file of files) {
  await convertToWebP(file);
}

console.log('\nDone.');
