
class TeamD{
    players: string[];
     
    constructor(players: string[]){
        this.players = players;
    }
    generateLineup() {
      const playersWithOrderNumber = 
      this.players.map((player, idx) => {
        return `<div>${idx + 1} - ${player}<div>`;
      })
      return playersWithOrderNumber.join("");
    }
}
const astrosPlayers4 = ["Altuve", "Bregman", "Correa", "Springer"];
const astros4 = new TeamD(astrosPlayers4);
console.log(astros4.generateLineup());

const bluJaysPlayers4 = ["Vlad", "Smoak", "Tellez", "Sogard"];
const  bluJays4 = new TeamD(bluJaysPlayers4);
console.log(bluJays4.generateLineup());



