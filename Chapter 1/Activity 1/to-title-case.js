"use strict";
//This function capitalizes each letter in a word
function toTitleCase(text) {
    var splitted = text.split(" ");
    var sliced = splitted.map(function (item) { return item[0].toUpperCase() + item.slice(1).toLocaleLowerCase(); });
    return sliced.join(" ");
}
console.log(toTitleCase("hello, nice to meet you"));
