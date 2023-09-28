"use strict";
// make product function
var productMaker = function (product) {
    return product;
};
// implement interface
var myProduct = {
    height: 10,
    width: 12,
    color: 'red',
};
// call function
console.log(productMaker(myProduct));
//class that implements product class interface
var ProductClass = /** @class */ (function () {
    function ProductClass(product) {
        this.product = product;
    }
    ProductClass.prototype.makeProduct = function () {
        return this.product;
    };
    return ProductClass;
}());
//new product object
var product = { height: 100, width: 200, color: "pink" };
// call make product function
//instantiste product class with new product object
var newProduct = new ProductClass(product);
// console our new product instance
console.log(newProduct);
