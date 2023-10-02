"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
var allUsers = [
    { email: 'home@home.com', userId: 1 },
    { email: 'out@side.com', userId: 2 }
];
var adduser;
adduser = function (user) {
    return __spreadArray(__spreadArray([], allUsers, true), [
        user
    ], false);
};
console.log(adduser({ email: 'slow@mo', userId: allUsers.length }));
