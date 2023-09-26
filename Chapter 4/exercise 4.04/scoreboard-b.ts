interface Iteam {
    name: string;
    players: string[];
}

class TeamC{
    name : string;
    players: string[];
     
    constructor(args: Iteam){
        this.name = args.name;
        this.players = args.players;
    }
    generateLineup() {
      return this.players.join(",");
    }
}
const astrosPlayers3 = ["Altuve", "Bregman", "Correa", "Springer"];
const astros3 = new TeamC({
    name : "Astros",
    players: astrosPlayers3
});
console.log(astros3.generateLineup());
console.log(astros3.name);
const bluJaysPlayers3 = ["Vlad", "Smoak", "Tellez", "Sogard"];
const  bluJays3 = new TeamC({
    name: "Blu Jays",
    players: bluJaysPlayers3
});
console.log(bluJays3.generateLineup());
console.log(bluJays3.name);

