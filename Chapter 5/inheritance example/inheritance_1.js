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
var UserOne = /** @class */ (function () {
    function UserOne() {
        this.email = "";
        this.createDate = 0;
        this.lastLogin = 0;
        this.token = "";
    }
    UserOne.prototype.setToken = function (token) {
        // set user token
        this.token = token;
    };
    UserOne.prototype.resetPassword = function (password) {
        // return string of new password
        return password;
    };
    return UserOne;
}());
// creating a child class
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // pages admin has access to 
        _this.adminPages = ["admin", "settings"];
        return _this;
    }
    // method that allows the admin to reset other users
    AdminUser.prototype.resetUserPassword = function (email) {
        //return default user password
        return "password123";
    };
    return AdminUser;
}(UserOne));
// create an instance of our child class
var adminUser = new AdminUser();
//create string to hold our props
var propString = "";
// loop through props and append prop name to propString
for (var u in adminUser) {
    propString += u + ',';
}
// console out results
console.log(propString);
// dderiving a new class from AdminUser class
var SuperAdmin = /** @class */ (function (_super) {
    __extends(SuperAdmin, _super);
    function SuperAdmin() {
        var _this = _super.call(this) || this;
        _this.superPages = ["super", "ultimate"];
        _this.myHash = "1234567";
        return _this;
    }
    SuperAdmin.prototype.cretaeAdminUser = function (adminUser) {
        return adminUser;
    };
    SuperAdmin.prototype.resetPassword = function (password) {
        //add hash to password
        return password + this.myHash;
    };
    return SuperAdmin;
}(AdminUser));
var superAdmin = new SuperAdmin();
var newAdmin = new AdminUser();
console.log(superAdmin.resetPassword('iampassword'));
console.log(newAdmin.resetPassword('iampassword'));
var AdminUserTwo = /** @class */ (function (_super) {
    __extends(AdminUserTwo, _super);
    // pages admin has access to 
    function AdminUserTwo(email) {
        var _this = _super.call(this) || this;
        _this.adminPages = ["admin", "settings"];
        _this.email = email;
        return _this;
    }
    // method that allows the admin to reset other users
    AdminUserTwo.prototype.resetUserPassword = function (email) {
        //return default user password
        return "password123";
    };
    return AdminUserTwo;
}(UserOne));
var adminUserTwo = new AdminUserTwo('home@home.com');
