"use strict";
exports.__esModule = true;
var utilities_1 = require("../utilities");
// Data
var data = (0, utilities_1["default"])('day-2');
var transformedData = data
    .trim()
    .split('\n')
    .map(function (entry) {
    var _a = entry.split(' '), values = _a[0], requiredChar = _a[1], _password = _a[2];
    var transformedValues = values
        .split('-')
        .map(function (value) { return Number(value); });
    requiredChar = requiredChar[0];
    console.log([
        transformedValues,
        requiredChar,
        _password
    ]);
    return [transformedValues, requiredChar, _password];
});
// Solution
function countValidPasswords(arr) {
    var validPasswordCount = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var _a = arr_1[_i], _b = _a[0], min = _b[0], max = _b[1], requiredChar = _a[1], password = _a[2];
        var requiredCharCount = 0;
        for (var _c = 0, password_1 = password; _c < password_1.length; _c++) {
            var char = password_1[_c];
            if (char === requiredChar) {
                ++requiredCharCount;
            }
        }
        if (requiredCharCount >= min &&
            requiredCharCount <= max) {
            ++validPasswordCount;
        }
    }
    return validPasswordCount;
}
// Alternative Solution - Regex
function countValidPasswordsUsingRegex(arr) {
    var validPasswordCount = 0;
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var _a = arr_2[_i], _b = _a[0], min = _b[0], max = _b[1], requiredChar = _a[1], password = _a[2];
        var regex = new RegExp(requiredChar, 'g');
        var requiredCharCount = (password.match(regex) || [])
            .length;
        if (requiredCharCount >= min &&
            requiredCharCount <= max) {
            ++validPasswordCount;
        }
    }
    return validPasswordCount;
}
console.log('Answer:', countValidPasswords(transformedData));
