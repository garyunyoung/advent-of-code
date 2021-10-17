"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = fs.readFileSync('inputs/day-1.txt', {
    encoding: 'utf8',
    flag: 'r'
});
var arr = data
    .trim()
    .split('\n')
    .map(function (str) { return Number(str); });
function calcTotalFuel(modules) {
    var sum = 0;
    for (var _i = 0, modules_1 = modules; _i < modules_1.length; _i++) {
        var moduleMass = modules_1[_i];
        var fuel = calcFuel(moduleMass);
        // sum += fuel
        while (fuel > 0) {
            sum += fuel;
            fuel = calcFuel(fuel);
            // if (fuel > 0) {
            // }
        }
    }
    return sum;
}
function calcFuel(moduleMass) {
    return Math.floor(moduleMass / 3) - 2;
}
console.log(calcTotalFuel(arr));
