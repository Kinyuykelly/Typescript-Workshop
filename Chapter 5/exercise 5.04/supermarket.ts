class User1 {
  private userName: string;
  private token: string = "";
  readonly timeStamp: number = new Date().getTime();

  constructor(userName: string, token: string) {
    this.userName = userName;
    this.token = token;
  }
  logOut(): void {
    this.userName = "";
    this.token = "";
  }
  getUser() {
    return {
      userName: this.userName,
      token: this.token,
      createAt: this.timeStamp,
    };
  }
  protected renewToken(newToken: string) {
    this.token = newToken;
  }
}
class Cashier extends User1 {
  balance: number = 0;
  float: number = 0;

  start(balance: number, float: number): void {
    this.balance = balance;
    this.float = float;
  }
}
class Inventary extends User1 {
  products: string[] = [];

  // override constructor method, add new prop
  constructor(userName: string, token: string, products: string[]) {
    //call parent constructor method
    super(userName, token);
    //set new prop
    this.products = products
  }
}
class FloorWorker extends Inventary {
    floorStock: string[] = []

    checkOut(id: number){
        if (this.products.length >= 0){
            this.floorStock.push(
                this.products[id]
            )
        }
    }
}
const basicUser = new User1('user1','1345678jfgnc')
console.log(basicUser)
const cashUser =  new Cashier('user2', '12345678')
console.log(cashUser)
cashUser.start(10, 15)
console.log(cashUser)
// init inventory
const iUser = new Inventary('user3', '123456789', ['orange', 'apple', 'mango', 'playStation 2'])
console.log(iUser)
const fUser = new FloorWorker('user4', '123456789', ['orange', 'apple', 'mango', 'playStation 2'])
fUser.checkOut(0)
console.log(fUser.products)
console.log(fUser.floorStock)