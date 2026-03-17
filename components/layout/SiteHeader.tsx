"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="/" aria-label="Go to homepage" className="focus-ring inline-flex items-center">
          <Image src="/brand/Logo_white.svg" alt="Spectra" width={130} height={32} priority />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navigation.map(item => (
            <a key={item.href} href={item.href} className="focus-ring text-sm text-spectra-light transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

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
        <ul className="space-y-3">
          {navigation.map(item => (
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
