## 2024-05-23 - Contact Form Interaction & Accessibility
**Learning:** Static forms without feedback confuse users. Adding a simple client-side "fake" submission with loading states ("Sending...", "Sent!") significantly improves confidence, even without a backend.
**Action:** Always intercept form submissions on static sites to provide immediate visual feedback and reset the form.

## 2024-05-23 - Icon Visibility
**Learning:** Icon-only buttons (like social links) are completely unusable if the font library (FontAwesome) is missing or fails to load.
**Action:** Always verify that external assets like icon fonts are correctly linked in the `<head>` and visible in the rendered page.

## 2024-05-23 - Accessibility Labels
**Learning:** Inputs using only `placeholder` are inaccessible to screen readers.
**Action:** Always add `aria-label` matching the placeholder text if a visible `<label>` cannot be added due to design constraints.
