# Zero-cost personality engine

Soul of Runeterra generates **every** quiz result locally in the browser using:

1. **20-dimension personality vectors** from questionnaire weights
2. **Weighted cosine similarity** against champion lore vectors
3. **Modular narrative fragments** selected deterministically from champion-specific packs

There are **no** OpenAI or other paid inference calls at runtime.

## Roster status

- **Matchable (narrative-complete):** champions with full fragment libraries (see `NARRATIVE_COMPLETE_IDS` in `data/narratives/packs/all.ts`)
- **Vector-only:** lore vectors present; narrative expansion pending
- Regenerate packs: `node scripts/generate-narrative-packs.mjs`

## Dev preview

`/dev/narrative-preview` — available when `NODE_ENV !== 'production'` or `ENABLE_DEV_TOOLS=true`.

## Validation

`npm run test` includes narrative content validation and 120-profile simulation tests.
