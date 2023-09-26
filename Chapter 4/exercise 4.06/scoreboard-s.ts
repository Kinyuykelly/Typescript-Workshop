class Scoreboard{
    homeTeam: TeamE;
    awayTeam: TeamE;
    date: string;

        constructor(args: Iscoreboard) {
            this.homeTeam = args.homeTeam;
            this.awayTeam = args.awayTeam;
            this.date = args.date;
        }
        scoreboardHtml(): string {
            return `
            <h1>${this.date}<h1>
            <h2>${this.homeTeam.name}<h2>
            <h2>${this.homeTeam.generateLineup()}<h2>
            <h2>${this.awayTeam.name}<h2>
            <h2>${this.homeTeam.generateLineup()}<h2>`;   
        }
    }

interface Iscoreboard{
    homeTeam: TeamE;
    awayTeam: TeamE;
    date:string;
}
class TeamE{

    name: string;
    players: string[];

    constructor(name: string, players: string[]){
        this.name = name;
        this.players = players;
    }

    generateLineup(): string{
        const playersWithOrderNumber = this.players.map((player, idx) => {
            return `<div>${idx + 1} - ${player}</div>`;
        });
        return playersWithOrderNumber.join("");
    }
}

const astrosPlayers5 = ["Altuve", "Bregman", "Correa", "Springer"];
const astros5 = new TeamE("Astros",astrosPlayers5);
//console.log(astros.generateLineup());


const blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
const blueJays5 = new TeamE("Blue Jays", blueJaysPlayers);
//console.log(blueJays.generateLineup());
const todaysGame =  new Scoreboard({
homeTeam: astros5,
awayTeam: blueJays5,
date: "2/12/2023"
});
console.log(todaysGame.scoreboardHtml());