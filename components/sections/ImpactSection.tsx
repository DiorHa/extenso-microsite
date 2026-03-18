"use client";

import MetricCard from "@/components/ui/MetricCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function ImpactSection() {
  const { t } = useLocale();

  return (
    <section id="impact" className="section-pad">
      <div className="section-container">
        <SectionHeading eyebrow={t.impact.eyebrow} title={t.impact.title} description={t.impact.description} />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {t.impact.metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.07}>
              <MetricCard label={metric.label} value={metric.value} suffix={metric.suffix} description={metric.description} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

