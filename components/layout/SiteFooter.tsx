import { siteConfig } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-sm text-white/50">
      <div className="mx-auto max-w-3xl space-y-4">
        <h2 className="font-serif text-lg text-white/80">Privacy &amp; how this works</h2>
        <p>
          {siteConfig.name} runs the personality match and narrative assembly{" "}
          <strong className="font-normal text-white/70">in your browser</strong>. Questionnaire
          answers stay in local storage on your device unless you choose to share a public link.
          Sharing encodes only your champion, similarity score, three trait dimensions, and a short
          quote—never your nickname, birth date, or individual answers.
        </p>
        <p>
          Optional cookies control advertising scripts only when you consent. Quiz progress uses
          necessary local storage and can be cleared with Restart or your browser settings.
        </p>
        <p>
          Unofficial fan project—not endorsed by Riot Games. Review Riot Developer Portal fan
          content and monetization policies before enabling ads or creator donations.
        </p>
        <p className="text-xs">© 2026 {siteConfig.creatorName}</p>
      </div>
    </footer>
  );
}
