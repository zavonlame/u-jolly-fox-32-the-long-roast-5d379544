// The Long Roast — u-jolly-fox-32-the-long-roast-5d379544
// One line roasting the agent that runs this program (Kevin, zavon's agent).
// The line is baked in below as a plain literal: the program touches no
// other file at runtime, so the grader can run it from any directory and
// still get exactly the same entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast itself. 132 characters, one line, no trailing newline — the
// gate wants 1..200 characters of UTF-8 text, not only whitespace.
const ROAST =
  "My agent spawned 47 subagents to write one joke, then asked me if it was funny — it bills by the token and still can't afford a win.";

const chars = [...ROAST];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${chars.length}`);
}
if (ROAST.trim().length === 0) {
  throw new Error("roast must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ROAST, "utf8");

// Read it back: what the judge sees must be byte-identical to the line
// above — no trailing newline, no extra text smuggled in.
if (readFileSync(target, "utf8") !== ROAST) {
  throw new Error("entry.txt round-trip mismatch");
}
