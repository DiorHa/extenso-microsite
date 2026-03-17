import BottleneckSection from "@/components/sections/BottleneckSection";
import ChallengeSection from "@/components/sections/ChallengeSection";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import PodSolutionSection from "@/components/sections/PodSolutionSection";
import ROISection from "@/components/sections/ROISection";
import TeamSection from "@/components/sections/TeamSection";
import TemplatesSection from "@/components/sections/TemplatesSection";
import WorkflowSection from "@/components/sections/WorkflowSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Spectra x eXtenso | Scaling Real Estate Data Operations for Swiss Property Portfolios",
  description:
    "Discover how Spectra helps eXtenso scale RIMO implementations with a dedicated multilingual data operations pod for Swiss real estate portfolios.",
  url: "https://www.spectra.support",
  publisher: {
    "@type": "Organization",
    name: "Spectra",
    url: "https://www.spectra.support",
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <HeroSection />
        <ChallengeSection />
        <BottleneckSection />
        <PodSolutionSection />
        <WorkflowSection />
        <TemplatesSection />
        <ROISection />
        <ImpactSection />
        <TeamSection />
        <CTASection />
      </main>
    </>
  );
}
