"use strict";
var Product = /** @class */ (function () {
    function Product() {
        this.products = [];
    }
    Product.prototype.makeProduct = function (product) {
        this.products.push(product);
    };
    Product.prototype.allProducts = function () {
        return this.products;
    };
    return Product;
}());
var productInstance = new Product();
productInstance.makeProduct({
    color: "red",
    height: 10,
    width: 14
});
console.log(productInstance.allProducts());
