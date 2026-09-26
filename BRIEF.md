# Build brief: Gigaverse Collectors Hub (clickable mockup)

**Repo:** Animayer/GLHF-Collector-Hub (branch off `main`, open a PR to `main`).
**Deploy:** GitHub Pages is already enabled from `main` / root (legacy build, `.nojekyll` present). Live URL after merge: https://animayer.github.io/GLHF-Collector-Hub/ . Replace the placeholder `index.html`.
**Audience:** Ryan Mayer will demo this on a call with the Gigaverse team. It must look polished, feel like a pixel-art game lobby, and click through without errors.

## Hard constraints
- Pure static site: HTML + CSS + vanilla JS (ES modules ok). No build step, no backend, no external CDNs required (self-contained; a tiny inline chart is fine). All paths RELATIVE (site is served under `/GLHF-Collector-Hub/`). Hash routing (`#/explorer`) or separate .html pages — either is fine, but deep links must work on Pages.
- Persistent banner on every page: **"Mockup – sample data"**. All data is sample/fictional and labeled as such.
- Read-only. **No real wallet connection or signing.** A "Connect wallet (demo)" button just loads a sample vault from local JSON.
- Footer on every page: **"Community-run, supported by Gigaverse"** (mark as placeholder in a small note/tooltip).
- Responsive (phone → desktop), fast (no heavy libs), zero console errors, `image-rendering: pixelated` on sprites.
- Use the art in `assets/` (do NOT delete or rename it). Load `assets/fonts/gigaverse.ttf` via `@font-face` for headings/UI; readable fallback for body text.
- Sounds optional, OFF by default, with a visible mute/unmute toggle (persist in localStorage). Use `assets/sounds/Click.mp3` for UI clicks, `Success.mp3` for quest/holder-card success, `GLHFers_Theme.mp3` as optional background music.

## Assets available (assets/)
- `logo/` GLHF_Logo_Deep.png, GLHF_Logo_Shallow.png, GLHF_Logo_Animated.gif, Gigaverse_Logo.png
- `fonts/gigaverse.ttf`
- `letters/` G, L, H, F pixel letters (GLHF wordmark)
- `expressions/` GigaNoob faces: default, happy, shades, anger, yay1, cry, bigeyes, uwu1, orly, ded
- `heads/` character heads: archon, athena, chobo, crusader, foxglove, overseer, summoner (+ blackknight, crow, greycloak, redcloak, knight, boss_1, impaler_1)
- `factions/` Faction_<Name>_Transparant.png (32x32) for Archon, Athena, Chobo, Crusader, Foxglove, Overseer, Summoner, plus gigus1x1.png
- `medals/` Icon_{Giga,Gold,Iron,Copper,Stone,Wood}-Medal.png (leaderboard medals — use for ranks/season rewards)
- `gifs/` Auctioneer.gif (burn/auction theme), GLHF_Arcade.gif, Gigaverse_Dancing.gif, Gigaverse_Banner.gif, void.png
- `sprites/` Giganoob_PFP.png, Noob_Clean_Avatar.png
- `sounds/` Click.mp3, Success.mp3, Press_Start.mp3, GLHFers_Theme.mp3

## Real facts to use (public, docs.gigaverse.io)
- **Gigaverse ROMs:** 10,000 supply, ERC-721 on **Abstract**. Tiers: **Silver 5,800 / Gold 3,200 / Void 850 / Giga 150**. Traits: **tier, faction, memory, serial number, stub boost level (1–60)**.
- **GLHFers:** ERC-721 on **Ethereum**, minted **January 2024**, original supply **3,690**. Deflationary: the **Auctioneer** auctions 1/1 **Special Characters** and uses proceeds to sweep & **burn** the floor (docs say 420 burned to date — use as the base of the sample burn counter, labeled sample).
- **Factions (real, 8):** **Archon, Athena, Chobo, Crusader, Foxglove, Overseer, Summoner** (the 7 "Masters of the Gigaverse", which are Special Characters in GLHFers) + **Gigus** (the sentient AI creator of Gigaverse). Use these real names; faction icons + matching heads are in assets.
- **Gigaverse Online** is coming after **The Awakening** event (ends **Oct 12**).
- Known Special Characters for the wiki: the 7 Masters (Archon, Athena, Chobo, Crusader, Foxglove, Overseer, Summoner), the **Auctioneer**, Gigus. Lore text must be clearly marked sample/placeholder where invented.

## Pages / features
1. **Home** — hero: "Home base for GLHFers & ROM holders" with GLHF pixel logo; live-looking animated burn counter (sample; ticks occasionally); "This week's event" card; faction standings snapshot (top 8 with icons + medal ranks); CTA buttons to Explorer / Factions / My Vault.
2. **Explorer** — grid of ~48 sample items mixing GLHFers (Ethereum) and ROMs (Abstract). Filters: collection, tier (Silver/Gold/Void/Giga), faction, memory range, stub level range, text search; result count; click → detail modal with all traits (tier, faction, memory, serial, stub level) and "sample" label. Filters must actually work.
3. **My Vault (demo)** — "Connect wallet (demo)" button → loads sample vault (fake address like 0xDEMO…GLHF) with holdings across both collections, stats (count by tier/faction, set progress). **Holder card generator**: canvas render with pixel font, chosen avatar (head/expression), faction icon, handle, holdings summary, medal; **Download PNG** button (canvas.toBlob → download). Must work in Chrome.
4. **Factions (centerpiece)** — index of 8 faction halls + individual hall view (banner using head + icon + faction color, member count, weekly score, top members). Plus:
   - **Faction Wars season board**: weekly standings table; points breakdown columns: holder activity, set completions, event wins, community quests; week selector (weeks 1–6) that changes standings.
   - **Faction quest board**: weekly co-op goals with animated progress bars.
   - **Territory map**: pixel grid map (canvas or CSS grid) of zones colored by controlling faction; a week slider shows control shifting weekly; hover/tap zone for owner + points.
   - **War-room feed** mock: sample posts with avatars (expressions), timestamps, emoji reactions that increment on click (local only).
   - **Rivalry of the week**: two factions head-to-head with score bars.
   - **Season rewards track**: tiers with badges/roles/trophy using medal icons; progress indicator.
5. **Events** — Set Hunt; Special Character Spotlight with community vote (local-only voting with live tally bars); Holder Card Contest (links to generator); Gigaverse Online launch event (countdown-style card: "after The Awakening ends Oct 12" — do not invent an exact launch date; say "date TBA").
6. **Special Characters wiki** — ~6 sample 1/1 entries (Masters + Auctioneer), each with portrait, role, short lore (sample), and link to faction hall.
7. **Burn tracker** — chart (inline SVG or canvas, no external lib) of sample cumulative GLHFers burned over time, current supply = 3,690 − burned (sample), recent burns table (sample), Auctioneer GIF.

## Style
Dark game-lobby UI (deep purple/navy background, neon accents), chunky pixel borders (box-shadow or border-image), CRT/scanline subtle overlay optional, hover bounce on cards, GigaNoob expressions as flavor. Top nav: Home, Explorer, My Vault, Factions, Events, Wiki, Burn. Mobile hamburger.

## Definition of done
- All pages load from the Pages URL with no console errors; all images/fonts load (no 404s; relative paths).
- Explorer filters work; modal opens/closes (Esc + click outside).
- Holder card PNG downloads.
- Territory map week slider and season-board week selector change the display.
- "Mockup – sample data" banner and footer present on every page.
- Update README with a short feature list + live URL. Open a PR to `main` titled "Gigaverse Collectors Hub mockup" and report: PR link, list of pages, known gaps.
