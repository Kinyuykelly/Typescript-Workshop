"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account = {
    due: 1000,
    paid: 0,
    status: 'OPEN',
    payAccount: function (amount) {
        if (amount > this.due - this.paid) {
            return "$" + amount + " is more than the outstanding balance of $" + (this.due - this.paid);
        }
        this.paid += amount;
        if (this.paid === this.due) {
            this.status = 'CLOSED';
        }
        return this.printStatus();
    },
    printStatus: function () {
        return "$" + this.paid + " has been paid and $" + (this.due -
            this.paid) + " is outstanding. This account is " + this.status + ".";
    },
};
console.log(exports.account.printStatus());
console.log(exports.account.payAccount(1500));
console.log(exports.account.payAccount(500));
console.log(exports.account.payAccount(500));
