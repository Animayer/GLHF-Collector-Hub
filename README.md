# GLHFers Collector Hub (Mockup)

A **community-run** home base for GLHFers & Gigaverse ROM holders, presented as a clickable, static **mockup**.

> **Mockup – sample data.** Nothing here is live on-chain data. No wallet signing; the "Connect wallet (demo)" button loads a sample vault.

- Live (GitHub Pages): https://animayer.github.io/GLHF-Collector-Hub/
- Built for a demo with the Gigaverse team. Community-run, supported by Gigaverse (placeholder).

## Facts used (public, docs.gigaverse.io)
- **Gigaverse ROMs**: 10,000 on Abstract (ERC-721). Tiers: Silver 5,800 / Gold 3,200 / Void 850 / Giga 150. Traits: tier, faction, memory, serial number, stub boost level (max 60).
- **GLHFers**: ERC-721 on Ethereum, launched Jan 2024, original supply 3,690. Deflationary: the Auctioneer auctions 1/1 Special Characters and uses proceeds to sweep & burn the floor.
- **Factions** (8): Archon, Athena, Chobo, Crusader, Foxglove, Overseer, Summoner (the 7 Masters of the Gigaverse) + Gigus.
- Gigaverse Online is coming after The Awakening event (ends Oct 12).

## Assets
`assets/` holds a curated set of official Gigaverse/GLHF art from the team's media kit (logo, `gigaverse.ttf` font, GigaNoob expressions, character heads, faction icons, leaderboard medals, GIFs, sounds). All rights belong to GLHF / Gigaverse.

## Stack
Plain static HTML/CSS/JS, no build step, no backend. Served from the repo root on `main` via GitHub Pages.
