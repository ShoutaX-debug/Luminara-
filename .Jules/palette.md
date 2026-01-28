# Palette's Journal

## Philosophy
- Users notice the little things
- Accessibility is not optional
- Every interaction should feel smooth
- Good UX is invisible - it just works

## Critical Learnings
### 2025-10-26 - Missing Icon Dependencies
**Learning:** Found social icons (`fa-instagram` etc) were invisible because the FontAwesome CDN link was missing from the head, despite the classes being used.
**Action:** When auditing icon-only buttons, always verify the icons actually render. Use visual verification tools early.
