# Soul of Runeterra

**Soul of Runeterra** is an unofficial fan experience that helps visitors discover which *League of Legends* champion best reflects their personality, values, and emotional patterns—through a cinematic single-page journey inspired by Runeterra.

> Not affiliated with or endorsed by Riot Games. Complete [Riot Developer Portal](https://developer.riotgames.com/) registration and fan/commercial policy review before a monetized public launch.

## Stack

- Next.js (App Router) · TypeScript · Tailwind CSS v4
- Framer Motion · Lucide React · Zod
- **Zero-cost deterministic engine** — matching + modular narratives (no paid AI APIs)
- Vitest · Playwright e2e
- Vercel-ready deployment

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Dev narrative inspector: [http://localhost:3000/dev/narrative-preview](http://localhost:3000/dev/narrative-preview) (not linked in UI).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run test` | Vitest (matching, narrative validation, 120-profile simulation) |
| `npm run test:e2e` | Playwright smoke |

## Configuration

See `.env.example` — site URL, Ko-fi, AdSense, optional `ENABLE_DEV_TOOLS`.

**No OpenAI or AI API keys are required.**

## Zero-cost engine

See [docs/ZERO_COST_ENGINE.md](docs/ZERO_COST_ENGINE.md).

1. **20 psychological dimensions** scored from questionnaire answers (zodiac ≤5% symbolic blend).
2. **Champion similarity** via weighted cosine distance on lore-derived vectors.
3. **Modular narratives** from prewritten fragments per champion (deterministic selection seeded by answer IDs).

Quiz matching and narrative composition run **in the browser** after static assets load. Shared results use a compact **URL payload** (`/share?d=…`) with champion id, score, and traits only — no questionnaire answers, no server memory store, no inference.

## Champion roster status

| Status | Meaning |
|--------|---------|
| `narrative-complete` | Matchable + full fragment library (minimum counts validated in tests) |
| `vector-only` | Lore vector present; narrative expansion pending |
| `pending-verification` | Placeholder — not used for matching |

Regenerate narrative packs: `node scripts/generate-narrative-packs.mjs`

At time of last update: **25 narrative-complete**, **~23 vector-only** profiles in repo (48 total with Kindred). Expand with verified Universe lore only.

## Architecture

```
app/                      # SPA journey + dev preview + share page
components/               # UI (unchanged experience)
data/champions/           # Profiles + coverage flags
data/narratives/packs/    # Fragment libraries
data/questions.ts         # 20 questions → dimension weights
lib/matching/             # Personality vectors + matcher
lib/narrative/            # Selection, composition, validation
tests/                    # Matching, narrative, simulation
```

## AdSense & Ko-fi

Unchanged: consent-gated AdSense placeholders, optional Ko-fi after results. Never paywall the quiz.

## Riot compliance

See checklist in footer/README — fan disclaimer, permitted assets (Data Dragon splashes), no implied sponsorship.

## License

Fan project. League of Legends © Riot Games, Inc.
