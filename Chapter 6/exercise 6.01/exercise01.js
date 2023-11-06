"use strict";
// product array
var products_list = [];
// add products to product array function
function makeProduct(p) {
    products_list.push(p); // add product to end of array
}
// use a for loop to create 5 products
for (var index = 0; index < 5; index++) {
    var p = {
        name: "Product" + "_" + ("" + index),
        count: index,
        price: 100,
        amount: 15
    }; //make product
    makeProduct(p);
}
console.log(products_list);
console.log(2 + 3);
