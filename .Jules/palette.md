# Palette's Journal

## 2025-01-28 - Missing Form Labels & Icon-Only Links
**Learning:** The application heavily relies on `placeholder` attributes for form fields and icons for social links without accompanying text labels. This creates significant accessibility barriers for screen reader users who may not perceive the placeholder text (which often disappears on input) or understand the purpose of empty links.
**Action:** When working with design-focused static sites that avoid visible labels for aesthetic reasons, always ensure `aria-label` is added to inputs and icon-only buttons to maintain accessibility without compromising the visual design.
