"use strict";
exports.__esModule = true;
var utilities_1 = require("../utilities");
// Data
var data = (0, utilities_1["default"])('day-1');
var transformedData = data
    .trim()
    .split('\n')
    .map(function (str) { return Number(str); });
// Solution
function getTwoSums(arr, value) {
    var sum = null;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === value) {
                sum = arr[i] * arr[j];
            }
        }
    }
    return sum;
}
console.log('Answer', getTwoSums(transformedData, 2020));
