## 2024-05-22 - [Form Accessibility via ARIA Labels]
**Learning:** Visual simplicity often comes at the cost of accessibility. When design relies on placeholders instead of visible labels (to keep a "clean" look), screen reader users lose context once they start typing or if the placeholder contrast is low.
**Action:** Always add `aria-label` to inputs that lack visible `<label>` elements. This maintains the visual design while ensuring the form is usable by everyone.
