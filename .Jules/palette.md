## 2024-05-23 - Invisible Interactive Elements
**Learning:** Icon-only buttons relying on external libraries (like FontAwesome) become completely invisible and unusable if the library fails to load or is missing. This impacts all users, not just those using assistive technology.
**Action:** Always verify visual rendering of icon-only controls. If using CDNs, ensure fallback text or ARIA labels are present so the control remains perceivable to screen readers even if the icon is missing visually.
