# Palette's Journal 🎨

> "Users notice the little things."

## Critical UX/Accessibility Learnings

## 2025-05-18 - Placeholder-Only Forms
**Learning:** This project relies heavily on placeholders for form labels, which fails accessibility standards as screen readers may ignore them.
**Action:** Always verify forms have `aria-label` matching the placeholder text if visual labels are absent.
