# Soul of Runeterra V4 — reveal & sharing report

Baseline: `423f319`. Content version **4** (dedicated share quotes).

## Implemented

### Champion reveal
- Full-viewport splash art always visible; skip completes animation without unmounting artwork
- Staggered cinematic sequence; reduced-motion shows final state immediately
- Early actions: **Read your story** (scroll) and **Save your portrait** (studio)

### Results page
- Editorial sections with hierarchy; parallels split personal / canonical / connection
- **AlternativeMatches** with thumbnails and dimension-grounded copy
- Share studio entry after narrative + from reveal

### Share studio (`ShareStudio.tsx`)
- Lazy-loaded; three templates (**Cinematic**, **The Soul**, **The Legend**)
- Three formats: Story 1080×1920, Portrait 1080×1350, Square 1080×1080
- Live scaled preview; off-screen export node (no `opacity: 0`)
- Font/image wait helpers; CORS prefetch to data URL when possible

### Social & public share
- `generateMetadata` on `/share?d=`
- OG image route `/api/og/share?d=`
- Cinematic public share page (`SharePublicView`)

### Share quotes
- `data/sharing/shareQuotes.ts` (3 quotes × 25 champions)
- Deterministic selection via `selectShareQuote`

### Analytics
- Extended event types (studio, export attempt/success/fail, native share, shared page funnel)

## Tests (verified)

```bash
npm run lint    # pass
npm run test    # 49 passed
npm run build   # pass
npm run test:e2e # 1 smoke (landing → quiz)
```

New: `tests/share-v4.test.ts` (metadata, quotes, formats, alternatives)

## Not verified in this environment

- Actual PNG byte output on iOS Safari / Android Chrome (export path implemented; manual device check recommended)
- TikTok/Instagram in-app browser file share (fallback: copy link + download)
- OG image with live ddragon fetch on production edge (fallback layout without art)

## Known limitations

- `ShareActions.tsx` legacy component unused (studio replaces it)
- All 25 champion packs still in main bundle
- Edge runtime deprecation warning on OG route (still builds)

## Deployment

Merge to `main` when ready; no new paid services or env vars required.
