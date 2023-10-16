// create user object type
type BasicUser = {
    _id: number;
    email: string;
    token: string;
}
// create admin object type 
type Admin = {
    accesPages: string[];
    lastLogin: Date;
}
//create backup user object type
type Backup = {
    lastBackUp: Date;
    backUpLocation: string;
}
const superUser: BasicUser & Admin = {
    _id: 1,
    email:  'rayon.hunte@gmail.com',
    token: '12345',
    accesPages: [
        'profile', 'adminConsole', 'userReset' 
    ],
    lastLogin: new Date()
};
// create backup type
type BackupUser = BasicUser & Backup;
//create backup user
const backupUser: BackupUser = {
    _id: 2,
    email: 'rayon.backup@gmail.com',
    token: '123456',
    lastBackUp: new Date(),
    backUpLocation: './backup'
};
//console out super user props
console.log(superUser);
//console out backup user props
console.log(backupUser);

