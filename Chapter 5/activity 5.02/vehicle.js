"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name, bodyType, rideHeight) {
        this.wheels = 4;
        this.name = name;
        this.bodyType = bodyType;
        this.rideHeight = rideHeight;
    }
    return Car;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name, bodyType) {
        var _this = _super.call(this, name, bodyType, 0) || this;
        _this.offRoad = true;
        return _this;
    }
    return Truck;
}(Car));
var Suv = /** @class */ (function (_super) {
    __extends(Suv, _super);
    function Suv(name, bodyType) {
        var _this = _super.call(this, name, bodyType, 0) || this;
        _this.offRoad = true;
        _this.roofRack = true;
        _this.thirdRow = true;
        return _this;
    }
    return Suv;
}(Car));
var newCar = new Car('blueBird', 'sedan', 14);
console.log(newCar);
var newTruck = new Truck('blueBird', 'sedan');
console.log(newTruck);
var newSuv = new Suv('xtrail', 'box');
console.log(newSuv);
