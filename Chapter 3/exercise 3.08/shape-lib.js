"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArea = void 0;
var PI = 3.14;
var getCircleArea = function (circle) {
    var radius = circle.radius;
    return radius * radius * PI;
};
var getRectangleArea = function (rectangle) {
    var length = rectangle.length, width = rectangle.width;
    return length * width;
};
var getSquareArea = function (square) {
    var width = square.width;
    return getRectangleArea({ length: width, type: 'rectangle', width: width });
};
var getRightTriangleArea = function (rightTriangle) {
    var base = rightTriangle.base, height = rightTriangle.height;
    return (base * height) / 2;
};
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
exports.getArea = getArea;
