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
var User1 = /** @class */ (function () {
    function User1(userName, token) {
        this.token = "";
        this.timeStamp = new Date().getTime();
        this.userName = userName;
        this.token = token;
    }
    User1.prototype.logOut = function () {
        this.userName = "";
        this.token = "";
    };
    User1.prototype.getUser = function () {
        return {
            userName: this.userName,
            token: this.token,
            createAt: this.timeStamp,
        };
    };
    User1.prototype.renewToken = function (newToken) {
        this.token = newToken;
    };
    return User1;
}());
var Cashier = /** @class */ (function (_super) {
    __extends(Cashier, _super);
    function Cashier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balance = 0;
        _this.float = 0;
        return _this;
    }
    Cashier.prototype.start = function (balance, float) {
        this.balance = balance;
        this.float = float;
    };
    return Cashier;
}(User1));
var Inventary = /** @class */ (function (_super) {
    __extends(Inventary, _super);
    // override constructor method, add new prop
    function Inventary(userName, token, products) {
        var _this = 
        //call parent constructor method
        _super.call(this, userName, token) || this;
        _this.products = [];
        //set new prop
        _this.products = products;
        return _this;
    }
    return Inventary;
}(User1));
var FloorWorker = /** @class */ (function (_super) {
    __extends(FloorWorker, _super);
    function FloorWorker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.floorStock = [];
        return _this;
    }
    FloorWorker.prototype.checkOut = function (id) {
        if (this.products.length >= 0) {
            this.floorStock.push(this.products[id]);
        }
    };
    return FloorWorker;
}(Inventary));
var basicUser = new User1('user1', '1345678jfgnc');
console.log(basicUser);
var cashUser = new Cashier('user2', '12345678');
console.log(cashUser);
cashUser.start(10, 15);
console.log(cashUser);
// init inventory
var iUser = new Inventary('user3', '123456789', ['orange', 'apple', 'mango', 'playStation 2']);
console.log(iUser);
var fUser = new FloorWorker('user4', '123456789', ['orange', 'apple', 'mango', 'playStation 2']);
fUser.checkOut(0);
console.log(fUser.products);
console.log(fUser.floorStock);
