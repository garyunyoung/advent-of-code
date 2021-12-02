"use strict";
exports.__esModule = true;
var utilities_1 = require("../utilities");
// Data
var data = (0, utilities_1["default"])('day-2');
var _testData = [
    ['forward', 5],
    ['down', 5],
    ['forward', 8],
    ['up', 3],
    ['down', 8],
    ['forward', 2]
];
var transformedData = data
    .trim()
    .split('\n')
    .map(function (instructions) { return instructions.split(' '); })
    .map(function (_a) {
    var instruction = _a[0], movement = _a[1];
    return [
        instruction,
        Number(movement)
    ];
});
// Solution
function finalPosition(instructions) {
    var horizontal = 0;
    var depth = 0;
    var aim = 0;
    for (var _i = 0, instructions_1 = instructions; _i < instructions_1.length; _i++) {
        var _a = instructions_1[_i], instruction = _a[0], movement = _a[1];
        switch (instruction) {
            case 'forward':
                horizontal += movement;
                depth += aim * movement;
                break;
            case 'up':
                aim -= movement;
                break;
            case 'down':
                aim += movement;
                break;
            default:
                break;
        }
    }
    return horizontal * depth;
}
console.log('Answer:', finalPosition(transformedData));
