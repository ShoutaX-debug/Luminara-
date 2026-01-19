## 2025-05-20 - Placeholder as Label Anti-Pattern
**Learning:** This app relies heavily on 'placeholder' attributes as the only visual label for form inputs. This is a common accessibility issue as placeholders disappear when typing and often have poor contrast.
**Action:** When refactoring, prioritize adding 'aria-label' if visible labels cannot be added due to design constraints, but advocate for visible labels in future design iterations.
