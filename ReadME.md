 # Coding Challenge 04 — Retail Discount Engine

  A JavaScript program that simulates a retail pricing engine: it applies
  category-based discounts, an extra discount based on customer type, runs a
  multi-customer checkout that decrements inventory, then reports the final
  product state.



  ## Pricing rules
  | Category              | Discount    |
  |-----------------------|-------------|
  | electronics           | 20% off     |
  | apparel               | 15% off     |
  | groceries / household | 10% off     |
  | anything else         | no discount |

  | Customer type | Extra off total |
  |---------------|-----------------|
  | student       | 5%              |
  | senior        | 7%              |
  | otherwise     | none            |

  ## Files
  - `cc_4.js` — the discount engine logic
  - `index.html` — loads `cc_4.js`; open it and check the browser console for output

  ## How to run
  **Browser:** open `index.html`, press `F12`, view the **Console** tab.
  **Node.js:** `node cc_4.js`
