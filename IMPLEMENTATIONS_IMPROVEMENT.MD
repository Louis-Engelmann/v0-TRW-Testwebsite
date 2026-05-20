# Frontend Credibility Improvements — Implementation Plan

> **Scope**: Frontend-only. No backend work. This plan is written to be executed incrementally with checklists so progress is trackable.

**Goal:** Improve perceived credibility and clarity of the site for B2B visitors (engineering/procurement), increasing trust and making it obvious what you do, what proof you have, and how to contact you.

**Architecture:** Keep the current single-page layout in `app/page.tsx`, but evolve section content/ordering and replace placeholders with real, verifiable proof points. Reduce unnecessary client-side work (motion) and improve accessibility.

**Tech stack:** Next.js App Router (`next@16`), React (`react@19`), Tailwind v4 + CSS variables (`styles/globals.css`), Framer Motion, Radix UI primitives.

---

## Current map (where changes will land)

**Page composition**
- `app/page.tsx` (section ordering)

**Sections**
- `components/sections/hero.tsx`
- `components/sections/trust-band.tsx`
- `components/sections/precision.tsx`
- `components/sections/social-proof.tsx`
- `components/sections/capabilities.tsx`
- `components/sections/process.tsx`
- `components/sections/quote-form.tsx`
- `components/sections/named-contact.tsx`

**Layout**
- `components/layout/header.tsx`
- `components/layout/mobile-menu.tsx`
- `components/layout/footer.tsx`

**Styling / tokens**
- `styles/globals.css`
- `styles/*` (if additional global rules are needed later)

**Assets**
- `public/*` (hero image/video poster, certifications PDFs, client logos if allowed, contact headshot)

---

## Definition of Done (frontend)

- **Message clarity**: Within 10 seconds, a first-time visitor can answer:
  - what you make, for whom, typical tolerance/materials, typical volumes, and how to engage.
- **Trust signals**: Placeholders removed; claims are either linked (cert PDFs, standards) or clearly framed (e.g., “typical tolerance” vs “guaranteed for all parts”).
- **Navigation**: Header links land at correct sections with no “hidden under fixed header” issues; mobile menu is usable and accessible.
- **Accessibility**: Keyboard navigation works across header/menu and quote form; focus visible is consistent; reduced motion is respected.
- **Performance**: Below-the-fold sections don’t force unnecessary client JS; images are optimized and correctly sized.

---

## Execution strategy (recommended)

- **Work in small PR-sized chunks** (even if you don’t open PRs): one logical “task” at a time.
- **Order of operations**: assets & proof points first → messaging & structure → polish (a11y, motion, performance).

---

## Phase 0 — Asset inventory & permissions (P0)

### Task 0.1: Inventory what you can legally show

**Files:** none (decision work)

- [ ] **Hero imagery**: confirm you have (or can create) 1 hero photo OR 1 short loop video (silent) + poster image.
- [ ] **Client logos**: confirm which logos may be displayed publicly (written permission or already public).
- [ ] **Certifications**: gather PDFs for ISO 9001 etc. (or decide to remove/link-less mentions).
- [ ] **Contact**: get a real headshot for the named contact (or decide to remove the portrait area).

**Deliverables**
- [ ] Place selected assets into `public/` with final filenames (decide naming convention before adding).
- [ ] Record any constraints (e.g., “no OEM logos allowed”) so later tasks don’t assume them.

---

## Phase 1 — Above-the-fold credibility & messaging (P0)

### Task 1.1: Finalize positioning + 3 proof points

**Primary files later:** `components/sections/hero.tsx`

- [ ] Write a 1–2 sentence positioning statement that specifies:
  - **what** (precision-turned parts / CNC turning)
  - **for whom** (OEM / Tier-1 / region)
  - **differentiator** (tolerances, metrology, materials, responsiveness)
- [ ] Choose **3 proof points** that are defensible (examples):
  - certifications (with linkable proof)
  - manufacturing capabilities (machines, metrology)
  - delivery / volume metrics (only if real)

### Task 1.2: Replace hero placeholder with real visual

**Primary files later:** `components/sections/hero.tsx`, `public/*`

- [ ] Replace “Technical Image Area” placeholder with a real image/video treatment.
- [ ] Ensure the visual supports the claim (actual machining/inspection, not generic stock that reads “SaaS”).
- [ ] Ensure accessibility: proper alt text (or `aria-hidden` if purely decorative).

### Task 1.3: CTA alignment for credibility-first goal

**Primary files later:** `components/layout/header.tsx`, `components/sections/hero.tsx`

- [ ] Decide primary CTA label + intent:
  - “Request a Quote” (transactional) vs “Talk to Sales Engineering” (credibility-first, lighter ask)
- [ ] Ensure CTA appears consistently (hero + header) and feels coherent with the rest of the story.

---

## Phase 2 — Trust signals that are verifiable (P0 → P1)

### Task 2.1: Trust band: make it real or remove it

**Primary files later:** `components/sections/trust-band.tsx`, `public/*`

- [ ] If client logos are allowed:
  - [ ] Replace placeholders with real logos
  - [ ] Normalize logo treatment (monochrome vs color; size consistency)
- [ ] If client logos are NOT allowed:
  - [ ] Remove the logo row and replace with alternative trust elements (e.g., “industries served”, “audited suppliers”, certifications with links).

### Task 2.2: Certifications: add issuer/scope + link to PDFs

**Primary files later:** `components/sections/trust-band.tsx` (or new section), `public/*`, `components/layout/footer.tsx`

- [ ] For each certification listed, add:
  - issuer (e.g., TÜV / DQS / etc.)
  - scope (site / process scope)
  - link to PDF certificate in `public/`
- [ ] Ensure footer legal links aren’t dead-ends long-term (even placeholders should be clearly “coming soon” if kept).

### Task 2.3: Social proof numbers: validate, soften, or replace

**Primary files later:** `components/sections/social-proof.tsx`

- [ ] Confirm each metric is real and current.
- [ ] If not provable, replace with less risky credibility signals:
  - measured capabilities (inspection equipment, materials)
  - process/quality statements with evidence
- [ ] Avoid “too perfect” stats if not audited; credibility can drop fast.

---

## Phase 3 — Narrative structure & scannability (P1)

### Task 3.1: Reorder homepage sections for credibility

**Primary files later:** `app/page.tsx`

- [ ] Reorder to a credibility-first flow (starting point):
  - Hero
  - Certifications/quality (TrustBand evolved)
  - Capabilities
  - Example part/spec (Precision)
  - Process
  - Social proof (if valid)
  - Quote/contact

### Task 3.2: Add “Industries & parts” section (self-qualification)

**Primary files later:** new `components/sections/industries-parts.tsx` (or similar), `app/page.tsx`

- [ ] Define 6–9 tiles (examples):
  - driveline, fuel systems, sensors, EV thermal, fasteners, precision shafts
- [ ] For each tile: 1 sentence + 1 example constraint (material/tolerance/volume range).
- [ ] Keep it skimmable; avoid marketing fluff.

### Task 3.3: Add 1–2 case study cards (even anonymized)

**Primary files later:** new `components/sections/case-studies.tsx` (or similar), `app/page.tsx`

- [ ] Each card template:
  - Problem context
  - Key constraints (tolerance/material/volume/PPAP-like requirement)
  - What you delivered
  - Outcome metric (only if true)
- [ ] If anonymized: clearly state “Anonymized OEM program”.

### Task 3.4: Anchor navigation consistency check

**Primary files later:** `components/layout/header.tsx`, `components/layout/mobile-menu.tsx`, all sections with `id=...`

- [ ] Verify every header link targets an existing section `id`.
- [ ] Ensure fixed header doesn’t obscure section headings when using anchor links.
- [ ] Consider adding a “Back to top” link near footer for long-scroll UX.

---

## Phase 4 — Visual polish & consistency (P2)

### Task 4.1: Reduce “template feel” from overused glass cards

**Primary files later:** multiple `components/sections/*.tsx`

- [ ] Decide where glass/blur is used intentionally (e.g., hero + 1 feature), and simplify elsewhere.
- [ ] Normalize shadows/borders across all cards.
- [ ] Ensure consistent border colors in light/dark modes.

### Task 4.2: Typography and vertical rhythm pass

**Primary files later:** `styles/globals.css`, sections, layout

- [ ] Harmonize headings:
  - h1, section h2, card h3 sizes and spacing
- [ ] Ensure body text line-length and leading are comfortable (especially on desktop).
- [ ] Confirm `bg-surface` and related tokens are defined and match your intended palette.

---

## Phase 5 — Accessibility & motion (P2)

### Task 5.1: Reduced motion support

**Primary files later:** all `components/sections/*` using Framer Motion

- [ ] Add a reduced-motion strategy:
  - Disable or simplify animations when user prefers reduced motion.
- [ ] Ensure content is fully readable and doesn’t rely on animation for meaning.

### Task 5.2: Keyboard + focus audit (site-wide)

**Primary files later:** `components/layout/header.tsx`, `components/layout/mobile-menu.tsx`, `components/sections/quote-form.tsx`

- [ ] Tab through the site: header → menu → CTA → form inputs → upload dropzone.
- [ ] Confirm visible focus is obvious on all interactive elements.
- [ ] Confirm the upload dropzone works with keyboard (Enter/Space) and announces status changes appropriately.

### Task 5.3: Semantics: replace “role=img” where it matters

**Primary files later:** `hero.tsx`, `trust-band.tsx`, `named-contact.tsx`

- [ ] For real images/logos, prefer actual images with appropriate alt text.
- [ ] Keep decorative visuals `aria-hidden` to reduce screen reader noise.

---

## Phase 6 — Performance & technical hygiene (P3)

### Task 6.1: Reduce client-side JS on first load

**Primary files later:** sections that are currently `'use client'`

- [ ] Identify which sections truly need client-only rendering.
- [ ] Keep motion where it adds value (hero + maybe one other), reduce elsewhere.

### Task 6.2: Image optimization strategy

**Primary files later:** `hero.tsx`, any section with images, `public/*`

- [ ] Ensure hero media is sized appropriately and loads quickly.
- [ ] Ensure below-the-fold images lazy-load and do not block rendering.

### Task 6.3: Basic on-page performance checks (manual)

**Files:** none (verification work)

- [ ] Lighthouse / Web Vitals quick check (mobile + desktop).
- [ ] Confirm no layout shift from late-loading hero media.

---

## Progress tracker (roll-up)

- [ ] **Phase 0**: Assets & permissions locked
- [ ] **Phase 1**: Hero messaging + real hero visual shipped
- [ ] **Phase 2**: Trust signals verifiable (logos/certs/stats)
- [ ] **Phase 3**: Narrative structure improved (industries + case studies + anchors)
- [ ] **Phase 4**: Visual polish pass complete
- [ ] **Phase 5**: Accessibility + reduced motion complete
- [ ] **Phase 6**: Performance pass complete

---

## Suggested commit slicing (when you start implementing)

Even if you don’t open PRs, these slices keep changes reviewable:

- [ ] Commit 1: Add real assets to `public/` + wire in hero visual
- [ ] Commit 2: Trust band (logos or alternative trust) + certification links
- [ ] Commit 3: Reorder sections + anchor fixes
- [ ] Commit 4: Add industries/parts section
- [ ] Commit 5: Add case studies section
- [ ] Commit 6: Typography + glass reduction polish
- [ ] Commit 7: Reduced motion + a11y fixes (menu + form)
- [ ] Commit 8: Performance cleanup (reduce client sections, image optimization)

