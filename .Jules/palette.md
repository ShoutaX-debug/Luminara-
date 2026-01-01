# Palette's Journal

## 2024-05-22 - External Icon Dependencies
**Learning:** Relying on external icon libraries (like FontAwesome) without fallback text or aria-labels creates invisible interactive elements if the library fails to load or is missing.
**Action:** Always ensure interactive elements have accessible names (`aria-label`) even if they rely on icons, and verify external resources are loaded.
