"use client";

import Pill from "@/components/ui/Pill";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-5xl text-center" : "w-full"}>
      {eyebrow ? <Pill>{eyebrow}</Pill> : null}
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-relaxed text-spectra-light md:text-lg">{description}</p> : null}
    </div>
  );
}
