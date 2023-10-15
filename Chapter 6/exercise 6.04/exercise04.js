"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [];
function ProcessRequest(request) {
    if ("productId" in request) {
        products.forEach(function (p, i) {
            products[request.productId] = __assign({}, request.product);
        });
    }
    else {
        products.push(request.product);
    }
}
var apple = {
    name: "apple",
    price: 12345,
    amount: 10
};
var mango = {
    name: "mango",
    price: 6666,
    amount: 15
};
var postAppleRequest = {
    header: "zzzzz",
    method: 'new',
    product: apple
};
var putMangoRequest = {
    header: "gggg",
    method: 'update',
    product: mango,
    productId: 2
};
ProcessRequest(postAppleRequest);
ProcessRequest(putMangoRequest);
console.log(products);
