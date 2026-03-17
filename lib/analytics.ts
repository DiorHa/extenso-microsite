"use client";

import { track } from "@vercel/analytics";

export type TrackableEvent =
  | "hero_cta_explore"
  | "hero_cta_book_call"
  | "roi_calculator_used"
  | "use_case_download_clicked"
  | "footer_contact_clicked"
  | "scroll_depth_reached";

export function trackEvent(name: TrackableEvent, payload?: Record<string, string | number>) {
  track(name, payload);
}
