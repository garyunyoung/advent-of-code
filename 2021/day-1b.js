"use strict";
exports.__esModule = true;
var utilities_1 = require("../utilities");
// Data
var data = (0, utilities_1["default"])('day-1');
var _testData = [
    199, 200, 208, 210, 200, 207, 240, 269, 260, 263
];
var transformedData = data
    .trim()
    .split('\n')
    .map(function (str) { return Number(str); });
// Part Two
function countIncrements(measurements) {
    var count = 0;
    for (var i = 0; i < measurements.length - 2; i++) {
        var firstWindow = measurements[i + 0] +
            measurements[i + 1] +
            measurements[i + 2];
        var secondWindow = measurements[i + 1] +
            measurements[i + 2] +
            measurements[i + 3];
        if (firstWindow < secondWindow) {
            ++count;
        }
    }
    return count;
}
// Part Two - alternative solution
function countIncrementsAlternative(measurements) {
    var count = 0;
    for (var i = 0; i < measurements.length - 2; i++) {
        if (measurements[i] < measurements[i + 3]) {
            ++count;
        }
    }
    return count;
}
console.log('PART TWO:', countIncrements(transformedData));
