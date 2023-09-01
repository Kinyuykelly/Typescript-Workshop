///<reference path = "./types/HeatMapTypes.d.ts"/>
import { Pitcher } from "HeatMapTypes";
import _ = require("lodash");
let data: Pitcher;
data = {
    batterHotZones:[[1, 2, 3], [4, 5, 6], [0, 9, 8]],
    pitcherHotZones:[[10, 12, 13],[0, 9, 8],[4, 5, 6],]
}

function findMatch(batterHotZones: Array<Array<number>>, pitcherHotZones: Array<Array<number>>){
    let coordinateMap =_.intersectionWith(batterHotZones, pitcherHotZones, _.isEqual);
    return coordinateMap;
}
console.log(findMatch(data.batterHotZones, data.pitcherHotZones));


































6












































