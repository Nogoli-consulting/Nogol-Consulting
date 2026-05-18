// scripts/generate-favicons.mjs
// Ejecutar con: node scripts/generate-favicons.mjs
// Requiere: npm install sharp to-ico

import sharp from 'sharp';
import toIco from 'to-ico';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const sourcePath = resolve('./public/logotrasnp.png');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(sourcePath)
    .resize(size, size)
    .png()
    .toFile(resolve(`./public/${name}`));
  console.log(`✅ Generado: ${name} (${size}x${size})`);
}

// Generar favicon.ico combinando 16px y 32px
const png16 = await sharp(sourcePath).resize(16, 16).png().toBuffer();
const png32 = await sharp(sourcePath).resize(32, 32).png().toBuffer();
const icoBuffer = await toIco([png16, png32]);
writeFileSync(resolve('./public/favicon.ico'), icoBuffer);
console.log('✅ Generado: favicon.ico (16x16 + 32x32)');

console.log('\n🎉 Todos los favicons generados en /public/');
