// first interface
interface productTemplate{
    height: number;
    width: number;
    color: string
    
}
// make product function
const productMaker: productInterfaceFunction = (product: productTemplate) => {
    return product;
}
// implement interface
const myProduct: productTemplate ={
    height: 10,
    width: 12,
    color: 'red',
}
// call function
console.log(productMaker(myProduct));
//function interface
interface productInterfaceFunction {
    (product: productTemplate): productTemplate
}
//product class interface
interface productClassInterface {
    product :productTemplate;
    makeProduct  (product: productTemplate): productTemplate;
}
//class that implements product class interface
class ProductClass implements productClassInterface{
    product: productTemplate
    constructor(product: productTemplate){
        this.product = product
    }
    makeProduct(): productTemplate {
        return this.product;
    }
}
//new product object
const product: productTemplate = {height: 100, width: 200, color: "pink"};
// call make product function
//instantiste product class with new product object
const newProduct = new ProductClass(product)
// console our new product instance
console.log(newProduct);