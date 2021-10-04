"use strict";
exports.__esModule = true;
// const fs = require('fs')
var fs = require("fs");
// PART ONE 
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
var data = fs.readFileSync('day-1-input.txt', { encoding: 'utf8', flag: 'r' });
var arr = data
    .trim()
    .split('\n')
    .map(function (str) { return Number(str); });
console.log('PART ONE:', getTwoSums(arr, 2020));
