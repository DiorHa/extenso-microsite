import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Card from "@/components/ui/Card";

type MetricCardProps = {
  label: string;
  value: number;
  description: string;
  suffix?: string;
  prefix?: string;
};

export default function MetricCard({
  label,
  value,
  description,
  suffix,
  prefix,
}: MetricCardProps) {
  return (
    <Card className="h-full">
      <p className="text-sm uppercase tracking-[0.16em] text-spectra-light">{label}</p>
      <p className="mt-4 text-4xl font-semibold text-white md:text-5xl">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
      </p>
      <p className="mt-4 text-sm leading-relaxed text-spectra-light">{description}</p>
    </Card>
  );
}
