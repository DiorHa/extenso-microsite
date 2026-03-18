"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/65 p-1" aria-label={t.nav.toggleLabel}>
      {(["en", "de"] as const).map(item => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          aria-pressed={locale === item}
          className={cn(
            "focus-ring rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] transition",
            locale === item
              ? "bg-spectra-orange text-black"
              : "text-zinc-200 hover:bg-white/10 hover:text-white",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

