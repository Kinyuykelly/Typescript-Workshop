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
var PI = 3.14;
var getArea = function (shape) {
    switch (shape.type) {
        case 'circle':
            return getCircleArea(shape);
        case 'rectangle':
            return getRectangleArea(shape);
        case 'rightTriangle':
            return getRightTriangleArea(shape);
        case 'square':
            return getSquareArea(shape);
    }
};
var getCircleArea = function (circle) {
    var radius = circle.radius;
    return radius * radius * PI;
};
var getRectangleArea = function (rectangle) {
    var length = rectangle.length, width = rectangle.width;
    return length * width;
};
var getRightTriangleArea = function (rightTriangle) {
    var height = rightTriangle.height, base = rightTriangle.base;
    return (base * height) / 2;
};
var getSquareArea = function (square) {
    var width = square.width;
    return getRectangleArea({ length: width, type: 'rectangle', width: width });
};
var circle = { radius: 4, type: 'circle' };
console.log(__assign(__assign({}, circle), { area: getCircleArea(circle) }));
var rectangle = { length: 7, width: 4, type: 'rectangle' };
console.log(__assign(__assign({}, rectangle), { area: getRectangleArea(rectangle) }));
var rightTriangle = { base: 9, height: 4, type: 'rightTriangle' };
console.log(__assign(__assign({}, rightTriangle), { area: getRightTriangleArea(rightTriangle) }));
var square = { width: 5, type: 'square' };
console.log(__assign(__assign({}, square), { area: getSquareArea(square) }));
