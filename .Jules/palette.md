## 2025-05-02 - The Invisible Label

**Learning:** Design patterns that rely solely on `placeholder` attributes for form labels create significant accessibility barriers. Screen readers often treat placeholders as temporary hints rather than permanent labels, leaving users without context once they start typing. Similarly, icon-only buttons (like the "→" subscribe button) are completely invisible to screen readers without explicit text alternatives.

**Action:** Always pair `placeholder`-only designs with `aria-label` attributes for inputs. For icon-only buttons, strictly enforce the use of `aria-label` or visually hidden text to ensure the action is describable to non-visual users.
