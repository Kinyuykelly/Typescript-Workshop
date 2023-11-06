var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Token(constructor) {
    constructor.prototype.token = true;
}
var Teacher = /** @class */ (function () {
    function Teacher(id, name) {
        this.id = id;
        this.name = name;
        // teacher specified code
        this.id = id;
        this.name = name;
    }
    Teacher = __decorate([
        Token
    ], Teacher);
    return Teacher;
}());
///////
var teacher = new Teacher(1, 'John Smith');
console.log('Does the teacher have a token?', teacher['token']);
