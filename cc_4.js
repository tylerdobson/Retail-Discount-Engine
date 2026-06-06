// cc_4.js
// Coding Challenge 4 — Retail Discount Engine



//  Array of 5 product objects (name, category, price, inventory)

const products = [
  { name: "Laptop",    category: "electronics", price: 1200, inventory: 8 },
  { name: "T-Shirt",   category: "apparel",     price: 25,   inventory: 40 },
  { name: "Bananas",   category: "groceries",   price: 3,    inventory: 100 },
  { name: "Dish Soap", category: "household",   price: 6,    inventory: 60 },
  { name: "Notebook",  category: "stationery",  price: 4,    inventory: 75 },
];


// Loops every product and set a category discount using a switch.
// `break` after each case prevents fall-through; groceries + household

for (const product of products) {
  let discountRate;

  switch (product.category) {
    case "electronics":
      discountRate = 0.20; // 20% off
      break;
    case "apparel":
      discountRate = 0.15; // 15% off
      break;
    case "groceries":
    case "household":
      discountRate = 0.10; // 10% off (shared case)
      break;
    default:
      discountRate = 0; // no discount
  }

  // Save the rate and the resulting per-unit price back onto the product.
  product.discountRate = discountRate;
  product.discountedPrice = +(product.price * (1 - discountRate)).toFixed(2);

  console.log(
    `${product.name} (${product.category}): ` +
    `$${product.price} -> $${product.discountedPrice} ` +
    `(${discountRate * 100}% off)`
  );
}


// Extra whole cart discount based on customer type (if / else if).

const customerType = "student"; 
let extraDiscount;

if (customerType === "student") {
  extraDiscount = 0.05; // 5% extra off 
} else if (customerType === "senior") {
  extraDiscount = 0.07; // 7% extra off 
} else {
  extraDiscount = 0; // no extra discount
}

console.log(`\nCustomer type: ${customerType} (extra ${extraDiscount * 100}% off total)\n`);


//   checkout for 3 customers. Outer `for` counts customers;

// inner `for...of` builds the cart total 

// Each customer buys one of every in-stock product.

const numberOfCustomers = 3;

for (let customer = 1; customer <= numberOfCustomers; customer++) {
  let cartTotal = 0;

  for (const product of products) {
    if (product.inventory > 0) {
      cartTotal += product.discountedPrice; // added discounted price
      product.inventory--;                  // reduced inventory by one
    }
  }

  // customer-type extra discount to the whole cart.
  const finalTotal = +(cartTotal * (1 - extraDiscount)).toFixed(2);

  console.log(`Customer #${customer} total cost: $${finalTotal}`);
}

console.log("\n--- Single product details (for...in) ---");
const sampleProduct = products[0];
for (const key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}


//  Used Object.entries() 
// after inventory has been updated by the checkout loop.

console.log("\n--- All products after checkout (Object.entries + destructuring) ---");
for (const product of products) {
  for (const [key, value] of Object.entries(product)) {
    console.log(`${key} = ${value}`);
  }
  console.log("---");
}
