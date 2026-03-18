"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
  translations,
} from "@/content/translations";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (typeof translations)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === "en" || stored === "de" ? stored : DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.title = translations[locale].seo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", translations[locale].seo.description);
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale: setLocaleState, t: translations[locale] }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return ctx;
}

