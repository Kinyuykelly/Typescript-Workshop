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
Object.defineProperty(exports, "__esModule", { value: true });
var shape_lib_1 = require("./shape-lib");
var circle = { radius: 4, type: 'circle' };
console.log(__assign(__assign({}, circle), { area: shape_lib_1.getArea(circle) }));
var rectangle = { type: 'rectangle', length: 7, width: 4 };
console.log(__assign(__assign({}, rectangle), { area: shape_lib_1.getArea(rectangle) }));
var square = { type: 'square', width: 5 };
console.log(__assign(__assign({}, square), { area: shape_lib_1.getArea(square) }));
var rightTriangle = {
    type: 'rightTriangle',
    base: 9,
    height: 4,
};
console.log(__assign(__assign({}, rightTriangle), { area: shape_lib_1.getArea(rightTriangle) }));
