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
var data = fs.readFileSync('inputs/day-1.txt', {
    encoding: 'utf8',
    flag: 'r'
});
var arr = data
    .trim()
    .split('\n')
    .map(function (str) { return Number(str); });
function calcTotalFuel(modules) {
    var sum = 0;
    for (var _i = 0, modules_1 = modules; _i < modules_1.length; _i++) {
        var moduleMass = modules_1[_i];
        var fuel = calcFuel(moduleMass);
        while (fuel > 0) {
            sum += fuel;
            fuel = calcFuel(fuel);
        }
    }
    return sum;
}
function calcFuel(moduleMass) {
    return Math.floor(moduleMass / 3) - 2;
}
console.log(calcTotalFuel(arr));
