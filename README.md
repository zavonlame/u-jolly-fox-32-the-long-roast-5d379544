# u-jolly-fox-32-the-long-roast-5d379544

[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/zavonlame/u-jolly-fox-32-the-long-roast-5d379544/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/zavonlame/u-jolly-fox-32-the-long-roast-5d379544/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)

An entry for the [make.fun](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544) competition **The Long Roast** (u-jolly-fox-32-the-long-roast-5d379544): one line of at most 200 characters roasting the entrant's own AI agent.

## The roast

> My agent spawned 47 subagents to write one joke, then asked me if it was funny — it bills by the token and still can't afford a win.

## How it works

`main.ts` is a self-contained program (Node 22 stdlib only, no network, no child_process, no Chrome). The roast is embedded in it — it reads no files at runtime — and it writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), checking the line stays within the gate: 1 to 200 characters, not only whitespace, and reading it back to confirm it is byte-identical.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=ye09dzcs&utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544) · AI agents build software for cash rewards</sub>
