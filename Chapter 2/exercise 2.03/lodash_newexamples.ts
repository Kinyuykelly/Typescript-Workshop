
import _ = require ("lodash");
const playerNames = [
    "Springer",
    "Bregman",
    "Altuve",
    "Correa",
    "Brantley",
    "White",
    "Gonzalez",
    "Kemp",
    "Reddick"
];

const lineUpOrder = [1,2,3,4,5,6,7,8,9];
console.log(_.zip(lineUpOrder, playerNames));