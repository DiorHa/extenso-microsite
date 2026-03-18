"use client";

import { useMemo } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function LocalizedStructuredData() {
  const { t } = useLocale();

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: t.seo.title,
      description: t.seo.description,
      url: "https://extenso.spectra.support",
      publisher: {
        "@type": "Organization",
        name: "Spectra",
        url: "https://www.spectra.support",
      },
    }),
    [t.seo.description, t.seo.title],
  );

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

