## 2025-01-30 - Static Form Feedback & Accessibility
**Learning:** In static sites without backend processing, form feedback is often neglected, leading to user confusion ("Did it send?"). Simulating network requests with `setTimeout` provides crucial affordance. Also, relying solely on placeholders for labels is a common anti-pattern that severely hurts accessibility; `aria-label` is a mandatory fix when visual redesign isn't possible.
**Action:** Always verify "submit" button states and `aria-label` presence on placeholder-only inputs during initial observation.
