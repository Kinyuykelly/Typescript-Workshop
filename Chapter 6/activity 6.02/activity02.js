"use strict";
var Shipping = /** @class */ (function () {
    function Shipping(pack) {
        this.pack = pack;
    }
    Shipping.prototype.getPackageType = function () {
        if (this.pack.packageType === 'Land') {
            return 'Land package';
        }
        else {
            return 'Air package';
        }
    };
    return Shipping;
}());
var itemOne = {
    packageType: 'Land',
    item: 'bag',
    amount: 6
};
var itemTwo = {
    packageType: 'Air',
    item: 'skirt',
    amount: 10
};
var shippingOne = new Shipping(itemOne);
console.log(shippingOne.getPackageType());
var shippingTwo = new Shipping(itemTwo);
console.log(shippingTwo.getPackageType());
