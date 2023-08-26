"use strict";
// This function counts the number of words in a sentence
function countWords(str) {
    var splitted = str.split(/[-_ ""]+/);
    var wordLength = splitted.length;
    return wordLength;
}
console.log(countWords("I am_learning-typescript"));
console.log(countWords("I am learning typescript"));
