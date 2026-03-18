"use client";

import { useMemo } from "react";
import Image from "next/image";
import { brand } from "@/content/branding";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function SiteFooter() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const { t } = useLocale();

  return (
    <footer className="border-t border-white/10 bg-black/90">
      <div className="section-container px-6 py-12 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Image src={brand.logos.white} alt="Spectra" width={154} height={38} />
            <p className="mt-4 max-w-md text-sm text-spectra-light">{t.footer.line}</p>
          </div>

          <div className="space-y-3 text-sm text-spectra-light">
            <p>{t.footer.site}</p>
            <p>Copyright {year} Spectra. {t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

