"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = __importDefault(require("../utilities"));
var day_3a_1 = __importDefault(require("./day-3a"));
// Data
var data = (0, utilities_1.default)('day-3');
var transformedData = data.trim().split('\n');
// Solution
function sumAllTreesEncountered(arr, moves) {
    var treeCount = 1;
    for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
        var _a = moves_1[_i], down = _a[0], right = _a[1];
        treeCount *= (0, day_3a_1.default)(arr, down, right);
    }
    return treeCount;
}
var moves = [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1]
];
console.log('Answer:', sumAllTreesEncountered(transformedData, moves));
