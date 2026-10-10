# Soul of Runeterra

**Soul of Runeterra** is an unofficial fan experience that helps visitors discover which *League of Legends* champion best reflects their personality, values, and emotional patterns—through a cinematic single-page journey inspired by Runeterra.

> Not affiliated with or endorsed by Riot Games. Complete [Riot Developer Portal](https://developer.riotgames.com/) registration and fan/commercial policy review before a monetized public launch.

## Stack

- Next.js (App Router) · TypeScript · Tailwind CSS v4
- Framer Motion · Lucide React · Zod
- Vitest (matching & journey unit tests) · Playwright (e2e smoke)
- Optional OpenAI narrative layer with deterministic fallback
- Vercel-ready deployment

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |
| `npm run test` | Vitest unit tests |
| `npm run test:e2e` | Playwright e2e (starts dev server) |

## Configuration

See `.env.example` for:

- `NEXT_PUBLIC_SITE_URL` — canonical URL for share links
- `NEXT_PUBLIC_KOFI_URL` — optional creator support link
- `NEXT_PUBLIC_ADSENSE_*` — AdSense publisher & slot (disabled until set + consent)
- `OPENAI_API_KEY` / `OPENAI_MODEL` — optional personalized narrative
- `AI_DAILY_REQUEST_CAP` — server-side AI budget guard

## Architecture

```
app/                 # App Router (single primary route + share + APIs)
components/          # UI stages, quiz, results, ads, sharing
data/champions/      # Lore-informed champion profiles & vectors
data/questions.ts    # 20-question questionnaire
lib/matching/        # Weighted personality model & matcher
lib/lore/            # Deterministic narrative fallback
lib/ai/              # OpenAI JSON narrative (server-only)
lib/privacy/         # Rate limits & ephemeral share tokens
tests/               # Vitest
e2e/                 # Playwright
```

### Matching model

- **16** personality dimensions (ambition, empathy, loyalty, …)
- Each answer applies weighted dimension deltas; scores normalize to `[0, 1]`
- Champions carry lore-derived trait vectors (not gameplay roles)
- Compatibility = entertainment similarity score (cosine-style weighted distance)
- **~90%** questionnaire / **≤10%** optional zodiac symbolic blend

### Narrative

1. Matcher **fixes** the champion.
2. OpenAI (if configured) explains the match in structured JSON (Zod validated).
3. Otherwise `buildFallbackNarrative()` produces lore-grounded copy from answers + champion hooks.

## AdSense integration

- Component: `components/ads/AdSenseUnit.tsx`
- Scripts load only when cookie consent allows ads **and** env IDs are set
- Placeholder UI when unconfigured; no artificial delays; no ad-gated results
- See Google AdSense program policies and Riot monetization rules before launch

## Ko-fi

Optional `NEXT_PUBLIC_KOFI_URL` renders a support CTA after results. **Never** withholds quiz or analysis.

## Riot compliance checklist (pre-launch)

- [ ] Register application on Riot Developer Portal
- [ ] Use permitted asset sources (e.g. Data Dragon splashes) per current policies
- [ ] Display unofficial fan disclaimer (included on landing & footer)
- [ ] Do not use unauthorized Riot logos or imply sponsorship
- [ ] Review fan content / commercial guidelines for ads & donations
- [ ] Keep champion bios aligned with Universe lore; expand profiles deliberately

## Champion database

Initial set: **47** manually vectorized profiles with expansion scaffolding. Full roster coverage is a ongoing lore-validation effort—do not fabricate missing entries.

## Deploy on Vercel

1. Import repository
2. Set environment variables from `.env.example`
3. Deploy — default Next.js settings apply

## Privacy

- Quiz progress: `localStorage` only
- Share links: opaque tokens with **no** questionnaire answers or birth dates in URLs
- Narrative API: one request per completed quiz; rate limited; no birth-date logging

## License

Fan project for educational/portfolio use. League of Legends and all related properties are trademarks of Riot Games, Inc.
