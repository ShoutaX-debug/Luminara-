## 2025-10-26 - Form Accessibility Pattern
**Learning:** This project frequently uses form inputs with only placeholders and no visible labels. While visually clean, this creates significant accessibility barriers.
**Action:** When working on forms in this codebase, always ensure `aria-label` is added to inputs if visible `<label>` elements cannot be added due to design constraints.
