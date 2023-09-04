"use strict";
var arrayone = [7, 6, 8, 9, 2, 25];
var arraytwo = [6, 8, 9, 2, 25];
var arraythree = [6, 8, 9, 2, 25, 7];
function arrayCompare(a1, a2) {
    if (a1.length !== a2.length) {
        return false;
    }
    a1.sort();
    a2.sort();
    for (var i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
}
console.log("Are ".concat(arrayone, " and ").concat(arraytwo, " equal?"), arrayCompare(arrayone, arraytwo));
console.log("Are ".concat(arrayone, " and ").concat(arraythree, " equal?"), arrayCompare(arrayone, arraythree));
console.log("Are ".concat(arraytwo, " and ").concat(arraythree, " equal?"), arrayCompare(arraytwo, arraythree));
