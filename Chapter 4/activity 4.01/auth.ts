export class Login{
    [x: string]: any;
    email: string;
    password: string;

    constructor(args: ILogin){
        this.email = args.email;
        this.password = args.password;
    }
}
interface ILogin{
    email: string;
    password: string;
}
interface IAuth{
    user: Login;
    source: string;
}
export class Auth{
    user: Login;
    source: string;

    constructor(args: IAuth) {
        this.user = args.user;
        this.source = args.source
    }
    validUser(): string{
        if(this.user.email === "admin@example.com" && this.user.password === "secret123"){
            return `Validating user... User is authenticated: true`;
        }
        return `Validating user... User is authenticated: false`;
    }

}

const userOne =new Login({
    email: "admin@example.com",
    password: "secret123"
});
const userAuth = new Auth({
    user: userOne,
    source: "Web"
});
console.log(userAuth.validUser());

const userTwo =new Login({
    email: "admin@w.com",
    password: "secret"
});
const userAuth1 = new Auth({
    user: userTwo,
    source: "website"
});
console.log(userAuth1.validUser());