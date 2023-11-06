"use strict";
var Scoreboard = /** @class */ (function () {
    function Scoreboard(args) {
        this.homeTeam = args.homeTeam;
        this.awayTeam = args.awayTeam;
        this.date = args.date;
    }
    Scoreboard.prototype.scoreboardHtml = function () {
        return "\n            <h1>" + this.date + "<h1>\n            <h2>" + this.homeTeam.name + "<h2>\n            <h2>" + this.homeTeam.generateLineup() + "<h2>\n            <h2>" + this.awayTeam.name + "<h2>\n            <h2>" + this.homeTeam.generateLineup() + "<h2>";
    };
    return Scoreboard;
}());
var TeamE = /** @class */ (function () {
    function TeamE(name, players) {
        this.name = name;
        this.players = players;
    }
    TeamE.prototype.generateLineup = function () {
        var playersWithOrderNumber = this.players.map(function (player, idx) {
            return "<div>" + (idx + 1) + " - " + player + "</div>";
        });
        return playersWithOrderNumber.join("");
    };
    return TeamE;
}());
var astrosPlayers5 = ["Altuve", "Bregman", "Correa", "Springer"];
var astros5 = new TeamE("Astros", astrosPlayers5);
//console.log(astros.generateLineup());
var blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
var blueJays5 = new TeamE("Blue Jays", blueJaysPlayers);
//console.log(blueJays.generateLineup());
var todaysGame = new Scoreboard({
    homeTeam: astros5,
    awayTeam: blueJays5,
    date: "2/12/2023"
});
console.log(todaysGame.scoreboardHtml());
