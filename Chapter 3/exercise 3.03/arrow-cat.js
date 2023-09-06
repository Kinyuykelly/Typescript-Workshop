"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.arrayToObjectSegment = exports.sentence = void 0;
var sentence = function (subject, verb) {
    var objects = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        objects[_i - 2] = arguments[_i];
    }
    return "".concat(subject, "  ").concat(verb, "  ").concat((0, exports.arrayToObjectSegment)(objects), ".");
};
exports.sentence = sentence;
var arrayToObjectSegment = function (words) {
    if (words.length < 1) {
        return "";
    }
    if (words.length === 1) {
        return "".concat(words[0]);
    }
    var segment = "";
    for (var i = 0; i < words.length; i++) {
        if (i === words.length - 1) {
            segment += " and ".concat(words[i]);
        }
        else {
            segment += "".concat(words[i], ",");
        }
    }
    return segment;
};
exports.arrayToObjectSegment = arrayToObjectSegment;
var capitalize = function (sentence) {
    return "".concat(sentence.charAt(0).toUpperCase()).concat(sentence
        .slice(1)
        .toLowerCase());
};
exports.capitalize = capitalize;
console.log((0, exports.sentence)("the cat", "ate", "apples", "cheese", "pancakes"));
console.log((0, exports.sentence)("the cat", "slept", "all day"));
console.log((0, exports.sentence)("the cat", "sneezed"));
