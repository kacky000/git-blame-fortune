import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune-cookie wisdom for a developer: haste tonight, git blame next year.
const fortune = "The bug you fix in haste tonight will return in a year, and git blame will greet it by your name.";

const limit = 120;
if ([...fortune].length > limit) throw new Error(`fortune is ${[...fortune].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), fortune);
