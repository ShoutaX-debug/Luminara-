# Palette's Journal

## 2025-10-25 - Placeholder Anti-Pattern
**Learning:** This site relies heavily on `placeholder` attributes as labels for forms (Contact, Subscribe). This is a major accessibility issue as screen readers often ignore placeholders, and they disappear when the user types.
**Action:** Implemented visually hidden labels using a `.visually-hidden` utility class. This maintains the sleek, minimal design while ensuring screen readers can properly announce form fields. This is a crucial pattern for "design-heavy" sites that want to avoid visible labels.
