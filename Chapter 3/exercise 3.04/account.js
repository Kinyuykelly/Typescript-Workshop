"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account = void 0;
exports.account = {
    due: 1000,
    paid: 0,
    status: 'OPEN',
    payAccount: function (amount) {
        if (amount > this.due - this.paid) {
            return "$".concat(amount, " is more than the outstanding balance of $").concat(this.due - this.paid);
        }
        this.paid += amount;
        if (this.paid === this.due) {
            this.status = 'CLOSED';
        }
        return this.printStatus();
    },
    printStatus: function () {
        return "$".concat(this.paid, " has been paid and $").concat(this.due -
            this.paid, " is outstanding. This account is ").concat(this.status, ".");
    },
};
console.log(exports.account.printStatus());
console.log(exports.account.payAccount(1500));
console.log(exports.account.payAccount(500));
console.log(exports.account.payAccount(500));
