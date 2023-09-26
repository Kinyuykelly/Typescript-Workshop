"use strict";
var TeamD = /** @class */ (function () {
    function TeamD(players) {
        this.players = players;
    }
    TeamD.prototype.generateLineup = function () {
        var playersWithOrderNumber = this.players.map(function (player, idx) {
            return "<div>".concat(idx + 1, " - ").concat(player, "<div>");
        });
        return playersWithOrderNumber.join("");
    };
    return TeamD;
}());
var astrosPlayers4 = ["Altuve", "Bregman", "Correa", "Springer"];
var astros4 = new TeamD(astrosPlayers4);
console.log(astros4.generateLineup());
var bluJaysPlayers4 = ["Vlad", "Smoak", "Tellez", "Sogard"];
var bluJays4 = new TeamD(bluJaysPlayers4);
console.log(bluJays4.generateLineup());
