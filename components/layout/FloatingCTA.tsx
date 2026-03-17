"use client";

import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export default function FloatingCTA() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed right-5 top-20 z-50 hidden lg:block">
      <div className="pointer-events-auto rounded-full border border-white/20 bg-black/70 p-1 backdrop-blur-md">
        <Button
          href="https://www.spectra.support/contact"
          onClick={() => trackEvent("hero_cta_book_call", { path: pathname, source: "floating_cta" })}
          className="px-5 py-2.5"
        >
          Book a Call
        </Button>
      </div>
    </div>
  );
}

