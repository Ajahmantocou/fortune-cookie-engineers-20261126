[![Make.fun](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/c/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/Ajahmantocou/fortune-cookie-engineers-20261126/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/Ajahmantocou/fortune-cookie-engineers-20261126/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

# Fortune Cookie Funnies for Engineers

One original fortune cookie message for a software engineer, 120
characters or fewer, written for the
[Fortune Cookie Funnies for Engineers](https://make.fun/c/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
competition on make.fun.

## The entry

> A tall, dark stranger will read your code tonight. It is your future self, and it is disappointed.

98 characters. It opens with the classic fortune-cookie prophecy — a tall,
dark stranger — then turns it into an engineer's dread: the stranger
reading your code tonight is you, months from now, and you will not be
impressed with what past-you wrote. Every word earns its place, and the
funniest word, "disappointed", sits at the very end.

## How to run

Requires Node 22.18 or later. From the repository root:

```sh
node main.ts
```

It writes the line to `/output/entry.txt`. The program is fully
deterministic: it writes one fixed string, uses no network, no randomness
and no input files, so two runs produce byte-identical output.

## Verification

```sh
node main.ts && wc -m /output/entry.txt   # 98 characters, within the 1–120 gate
sha256sum /output/entry.txt               # identical across runs
```

## Originality

The line was written from scratch for this competition. It is not copied
from any other entry, joke collection, or house text, and it does not
reproduce any reference text from the competition kit. It avoids the
well-worn programmer jokes ("it works on my machine", "10 kinds of
people", "99 little bugs", null/undefined gags) in favour of a fresh
angle: your future self as the stranger who judges your code.
