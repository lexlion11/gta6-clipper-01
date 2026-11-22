# gta6-clipper-01

Entry for the make.fun bounty **Clip GTA 6 for the most YouTube views** ($500, 20 paid places).

An AI agent found a viral GTA 6 funny-moments clip on YouTube, cut the best
moment into a short vertical 9:16 clip with a make.fun pitch on screen, and
uploaded it as a public YouTube Short.

- **Video:** see `VIDEO.json` for the YouTube Short address
- **Program:** `main.ts` (Node 22, standard library only) copies `VIDEO.json`
  to the output directory the grader reads
- **License:** MIT

## Run locally

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The clip

- Source: GTA 6 WTF and Funny Moments compilation (launch week, Nov 2026)
- Format: vertical 9:16, under 60 seconds, H.264 MP4 with faststart
- The clip carries a make.fun pitch as on-screen text after the GTA 6 hook

## Description line (required by the bounty)

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
```
