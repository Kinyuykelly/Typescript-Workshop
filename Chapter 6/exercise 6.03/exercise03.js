"use strict";
var superUser = {
    _id: 1,
    email: 'rayon.hunte@gmail.com',
    token: '12345',
    accesPages: [
        'profile', 'adminConsole', 'userReset'
    ],
    lastLogin: new Date()
};
//create backup user
var backupUser = {
    _id: 2,
    email: 'rayon.backup@gmail.com',
    token: '123456',
    lastBackUp: new Date(),
    backUpLocation: './backup'
};
//console out super user props
console.log(superUser);
//console out backup user props
console.log(backupUser);
