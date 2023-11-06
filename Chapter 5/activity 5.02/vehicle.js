"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Motor = /** @class */ (function () {
    function Motor(name, wheels, bodyType) {
        this.name = name;
        this.wheels = wheels;
        this.bodyType = bodyType;
    }
    Motor.prototype.getName = function () {
        return this.name;
    };
    Motor.prototype.buildMotor = function () {
        return {
            wheels: this.wheels,
            bodytype: this.bodyType,
            name: this.name,
        };
    };
    return Motor;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, bodyType, wheels, rideHeight) {
        var _this = _super.call(this, name, wheels, bodyType) || this;
        _this.rideHeight = rideHeight;
        return _this;
    }
    Car.prototype._buildMotor = function () {
        return __assign(__assign({}, _super.prototype.buildMotor), { rideHeight: this.rideHeight });
    };
    return Car;
}(Motor));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name, wheels, bodyType, offRoad) {
        var _this = _super.call(this, name, wheels, bodyType) || this;
        _this.offRoad = offRoad;
        return _this;
    }
    Truck.prototype._buildMotor = function () {
        return {
            wheels: this.wheels,
            bodyType: this.bodyType,
            offRoad: this.offRoad,
        };
    };
    return Truck;
}(Motor));
var Suv = /** @class */ (function (_super) {
    __extends(Suv, _super);
    function Suv(name, wheels, bodyType, offRoad, roofRack, thirdRow) {
        var _this = _super.call(this, name, wheels, bodyType, offRoad) || this;
        _this.roofRack = roofRack;
        _this.thirdRow = thirdRow;
        return _this;
    }
    return Suv;
}(Truck));
var newCar = new Car('blueBird', 'sedan', 4, 14);
console.log(newCar);
var newTruck = new Truck('blueBird', 4, 'sedan', true);
console.log(newTruck);
var newSuv = new Suv('xtrail', 4, 'box', true, true, true);
console.log(newSuv);
