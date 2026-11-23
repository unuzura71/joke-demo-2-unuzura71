import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside AI coding agents:
// a great team, until something breaks — then the blame
// lands on the requirements, never on either of us.
const TEXT =
  "My AI coding agent and I make a great team: it writes the code, I take the credit, and when it breaks, we both blame the requirements.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...TEXT].length > 280 || TEXT.trim().length === 0) {
  throw new Error("entry.txt must be 1-280 Unicode code points, not only whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
