function isBlank(text: string): boolean{
    if(text === ""){
        return true;
    }
    return false;
}
console.log(isBlank("rose"));
console.log(isBlank(""));