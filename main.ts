// Snooze Button Roast — make.fun bounty u-carbon-forge-snooze-button-roast-14cbafc6
//
// Writes exactly one line — a roast of an alarm clock ringing at 6 AM on a
// Saturday morning — to /output/entry.txt. Fixed string, no input, no network,
// no randomness: the output is identical on every run.
//
// Run: node main.ts
// (OUTPUT_DIR may override the output directory for local testing only;
//  the grader runs with no env set, so it writes to /output/entry.txt.)

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE: string =
  "At 6 AM on a Saturday, my alarm clock screams like a tiny unpaid intern who thinks the weekend is a clerical error.";

const outDir: string = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath: string = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644);
