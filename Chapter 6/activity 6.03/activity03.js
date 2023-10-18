"use strict";
var Packages = /** @class */ (function () {
    function Packages(pack) {
        this.pack = pack;
    }
    Packages.prototype.getPackageStatus = function () {
        return this.pack.packageStatus;
    };
    Packages.prototype.updateStatus = function (status, state) {
        this.pack.packageStatus[status] = state;
        return this.getPackageStatus();
    };
    return Packages;
}());
var pack = {
    packageType: 'Land',
    item: 'pen',
    amount: 70,
    packageStatus: {
        "shipped": false, "packed": true, "delivered": true
    }
};
var newPack = new Packages(pack);
console.log(newPack.getPackageStatus());
console.log(newPack.updateStatus("shipped", true));
