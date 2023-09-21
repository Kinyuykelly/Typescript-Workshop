"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderFactory = void 0;
var orderFactory = function () {
    var id = 0;
    return function (color) { return function (size) { return function (qty) {
        var orders = [];
        for (var i = 0; i < qty; i++) {
            orders.push({ id: id++, color: color, size: size });
        }
        return orders;
    }; }; };
};
exports.orderFactory = orderFactory;
var createOrder = (0, exports.orderFactory)();
var redLine = createOrder('red');
var redSmall = redLine('S');
var redMeduim = redLine('M');
var blueSmall = createOrder('blue')('S');
var orderOne = redMeduim(4);
console.log(orderOne);
var orderTwo = blueSmall(7);
console.log(orderTwo);
var orderThree = redSmall(4);
console.log(orderThree);
