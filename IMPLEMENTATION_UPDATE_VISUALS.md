# IMPLEMENTATION_UPDATE_VISUALS.md

This document outlines the plan to address visual issues and functional bugs in the TRW Test website.

## Problem Description
1.  **Precision Turned Shaft Section**: Text is cut off on the right, and there is insufficient spacing to the border.
2.  **Vertical Spacing**: Excessive "void" (padding) between various website components.
3.  **Inquiry Form**: The submit button is currently non-functional or not allowing submission.

## Proposed Changes

### 1. Precision Section Visual Fixes
- **Location**: `components/sections/precision.tsx`
- **Action**: 
    - Increase right-side padding/margin for the content.
    - Ensure the grid layout and container widths prevent text overflow or cutting.
    - Specifically check the `bg-surface` card padding and the `max-w-6xl` container.

### 2. Vertical Spacing Reduction
- **Location**: Multiple section files (e.g., `hero.tsx`, `trust-band.tsx`, `precision.tsx`, `social-proof.tsx`, `capabilities.tsx`, `process.tsx`, `quote-form.tsx`, `named-contact.tsx`).
- **Action**: 
    - Reduce the `py-20 lg:py-28` classes to a smaller value (e.g., `py-12 lg:py-16`) to tighten the layout.

### 3. Inquiry Form Functionality Fix
- **Location**: `components/sections/quote-form.tsx`
- **Action**:
    - Investigate the `isFormValid` condition which currently disables the submit button.
    - Ensure the button remains enabled so users can see validation errors upon clicking, or adjust the validation to be less restrictive if appropriate.
    - Verify the `handleSubmit` function and ensure it correctly processes the form data.

## Checklist

- [ ] **Precision Section Fixes**
    - [ ] Inspect and adjust padding in `precision.tsx`.
    - [ ] Verify text is no longer cut off on various screen sizes.
- [ ] **Vertical Spacing Optimization**
    - [ ] Update `py-` classes in all major section components.
    - [ ] Review overall page flow and adjust if sections feel too cramped.
- [ ] **Form Submission Fix**
    - [ ] Debug the `isFormValid` state in `quote-form.tsx`.
    - [ ] Enable the submit button even when invalid (and show errors) or fix the logic preventing submission.
    - [ ] Test form submission to ensure the "Success" state is reached.

## Verification Plan
- **Visual Check**: Open the site in the browser and verify the "Precision" section layout.
- **Spacing Check**: Scroll through the homepage to confirm reduced vertical gaps.
- **Functional Check**: Fill out the inquiry form and confirm the submit button works and displays the success message.
