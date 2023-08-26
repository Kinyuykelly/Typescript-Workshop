
function repeat (str2: string, num: number): string{
    var repeatedString = "";
   for(let i =0; i< num; i++){
    repeatedString += str2;
   }
   return repeatedString;
}
console.log(repeat("hola", 9));