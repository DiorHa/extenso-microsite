import type { Metadata } from "next";

const title =
  "Spectra x eXtenso | Scaling Real Estate Data Operations for Swiss Property Portfolios";
const description =
  "Discover how Spectra helps eXtenso scale RIMO implementations with a dedicated multilingual data operations pod for Swiss real estate portfolios.";
const siteUrl = "https://www.spectra.support";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Spectra",
    type: "website",
    images: [
      {
        url: "/brand/symbol_orange.svg",
        width: 512,
        height: 512,
        alt: "Spectra symbol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/symbol_orange.svg"],
  },
};
