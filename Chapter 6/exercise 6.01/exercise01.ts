//primitive type
type Count = number;
// object type 
type Product_s = {
    name: string,
    count: Count, //reuse Count
    price: number,
    amount: number,
}
// product array
const products_list: Product_s[] = [];
// add products to product array function
function makeProduct(p : Product_s ) {
    products_list.push(p); // add product to end of array
}
// use a for loop to create 5 products
for (let index = 0; index < 5; index++) {
    let p : Product_s = {
        name: "Product"+"_"+`${index}`,
        count: index,
        price: 100,
        amount: 15
    }//make product
    makeProduct(p);
}
console.log(products_list);
console.log(2+3);