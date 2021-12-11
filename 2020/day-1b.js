"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = __importDefault(require("../utilities"));
// Data
var data = (0, utilities_1.default)('day-1');
var transformedData = data
    .trim()
    .split('\n')
    .map(function (str) { return Number(str); });
// Solution
function getThreeSums(arr, value) {
    var sum = null;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            for (var k = j; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === value) {
                    sum = arr[i] * arr[j] * arr[k];
                }
            }
        }
    }
    return sum;
}
console.log('Answer:', getThreeSums(transformedData, 2020));
