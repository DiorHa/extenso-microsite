import { strategicValuePoints } from "@/content/extenso-story";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function StrategicValueSection() {
  return (
    <section id="strategic" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Strategic Value"
          title="Scaling Real Estate Digitalization in Switzerland"
          description="The Spectra x eXtenso collaboration combines Swiss PropTech expertise with nearshore operational capacity, helping implementation projects move faster while maintaining quality and cost efficiency."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">Swiss Expertise</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Implementation strategy and domain fit</h3>
              <p className="mt-4 text-sm leading-relaxed text-spectra-light">
                eXtenso drives platform-specific execution with deep understanding of Swiss property workflows and client expectations.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full">
              <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">Nearshore Operations</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Scalable multilingual delivery capacity</h3>
              <p className="mt-4 text-sm leading-relaxed text-spectra-light">
                Spectra extends implementation bandwidth with structured, multilingual data operations and template-led onboarding workflows.
              </p>
            </Card>
          </Reveal>
        </div>

        <div className="mt-5 grid-cards">
          {strategicValuePoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.05}>
              <Card className="h-full">
                <h4 className="text-lg font-semibold text-white">{point.title}</h4>
                <p className="mt-2 text-sm text-spectra-light">{point.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
