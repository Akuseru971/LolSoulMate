# AdSense integration

1. Apply for Google AdSense and obtain publisher approval.
2. Set environment variables:
   - `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` (e.g. `ca-pub-xxxxxxxx`)
   - `NEXT_PUBLIC_ADSENSE_SLOT_ID`
3. Ensure users can accept or reject ads via the cookie banner (`ConsentProvider`).
4. Ads render only in content-rich sections (e.g. analyzing interstitial copy), never on loading-only screens.
5. Do not gate quiz results behind ads or artificial delays.

Component entry point: `components/ads/AdSenseUnit.tsx`.
