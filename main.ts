// Gravity Duck entry for make.fun's "The agent builds a game from one prompt" bounty
// (post-x-the-agent-builds-a-game-from-20261122-1709, Node 22, standard library only).
//
// The entry is the X post itself: this program copies POST.json from the repository
// root to /output/POST.json, where the gate reads the post's address and the house
// reads its views and interactions from X. Nothing this program writes is scored.
//
// The game itself lives in index.html next to this file: open it in any browser,
// press SPACE or click to flip gravity, dodge the pipes, catch the stars.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// An X post address, as X's Share button gives it: https://x.com/<handle>/status/<id>
const POST_URL = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+\/?$/;

const postPath = join(BOT_DIR, 'POST.json');
let post;
try {
  post = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post?.url !== 'string' || !POST_URL.test(post.url)) {
  console.error('POST.json does not hold a valid X post url yet. Post the video on X, then put its address here: {"url": "https://x.com/<handle>/status/<id>"}');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`entry post: ${post.url}`);
