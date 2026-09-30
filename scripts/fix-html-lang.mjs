import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out', 'zh');

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('<html lang="en"')) {
        content = content.replace('<html lang="en"', '<html lang="zh-Hans"');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`[Bilingual Static Fix] Updated html lang to zh-Hans in: ${path.relative('out', fullPath)}`);
      }
    }
  }
}

if (fs.existsSync(outDir)) {
  processDir(outDir);
  console.log('[Bilingual Static Fix] Successfully verified and set html lang="zh-Hans" across all Chinese static export pages.');
} else {
  console.log('[Bilingual Static Fix] Notice: out/zh directory not found yet (will run after next build).');
}
