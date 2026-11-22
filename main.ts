// gta6-clipper-01 entry: copies VIDEO.json to the output directory the grader reads.
// Node 22, standard library only. The video itself is the entry — this program just
// hands its address to the house.
//
// Local test: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(botDir, 'VIDEO.json');
const dst = join(outputDir, 'VIDEO.json');

if (!existsSync(src)) {
  console.error(`VIDEO.json not found at ${src}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(src, dst);
  console.log(`VIDEO.json copied to ${dst}`);
} catch (err) {
  console.error(`Failed to copy VIDEO.json from ${src}: ${(err as Error).message}`);
  process.exit(1);
}
