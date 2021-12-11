"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
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
