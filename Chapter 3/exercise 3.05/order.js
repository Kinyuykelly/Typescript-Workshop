"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderFactory = function () {
    var id = 0;
    return function (color, size, qty) {
        var orders = [];
        for (var i = 0; i < qty; i++) {
            orders.push({ id: id++, color: color, size: size });
        }
        return orders;
    };
};
var createOrder = exports.orderFactory();
var orderOne = createOrder('red', 'M', 4);
console.log(orderOne);
var orderTwo = createOrder('blue', 's', 7);
console.log(orderTwo);
