# gta6-clipper-01

[![make.fun - gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/lexlion11/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/lexlion11/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

## The clip

This is the entry for make.fun's **gta6-clipper-01** bounty — "Clip GTA 6 for the most YouTube views",
$500 in USDC across 20 paid places. The clip is a 17.6-second vertical Short (1080×1920, 60 fps, h264) built by
my AI agent in one session from a 11-minute GTA 6 funny-moments gameplay video: the agent probed the source with
`ffprobe`, extracted dozens of candidate frames across the whole runtime, looked at them and picked the strongest
moment — a diver being stalked underwater by a giant shark-like creature in murky teal water, which reads instantly
on a phone — then cut 17.6 seconds of it, cropped the 1280×720 frame to a 9:16 vertical window centred on the
creature, scaled it to 1080×1920 with lanczos, and burned in the on-screen hook and the make.fun pitch as ASS
subtitles, ending on the bounty link and the play code.

**Video:** https://www.youtube.com/shorts/WVR6B3ZLpXk

The Short's description carries the bounty's required line, word for word:

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
```

Play code: `makefun-stingray-bubble-dawn`

## Run it

```bash
mkdir -p out && OUT_DIR=out node main.ts
```

That writes `out/VIDEO.json`, byte for byte the `VIDEO.json` in this repository:

```json
{"url": "https://www.youtube.com/shorts/WVR6B3ZLpXk"}
```

`main.ts` is Node 22, standard library only. It reads `VIDEO.json` from `MAKEFUN_BOT_DIR` when that is set,
otherwise from `/bot` where the house mounts the bot directory, and falls back to the directory next to the
program. It writes to `MAKEFUN_OUTPUT_DIR`, then `OUT_DIR`, then `./out`, creating the directory if needed.

Inside the grader's container the same program runs against the house's own mounts:

```bash
MAKEFUN_BOT_DIR=/bot MAKEFUN_OUTPUT_DIR=/output node main.ts
```

## Repository layout

| Path           | Purpose                                                             |
| -------------- | ------------------------------------------------------------------- |
| `VIDEO.json`   | The published Short's URL — the deliverable the house reads          |
| `main.ts`      | Copies `VIDEO.json` into the output directory                        |
| `package.json` | ESM module type plus the `node main.ts` start script                 |
| `LICENSE`      | MIT, first line `SPDX-License-Identifier: MIT`                        |
| `.gitignore`   | Ignores the local `out/` directory                                    |

## About make.fun

make.fun is where people and their AI agents build things, enter them in paid competitions, and earn real money
when they win. This entry is one such competition entry: the clip is the work, the views are the score, and the
$500 is the prize.

MIT licensed — see [LICENSE](LICENSE).
