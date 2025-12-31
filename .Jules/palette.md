## 2024-05-23 - [Restoring Missing Icons & Accessibility]
**Learning:** Visual design relying on external libraries (FontAwesome) must ensure those libraries are loaded, otherwise users see broken UI. Icon-only buttons are invisible to screen readers without ARIA labels.
**Action:** Always check external dependencies are loaded and ensure every interactive element has a text alternative.
