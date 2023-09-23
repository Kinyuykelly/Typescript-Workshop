"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// running test on arrow-cat fuction in chapter3 exercise 3.03
var arrow_cat_1 = require("../exercise 3.03/arrow-cat");
describe("should capitalize the string", function () {
    test("capitalize", function () {
        expect((0, arrow_cat_1.capitalize)("HELLO")).toBe("Hello");
    });
});
