# Palette's UX Journal 🎨

## 2025-10-26 - Form Accessibility Gap
**Learning:** This project relies heavily on placeholders for form labels to maintain a minimal aesthetic. While visually clean, this pattern is hostile to screen readers and users who rely on permanent labels.
**Action:** When working with "clean" designs that omit visible labels, we must strictly enforce `aria-label` usage on all inputs. Future form components should default to including `aria-label` if no `label` element is present.
