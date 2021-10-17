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
function totalFuel(modules) {
    return modules.reduce(function (acc, curr) {
        var fuel = Math.floor(curr / 3) - 2;
        return (acc += fuel);
    }, 0);
}
console.log(totalFuel(arr));
