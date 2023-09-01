"use strict";
var values = [8, 42, 99, 161];
var total = 0;
for (var i = 0; i < values.length; i++) {
    total += values[i];
}
var average = total / values.length;
console.log(average);
//function 
//changed the const keyword to var so i could reassign the variables
var calcAverage = function (values) {
    return (values.reduce(function (prev, curr) { return prev + curr; }, 0) / values.length);
};
var values = [8, 42, 99, 161];
var average = calcAverage(values);
console.log(average);
