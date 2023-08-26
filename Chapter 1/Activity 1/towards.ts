function towards(str1: string){
    const splitted1 = str1.split(/[-_ ""]+/);
    return splitted1;
}
console.log(towards("Hello World-this_is-great"));