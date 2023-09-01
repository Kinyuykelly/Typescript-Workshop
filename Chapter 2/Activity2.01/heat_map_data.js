"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var data;
data = {
    batterHotZones: [[1, 2, 3], [4, 5, 6], [0, 9, 8]],
    pitcherHotZones: [[10, 12, 13], [0, 9, 8], [4, 5, 6],]
};
function findMatch(batterHotZones, pitcherHotZones) {
    var coordinateMap = _.intersectionWith(batterHotZones, pitcherHotZones, _.isEqual);
    return coordinateMap;
}
console.log(findMatch(data.batterHotZones, data.pitcherHotZones));
6;
