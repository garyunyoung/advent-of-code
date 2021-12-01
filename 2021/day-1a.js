"use strict";
exports.__esModule = true;
var fs = require("fs");
// PART ONE
function countIncrements(arr) {
    var increaseCount = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] > arr[i]) {
            ++increaseCount;
        }
    }
    return increaseCount;
}
var data = fs.readFileSync('inputs/day-1.txt', {
    encoding: 'utf8',
    flag: 'r'
});
var dataArray = data
    .trim()
    .split('\n')
    .map(function (str) { return Number(str); });
console.log('PART ONE:', countIncrements(dataArray));
