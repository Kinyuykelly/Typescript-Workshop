"use strict";
function squares(array) {
    var result = array.map(function (x) { return x * x; });
    return result;
}
console.log(squares([1, 4]));
