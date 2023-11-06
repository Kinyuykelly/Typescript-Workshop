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
Object.defineProperty(exports, "__esModule", { value: true });
var Phone = /** @class */ (function () {
    function Phone(powerButton, mic, speaker, serialNumber) {
        this.powerOn = false;
        this.restart = false;
        this.mic = mic;
        this.powerButton = powerButton;
        this.speaker = speaker;
        this.serialNumber = serialNumber;
    }
    Phone.prototype.togglePower = function () {
        this.powerOn = true;
    };
    Phone.prototype.reboot = function () {
        this.restart = true;
    };
    return Phone;
}());
var Smart = /** @class */ (function (_super) {
    __extends(Smart, _super);
    function Smart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchScreen = true;
        _this.fourG = true;
        return _this;
    }
    Smart.prototype.playVidoe = function (fileName) {
        return true;
    };
    return Smart;
}(Phone));
var Standard = /** @class */ (function (_super) {
    __extends(Standard, _super);
    function Standard(serial) {
        var _this = _super.call(this, true, true, true, serial) || this;
        _this.dialPad = true;
        _this.threeG = true;
        return _this;
    }
    Standard.prototype.NumberToLetter = function (number) {
        var letter = ["a", "b", "c", "d"];
        return letter[number];
    };
    return Standard;
}(Phone));
var smartPhone = new Smart(true, true, true, '1234567');
var standardPhone = new Standard('67890');
console.log(smartPhone.playVidoe('videoOne'));
console.log(standardPhone.NumberToLetter(3));
console.log(smartPhone);
console.log(standardPhone);
