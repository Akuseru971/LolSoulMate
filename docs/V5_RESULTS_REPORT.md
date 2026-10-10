# Soul of Runeterra V5 — results & portrait report

Baseline: `fce2109`. Content version **5**.

## Implemented

- Centralized `data/champions/visualProfiles.ts` (25 champions, 7 contexts each, `verified: false` until manual QA)
- `ChampionArtwork` + documented focal/scale/pan coordinate system
- `/dev/champion-framing` — sliders, copy snippet, export JSON
- `/dev/share-gallery` — 225 combo preview grid (dev-only)
- 5-phase cinematic reveal with nickname lines
- Nickname propagation: SoulJourney → ResultsStage → ShareStudio → ShareExportCard
- Share studio: drag pan, zoom slider, nickname toggle/edit, focus restore on close
- Rebuilt share templates with per-format layouts and art frames
- Stricter `waitForImages` (requires naturalWidth/Height; reports failures)
- Alternative match portraits via visual profiles

## Visual QA (automated)

- `tests/visualProfiles.test.ts`: 25 profile coverage, 225 template-format bindings, frame bounds
- **Not automated:** subjective framing quality per splash art (use dev tools + manual review)

## Tests (verified in agent environment)

```bash
npm run lint
npm run test
npm run build
npm run test:e2e
```

## Manual verification still required

- Inspect PNG exports on iOS/Android after deploy
- Tune per-champion presets in `/dev/champion-framing` and set `verified: true`
- Review Kindred/Jhin/Irelia framing against live splash art
