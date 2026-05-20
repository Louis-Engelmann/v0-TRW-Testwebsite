# Phase 1 Hero Credibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve above-the-fold credibility by tightening hero messaging, replacing risky stats with defensible proof points, and aligning primary CTA between hero and header.

**Architecture:** Keep the existing section layout and scroll-to-form behavior. Update only copy/CTAs and the hero right-side visual placeholder so it reads professional even before real assets are added.

**Tech Stack:** Next.js App Router, React, Tailwind v4, Framer Motion, lucide-react.

---

## File structure (Phase 1 scope)

**Modify:**
- `components/sections/hero.tsx` — hero headline/subhead, CTA label, proof points row, hero visual placeholder styling/accessibility.
- `components/layout/header.tsx` — primary CTA label to match hero.

**No changes:**
- `app/page.tsx` section ordering
- `components/sections/trust-band.tsx` placeholders
- `public/*` assets

---

### Task 1: Update hero messaging + proof points (no over-claims)

**Files:**
- Modify: `components/sections/hero.tsx`

- [ ] **Step 1: Replace the H1 and subhead copy**
  - H1: `Precision‑turned components for automotive supply chains`
  - Subhead: `CNC turning with an inspection‑first process—built for repeatability, documentation, and stable tolerances across production runs.`

- [ ] **Step 2: Replace the `stats` row with 3 defensible proof points**
  - `ISO 9001:2015 Quality Management`
  - `In‑process + final inspection`
  - `Supplier‑ready documentation`

- [ ] **Step 3: Update the hero CTA label**
  - Button label becomes: `Talk to Sales Engineering`
  - Keep existing `scrollToForm()` behavior.

- [ ] **Step 4: Replace the hero image placeholder copy**
  - Remove “Technical Image Area” text.
  - Keep the panel, but make it look like a neutral inspection/machining “visual plate” (abstract lines/grid/measure marks).
  - If it’s decorative, ensure it’s not announced to screen readers (avoid `role="img"` / `aria-label` on purely decorative wrappers).

- [ ] **Step 5: Run lint/build**
  - Run: `npm run lint`
  - Run: `npm run build`
  - Expected: both succeed with exit code 0

---

### Task 2: Align header CTA label with hero

**Files:**
- Modify: `components/layout/header.tsx`

- [ ] **Step 1: Update desktop nav CTA label**
  - Button label becomes: `Talk to Sales Engineering`
  - Keep existing `scrollToForm()` behavior.

- [ ] **Step 2: Quick smoke check**
  - Run: `npm run dev`
  - Manually verify:
    - Header CTA scrolls to quote form
    - Hero CTA scrolls to quote form

