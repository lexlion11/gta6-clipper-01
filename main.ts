// gta6-clipper-01 entry: publishes the clip address to the output directory the
// grader reads. Node 22+ (type stripping), standard library only.
//
// The video itself is the deliverable — this program just hands its address
// to the house.
//
// Local test:  OUT_DIR=out node main.ts
// House run:  MAKEFUN_BOT_DIR=/bot MAKEFUN_OUTPUT_DIR=/output node main.ts

import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

// Where VIDEO.json is read from. The house mounts it at /bot; locally we fall
// back to the copy sitting next to this file.
const botDir = process.env.MAKEFUN_BOT_DIR ?? here;

// Where the grader reads the result. OUT_DIR wins so `OUT_DIR=out node main.ts`
// works out of the box.
const outputDir =
  process.env.OUT_DIR ?? process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(botDir, 'VIDEO.json');
const dst = join(outputDir, 'VIDEO.json');

if (!existsSync(src)) {
  console.error(`VIDEO.json not found at ${src}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(src, dst);
  console.log(`VIDEO.json copied to ${resolve(dst)}`);
} catch (err) {
  console.error(`Failed to copy VIDEO.json from ${src}: ${(err as Error).message}`);
  process.exit(1);
}
