import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { siteMetadata } from "@/lib/seo";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollDepthTracker from "@/components/layout/ScrollDepthTracker";
import { LocaleProvider } from "@/components/providers/LocaleProvider";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black font-sans text-spectra-white antialiased">
        <LocaleProvider>
          <SmoothScroll />
          <ScrollDepthTracker />
          <ScrollProgress />
          <SiteHeader />
          <div className="relative overflow-x-clip">{children}</div>
          <SiteFooter />
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}

