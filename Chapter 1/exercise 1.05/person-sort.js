"use strict";
var count = 0;
function getFullName(person) {
    count += 1;
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var programmers = [
    { firstName: 'kim', lastName: 'Babara' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mark', lastName: 'Smith' },
    { firstName: 'Anders', lastName: 'Guido' },
    { firstName: 'Brandon', lastName: 'Eich' },
];
// a naive and straight forward sorting function
function naiveSortPersons(persons) {
    return persons.slice().sort(function (first, second) {
        var firstFullName = getFullName(first);
        var secondFullName = getFullName(second);
        return firstFullName.localeCompare(secondFullName);
    });
}
function schwartzSortPersons(persons) {
    var tuples = persons.map(function (person) { return [person, getFullName(person)]; });
    tuples.sort(function (first, second) { return first[1].localeCompare(second[1]); });
    var result = tuples.map(function (tuple) { return tuple[0]; });
    return result;
}
count = 0;
var sortedNaive = naiveSortPersons(programmers);
console.log(sortedNaive);
console.log("When using the naive approach, the function calles ".concat(count, " times"));
count = 0;
var sortedSchwartz = schwartzSortPersons(programmers);
console.log(sortedSchwartz);
console.log("When using the naive approach, the function calles ".concat(count, " times"));
