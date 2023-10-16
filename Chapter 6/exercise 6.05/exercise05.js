"use strict";
var errorMessage = {
    400: "bad request",
    401: "unauthorized",
    403: "forbidden",
    apiId: 123456
};
var errorCodes = [
    400, 401, 403
];
errorCodes.forEach(function (code) {
    console.log(errorMessage[code]);
});
