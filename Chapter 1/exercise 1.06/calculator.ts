enum operator{
    Add = 'add',
    Subtract ="subtract",
    Multiply = "multiply",
    Divide = "divide",
    Modulo = "modulo"
}



const calculator1 = function (first: number, second: number, op: operator){
}
    type operation = (x: number, y: number) => number;
    const operations: [operator, operation][] = [];

    const add1 = function (first: number, second: number){
        return first + second;
    };
    operations.push([operator.Add, add1]);

    const subtract = function (first: number, second: number){
        return first - second;
    };
    operations.push([operator.Subtract, subtract]);

    const multiply = function (first: number, second: number){
        return first * second;
    };
    operations.push([operator.Multiply, multiply]);

    const divide = function (first: number, second: number){
        return first / second;
    };
    operations.push([operator.Divide, divide]);

    const modulo = function (first: number, second: number){
        return first % second;
    };
    operations.push([operator.Modulo, modulo]);

    const calculator2 = function (first: number, second: number, op: operator): number {
        const tuple = operations.find((tpl: [operator, operation]) => tpl[0] === op);
        
        if (tuple){
            const operation = tuple[1];
            const result = operation(first, second);
            return result;
        }
        else{
            throw new Error("operator not found");
            
        }
      
    };

    
console.log(calculator2(4, 6, operator.Add));
console.log(calculator2(13, 3, operator.Subtract));
console.log(calculator2(2, 5, operator.Multiply));
console.log(calculator2(70, 7, operator.Divide));
console.log(calculator2(14, 3, operator.Modulo))