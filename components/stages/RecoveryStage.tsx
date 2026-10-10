"use client";

import { clearProgress } from "@/lib/quiz/storage";

export function RecoveryStage({
  reason,
  onReset,
}: {
  reason: "corrupt" | "incompatible" | "incomplete";
  onReset: () => void;
}) {
  const copy = {
    corrupt: "Saved progress could not be read.",
    incompatible: "Saved progress comes from a newer version of Soul of Runeterra.",
    incomplete: "Your saved session is incomplete or missing answers.",
  }[reason];

  return (
    <section className="mx-auto max-w-lg px-4 py-20 text-center">
      <h2 className="font-serif text-3xl text-white">Let us begin again</h2>
      <p className="mt-4 text-white/70">{copy}</p>
      <p className="mt-2 text-sm text-white/50">
        No personal answers were sent to a server. Local storage can be cleared safely.
      </p>
      <button
        type="button"
        className="mt-8 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black"
        onClick={() => {
          clearProgress();
          onReset();
        }}
      >
        Start fresh
      </button>
    </section>
  );
}
