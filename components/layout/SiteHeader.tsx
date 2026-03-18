"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/LocaleProvider";
import LanguageToggle from "@/components/layout/LanguageToggle";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Go to homepage" className="focus-ring inline-flex items-center">
          <Image src="/brand/Logo_white.svg" alt="Spectra" width={130} height={32} priority />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <nav className="items-center gap-7 md:flex" aria-label="Primary">
            {t.nav.items.map(item => (
              <a key={item.href} href={item.href} className="focus-ring text-sm text-spectra-light transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <LanguageToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          className="focus-ring rounded-lg border border-white/15 p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <nav
        className={cn(
          "section-container overflow-hidden px-6 transition-[max-height] duration-300 md:hidden",
          open ? "max-h-80 pb-5" : "max-h-0",
        )}
        aria-label="Mobile"
      >
        <div className="mb-4">
          <LanguageToggle />
        </div>
        <ul className="space-y-3">
          {t.nav.items.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="focus-ring inline-block text-sm text-spectra-light hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

