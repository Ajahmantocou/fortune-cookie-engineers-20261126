// Fortune Cookie Funnies for Engineers — entry program.
//
// Writes one original fortune cookie message for a software engineer
// (98 characters) to /output/entry.txt. The line is a fixed string
// written by this program: no network, no randomness, no input files.
// Running it twice produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A tall, dark stranger will read your code tonight. It is your future self, and it is disappointed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
