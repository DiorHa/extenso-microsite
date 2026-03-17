"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 h-1 origin-left bg-spectra-orange"
      style={{ width: "100%", scaleX: scrollYProgress }}
    />
  );
}
