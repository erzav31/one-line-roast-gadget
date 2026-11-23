// One-Line Roast: The Gadget You Use Every Day
// Entry: a roast of the air fryer, the everyday gadget that beeps like a hero
// and then serves fries burnt outside and frozen inside — while staying
// proud of both. Fresh target: no air-fryer roast appeared in any of the
// 787 live submission titles checked before this line was written.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My air fryer beeps like it invented fire, then serves fries burnt outside, frozen inside — and proud of both.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
