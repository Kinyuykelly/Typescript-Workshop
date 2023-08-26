//This function capitalizes each letter in a word
function toTitleCase(text: string){
    const splitted = text.split(" ");
    const sliced = splitted.map((item) => item[0].toUpperCase() + item.slice(1).toLocaleLowerCase());
    return sliced.join(" ");
}
console.log(toTitleCase("hello, nice to meet you"));