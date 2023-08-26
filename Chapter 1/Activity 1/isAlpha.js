"use strict";
function isAlpha(str3) {
    var regex = /^[A-Za-z\s]*$/;
    var alphaCheck = regex.test(str3);
    return alphaCheck;
}
console.log(isAlpha("hop23"));
console.log(isAlpha("kkm2+*/"));
console.log(isAlpha("hello"));
