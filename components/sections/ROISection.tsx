"use client";

import { useMemo, useState } from "react";
import CalculatorField from "@/components/ui/CalculatorField";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { trackEvent } from "@/lib/analytics";
import { formatCurrency } from "@/lib/utils";

const DEFAULT_OBJECTS = 500;

const ASSUMPTIONS = {
  avgMinutesPerObject: 14,
  swissHourlyRate: 80,
  partnershipEfficiencyPercent: 40,
} as const;

type FixedFieldProps = {
  label: string;
  value: string;
};

function FixedField({ label, value }: FixedFieldProps) {
  return (
    <div>
      <span className="mb-2 block text-sm font-medium text-spectra-light">{label}</span>
      <div className="flex items-center justify-between rounded-xl border border-white/15 bg-black/50 px-4 py-3">
        <span className="text-base text-white">{value}</span>
        <span className="text-xs uppercase tracking-[0.08em] text-zinc-500">Fixed</span>
      </div>
    </div>
  );
}

export default function ROISection() {
  const [numberOfObjects, setNumberOfObjects] = useState(DEFAULT_OBJECTS);

  const results = useMemo(() => {
    const objects = Math.max(0, numberOfObjects);
    const totalHours = (objects * ASSUMPTIONS.avgMinutesPerObject) / 60;
    const swissCost = totalHours * ASSUMPTIONS.swissHourlyRate;
    const savings = swissCost * (ASSUMPTIONS.partnershipEfficiencyPercent / 100);
    const spectraCost = swissCost - savings;

    return {
      totalHours,
      swissCost,
      savings,
      spectraCost,
    };
  }, [numberOfObjects]);

  return (
    <section id="roi" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="ROI Snapshot"
          title="Estimate Operational Efficiency Gains"
          description="Use this lightweight model to estimate hours, Switzerland-equivalent delivery cost, and projected savings with a Spectra pod-based operating model."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="space-y-5">
              <CalculatorField
                id="number_of_objects"
                label="Number of objects"
                value={numberOfObjects}
                min={1}
                onChange={setNumberOfObjects}
              />

              <FixedField
                label="Average manual time per object"
                value={`${ASSUMPTIONS.avgMinutesPerObject} min`}
              />

              <FixedField
                label="Swiss Hourly Rate"
                value={`CHF ${ASSUMPTIONS.swissHourlyRate}`}
              />

              <FixedField
                label="Efficiency gain through Spectra delivery partnership"
                value={`${ASSUMPTIONS.partnershipEfficiencyPercent}%`}
              />

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
                Track ROI Scenario
              </button>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full">
              <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">Estimated output</p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-spectra-light">Estimated total manual hours</p>
                  <p className="text-3xl font-semibold text-white">{results.totalHours.toFixed(1)}h</p>
                </div>
                <div>
                  <p className="text-sm text-spectra-light">Estimated Swiss-equivalent delivery cost</p>
                  <p className="text-3xl font-semibold text-white">{formatCurrency(results.swissCost)}</p>
                </div>
                <div>
                  <p className="text-sm text-spectra-light">Estimated savings with Spectra</p>
                  <p className="text-3xl font-semibold text-spectra-orange">{formatCurrency(results.savings)}</p>
                </div>
                <div>
                  <p className="text-sm text-spectra-light">Estimated Spectra delivery cost</p>
                  <p className="text-3xl font-semibold text-white">{formatCurrency(results.spectraCost)}</p>
                </div>
              </div>
              <p className="mt-8 text-xs text-spectra-light">
                Based on fixed assumptions: 14 min per object, CHF 80 Swiss hourly rate, and a 40% efficiency gain through Spectra delivery partnership.
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
