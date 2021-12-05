"use strict";
exports.__esModule = true;
var utilities_1 = require("../utilities");
// Data
// Preconditions
// - Numbers are same lengths
// const data = getData('day-3')
var transformedData = (0, utilities_1["default"])('day-3').trim().split('\n');
var testData = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010'
];
// Solution
function powerConsumption(data) {
    var tally = new Array(data[0].length).fill(0);
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            data[i][j] === '1' ? ++tally[j] : --tally[j];
        }
    }
    var gammaRate = tally
        .map(function (num) { return (num <= 0 ? 0 : 1); })
        .join('');
    var epsilonRate = tally
        .map(function (num) { return (num <= 0 ? 1 : 0); })
        .join('');
    var powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
    return powerConsumption;
}
console.log('Answer:', powerConsumption(transformedData));
