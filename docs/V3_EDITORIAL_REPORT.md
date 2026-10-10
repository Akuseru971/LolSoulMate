# Soul of Runeterra V3 — editorial & UX report

Baseline: `1e00f03`. Content version bumped to **3**.

## Fully implemented & tested

- Cinematic homepage (`LandingStage.tsx`, `globals.css`, `lib/i18n/en.ts`)
- Hand-authored champion packs: **25** files under `data/narratives/champions/` (template generator deprecated)
- `data/narratives/packs/all.ts` re-exports authored packs only
- Editorial lint (`lib/narrative/editorialLint.ts`) + `tests/editorial.test.ts`
- Results page portrait layout (no "Canonical lore:" labels; flowing parallels)
- Analyzing stage: brief copy, no ad slot, no message carousel
- Share / Ko-fi copy refined via i18n
- Shurima lore events corrected (`shurima_fall`, `shurima_restoration`)
- `CONTENT_VERSION = 3` for storage/narrative seed invalidation

## Before / after (homepage)

| Before | After |
|--------|--------|
| "Every Soul Has a Legend." | "Some stories are written before we know their names." |
| "Discover Your Champion" (gold gradient button) | "Enter Runeterra" (text link with arrow) |
| "~6 minutes · No registration required" | Removed (no conversion copy) |

## Before / after (narrative)

| Before (generated) | After (Irelia, excerpt) |
|--------------------|-------------------------|
| "Some souls announce themselves loudly; others, like Irelia, reveal their weight through what they refuse to abandon…" | "Irelia moves through memory like a dance: each blade a note, each loss a step she refuses to forget." |
| "Runeterra does not ask you to be flawless—and it does not ask you to be finished…" | Champion-specific conclusions per pack (e.g. Irelia: responsibility vs personal life) |

## Champion narrative status

**25 / 25** matchable champions have individually authored TypeScript packs (not the old `generate-narrative-packs.mjs` swap-name templates).

Editorial lint passes (no em/en dashes, no banned phrases, intro similarity below threshold). Some parallel blocks still share **structural** metadata patterns from the JSON emitter; prose and canon hooks are champion-specific. Further human polish is welcome but no longer template-identical.

## Tests (verified)

```bash
npm run lint    # pass
npm run test    # 44 passed
npm run build   # pass
npm run test:e2e # 1 passed
```

## Partially implemented

- Full manual lore audit of every line against latest Universe text
- Expanding beyond 25 champions (explicitly out of V3 scope)

## Not implemented

- Signed share payloads (unchanged from V2)
- Dynamic import of per-champion packs (bundle includes all 25 authored packs)

## Deployment

Merge to `main` for Vercel. Visitors with saved results may see refreshed narratives after content version change.
