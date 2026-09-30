import fs from 'node:fs';
import path from 'node:path';

const SRC_ICON_1x1 = 'C:/Users/hp/.gemini/antigravity/brain/7d714f3a-0145-4310-8bac-af0b439110ab/.user_uploaded/media_1790745049316.png';
const SRC_HORIZONTAL = 'C:/Users/hp/.gemini/antigravity/brain/7d714f3a-0145-4310-8bac-af0b439110ab/.user_uploaded/media_1790745049312.png';

const targets = [
  // 1:1 icon (vertical / square emblem)
  { src: SRC_ICON_1x1, dest: 'public/assets/logo-vertical.png' },
  { src: SRC_ICON_1x1, dest: 'assets/logo-vertical.png' },
  { src: SRC_ICON_1x1, dest: 'public/favicon.png' },
  { src: SRC_ICON_1x1, dest: 'public/favicon.ico' },
  
  // Full horizontal logo with name
  { src: SRC_HORIZONTAL, dest: 'public/assets/logo-horizontal.png' },
  { src: SRC_HORIZONTAL, dest: 'public/assets/logo-horizantal.png' },
  { src: SRC_HORIZONTAL, dest: 'assets/logo-horizantal.png' },
];

console.log('[Logo Update] Copying new logos into project assets...');

for (const t of targets) {
  const destPath = path.resolve(process.cwd(), t.dest);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(t.src, destPath);
  const size = fs.statSync(destPath).size;
  console.log(`  ✔ Copied to ${t.dest} (${size} bytes)`);
}

console.log('[Logo Update] Successfully updated all logo assets.');
