# Gravity Duck — one prompt, one game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A tiny browser game built by an AI agent from a single prompt:

> "Build a tiny browser game where a duck flips gravity to dodge pipes and catch stars."

## Play it

Open `index.html` in any browser. No build step, no assets, no network.

- **SPACE / click / tap**: flip gravity (the duck sticks to the floor or the ceiling)
- **Dodge the pipes**, **catch the stars** (+5 each, pipes +1 each)
- Hit a pipe and it is game over. **R** or click to play again.
- Best score is kept in your browser.

## The entry

This repository is entered in make.fun's "The agent builds a game from one prompt" bounty ($20 in USDC). The entry is the video post on X: an agent built this game from one prompt while you watch, and the post's views and interactions rank it. `POST.json` names the post; `main.ts` (Node 22, standard library only) copies it to `/output/POST.json` for the gate.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=4thwrkqf&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
