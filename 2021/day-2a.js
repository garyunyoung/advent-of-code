"use strict";
exports.__esModule = true;
var utilities_1 = require("../utilities");
// Data
var data = (0, utilities_1["default"])('day-2');
// const testData: [string, number][] = [
//   ['forward', 5],
//   ['down', 5],
//   ['forward', 8],
//   ['up', 3],
//   ['down', 8],
//   ['forward', 2]
// ]
var transformedData = data
    .trim()
    .split('\n')
    .map(function (str) { return str.split(' '); })
    .map(function (_a) {
    var instruction = _a[0], numberStr = _a[1];
    return [
        instruction,
        Number(numberStr)
    ];
});
// Solution
function finalPosition(instructions) {
    var horizontal = 0;
    var depth = 0;
    instructions.forEach(function (_a) {
        var instruction = _a[0], number = _a[1];
        switch (instruction) {
            case 'forward':
                horizontal += number;
                break;
            case 'up':
                depth -= number;
                break;
            case 'down':
                depth += number;
                break;
            default:
                break;
        }
    });
    return horizontal * depth;
}
console.log('Answer:', finalPosition(transformedData));
