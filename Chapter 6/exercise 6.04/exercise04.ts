type Product_1 = {
  name: string;
  price: number;
  amount: number;
}
type Post = {
  header: string;
  method: string;
  product: Product_1;
}
type Put = {
  header: string;
  method: string;
  product: Product_1;
  productId: number;
}
type someRequest = Post | Put;
const products: Product_1[] = [];
function ProcessRequest(request: someRequest) {
  if ("productId" in request) {
    products.forEach((p: Product_1, i: number) => {
      products[request.productId] = {
        ...request.product
      };
    });
  } else {
    products.push(request.product)
  }
}
const apple: Product_1 = {
    name: "apple",
    price: 12345,
    amount: 10
};
const mango: Product_1 = {
    name: "mango",
    price: 6666,
    amount: 15
};
const postAppleRequest: Post = {
    header: "zzzzz",
    method: 'new',
    product: apple
}
const putMangoRequest: Put = {
    header: "gggg",
    method: 'update',
    product: mango,
    productId: 2
}
ProcessRequest(postAppleRequest);
ProcessRequest(putMangoRequest);
console.log(products)