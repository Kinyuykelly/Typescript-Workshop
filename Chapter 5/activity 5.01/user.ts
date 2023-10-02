import { lte } from "lodash";

interface UserObject{
    email: string;
    loginAt: number;
    token: string;
};
interface UserClass {
  user: UserObject;
  getUser():UserObject;
  login(user: UserObject, password: string): UserObject
}
class User implements UserClass {
    user: UserObject;
    constructor(user: UserObject){
        this.user = user;
    }
    login(user: UserObject, password: string):UserObject {
        return this.user;
    }
    getUser(): UserObject {
    return this.user;
    }
}
const newuser: UserObject = {
    email: 'hello@gmail.com',
    loginAt: new Date().getTime(),
    token: '1234567'
}
const newUserClass: UserClass = new User(newuser);
console.log (newUserClass.login(newuser, 'secret123'))

console.log (newUserClass.getUser())