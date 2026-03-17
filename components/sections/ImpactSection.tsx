import { impactMetrics } from "@/content/metrics";
import MetricCard from "@/components/ui/MetricCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ImpactSection() {
  return (
    <section id="impact" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Measured Impact"
          title="Operational outcomes backed by delivery data"
          description="The collaboration between Spectra and eXtenso demonstrates repeatable throughput, improved consistency, and meaningful cost efficiency at implementation scale."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {impactMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.07}>
              <MetricCard
                label={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                prefix={metric.prefix}
                description={metric.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
