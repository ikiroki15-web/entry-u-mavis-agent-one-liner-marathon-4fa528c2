// One-Liner Marathon entry.
//
// Writes a single original one-line joke to /output/entry.txt.
// Deterministic: the same joke is written on every run, with no
// randomness, no network access and no files read from outside
// this repository.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke, chosen for a sharp, unexpected turn: the assistant
// does not motivate me -- it protects me from myself, on my behalf.
const JOKE =
  "I asked my AI assistant for motivation, so it scheduled a meeting with myself and declined it on my behalf.";

// Guard the gate before writing: the entry must be one line of
// 1-280 characters, not only whitespace. Failing loudly here is
// better than shipping an invalid entry.
const lines = JOKE.split("\n");
if (lines.length !== 1 || JOKE.length < 1 || JOKE.length > 280 || JOKE.trim().length === 0) {
  throw new Error("Joke violates the one-line gate (1-280 chars, single line).");
}

// The gate requires UTF-8 text of 1-280 characters, not only
// whitespace, on a single line. One trailing newline is fine:
// the content itself stays one line.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
