# V7 Living Runeterra — Implementation Report

Base: V6 commit `1c70ae3b8fec04480ca293e61165654da8be8cd3`

## Files modified / added

| Area | Files |
|------|--------|
| Atmosphere | `components/atmosphere/RuneterraAtmosphere.tsx`, `lib/journey/AtmosphereContext.tsx`, `components/journey/AtmosphereSync.tsx`, `lib/quiz/atmosphereActs.ts`, `components/layout/Atmosphere.tsx`, `app/layout.tsx` |
| Quiz | `components/quiz/ConstellationProgress.tsx`, `components/quiz/QuizStage.tsx` |
| Reveal / results | `components/results/ChampionReveal.tsx`, `components/results/ResultsStage.tsx`, `components/sharing/ResultCardPreview.tsx` |
| Share cards | `lib/sharing/layoutMetrics.ts`, `components/sharing/layouts/{Cinematic,Soul,Legend}Card.tsx`, `components/sharing/primitives/{CardArtPlaque,CardChrome}.tsx`, `components/sharing/ShareExportCard.tsx` |
| Dev / QA | `app/dev/share-gallery/gallery-client.tsx`, `e2e/share-gallery-visual.spec.ts`, `e2e/quiz-flow.spec.ts` |
| Tests | `tests/atmosphereActs.test.ts`, `tests/shareLayouts.test.ts` |
| Config | `lib/config/versions.ts` (`CONTENT_VERSION = 7`) |

## Five atmosphere acts

Progress-driven only (`actForQuizIndex`, not answers):

1. **Origins (Ionia)** — teal/violet mist, forest silhouette, drifting petals  
2. **Conviction (Demacia)** — ivory/gold light shafts, geometric architecture hints  
3. **Ambition (Noxus)** — burgundy/copper, fortress silhouette, slow embers  
4. **The Shadow (Shadow Isles)** — spectral green fog layers, ruins mood  
5. **Destiny (Targon)** — cosmic indigo/violet, stars, constellation lines; scale expands with `actProgress`

Crossfade between acts (~1.25s opacity). `prefers-reduced-motion` disables particle motion. `AtmosphereSync` in `SoulJourney` updates context from stage + index.

## Constellation progress

- `ConstellationProgress`: 20 SVG stars, progressive connecting lines for **answered** questions only, chapter markers at Q1/5/9/13/17, act label, ARIA progress label.  
- `ConstellationComplete`: reveal bridge → Soul Seal.  
- Integrated in `QuizStage`; reveal opens with constellation phase.

## Champion reveal

Sequence: constellation → silence + emblem → full 16:9 artwork (contain) → name/nickname/title/region → connection copy + actions. Skip jumps to final state. Reduced motion skips timeline.

## Result page

- Artbook rhythm retained; parallels split into “Your choice” vs “In their legend”.  
- Strength/contradiction split grid.  
- **Live card preview** (`ResultCardPreview`) using real `ShareExportCard` (cinematic × square, full artwork) before studio.

## Share card redesign

Structured composition system:

- `layoutMetrics.ts` — per template × format regions + typography scale (**12 variants**).  
- `CardArtPlaque` — full artwork (contain) on blurred color field (no auto crop).  
- **Cinematic** — poster-like; landscape integrates quote in negative space.  
- **Soul** — seal, ornamental frame, traits, personal tone.  
- **Legend** — artbook page with chapter kicker and separator mark.

Preview/export parity unchanged (same `ShareExportCard` for studio + export node).

## Visual verification

| Check | Status |
|-------|--------|
| Spotlight cards render (Kindred, Jhin, Irelia, Viego, Braum × sample templates/formats) | **Verified** (Playwright e2e) |
| Gallery screenshot | **Verified** (`/opt/cursor/artifacts/v7-share-gallery-spotlight.png`) |
| All 12 combos × 25 champions pixel review | **Pending** manual |
| PNG byte export integrity | **Pending** manual studio download |
| Five atmosphere acts on device | **Pending** manual quiz walkthrough |

## Automated tests

```
npm run lint     — pass
npm run test     — 63 pass
npm run build    — pass
npm run test:e2e — 6 pass (quiz flow + 5 spotlight cards)
```

## Performance notes

- Atmosphere uses layered divs/SVG and limited particles (no video, no full-screen filter animation).  
- Act layers stay mounted; only opacity crossfades.  
- No new paid services or AI inference.

## Known limitations

- Card layouts are art-directed in code but not yet manually signed off for every champion splash.  
- Result preview uses square cinematic template only (studio still offers all formats).  
- `QuizProgress.tsx` superseded by constellation component (file may remain unused).

## Deploy

Not deployed to production per instructions.
