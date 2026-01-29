## 2025-10-26 - Accessibility Pattern: Implicit Labels
**Learning:** This project heavily relies on placeholders for form inputs and icon-only buttons for social links. This creates a recurring accessibility gap where screen readers have no context.
**Action:** When touching any form or button in this repo, always check for and add `aria-label` if visible labels are missing. Do not rely on placeholders as labels.
