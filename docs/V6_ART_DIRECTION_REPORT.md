# V6 Art Direction — Implementation Report

Production reference commit (pre-V6): `62099cd70a9b028781e0ce7a757cf9c9b77c6741`

## 1. Files modified / added

**Core artwork**

- `components/champions/ChampionArtwork.tsx` — `full` (contain) vs `artisticCrop` (cover + transform); 16:9 container; atmospheric letterbox background
- `lib/champions/visualTypes.ts` — `ArtworkDisplayMode`, `shareCinematic`, `mergeArtworkFrame` ignores crop in full mode
- `data/champions/visualProfiles.ts` — `shareCinematic` frame per champion (25 profiles + fallback)

**Share**

- `lib/sharing/formats.ts` — **Cinematic 16:9** (1920×1080) as first/default format
- `components/sharing/ShareExportCard.tsx` — contain-based 16:9 art slots; landscape cinematic layout; template rebuilds
- `components/sharing/ShareStudio.tsx` — default cinematic format; full/artistic toggle; wide desktop two-column studio; crop controls gated

**Results & stages**

- `components/results/ChampionReveal.tsx` — full artwork, editorial text beside/below art, Soul Seal silence phase, no hero zoom/crop overlay
- `components/results/ResultsStage.tsx` — wide visual shell + narrow reading column; chapter labels; separators
- `components/results/AlternativeMatches.tsx` — landscape 16:9 cards
- `components/stages/LandingStage.tsx`, `PersonalStage.tsx`, `components/quiz/QuizStage.tsx`, `QuizProgress.tsx`

**Design system & ornaments**

- `styles/tokens.css`, `app/globals.css`
- `components/ornaments/` — SoulSeal, EchoMark (via ChapterSeparator), FinalMark, PathMark, ChapterSeparator

**Dev & config**

- `app/dev/champion-framing/framing-client.tsx` — full vs artistic preview; 16:9 contexts including `shareCinematic`
- `lib/config/versions.ts` — `CONTENT_VERSION = 6`
- `tests/artwork.test.ts`, `tests/visualProfiles.test.ts`, `tests/share-v4.test.ts`
- This report

## 2. Artwork rendering

- Default **MODE A — full artwork**: `object-fit: contain`, centered, no preset zoom in full mode.
- **MODE B — artistic crop**: optional in Share Studio and dev framing editor; uses profile focal + user pan/zoom.
- Animation layers no longer scale-crop the splash on reveal.

## 3. 16:9 layouts

- Reveal, alternative matches, and export art slots use **16:9 aspect** presentation.
- Results page: `max-w-[var(--sor-visual-max)]` for shell, `max-w-[var(--sor-read-max)]` for prose.

## 4. Share templates

- **Cinematic / Soul / Legend** recomposed with full-width 16:9 art zones; vertical formats show panoramic art in upper band + text below.
- New export: **1920×1080 Cinematic 16:9** (default in studio).

## 5. Symbols

- Soul Seal (landing, reveal silence, Soul template)
- Path Mark (quiz progress)
- Echo Mark (chapter separators)
- Final Mark (destiny closing)

## 6. Design tokens

- Palette and typography roles in `styles/tokens.css` (primary bg, midnight, gold, ivory, mist, read/visual max widths).

## 7–9. Page refinements

- Results: artbook chapter structure with separators.
- Homepage: Soul Seal, existing copy preserved.
- Personal + quiz: chapter tone, Path progress, **Previous enabled on question 1** (returns to personal stage via existing `onBack`).

## 10. Export reliability

- Preview and off-screen export share the same `ShareExportCard` props including `artworkMode`.
- Full mode resets transforms when selected.

## 11. Visual QA coverage

| Area | Status |
|------|--------|
| 25 champions × contexts (automated frame binding) | **Verified** (300 template-format bindings) |
| Full vs artistic mode (unit) | **Verified** |
| Desktop/mobile reveal render | **Pending** manual screenshot |
| All export formats × templates | **Pending** manual `/dev/share-gallery` |
| Per-champion splash completeness | **Pending** — profiles still `verified: false` |

## 12. Automated tests

```
npm run lint     — pass
npm run test     — 58 pass
npm run build    — pass
npm run test:e2e — 1 pass
```

## 13. Remaining known issues

- Visual profile presets are still tuned for **artistic crop**; full mode intentionally ignores them.
- No automated screenshot regression suite yet.
- OG/share URL flow unchanged (no nickname in URL — by design).

## Implemented vs visually verified

**Implemented in code:** full artwork system, 16:9 layouts, studio defaults, templates, tokens, ornaments, chapter results layout.

**Not visually verified in this environment:** pixel-perfect export PNG review for all 25 champions and all four formats (requires manual gallery pass).
