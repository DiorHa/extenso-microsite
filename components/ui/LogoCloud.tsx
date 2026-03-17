"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type LogoCloudProps = {
  className?: string;
};

export default function LogoCloud({ className }: LogoCloudProps) {
  return (
    <section className={className} aria-labelledby="about-partners-title">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-xs uppercase tracking-[0.16em] text-spectra-light">Partnership Context</p>
        <h3 id="about-partners-title" className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          About the Partners
        </h3>
      </motion.div>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="border-l border-white/12 pl-5"
        >
          <div className="relative h-[46px] w-[180px]">
            <Image
              src="/brand/Logo_white.svg"
              alt="Spectra"
              fill
              priority={false}
              className="object-contain object-left"
            />
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-zinc-500">Delivery Partner</p>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Spectra is a digital operations and technology services provider supporting European PropTech and real
            estate companies with dedicated operational teams. Through multilingual specialists with backgrounds in
            accounting, digitalization, and ERP data management, Spectra supports structured onboarding and operational
            delivery for real estate platforms.
          </p>
          <a href="#cta" className="focus-ring mt-4 inline-flex text-sm font-medium text-spectra-orange transition hover:text-[#ff6a3d]">
            Talk to Spectra
          </a>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="border-l border-white/12 pl-5"
        >
          <div className="relative h-[46px] w-[180px]">
            <Image
              src="/brand/Extenso_logo.webp"
              alt="eXtenso AG"
              fill
              priority={false}
              className="object-contain object-left"
            />
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-zinc-500">Implementation Partner</p>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            eXtenso AG is a Swiss digitalization and implementation partner specializing in ERP solutions for the real
            estate sector. The company supports property management firms in Switzerland with the implementation and
            onboarding of platforms such as RIMO, helping clients structure and manage real estate portfolios in modern
            digital environments.
          </p>
          <a href="#workflow" className="focus-ring mt-4 inline-flex text-sm font-medium text-spectra-orange transition hover:text-[#ff6a3d]">
            Explore the Workflow
          </a>
        </motion.article>
      </div>
    </section>
  );
}
