"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
;
var allUsers = [
    { email: 'home@home.com', userId: 1 },
    { email: 'out@side.com', userId: 2 }
];
var adduser;
adduser = function (user) {
    return __spreadArrays(allUsers, [
        user
    ]);
};
console.log(adduser({ email: 'slow@mo', userId: allUsers.length }));
