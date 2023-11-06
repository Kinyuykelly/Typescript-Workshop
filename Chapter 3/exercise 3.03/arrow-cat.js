"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToAnd = function (words) {
    if (words.length < 1) {
        return "";
    }
    if (words.length === 1) {
        return "" + words[0];
    }
    var segment = "";
    for (var i = 0; i < words.length; i++) {
        if (i === words.length - 1) {
            segment += " and " + words[i];
        }
        else {
            segment += words[i] + ",";
        }
    }
    return segment;
};
exports.capitalize = function (sentence) {
    return "" + sentence.charAt(0).toUpperCase() + sentence
        .slice(1)
        .toLowerCase();
};
exports.sentence = function (subject, verb) {
    var objects = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        objects[_i - 2] = arguments[_i];
    }
    return subject + "  " + verb + "  " + exports.arrayToAnd(objects) + ".";
};
// console.log(sentence("the cat", "ate", "apples", "cheese", "pancakes"));
// console.log(sentence("the cat", "slept", "all day"));
// console.log(sentence("the cat", "sneezed"));
