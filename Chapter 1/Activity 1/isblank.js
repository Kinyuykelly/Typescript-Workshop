"use strict";
function isBlank(text) {
    if (text === "") {
        return true;
    }
    return false;
}
console.log(isBlank("rose"));
console.log(isBlank(""));
