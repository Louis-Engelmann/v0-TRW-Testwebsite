# IMPLEMENTATION_PREMIUM_AESTHETICS.md

This document outlines the "Premium Polish" phase to elevate the TRW Test website's design to an industry-leading, high-end engineering aesthetic.

## 1. Depth & Glassmorphism
**Goal**: Create a multi-layered, sophisticated UI that feels like a high-end dashboard.
- **Action**: Update `bg-surface` utility or component classes.
- **Specs**: 
    - Change background to `rgba(surface, 0.8)`.
    - Add `backdrop-blur-md`.
    - Add a subtle inner border: `border border-white/5`.
    - Refine shadows: Use `shadow-[0_8px_30px_rgb(0,0,0,0.12)]` for a softer, deeper look.
- **Locations**: `precision.tsx`, `social-proof.tsx`, `capabilities.tsx`, `process.tsx`, `quote-form.tsx`.

## 2. Technical Typography
**Goal**: Reinforce the "Precision Engineering" brand through font choice.
- **Action**: 
    - Introduce a technical monospace font (e.g., *JetBrains Mono* or *IBM Plex Mono*) for all numerical data and specifications.
    - Refine headings with `tracking-tight` and `font-bold`.
- **Locations**: `precision.tsx` (specs list), `social-proof.tsx` (numbers), `hero.tsx` (stats).

## 3. Animated Technical Drawing
**Goal**: Add a "wow" factor to the main product illustration.
- **Action**: 
    - Update `ShaftSvg` to use Framer Motion path animations.
    - Animate the technical dimension lines so they "draw" themselves when the section enters the viewport.
- **Locations**: `components/shared/shaft-svg.tsx`, `precision.tsx`.

## 4. Visual Assets & Backgrounds
**Goal**: Replace static/boring backgrounds with dynamic industrial imagery.
- **Action**: 
    - **Hero**: Implement a desaturated, high-quality video background (or a high-end CSS mesh gradient if video is unavailable).
    - **Icons**: Add a subtle "glow" or "outer pulse" to the feature icons in the `Capabilities` section.
- **Locations**: `hero.tsx`, `capabilities.tsx`.

## 5. Interactive "Tilt" Effects
**Goal**: Make the interface feel alive and reactive.
- **Action**: 
    - Add a 3D tilt effect to the cards in the `Capabilities` and `Process` sections using Framer Motion's `useMotionValue` and `useTransform`.
- **Locations**: `capabilities.tsx`, `process.tsx`.

## 6. Branding & Trust (Certifications)
**Goal**: Establish immediate authority for OEM/Tier-1 suppliers.
- **Action**: 
    - Add a "Trust & Compliance" row featuring stylized badges for ISO 9001, REACH, and RoHS.
- **Locations**: `named-contact.tsx` (footer-adjacent) or as a sub-section of the `TrustBand`.

---

## Checklist

- [ ] **Global UI Refresh**
    - [ ] Apply Glassmorphism to all `bg-surface` containers.
    - [ ] Standardize inner borders and refined shadows.
- [ ] **Typography Update**
    - [ ] Set up Monospace font for data points.
    - [ ] Adjust heading weights and tracking.
- [ ] **SVG Animation**
    - [ ] Add `motion.path` to `ShaftSvg`.
    - [ ] Sync animation with scroll-in view.
- [ ] **Interactive Refinements**
    - [ ] Implement Tilt effect on Capabilities cards.
    - [ ] Add icon glow/hover pulses.
- [ ] **Branding Row**
    - [ ] Create stylized certification badges.
    - [ ] Integrate into the layout.

## Verification Plan
- **Aesthetic Review**: Compare screenshots of the current vs. new design to ensure "Premium" feel.
- **Performance Check**: Ensure `backdrop-blur` and SVG animations don't drop frame rates on mobile.
- **Responsive Check**: Ensure the tilt effects are disabled or simplified for touch devices.
