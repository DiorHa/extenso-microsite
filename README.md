# Spectra x eXtenso Microsite

Premium interactive storytelling microsite built with Next.js App Router for the use case: **Scaling Real Estate Data Management for Swiss Property Portfolios**.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Recharts (available for future chart variants)
- clsx + tailwind-merge
- Lenis smooth scroll
- Vercel Analytics

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy To Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repo into Vercel.
3. Framework preset: **Next.js** (auto-detected).
4. Deploy.

## Connect Custom Domain (`www.spectra.support`)

1. In Vercel project settings, go to **Domains**.
2. Add `www.spectra.support` (and optionally apex `spectra.support`).
3. Configure DNS records exactly as Vercel shows.
4. Confirm SSL is issued and domain is marked valid.
5. Update `lib/seo.ts` `siteUrl` if needed.

## Replace CTA Links And Metadata

- CTA links and labels: [`content/extenso-story.ts`](/C:/ExtensoMicroSite/content/extenso-story.ts)
- Navigation labels: [`content/navigation.ts`](/C:/ExtensoMicroSite/content/navigation.ts)
- SEO metadata and canonical URL: [`lib/seo.ts`](/C:/ExtensoMicroSite/lib/seo.ts)
- Structured data: [`app/page.tsx`](/C:/ExtensoMicroSite/app/page.tsx)

## Swap Branding Assets

- Brand assets directory: `public/brand`
- Active site branding uses PNG files from this folder.
- Update logo/symbol files in `public/brand` and references in [`content/branding.ts`](/C:/ExtensoMicroSite/content/branding.ts).

## Reuse For Future Pod Stories

1. Duplicate and update case content in [`content/extenso-story.ts`](/C:/ExtensoMicroSite/content/extenso-story.ts).
2. Replace metrics in [`content/metrics.ts`](/C:/ExtensoMicroSite/content/metrics.ts).
3. Keep section components reusable and data-driven in `components/sections`.
4. Repoint branding and metadata for the next partner page.

## Tracking Hooks

Implemented analytics event hooks:

- `hero_cta_explore`
- `hero_cta_book_call`
- `roi_calculator_used`
- `use_case_download_clicked`
- `footer_contact_clicked`
- `scroll_depth_reached`

See [`lib/analytics.ts`](/C:/ExtensoMicroSite/lib/analytics.ts).
