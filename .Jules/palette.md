## 2025-10-26 - Form Accessibility Pattern
**Learning:** This application relies heavily on `placeholder` attributes for form labeling, which is visually clean but inaccessible.
**Action:** When working on forms in this repo, always ensure `aria-label` attributes are added to inputs to match their placeholders, rather than forcing visible `<label>` elements which might break the design system.
