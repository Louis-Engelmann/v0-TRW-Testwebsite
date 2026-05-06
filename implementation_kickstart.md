# Veltec Precision GmbH — Implementation Kickstart

> **Status**: Ready for Development  
> **Type**: Frontend-only prototype (no backend)  
> **Framework**: Next.js 15 (App Router), Tailwind CSS, Framer Motion

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technical Stack](#2-technical-stack)
3. [File Structure](#3-file-structure)
4. [Design System](#4-design-system)
5. [Responsive Breakpoints](#5-responsive-breakpoints)
6. [Section Specifications](#6-section-specifications)
7. [Navigation & Mobile Menu](#7-navigation--mobile-menu)
8. [Form Behavior](#8-form-behavior)
9. [Animations](#9-animations)
10. [Accessibility](#10-accessibility)
11. [SEO Structure](#11-seo-structure)
12. [Assets & Placeholders](#12-assets--placeholders)

---

## 1. Project Overview

### Business Context
Veltec Precision GmbH is a fictional German precision-turned parts manufacturer targeting automotive OEMs and Tier-1 suppliers. The website serves as a lead generation tool for RFQ (Request for Quote) submissions.

### Core Objective
Single-page, full-width landing page optimized for:
- Establishing credibility and trust
- Showcasing precision manufacturing capabilities
- Capturing inquiry leads via a quote request form

### Key Constraint
**Frontend-only prototype** — No backend, no API routes, no database, no environment variables. Form submissions are simulated (data stored in React state, success message displayed, no actual transmission).

---

## 2. Technical Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts) |
| Language | TypeScript |

### Dependencies to Install
```bash
pnpm add framer-motion lucide-react
```

---

## 3. File Structure

```
app/
├── layout.tsx              # Root layout with fonts, metadata, globals
├── page.tsx                # Main entry, imports all sections
├── globals.css             # Tailwind base + custom CSS variables

components/
├── layout/
│   ├── header.tsx          # Fixed header with navigation
│   ├── footer.tsx          # Footer with zones A, B, C
│   └── mobile-menu.tsx     # Slide-out mobile navigation
│
├── sections/
│   ├── hero.tsx            # Section 1: Hero with CTA
│   ├── trust-band.tsx      # Section 2: Client logos
│   ├── precision.tsx       # Section 3: Part showcase
│   ├── social-proof.tsx    # Section 4: Stats cards
│   ├── capabilities.tsx    # Section 5: Service cards
│   ├── process.tsx         # Section 6: 3-step process
│   ├── quote-form.tsx      # Section 7: Inquiry form
│   └── named-contact.tsx   # Section 8: Contact block
│
├── ui/                     # Existing shadcn components
│
└── shared/
    ├── section-wrapper.tsx # Reusable section container
    └── shaft-svg.tsx       # Hand-coded shaft illustration
```

### Rationale
- **Short, focused files** — Each section is its own component for maintainability
- **Clear separation** — Layout components vs. section components vs. shared utilities
- **Scalable structure** — Easy to add/remove sections without refactoring

---

## 4. Design System

### Color Palette (5 Colors Total)

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#141417` | Page background, dark surfaces |
| `--surface` | `#1C1C21` | Cards, panels, elevated surfaces |
| `--border` | `#2E2E38` | Dividers, borders, subtle lines |
| `--foreground` | `#F0F0F0` | Primary text, headings |
| `--muted` | `#A0A0A8` | Secondary text, captions |
| `--accent` | `#3B82F6` | CTAs, links, interactive elements (blue-500) |

### Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| H1 (Hero) | Inter | 700 | clamp(2.8rem, 5vw, 4rem) | clamp(2rem, 6vw, 2.8rem) |
| H2 (Section) | Inter | 600 | 2.25rem (text-4xl) | 1.875rem (text-3xl) |
| H3 (Card) | Inter | 600 | 1.25rem (text-xl) | 1.125rem (text-lg) |
| Body | Inter | 400 | 1rem (text-base) | 1rem (text-base) |
| Caption | Inter | 400 | 0.875rem (text-sm) | 0.875rem (text-sm) |
| Stat Number | Inter | 700 | clamp(2.2rem, 5vw, 3.8rem) | clamp(1.5rem, 4vw, 2.2rem) |

### Spacing Scale
- Section padding: `py-20 lg:py-28` (80px / 112px)
- Container max-width: `max-w-6xl` (1152px)
- Card gap: `gap-6` (24px)
- Component gap: `gap-4` (16px)

### Border Radius
- Cards/Panels: `rounded-xl` (12px)
- Buttons: `rounded-lg` (8px)
- Inputs: `rounded-lg` (8px)
- Small elements: `rounded-md` (6px)

### Shadows
- Cards: `shadow-lg shadow-black/20`
- Elevated panels: `shadow-xl shadow-black/30`

---

## 5. Responsive Breakpoints

| Breakpoint | Tailwind | Width | Layout Changes |
|------------|----------|-------|----------------|
| Mobile | default | < 640px | Single column, stacked layouts |
| Tablet | `sm:` | ≥ 640px | 2-column grids where appropriate |
| Tablet+ | `md:` | ≥ 768px | Desktop navigation visible |
| Desktop | `lg:` | ≥ 1024px | Full 3-column grids, side-by-side hero |
| Wide | `xl:` | ≥ 1280px | Max container width, optimal spacing |

### Key Responsive Behaviors

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Header | Burger menu | Burger menu | Full nav links |
| Hero | Stacked (text → image) | Stacked | 55%/45% side-by-side |
| Hero Stats | Stacked vertically | Inline with dividers | Inline with dividers |
| Trust Band | Horizontal scroll + fade | Horizontal scroll + fade | Grid or flex wrap |
| Precision | Stacked (image → specs) | Side-by-side | Side-by-side |
| Social Proof | 1-column cards | 2-column cards | 3-column cards |
| Capabilities | 1-column cards | 2-column cards | 3-column cards |
| Process | Stacked steps (no line) | Stacked steps | Horizontal with line |
| Quote Form | Full-width inputs | Full-width inputs | 2-column inputs |
| Footer | Stacked, centered | Stacked, centered | 3-zone horizontal |

---

## 6. Section Specifications

### Section 1: Hero

**Layout (Desktop)**
- Height: `min-h-[80vh]` — allows trust band visibility on 1080p
- Grid: `lg:grid-cols-[55%_45%]` with `gap-8`
- Left: Headline, subhead, CTA button, stats row
- Right: Placeholder hero image (industrial machinery)

**Layout (Mobile)**
- Stack: Text content first, image below
- Stats row: Stack vertically, remove dividers
- Image: Full-width with 16px horizontal margin

**Hero Stats**
- Three metrics: "25+ Years", "150+ OEM Clients", "±0.005 mm Tolerance"
- Desktop: Inline with 1px vertical dividers (`border-l border-border`)
- Mobile: Stacked, no dividers, centered

**CTA Button**
- Text: "Request a Part Quote →"
- Style: `bg-accent text-white hover:bg-accent/90`
- Behavior: Smooth scroll to Section 7 (quote form)

```tsx
onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
```

### Section 2: Trust Band

**Layout**
- Background: Slightly darker (`bg-background`) or same as page
- Desktop: Flex row with logos, `justify-center`, `gap-12`
- Mobile: Horizontal scroll (`overflow-x-auto`)

**Scroll Indicator (Mobile)**
- Fade-to-black gradient on left and right edges
- CSS: `mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent)`
- Or use pseudo-elements with gradient overlays

**Logos**
- 6 placeholder logos (gray rectangles or SVG placeholders)
- Size: `h-8` (32px height), auto width
- Grayscale filter: `filter grayscale opacity-60 hover:opacity-100`

### Section 3: Precision Part Showcase

**Layout**
- Desktop: 2-column grid — image left (40%), specs right (60%)
- Mobile: Stack — image above, specs below
- Container: `bg-surface rounded-xl p-8 lg:p-12`

**Left Column: Shaft SVG**
- Hand-coded SVG: Simplified cylinder with chamfered ends
- Size: `w-40` (160px) centered in column
- Color: Stroke in `#A0A0A8`, subtle gradient fill

**Right Column: Spec Table**
- Header: "Precision Turned Shaft" + "Sample Part Specification"
- Spec rows with dividers:
  ```
  Material        17-4 PH Stainless
  Diameter        Ø 18 mm ±0.003
  Length          124 mm ±0.01
  Surface Finish  Ra 0.4 µm
  Heat Treatment  H1025 Condition
  Quantity        8,000 pcs / year
  ```
- Divider: `border-b border-border/30` (30% opacity)

### Section 4: Social Proof / Stats

**Layout**
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: 1-column stack

**Cards (3 total)**
- Background: `bg-surface`
- Padding: `p-6`
- Content:
  1. "1.2M+" — "Parts delivered annually"
  2. "99.7%" — "On-time delivery rate"
  3. "ISO 9001" — "Certified quality system"

**Typography**
- Stat number: Large, bold (`text-4xl font-bold text-foreground`)
- Label: Muted (`text-sm text-muted`)

### Section 5: Capabilities

**Layout**
- Same as Section 4: 3-col → 2-col → 1-col

**Cards (3 total)**
- Icon + Title + Description
- Icons: Lucide icons (e.g., `Cog`, `Gauge`, `Shield`)
- Content:
  1. CNC Turning — "Multi-axis precision turning..."
  2. Tight Tolerances — "Achieving ±0.003mm..."
  3. Material Expertise — "Stainless steel, titanium..."

### Section 6: Process

**Layout (Desktop)**
- 3 steps in a horizontal row
- Connecting line between steps (horizontal, centered)
- Large background numbers (01, 02, 03) positioned behind titles

**Layout (Mobile)**
- Steps stacked vertically
- No connecting line
- Background numbers still visible but repositioned

**Steps**
1. "Submit Inquiry" — "Share your part specs..."
2. "Engineering Review" — "Our team evaluates..."
3. "Production & Delivery" — "Precision manufacturing..."

**Background Number Styling**
- Font: `text-8xl font-bold text-border/20`
- Position: `absolute -top-4 -left-2` (adjust as needed)
- Z-index: Behind text content

### Section 7: Quote Request Form

**Container**
- Background: `bg-surface rounded-xl`
- Padding: Desktop `p-12`, Mobile `p-6`
- Max-width: `max-w-2xl mx-auto`

**Header**
- Headline: "Request a Quote"
- Subhead: "Submit your part specifications and receive a detailed quote within 48 business hours."

**Form Fields**

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Company Name | text | Yes | Min 2 characters |
| Contact Name | text | Yes | Min 2 characters |
| Email Address | email | Yes | Valid email format |
| Phone (optional) | tel | No | — |
| Part Description | textarea | Yes | Min 10 characters |
| Annual Quantity | number | Yes | Min 1 |
| File Attachment | file | No | Max 10MB, common formats |

**Form Layout**
- Desktop: 2-column grid for Company/Contact, Email/Phone
- Mobile: Single column, full-width inputs

**Input Styling**
- Background: `bg-background`
- Border: `border border-border`
- Focus: `focus:border-accent focus:ring-1 focus:ring-accent`
- Padding: `px-4 py-3`
- Placeholder: `text-muted`

**File Upload Zone**
- Dashed border: `border-2 border-dashed border-border`
- Text: "Drag and drop or click to attach a file"
- Icon: Upload icon (Lucide `Upload`)
- After selection: Show filename + remove button (X icon)
- Max size: 10MB (validated client-side)
- Accepted formats: `.pdf, .step, .stp, .igs, .dxf, .dwg, .png, .jpg`

**Submit Button**
- Text: "Submit Inquiry"
- Disabled state: `opacity-50 cursor-not-allowed` when form incomplete
- Loading state: Show spinner icon, text changes to "Submitting..."
- Style: `bg-accent text-white w-full py-3`

**Success State**
- Replace form content with success message (animated fade)
- Headline: "Thank You!"
- Body: "Your inquiry has been received. Our engineering team will review your specifications and respond within 48 business hours."
- Optional: "Submit Another Inquiry" link to reset form

**Error Display**
- Inline error messages below each invalid field
- Error color: `text-red-400`
- Error text: Small (`text-sm`)
- Examples:
  - "Please enter a valid email address"
  - "Company name must be at least 2 characters"
  - "Part description must be at least 10 characters"

### Section 8: Named Contact Block

**Layout**
- Centered content
- Photo placeholder (circular, `rounded-full w-20 h-20`)
- Name: "Thomas Richter"
- Title: "Head of Sales, DACH Region"
- Email: `mailto:` link
- Phone: `tel:` link (tappable on mobile)

**Styling**
- Background: Same as page or slight differentiation
- Text alignment: Center
- Spacing: Generous padding (`py-16`)

---

## 7. Navigation & Mobile Menu

### Header (Fixed)

**Desktop (≥768px)**
- Logo left: "VELTEC" text mark or placeholder
- Nav links center/right: Capabilities, Process, Contact
- CTA button right: "Get a Quote" (scrolls to form)

**Mobile (<768px)**
- Logo left
- Burger icon right (3-line hamburger, Lucide `Menu`)
- Tapping burger opens mobile menu

### Mobile Menu (Slide-out)

**Behavior**
- Slides in from right (`transform translateX`)
- Overlay: Dark semi-transparent backdrop
- Close: X button or tap outside

**Content**
- Full-height panel (`h-screen`)
- Background: `bg-surface`
- Nav links: Stacked vertically, large tap targets (`py-4`)
- Links: Capabilities, Process, Contact, Get a Quote
- Close icon: Top-right (Lucide `X`)

**Animation**
- Slide: `transition-transform duration-300`
- Backdrop: `transition-opacity duration-300`

---

## 8. Form Behavior

### State Management
```tsx
const [formData, setFormData] = useState({
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  partDescription: '',
  annualQuantity: '',
  file: null as File | null,
});
const [errors, setErrors] = useState<Record<string, string>>({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
```

### Validation Rules (On Submit Only)

| Field | Rule | Error Message |
|-------|------|---------------|
| companyName | length ≥ 2 | "Company name must be at least 2 characters" |
| contactName | length ≥ 2 | "Contact name must be at least 2 characters" |
| email | valid email regex | "Please enter a valid email address" |
| partDescription | length ≥ 10 | "Part description must be at least 10 characters" |
| annualQuantity | number ≥ 1 | "Annual quantity must be at least 1" |
| file (if present) | size ≤ 10MB | "File size must be less than 10MB" |

### Submit Flow
1. User clicks "Submit Inquiry"
2. Run all validations
3. If errors: Display inline errors, scroll to first error
4. If valid: Set `isSubmitting = true`, show spinner
5. Simulate delay: `await new Promise(r => setTimeout(r, 1500))`
6. Set `isSubmitted = true`, show success message
7. Console log form data (for debugging): `console.log('[v0] Form submitted:', formData)`

### File Upload Behavior
1. Click zone → Opens native file picker
2. Drag & drop → Accepts file
3. After selection: Show "filename.pdf" + X button
4. Click X → Remove file, reset to empty state
5. Max 10MB enforced on selection (not on submit)

---

## 9. Animations

### Library
Framer Motion for all scroll-triggered and interaction animations.

### Global Animation Settings
```tsx
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

### Section-Specific Animations

| Section | Animation | Trigger |
|---------|-----------|---------|
| Hero | Fade in + slide up | Page load |
| Trust Band | Fade in | Viewport entry (50%) |
| Precision | Fade in left/right | Viewport entry (30%) |
| Social Proof | Stagger cards (0.1s) | Viewport entry (20%) |
| Capabilities | Stagger cards (0.1s) | Viewport entry (20%) |
| Process | Stagger steps (0.15s) | Viewport entry (30%) |
| Quote Form | Fade in | Viewport entry (30%) |

### Viewport Detection
```tsx
import { useInView } from 'framer-motion';

const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-20% 0px' });
```

### Hover States
- Buttons: Scale 1.02, slight lift shadow
- Cards: Subtle border highlight or scale 1.01
- Links: Color transition to accent

---

## 10. Accessibility

### WCAG AA Compliance Target

**Color Contrast**
- `#F0F0F0` on `#141417` = 13.5:1 ratio ✓
- `#A0A0A8` on `#141417` = 6.8:1 ratio ✓
- `#3B82F6` on `#141417` = 5.2:1 ratio ✓

**Keyboard Navigation**
- All interactive elements focusable via Tab
- Focus indicators: `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`
- Enter/Space activates buttons and links
- Escape closes mobile menu

**Screen Readers**
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Section landmarks with `aria-labelledby`
- Form labels: All inputs have associated `<label>` elements
- Button states: `aria-disabled`, `aria-busy` for loading
- Mobile menu: `aria-expanded`, `aria-controls`

**Alt Text for Images**
| Image | Alt Text |
|-------|----------|
| Hero image | "Precision CNC machining center producing automotive components" |
| Client logos | "Client logo placeholder" (or specific: "BMW logo", etc.) |
| Shaft SVG | "Technical illustration of precision-turned shaft with chamfered ends" |
| Contact photo | "Thomas Richter, Head of Sales at Veltec Precision" |

**File Upload Accessibility**
- Label: "Attach technical drawing or specifications (optional)"
- ARIA: `aria-describedby` linking to format/size hints
- After upload: Announce filename to screen readers

---

## 11. SEO Structure

### Metadata (layout.tsx)
```tsx
export const metadata: Metadata = {
  title: 'Veltec Precision GmbH | Precision Turned Parts for Automotive',
  description: 'German manufacturer of precision-turned components for automotive OEMs and Tier-1 suppliers. CNC machining with ±0.003mm tolerances. Request a quote today.',
  keywords: ['precision turning', 'CNC machining', 'automotive parts', 'German manufacturing', 'ISO 9001'],
  openGraph: {
    title: 'Veltec Precision GmbH | Precision Turned Parts',
    description: 'German manufacturer of precision-turned components for automotive OEMs.',
    type: 'website',
    locale: 'en_US',
  },
};
```

### Semantic Structure
```html
<html>
  <body>
    <header> <!-- Fixed navigation --> </header>
    <main>
      <section id="hero" aria-labelledby="hero-heading"> ... </section>
      <section id="trust" aria-label="Trusted by leading manufacturers"> ... </section>
      <section id="precision" aria-labelledby="precision-heading"> ... </section>
      <section id="social-proof" aria-labelledby="stats-heading"> ... </section>
      <section id="capabilities" aria-labelledby="capabilities-heading"> ... </section>
      <section id="process" aria-labelledby="process-heading"> ... </section>
      <section id="quote-form" aria-labelledby="quote-heading"> ... </section>
      <section id="contact" aria-labelledby="contact-heading"> ... </section>
    </main>
    <footer> ... </footer>
  </body>
</html>
```

### Heading Hierarchy
- H1: Hero headline (1 per page)
- H2: Section headings
- H3: Card titles, subsections

---

## 12. Assets & Placeholders

### Images (Placeholder)
All images use placeholder URLs or solid color blocks until real assets are provided.

| Image | Placeholder Strategy |
|-------|---------------------|
| Hero image | Gray gradient block or placeholder service URL |
| Client logos | Gray rounded rectangles (6 total) |
| Contact photo | Gray circle with user icon |

### SVG: Shaft Illustration (Hand-coded)
Simple cylinder with chamfered/rounded ends:
```tsx
<svg viewBox="0 0 200 60" className="w-40 h-auto">
  {/* Main cylinder body */}
  <rect x="20" y="15" width="160" height="30" rx="4" fill="#2E2E38" stroke="#A0A0A8" strokeWidth="1" />
  {/* Left chamfer */}
  <path d="M20 15 L10 25 L10 35 L20 45" fill="none" stroke="#A0A0A8" strokeWidth="1" />
  {/* Right chamfer */}
  <path d="M180 15 L190 25 L190 35 L180 45" fill="none" stroke="#A0A0A8" strokeWidth="1" />
  {/* Center line (technical drawing style) */}
  <line x1="0" y1="30" x2="200" y2="30" stroke="#A0A0A8" strokeWidth="0.5" strokeDasharray="4 2" />
</svg>
```

### Icons (Lucide React)
- Menu / X — Mobile navigation
- Upload — File upload zone
- Check / CheckCircle — Success state
- AlertCircle — Error state
- Phone, Mail, Linkedin — Footer/contact
- Cog, Gauge, Shield — Capability cards
- ArrowRight — CTA buttons
- Loader2 — Loading spinner (animated)

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Install dependencies (`framer-motion`, `lucide-react`)
- [ ] Update `globals.css` with CSS variables
- [ ] Update `layout.tsx` with fonts and metadata

### Phase 2: Layout Components
- [ ] Create `header.tsx` with responsive nav
- [ ] Create `mobile-menu.tsx` with slide-out animation
- [ ] Create `footer.tsx` with 3 zones
- [ ] Create `section-wrapper.tsx` for consistent padding

### Phase 3: Section Components
- [ ] Hero section with CTA scroll behavior
- [ ] Trust band with horizontal scroll + fade
- [ ] Precision showcase with shaft SVG
- [ ] Social proof stats cards
- [ ] Capabilities cards
- [ ] Process steps with connecting line
- [ ] Quote form with validation
- [ ] Named contact block

### Phase 4: Animations
- [ ] Add Framer Motion viewport animations
- [ ] Implement stagger effects
- [ ] Add hover states

### Phase 5: Polish
- [ ] Verify all responsive breakpoints
- [ ] Test keyboard navigation
- [ ] Verify color contrast
- [ ] Add all alt text
- [ ] Test form validation edge cases

---

## Notes for Development

1. **Keep files short** — Each component should be focused and under 150 lines where possible
2. **Mobile-first** — Write default styles for mobile, use `md:` and `lg:` for larger screens
3. **No backend logic** — All form "submission" is simulated with `setTimeout`
4. **Placeholder assets** — Use gray blocks or placeholder URLs; real images added later
5. **Console logging** — Use `console.log('[v0] ...')` for debugging during development

---

*Document prepared for implementation kickstart. Ready to proceed when approved.*
