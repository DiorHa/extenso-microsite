"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const MARKS = [25, 50, 75, 100];

export default function ScrollDepthTracker() {
  const fired = useRef<number[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) return;

      const depth = Math.round((window.scrollY / max) * 100);

      MARKS.forEach(mark => {
        if (depth >= mark && !fired.current.includes(mark)) {
          fired.current.push(mark);
          trackEvent("scroll_depth_reached", { depth: mark });
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
