import { useMemo } from "react";
import Image from "next/image";
import { brand } from "@/content/branding";

export default function SiteFooter() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="border-t border-white/10 bg-black/90">
      <div className="section-container px-6 py-12 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Image src={brand.logos.white} alt="Spectra" width={154} height={38} />
            <p className="mt-4 max-w-md text-sm text-spectra-light">
              Scalable data operations pods for high-precision ERP and digitalization delivery.
            </p>
          </div>

          <div className="space-y-3 text-sm text-spectra-light">
            <p>www.spectra.support</p>
            <p>Copyright {year} Spectra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
