class TeamB{
    name : string;
    players: string[];
     
    constructor(name: string, players: string[]){
        this.name = name;
        this.players = players;
    }
    generateLineup() {
      return this.players.join(",");
    }
}
const astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
const astros2 = new TeamB("Astros", astrosPlayers);
console.log(astros2.generateLineup());
console.log(astros2.name);
const bluJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
const  bluJays2 = new TeamB("Blue Jay", bluJaysPlayers);
console.log(bluJays2.generateLineup());
console.log(bluJays2.name);


