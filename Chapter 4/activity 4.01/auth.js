"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.Login = void 0;
var Login = /** @class */ (function () {
    function Login(args) {
        this.email = args.email;
        this.password = args.password;
    }
    return Login;
}());
exports.Login = Login;
var Auth = /** @class */ (function () {
    function Auth(args) {
        this.user = args.user;
        this.source = args.source;
    }
    Auth.prototype.validUser = function () {
        if (this.user.email === "admin@example.com" && this.user.password === "secret123") {
            return "Validating user... User is authenticated: true";
        }
        return "Validating user... User is authenticated: false";
    };
    return Auth;
}());
exports.Auth = Auth;
var userOne = new Login({
    email: "admin@example.com",
    password: "secret123"
});
var userAuth = new Auth({
    user: userOne,
    source: "Web"
});
console.log(userAuth.validUser());
var userTwo = new Login({
    email: "admin@w.com",
    password: "secret"
});
var userAuth1 = new Auth({
    user: userTwo,
    source: "website"
});
console.log(userAuth1.validUser());
