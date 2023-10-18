type LankPack = {
    packageType: 'Land';
    item: string;
    amount: number;
}
type AirPack = {
    packageType: 'Air';
    item: string;
    amount: number;
}
type ComboPack = LankPack | AirPack;
class Shipping {
   pack: ComboPack;
    
    constructor(pack: ComboPack){
      this.pack = pack
    }
    getPackageType(): string{
        if(this.pack.packageType === 'Land'){
            return 'Land package';
        }
        else{
            return 'Air package';
        }
    }  
}
const itemOne: LankPack = {
    packageType: 'Land',
    item: 'bag',
    amount:6
}
const itemTwo: AirPack = {
    packageType: 'Air',
    item: 'skirt',
    amount: 10
}
const shippingOne: Shipping = new Shipping(itemOne);
console.log(shippingOne.getPackageType());
const shippingTwo: Shipping = new Shipping(itemTwo);
console.log(shippingTwo.getPackageType());