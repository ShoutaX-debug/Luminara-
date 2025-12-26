## 2025-02-20 - Missing Font Awesome and Labels
**Learning:** The site was using FontAwesome classes without loading the library, rendering icons invisible. Also, forms relied solely on placeholders, which is a major accessibility barrier.
**Action:** Always check if icon libraries are actually loaded when seeing icon classes. Always add visible labels to inputs, or at least screen-reader only labels if the design forbids visible ones.
