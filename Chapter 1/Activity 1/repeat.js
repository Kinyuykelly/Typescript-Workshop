"use strict";
function repeat(str2, num) {
    var repeatedString = "";
    for (var i = 0; i < num; i++) {
        repeatedString += str2;
    }
    return repeatedString;
}
console.log(repeat("hola", 9));
