import fs from 'node:fs';
import path from 'node:path';

/**
 * Rollback Utility
 * Allows rolling back to either:
 * - 'live-backup': The previous live website state archived prior to Phase 13 deployment
 * - 'pre-deploy': The local build state prior to domain reconfiguration
 */

const mode = process.argv[2] || 'live-backup';
const BACKUP_ROOT = path.resolve(process.cwd(), 'backups');
const OUT_DIR = path.resolve(process.cwd(), 'out');

const sourceDir = mode === 'live-backup' 
  ? path.join(BACKUP_ROOT, 'live_nytalent_backup_20260929')
  : path.join(BACKUP_ROOT, 'local_pre_deployment_build_20260929');

if (!fs.existsSync(sourceDir)) {
  console.error(`[Rollback Error] Source directory does not exist: ${sourceDir}`);
  process.exit(1);
}

console.log(`[Rollback] Restoring from ${sourceDir} into ${OUT_DIR}...`);

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

copyRecursiveSync(sourceDir, OUT_DIR);
console.log(`[Rollback] Successfully restored from ${mode}. Export directory out/ is ready for emergency re-deployment.`);
