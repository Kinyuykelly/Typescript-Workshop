"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var playerNames = [
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
var lineUpOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(_.zip(lineUpOrder, playerNames));
