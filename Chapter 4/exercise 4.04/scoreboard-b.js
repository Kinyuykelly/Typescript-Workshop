"use strict";
var TeamC = /** @class */ (function () {
    function TeamC(args) {
        this.name = args.name;
        this.players = args.players;
    }
    TeamC.prototype.generateLineup = function () {
        return this.players.join(",");
    };
    return TeamC;
}());
var astrosPlayers3 = ["Altuve", "Bregman", "Correa", "Springer"];
var astros3 = new TeamC({
    name: "Astros",
    players: astrosPlayers3
});
console.log(astros3.generateLineup());
console.log(astros3.name);
var bluJaysPlayers3 = ["Vlad", "Smoak", "Tellez", "Sogard"];
var bluJays3 = new TeamC({
    name: "Blu Jays",
    players: bluJaysPlayers3
});
console.log(bluJays3.generateLineup());
console.log(bluJays3.name);
