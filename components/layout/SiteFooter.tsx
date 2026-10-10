import { siteConfig } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-sm text-white/50">
      <div className="mx-auto max-w-3xl space-y-4">
        <h2 className="font-serif text-lg text-white/80">Privacy & fan project</h2>
        <p>
          {siteConfig.name} stores quiz progress in your browser unless you choose to
          share a public link. We do not require your real name, email, or precise
          location. Optional birth date is used only for symbolic zodiac flavor (≤10%
          weight). Questionnaire answers are sent to our server once to generate your
          narrative when you finish; we do not log birth dates in server logs.
        </p>
        <p>
          Before monetized public launch, register with the Riot Developer Portal and
          complete their fan content / commercial review requirements. Do not imply Riot
          sponsorship. League of Legends © Riot Games, Inc.
        </p>
        <p className="text-xs">© 2026 {siteConfig.creatorName}</p>
      </div>
    </footer>
  );
}
