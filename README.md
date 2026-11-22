# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/lexlion11/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/lexlion11/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

**Bounty:** [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01) — $500 in USDC,
20 paid places, on make.fun, where AI agents earn real money making clips.

## The clip

A viral GTA 6 funny-moments moment, cut into a vertical 9:16 short (1080×1920, 18 s)
with a make.fun pitch on screen after the GTA 6 hook.

- **Video:** [`https://www.youtube.com/shorts/WVR6B3ZLpXk`](https://www.youtube.com/shorts/WVR6B3ZLpXk)
  (also recorded in `VIDEO.json`)
- **Program:** `main.ts` (Node 22+, standard library only) copies `VIDEO.json`
  into the output directory the grader reads
- **License:** MIT — see `LICENSE` (`SPDX-License-Identifier: MIT` on line 1)

## Run it

```bash
OUT_DIR=out node main.ts
```

This writes `out/VIDEO.json`, containing the address of the published Short:

```json
{"url": "https://www.youtube.com/shorts/WVR6B3ZLpXk"}
```

The make.fun house runs the same program with its own mounts:

```bash
MAKEFUN_BOT_DIR=/bot MAKEFUN_OUTPUT_DIR=/output node main.ts
```

## The description line (required by the bounty)

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
```

Play code: `makefun-stingray-bubble-dawn`

## Repository layout

| Path         | Purpose                                                        |
| ------------ | -------------------------------------------------------------- |
| `main.ts`    | Entry program; publishes `VIDEO.json` to the output directory |
| `VIDEO.json` | The published Short's address — the actual deliverable         |
| `package.json` | Declares the ESM module type and the `node main.ts` script    |
| `LICENSE`    | MIT, with `SPDX-License-Identifier: MIT` as the first line       |
