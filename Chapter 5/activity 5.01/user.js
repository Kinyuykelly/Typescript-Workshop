"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var User = /** @class */ (function () {
    function User(user) {
        this.user = user;
    }
    User.prototype.login = function (user, password) {
        return this.user;
    };
    User.prototype.getUser = function () {
        return this.user;
    };
    return User;
}());
var newuser = {
    email: 'hello@gmail.com',
    loginAt: new Date().getTime(),
    token: '1234567'
};
var newUserClass = new User(newuser);
console.log(newUserClass.login(newuser, 'secret123'));
console.log(newUserClass.getUser());
