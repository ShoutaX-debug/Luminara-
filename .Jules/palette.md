## 2024-05-22 - Button Text Transformation & Localization
**Learning:** Verified that buttons use `text-transform: uppercase` which affects visual presentation but preserves DOM text case. Tests must account for this discrepancy. Also confirmed the site uses Indonesian as the primary language for interactions.
**Action:** Use `ignore_case=True` in Playwright assertions for buttons and ensure all new UI text is in Indonesian.
