import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { siteMetadata } from "@/lib/seo";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollDepthTracker from "@/components/layout/ScrollDepthTracker";
import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black font-sans text-spectra-white antialiased">
        <SmoothScroll />
        <ScrollDepthTracker />
        <ScrollProgress />
        <SiteHeader />
        <FloatingCTA />
        <div className="relative overflow-x-clip">{children}</div>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
