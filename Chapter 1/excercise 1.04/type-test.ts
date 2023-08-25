const daysInWeek = 7;
const fullName = "Kelly Bright";
const isHappy = false;
const today =new Date();
const months = ["March", "June", "August"];
const notDefined = undefined;
const nothing = null;
const add = (x: number, y:number) => x+y;
const calculator = {
    add
}
const everything = [daysInWeek, fullName, isHappy, today, months,notDefined, nothing, add, calculator];

for (const something of everything){
    const type = typeof something;
    console.log(something, type)
}
