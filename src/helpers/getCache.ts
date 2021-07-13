import fs from 'fs';

export default function getCache(thumbPath: string): boolean {
  return fs.existsSync(thumbPath);
}
