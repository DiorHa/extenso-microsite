import LocalizedStructuredData from "@/components/layout/LocalizedStructuredData";
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

export default function HomePage() {
  return (
    <>
      <LocalizedStructuredData />
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

