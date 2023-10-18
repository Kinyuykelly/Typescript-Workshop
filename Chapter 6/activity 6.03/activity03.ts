interface PackageStatus {
    [status: string]: boolean;
}
type Package = {
    packageType: 'Land';
    item: string;
    amount: number;
    packageStatus: PackageStatus;
}
class Packages{
    pack: Package;
    constructor(pack: Package){
        this.pack = pack
    }
    getPackageStatus(): PackageStatus{
        return this.pack.packageStatus
    }
    updateStatus(status: string, state: boolean){
        this.pack.packageStatus[status] = state;
        return this.getPackageStatus();
    }
}
const pack: Package = {
    packageType: 'Land',
    item: 'pen',
    amount: 70,
    packageStatus: {
        "shipped": false, "packed": true, "delivered": true
    }
}
const newPack = new Packages(pack)
console.log(newPack.getPackageStatus());
console.log(newPack.updateStatus("shipped", true));
