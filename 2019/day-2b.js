"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = fs.readFileSync('inputs/day-2.txt', {
    encoding: 'utf8',
    flag: 'r'
});
function getOutput(data, noun, verb) {
    var dataCopy = Array.from(data);
    dataCopy[1] = noun;
    dataCopy[2] = verb;
    var i = 0;
    while (dataCopy[i] !== 99) {
        var instruction = dataCopy[i];
        var pos2 = dataCopy[i + 1];
        var pos3 = dataCopy[i + 2];
        var pos4 = dataCopy[i + 3];
        if (instruction === 1) {
            dataCopy[pos4] = dataCopy[pos2] + dataCopy[pos3];
        }
        if (instruction === 2) {
            dataCopy[pos4] = dataCopy[pos2] * dataCopy[pos3];
        }
        i += 4;
    }
    return dataCopy[0];
}
function findNounAndVerb(arr, target) {
    for (var noun = 0; noun < 100; noun++) {
        for (var verb = 0; verb < 100; verb++) {
            if (getOutput(arr, noun, verb) === target) {
                return 100 * noun + verb;
            }
        }
    }
    return 'sorry no match';
}
var arr = data
    .trim()
    .split(',')
    .map(function (str) { return Number(str); });
console.log(getOutput(arr, 12, 2));
console.log(findNounAndVerb(arr, 19690720));
