class TeamA{
    name : string;
     
    constructor(name: string){
        this.name = name;
    }
    generateLineup() {
      return "Lineup will go here...";
    }
}
const astros1 = new TeamA("Astros");
//console.log(astros1.generateLineup());
console.log(astros1.name);

const  bluJays = new TeamA("Blue Jay");
//console.log(bluJays.generateLineup());
console.log(bluJays.name);


