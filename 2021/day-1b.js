"use strict";
exports.__esModule = true;
var fs = require("fs");
// PART TWO
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
// PART TWO ALTERNATIVE
function countIncrementsAlternative(measurements) {
    var count = 0;
    for (var i = 0; i < measurements.length - 2; i++) {
        if (measurements[i] < measurements[i + 3]) {
            ++count;
        }
    }
    return count;
}
// PART
var data = fs.readFileSync('inputs/day-1.txt', {
    encoding: 'utf8',
    flag: 'r'
});
var _testData = [
    199, 200, 208, 210, 200, 207, 240, 269, 260, 263
];
var transformedData = data
    .trim()
    .split('\n')
    .map(function (str) { return Number(str); });
console.log('PART TWO:', countIncrementsAlternative(transformedData));
