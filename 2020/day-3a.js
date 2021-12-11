"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = __importDefault(require("../utilities"));
// Data
var data = (0, utilities_1.default)('day-3');
var transformedData = data.trim().split('\n');
// Solution
function countTreesEncountered(arr, down, right) {
    var width = arr[0].length;
    var height = arr.length;
    var treeCount = 0;
    var columnIndex = 0;
    var rowIndex = 0;
    while (columnIndex < height) {
        if (arr[columnIndex][rowIndex] === '#') {
            ++treeCount;
        }
        rowIndex = (rowIndex + right) % width;
        columnIndex += down;
    }
    return treeCount;
}
exports.default = countTreesEncountered;
console.log('Answer:', countTreesEncountered(transformedData, 1, 3));
