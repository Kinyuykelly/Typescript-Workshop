"use strict";
function towards(str1) {
    var splitted1 = str1.split(/[-_ ""]+/);
    return splitted1;
}
console.log(towards("Hello World-this_is-great"));
