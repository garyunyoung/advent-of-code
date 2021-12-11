"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = __importDefault(require("../utilities"));
// Data
var data = (0, utilities_1.default)('day-1');
var _testData = [
    199, 200, 208, 210, 200, 207, 240, 269, 260, 263
];
var transformedData = data
    .trim()
    .split('\n')
    .map(function (str) { return Number(str); });
// Solution
function countIncrements(measurements) {
    var count = 0;
    for (var i = 0; i < measurements.length - 1; i++) {
        if (measurements[i + 1] > measurements[i]) {
            ++count;
        }
    }
    return count;
}
console.log('Answer:', countIncrements(transformedData));
