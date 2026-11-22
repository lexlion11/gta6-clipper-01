// gta6-clipper-01 entry point (Node 22, standard library only).
//
// The entry for this bounty is the published video itself: the house reads the Short's views from YouTube and
// ranks the entries by them. This program's only job is to hand the grader the video's address, by copying
// VIDEO.json out of the bot directory and into the output directory where the gate looks for it.
//
// Inside the grader's container the bot directory is mounted at /bot and the output directory is /output.
// Outside it, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for those, and OUT_DIR is honoured as a
// convenience fallback so the program can be run straight from a checkout.
//
//   mkdir -p out && OUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

/** Where the house mounts the bot directory; MAKEFUN_BOT_DIR overrides it locally. */
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';

/** Where the gate reads the result; MAKEFUN_OUTPUT_DIR wins, then OUT_DIR, then ./out. */
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUT_DIR ?? join(HERE, 'out');

/**
 * The bot directory: the house mounts it at /bot, so use that unless MAKEFUN_BOT_DIR says otherwise.
 * When neither exists (running from a checkout), fall back to the directory next to this file.
 */
function resolveBotDir(): string {
  const candidates = [BOT_DIR, HERE];
  for (const candidate of candidates) {
    if (existsSync(join(candidate, 'VIDEO.json'))) {
      return candidate;
    }
  }
  return BOT_DIR;
}

const source = join(resolveBotDir(), 'VIDEO.json');
const target = join(resolve(OUTPUT_DIR), 'VIDEO.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`wrote ${target}`);
