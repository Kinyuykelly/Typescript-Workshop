"use strict";
function truckBuilder(pickUpTruck) {
    return pickUpTruck;
}
var pickUpTruck = {
    color: 'white',
    doors: 4,
    wheels: 4,
    fourWheelDrive: true,
    doubleCab: true,
    winch: false
};
console.log(truckBuilder(pickUpTruck));
