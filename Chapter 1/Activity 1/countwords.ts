// This function counts the number of words in a sentence
function countWords(str: string){
    const splitted = str.split(/[-_ ""]+/);
    const wordLength: number = splitted.length;
    return wordLength;
}
console.log(countWords("I am_learning-typescript"));
console.log(countWords("I am learning typescript"));