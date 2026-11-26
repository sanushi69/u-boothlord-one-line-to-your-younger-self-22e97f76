// One Line to Your Younger Self — make.fun entry 1.
// The program writes the single line to /output/entry.txt.
// The line: a warning from an older self to a younger one, drawn from a
// life actually lived — not advice, not a motto. The letters stay; the
// handwriting of the people who wrote them fades from memory first.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Don't throw away the letters — you'll spend your thirties trying to remember the handwriting of people you loved.";

// The gate only accepts 1–200 characters of non-blank UTF-8 text, so
// refuse to write anything that would fail it instead of shipping it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; gate needs 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
