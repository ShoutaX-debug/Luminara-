## 2024-05-22 - Contact Form Accessibility & Interaction
**Learning:** Placeholders are not accessible labels. Adding `aria-label` is a quick fix, but visual labels are preferred if design allows. Also, AOS (Animate On Scroll) can make automated visibility testing tricky; always scroll to element and wait for animation.
**Action:** When testing AOS-enabled elements, ensure scroll-into-view and wait steps are included in the test script.
