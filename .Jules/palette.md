## 2025-02-23 - Accessibility & Dependency Recovery
**Learning:** External dependencies like Font Awesome can be missing from the head but referenced in the body/CSS, leading to invisible controls. Validating visual rendering is as critical as validating the DOM structure.
**Action:** Always verify that referenced icon libraries are actually loaded in the head when working with icon-only buttons.
