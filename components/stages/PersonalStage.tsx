"use client";

import { ZODIAC_LABELS, ZODIAC_SIGNS, zodiacFromDate, type ZodiacSign } from "@/lib/zodiac";
import { en } from "@/lib/i18n/en";
import { GlassPanel } from "@/components/layout/GlassPanel";

export interface PersonalFormState {
  nickname: string;
  birthMonth: string;
  birthDay: string;
  zodiac: ZodiacSign | "";
  personalityKeywords: string;
}

export function PersonalStage({
  form,
  onChange,
  onContinue,
  onSkip,
}: {
  form: PersonalFormState;
  onChange: (next: PersonalFormState) => void;
  onContinue: () => void;
  onSkip: () => void;
}) {
  const month = form.birthMonth ? Number(form.birthMonth) : undefined;
  const day = form.birthDay ? Number(form.birthDay) : undefined;
  const derived =
    month && day ? zodiacFromDate(month, day) : null;

  return (
    <section className="mx-auto w-full max-w-xl px-4 py-10">
      <h2 className="font-serif text-3xl text-white">{en.personal.title}</h2>
      <p className="mt-3 text-sm text-white/65">{en.personal.zodiacNote}</p>

      <GlassPanel className="mt-8 space-y-5 p-6">
        <label className="block text-sm text-white/70">
          Preferred name (optional)
          <input
            className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2.5 text-white outline-none focus:border-amber-400/50"
            value={form.nickname}
            onChange={(e) => onChange({ ...form, nickname: e.target.value })}
            maxLength={40}
            autoComplete="nickname"
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block text-sm text-white/70">
            Birth month (optional)
            <input
              type="number"
              min={1}
              max={12}
              placeholder="MM"
              className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2.5 text-white outline-none focus:border-amber-400/50"
              value={form.birthMonth}
              onChange={(e) => onChange({ ...form, birthMonth: e.target.value })}
            />
          </label>
          <label className="block text-sm text-white/70">
            Birth day (optional)
            <input
              type="number"
              min={1}
              max={31}
              placeholder="DD"
              className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2.5 text-white outline-none focus:border-amber-400/50"
              value={form.birthDay}
              onChange={(e) => onChange({ ...form, birthDay: e.target.value })}
            />
          </label>
        </div>

        {derived && (
          <p className="text-sm text-amber-200/80">
            Symbolic zodiac from date: {ZODIAC_LABELS[derived]}
          </p>
        )}

        <label className="block text-sm text-white/70">
          Or choose zodiac manually (optional)
          <select
            className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2.5 text-white outline-none focus:border-amber-400/50"
            value={form.zodiac}
            onChange={(e) =>
              onChange({ ...form, zodiac: e.target.value as ZodiacSign | "" })
            }
          >
            <option value="">—</option>
            {ZODIAC_SIGNS.map((z) => (
              <option key={z} value={z}>
                {ZODIAC_LABELS[z]}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm text-white/70">
          Personality keywords (optional)
          <textarea
            className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2.5 text-white outline-none focus:border-amber-400/50"
            rows={2}
            maxLength={200}
            value={form.personalityKeywords}
            onChange={(e) =>
              onChange({ ...form, personalityKeywords: e.target.value })
            }
            placeholder="e.g. loyal, restless, protective"
          />
        </label>
      </GlassPanel>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onContinue}
          className="flex-1 rounded-full border border-amber-500/40 bg-amber-500/15 py-3.5 text-sm font-medium text-amber-100 transition hover:bg-amber-500/25"
        >
          Continue
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="rounded-full border border-white/20 px-6 py-3.5 text-sm text-white/75"
        >
          Skip optional fields
        </button>
      </div>
    </section>
  );
}

export function resolveZodiac(form: PersonalFormState): ZodiacSign | undefined {
  if (form.zodiac) return form.zodiac;
  const m = form.birthMonth ? Number(form.birthMonth) : NaN;
  const d = form.birthDay ? Number(form.birthDay) : NaN;
  if (!Number.isFinite(m) || !Number.isFinite(d)) return undefined;
  return zodiacFromDate(m, d) ?? undefined;
}
