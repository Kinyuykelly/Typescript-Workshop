type User = {
    email: string;
    userId: number;
}
interface SuperAddMe {
    (user: User): User[]
};
let allUsers : User[] = [
    { email: 'home@home.com', userId: 1 },
    { email: 'out@side.com', userId: 2 }
]
let adduser: SuperAddMe

adduser = function (user: User): User[]{
    return [
        ...allUsers,
        user
    ]
}
console.log(adduser(
    { email: 'slow@mo', userId: allUsers.length }
))