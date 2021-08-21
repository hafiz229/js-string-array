const products = [
  "Dell hardcore i29 200 GB laptop",
  "iphone 1TB camera flashlight phone",
  "yellow laptop with black camera",
  "1X59 Levenovo comercial yoga laptop",
  "LG supernova Laptop",
  "HTC low price Phone",
  "dell color phone with laptop",
];

const searching = "laptop";

// indexOf
const output = [];
/* for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(product);
  }
}
console.log(output); */

// includes
/* for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output); */

// starts with
/* for (const product of products) {
  if (product.toLowerCase().startsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output); */

// ends with
for (const product of products) {
  if (product.toLowerCase().endsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
