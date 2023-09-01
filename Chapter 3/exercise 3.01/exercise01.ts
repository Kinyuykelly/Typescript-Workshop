var values = [8, 42, 99, 161];
let total = 0;
for (let i = 0; i < values.length; i++){
    total += values[i];
}
var average = total/values.length;
console.log(average);

//function 
//changed the const keyword to var so i could reassign the variables
const  calcAverage = (values: number[]): number => 
(values.reduce((prev, curr) => prev + curr, 0)/values.length);
var values = [8, 42, 99, 161];
var average = calcAverage(values);
console.log(average);