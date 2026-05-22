# Website Metadata & Social Media Preview Implementation Plan

Implementation plan to configure complete, robust metadata for **Veltec Precision GmbH** (turned parts manufacturer for automotive OEMs) including social media previews, standardizing favicons, adding automated sitemaps/robots configurations, and generating/configuring a snapshot of the website.

## User Review Required

> [!IMPORTANT]
> **Preferred Production URL**: Next.js metadata requires a `metadataBase` to construct absolute OpenGraph and Twitter image URLs. We need to define this URL (e.g., `https://veltec-precision.de` or a staging Vercel URL). We will default to a placeholder like `https://veltec-precision.de` if not specified.

> [!NOTE]
> **Website Snapshot Method**:
> - We propose generating a premium, high-resolution OpenGraph preview image (1200x630 px) using our image generation capability. This card will display a stylized device mockup of the Veltec landing page alongside premium CNC machined automotive components and Veltec branding.
> - Alternatively, we can run a script to programmatically screenshot the local development server once run.
> - We recommend the generated premium card because standard raw screenshots of landing pages often look cluttered or poorly formatted when shrunk into OG card previews.

## Open Questions

> [!WARNING]
> Do you have a specific LinkedIn page, corporate Twitter/X account, or phone/contact details you would like included in the JSON-LD structured data and footer links?

---

## Proposed Changes

### Configuration & Base Metadata

We will upgrade the root Next.js layout metadata, adding standard social parameters, robots guidelines, and canonical tags.

- [x] **[MODIFY]** [layout.tsx](file:///Users/jaybulker/Documents/TRW%20Coding/v0-TRW-Testwebsite-neu/app/layout.tsx)
  - Define `metadataBase` to ensure absolute URLs are resolved correctly.
  - Add complete OpenGraph metadata (`og:title`, `og:description`, `og:siteName`, `og:url`, `og:type`, `og:images`, `locale`).
  - Add Twitter Cards metadata (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:images`).
  - Add additional standard metadata (`robots`, `themeColor`).
  - Integrate JSON-LD structured data block for `Organization` / `LocalBusiness` directly in the head or layout.

---

### SEO & Web Crawling Assets

We will add Next.js special files to handle search engine indexing.

- [x] **[NEW]** [sitemap.ts](file:///Users/jaybulker/Documents/TRW%20Coding/v0-TRW-Testwebsite-neu/app/sitemap.ts)
  - Generate a dynamic XML sitemap listing the main paths.

- [x] **[NEW]** [robots.ts](file:///Users/jaybulker/Documents/TRW%20Coding/v0-TRW-Testwebsite-neu/app/robots.ts)
  - Set up standard `robots.txt` configuration mapping rules and pointing to the sitemap.

---

### Asset Generation

We will generate and place the OpenGraph/Twitter social share image and register it in the public assets directory.

- [x] **[NEW]** [og-image.png](file:///Users/jaybulker/Documents/TRW%20Coding/v0-TRW-Testwebsite-neu/public/og-image.png)
  - The high-resolution OpenGraph image (1200x630 pixels) featuring Veltec Precision branding.

- [x] **[MODIFY]** [footer.tsx](file:///Users/jaybulker/Documents/TRW%20Coding/v0-TRW-Testwebsite-neu/components/layout/footer.tsx)
  - Connect any updated social media links. (Skipped as per user preference)

---

## Verification Plan

### Automated Tests
- Build verification via `npm run build` to ensure no errors with Next.js page routing or static generation.
- Validate generated HTML tags locally using a development build inspection.

### Manual Verification
- Launch local development server (`npm run dev`) and inspect DOM tags via devtools.
- Verify structured schema validity using the schema markup generator rules.
