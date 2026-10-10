# Vercel deployment checklist

If you see **404 NOT_FOUND** on `*.vercel.app`:

1. **Project Settings → General → Root Directory** must be empty (`.`).  
   Do not use `soul-of-runeterra` (old folder removed).

2. **Framework Preset** must be **Next.js** (or auto from `vercel.json`).

3. **Build & Development Settings**
   - Build Command: `npm run build`
   - Output Directory: leave **empty** (Vercel manages `.next`).

4. **Production Branch**: `main`

5. After saving, use **Deployments → Redeploy** on the latest `main` commit.

6. Confirm the production domain is assigned to that deployment (not an old empty deploy).
