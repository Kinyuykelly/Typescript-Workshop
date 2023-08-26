function isAlpha (str3: string): boolean {
    const regex = /^[A-Za-z\s]*$/;
    const alphaCheck = regex.test(str3);
    return alphaCheck; 
}
console.log(isAlpha("hop23"));
console.log(isAlpha("kkm2+*/"));
console.log(isAlpha("hello"));