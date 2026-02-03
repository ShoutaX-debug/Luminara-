# Palette's Journal

## 2024-05-22 - Accessibility for Icon-Only Links
**Learning:** Icon-only links (e.g., social media icons) relying solely on classes like `fa-twitter` provide no context to screen readers.
**Action:** Always pair icon-only links with an `aria-label` on the container and `aria-hidden="true"` on the icon element itself to ensure a concise, accessible name.
