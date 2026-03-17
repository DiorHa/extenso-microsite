import type { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

type TimelineStepProps = {
  index: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function TimelineStep({ index, title, description, icon: Icon }: TimelineStepProps) {
  return (
    <Card className="relative h-full overflow-hidden">
      <span className="absolute right-4 top-4 text-xs font-medium text-spectra-light">{String(index).padStart(2, "0")}</span>
      <Icon className="h-6 w-6 text-spectra-orange" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-spectra-light">{description}</p>
    </Card>
  );
}
