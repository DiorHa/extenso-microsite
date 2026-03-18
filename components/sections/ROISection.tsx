"use client";

import { useMemo, useState } from "react";
import CalculatorField from "@/components/ui/CalculatorField";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { trackEvent } from "@/lib/analytics";
import { formatCurrency } from "@/lib/utils";
import { useLocale } from "@/components/providers/LocaleProvider";

const DEFAULT_OBJECTS = 500;

const ASSUMPTIONS = {
  avgMinutesPerObject: 11,
  swissHourlyRate: 80,
  partnershipEfficiencyPercent: 40,
} as const;

type FixedFieldProps = {
  label: string;
  value: string;
  fixedLabel: string;
};

function FixedField({ label, value, fixedLabel }: FixedFieldProps) {
  return (
    <div>
      <span className="mb-2 block text-sm font-medium text-spectra-light">{label}</span>
      <div className="flex items-center justify-between rounded-xl border border-white/15 bg-black/50 px-4 py-3">
        <span className="text-base text-white">{value}</span>
        <span className="text-xs uppercase tracking-[0.08em] text-zinc-500">{fixedLabel}</span>
      </div>
    </div>
  );
}

export default function ROISection() {
  const { t } = useLocale();
  const [numberOfObjects, setNumberOfObjects] = useState(DEFAULT_OBJECTS);

  const results = useMemo(() => {
    const objects = Math.max(0, numberOfObjects);
    const totalHours = (objects * ASSUMPTIONS.avgMinutesPerObject) / 60;
    const swissCost = totalHours * ASSUMPTIONS.swissHourlyRate;
    const savings = swissCost * (ASSUMPTIONS.partnershipEfficiencyPercent / 100);
    const spectraCost = swissCost - savings;

    return { totalHours, swissCost, savings, spectraCost };
  }, [numberOfObjects]);

  return (
    <section id="roi" className="section-pad">
      <div className="section-container">
        <SectionHeading eyebrow={t.roi.eyebrow} title={t.roi.title} description={t.roi.description} />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="space-y-5">
              <CalculatorField id="number_of_objects" label={t.roi.objectLabel} value={numberOfObjects} min={1} onChange={setNumberOfObjects} />

              <FixedField label={t.roi.avgTimeLabel} value={`${ASSUMPTIONS.avgMinutesPerObject} min`} fixedLabel={t.roi.fixedLabel} />
              <FixedField label={t.roi.swissRateLabel} value={`CHF ${ASSUMPTIONS.swissHourlyRate}`} fixedLabel={t.roi.fixedLabel} />
              <FixedField label={t.roi.efficiencyLabel} value={`${ASSUMPTIONS.partnershipEfficiencyPercent}%`} fixedLabel={t.roi.fixedLabel} />

              <button
                type="button"
                onClick={() =>
                  trackEvent("roi_calculator_used", {
                    number_of_objects: numberOfObjects,
                    avg_minutes_per_object: ASSUMPTIONS.avgMinutesPerObject,
                    swiss_hourly_rate: ASSUMPTIONS.swissHourlyRate,
                    partnership_efficiency_percent: ASSUMPTIONS.partnershipEfficiencyPercent,
                  })
                }
                className="focus-ring w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-spectra-orange hover:text-spectra-orange"
              >
                {t.roi.trackButton}
              </button>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full">
              <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">{t.roi.outputEyebrow}</p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-spectra-light">{t.roi.totalHours}</p>
                  <p className="text-3xl font-semibold text-white">{results.totalHours.toFixed(1)}h</p>
                </div>
                <div>
                  <p className="text-sm text-spectra-light">{t.roi.swissCost}</p>
                  <p className="text-3xl font-semibold text-white">{formatCurrency(results.swissCost)}</p>
                </div>
                <div>
                  <p className="text-sm text-spectra-light">{t.roi.savings}</p>
                  <p className="text-3xl font-semibold text-spectra-orange">{formatCurrency(results.savings)}</p>
                </div>
                <div>
                  <p className="text-sm text-spectra-light">{t.roi.spectraCost}</p>
                  <p className="text-3xl font-semibold text-white">{formatCurrency(results.spectraCost)}</p>
                </div>
              </div>
              <p className="mt-8 text-xs text-spectra-light">{t.roi.note}</p>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

