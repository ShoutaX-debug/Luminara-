## 2024-05-22 - Contact Form Accessibility & Feedback
**Learning:** Users filling out forms on static sites often lack feedback on submission, leading to confusion. Additionally, placeholder-only designs are inaccessible to screen readers.
**Action:** When working on static sites without backends, always simulate form submission (loading -> success) to provide feedback. Also, ensure all placeholder-only inputs receive explicit `aria-label` attributes to maintain accessibility without altering the visual design.
