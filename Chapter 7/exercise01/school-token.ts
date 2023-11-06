function  Token(constructor: Function) {
    constructor.prototype.token = true;
}
@Token 
class Teacher {
    token?: boolean;
    constructor (public id: number, public name: string) {
        // teacher specified code
        this.id = id
        this.name = name
    }
    
}

       ///////
const teacher   = new Teacher(1, 'John Smith');
console.log('Does the teacher have a token?', teacher['token']);