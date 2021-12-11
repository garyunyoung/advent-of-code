"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = __importDefault(require("../utilities"));
// Data
var data = (0, utilities_1.default)('day-2');
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
    var direction = _a[0], amount = _a[1];
    return [direction, Number(amount)];
});
// Solution
function finalPosition(instructions) {
    var horizontal = 0;
    var depth = 0;
    for (var _i = 0, instructions_1 = instructions; _i < instructions_1.length; _i++) {
        var _a = instructions_1[_i], direction = _a[0], amount = _a[1];
        switch (direction) {
            case 'forward':
                horizontal += amount;
                break;
            case 'up':
                depth -= amount;
                break;
            case 'down':
                depth += amount;
                break;
            default:
                break;
        }
    }
    return horizontal * depth;
}
console.log('Answer:', finalPosition(transformedData));
