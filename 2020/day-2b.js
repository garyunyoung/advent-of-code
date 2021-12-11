"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = __importDefault(require("../utilities"));
// Data
var data = (0, utilities_1.default)('day-2');
var transformedData = data
    .trim()
    .split('\n')
    .map(function (entry) {
    var _a = entry.split(' '), values = _a[0], requiredChar = _a[1], _password = _a[2];
    requiredChar = requiredChar[0];
    var transformedValues = values
        .split('-')
        .map(function (value) { return Number(value); });
    return [transformedValues, requiredChar, _password];
});
// Solution
function recountValidPasswords(arr) {
    var validPasswordCount = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var _a = arr_1[_i], _b = _a[0], i = _b[0], j = _b[1], requiredChar = _a[1], password = _a[2];
        i = i - 1;
        j = j - 1;
        var isAtPos1 = password[i] === requiredChar;
        var isAtPos2 = password[j] === requiredChar;
        if ((isAtPos1 && !isAtPos2) ||
            (isAtPos2 && !isAtPos1)) {
            ++validPasswordCount;
        }
    }
    return validPasswordCount;
}
console.log('Answer', recountValidPasswords(transformedData));
