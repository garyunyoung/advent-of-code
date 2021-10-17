"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = fs.readFileSync('inputs/day-2.txt', {
    encoding: 'utf8',
    flag: 'r'
});
function calcProgram(data) {
    var dataCopy = data;
    dataCopy[1] = 12;
    dataCopy[2] = 2;
    var i = 0;
    while (dataCopy[i] !== 99) {
        var pos1 = dataCopy[i];
        var pos2 = dataCopy[i + 1];
        var pos3 = dataCopy[i + 2];
        var pos4 = dataCopy[i + 3];
        if (pos1 === 1) {
            dataCopy[pos4] =
                dataCopy[pos2] + dataCopy[pos3];
        }
        if (pos1 === 2) {
            dataCopy[pos4] =
                dataCopy[pos2] * dataCopy[pos3];
        }
        i += 4;
    }
    console.log(dataCopy);
    return dataCopy[0];
}
var realData = data
    .trim()
    .split(',')
    .map(function (str) { return Number(str); });
console.log(calcProgram(realData));
