class UserOne {
    email : string = "";
    createDate: number = 0;
    lastLogin: number = 0;
    token: string = ""; 

    setToken(token: string): void {
        // set user token
        this.token = token;
     }
     resetPassword(password: string): string{
         // return string of new password
         return password;
     }
}
// creating a child class
class AdminUser extends UserOne {
    // pages admin has access to 
    adminPages: string[] = ["admin", "settings"];
    // method that allows the admin to reset other users
    resetUserPassword(email: string){
        //return default user password
        return "password123";
    }
}
// create an instance of our child class
const adminUser: AdminUser = new AdminUser()
//create string to hold our props
let propString = ""
// loop through props and append prop name to propString
for(let u in adminUser) {
    propString += u + ','
}
// console out results
console.log(propString)
// dderiving a new class from AdminUser class
class SuperAdmin extends AdminUser {
    superPages: string[] = ["super", "ultimate"]
    readonly myHash : string

    constructor(){
        super()
        this.myHash = "1234567"
    }
    cretaeAdminUser(adminUser: AdminUser){
        return adminUser
    }
    resetPassword(password: string): string {
        //add hash to password
        return password  + this.myHash;
    }
}
const superAdmin: SuperAdmin = new SuperAdmin()
const newAdmin = new AdminUser()
console.log(superAdmin.resetPassword('iampassword'))
console.log(newAdmin.resetPassword('iampassword'))

class AdminUserTwo extends UserOne{
     // pages admin has access to 
     constructor(email: string) {
        super()
        this.email = email;
    }
    adminPages: string[] = ["admin", "settings"];
    // method that allows the admin to reset other users
    resetUserPassword(email: string){
        //return default user password
        return "password123";
    }
}
const adminUserTwo = new AdminUserTwo('home@home.com');
