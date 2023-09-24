"use strict";
var TeamA = /** @class */ (function () {
    function TeamA(name) {
        this.name = name;
    }
    TeamA.prototype.generateLineup = function () {
        return "Lineup will go here...";
    };
    return TeamA;
}());
var astros1 = new TeamA("Astros");
//console.log(astros1.generateLineup());
console.log(astros1.name);
var bluJays = new TeamA("Blue Jay");
//console.log(bluJays.generateLineup());
console.log(bluJays.name);
