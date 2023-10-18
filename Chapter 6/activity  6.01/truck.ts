type Motor1 = {
    color: string;
    doors: number;
    wheels: number;
    fourWheelDrive: boolean;
}
type Truck1 = {
    doubleCab: boolean;
    winch: boolean;
}
type PickUpTruck = Motor1 & Truck1;
function truckBuilder(pickUpTruck: PickUpTruck): PickUpTruck {
    return pickUpTruck;
}
const pickUpTruck: PickUpTruck = {
    color: 'white',
    doors: 4,
    wheels: 4,
    fourWheelDrive: true,
    doubleCab: true,
    winch: false
} 
console.log(truckBuilder(pickUpTruck));