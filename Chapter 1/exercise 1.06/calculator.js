"use strict";
var operator;
(function (operator) {
    operator["Add"] = "add";
    operator["Subtract"] = "subtract";
    operator["Multiply"] = "multiply";
    operator["Divide"] = "divide";
    operator["Modulo"] = "modulo";
})(operator || (operator = {}));
var calculator1 = function (first, second, op) {
};
var operations = [];
var add1 = function (first, second) {
    return first + second;
};
operations.push([operator.Add, add1]);
var subtract = function (first, second) {
    return first - second;
};
operations.push([operator.Subtract, subtract]);
var multiply = function (first, second) {
    return first * second;
};
operations.push([operator.Multiply, multiply]);
var divide = function (first, second) {
    return first / second;
};
operations.push([operator.Divide, divide]);
var modulo = function (first, second) {
    return first % second;
};
operations.push([operator.Modulo, modulo]);
var calculator2 = function (first, second, op) {
    var tuple = operations.find(function (tpl) { return tpl[0] === op; });
    if (tuple) {
        var operation = tuple[1];
        var result = operation(first, second);
        return result;
    }
    else {
        throw new Error("operator not found");
    }
};
console.log(calculator2(4, 6, operator.Add));
console.log(calculator2(13, 3, operator.Subtract));
console.log(calculator2(2, 5, operator.Multiply));
console.log(calculator2(70, 7, operator.Divide));
console.log(calculator2(14, 3, operator.Modulo));
