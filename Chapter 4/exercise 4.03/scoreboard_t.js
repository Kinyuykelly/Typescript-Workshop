"use strict";
var TeamB = /** @class */ (function () {
    function TeamB(name, players) {
        this.name = name;
        this.players = players;
    }
    TeamB.prototype.generateLineup = function () {
        return this.players.join(",");
    };
    return TeamB;
}());
var astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
var astros2 = new TeamB("Astros", astrosPlayers);
console.log(astros2.generateLineup());
console.log(astros2.name);
var bluJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
var bluJays2 = new TeamB("Blue Jay", bluJaysPlayers);
console.log(bluJays2.generateLineup());
console.log(bluJays2.name);
