import fs from 'node:fs';
import path from 'node:path';

const TARGET_HOST = 'https://nytalent.com.sg';
const BACKUP_DIR = path.resolve(process.cwd(), 'backups', 'live_nytalent_backup_20260929');

fs.mkdirSync(BACKUP_DIR, { recursive: true });

const pagesToFetch = [
  '/',
  '/index.html',
  '/courses.html',
  '/nanyang-star.html',
  '/grade.html',
  '/about.html',
  '/contact.html',
  '/css/main.css?v=mf4',
  '/robots.txt',
  '/sitemap.xml'
];

async function fetchAndSave(urlPath) {
  try {
    const cleanPath = urlPath.split('?')[0];
    const fullUrl = `${TARGET_HOST}${urlPath.startsWith('/') ? '' : '/'}${urlPath}`;
    console.log(`[Backup] Fetching ${fullUrl}...`);
    const res = await fetch(fullUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Nanyang-Talent-Backup/1.0'
      }
    });

    if (!res.ok) {
      console.log(`[Backup] Status ${res.status} for ${fullUrl}`);
      return;
    }

    const content = await res.arrayBuffer();
    let relativeFile = cleanPath === '/' ? 'index.html' : cleanPath.replace(/^\//, '');
    if (!path.extname(relativeFile)) {
      relativeFile += '.html';
    }

    const targetFilePath = path.join(BACKUP_DIR, relativeFile);
    fs.mkdirSync(path.dirname(targetFilePath), { recursive: true });
    fs.writeFileSync(targetFilePath, Buffer.from(content));
    console.log(`[Backup] Saved ${relativeFile} (${content.byteLength} bytes)`);
  } catch (err) {
    console.warn(`[Backup] Failed to fetch ${urlPath}: ${err.message}`);
  }
}

async function main() {
  console.log(`[Backup] Starting full backup of live domain ${TARGET_HOST} into ${BACKUP_DIR}...`);
  for (const page of pagesToFetch) {
    await fetchAndSave(page);
  }
  
  // Save backup metadata
  const meta = {
    source: TARGET_HOST,
    timestamp: new Date().toISOString(),
    description: 'Pre-deployment backup of existing live site at nytalent.com.sg prior to Phase 13 deployment',
    pages: pagesToFetch
  };
  fs.writeFileSync(path.join(BACKUP_DIR, 'backup-metadata.json'), JSON.stringify(meta, null, 2), 'utf8');
  console.log(`[Backup] Live site backup completed successfully.`);
}

main();
