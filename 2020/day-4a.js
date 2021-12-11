"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = __importDefault(require("../utilities"));
// Data
var data = (0, utilities_1.default)('day-4');
var transformedData = data.trim().split('\n\n');
var entries = transformedData;
var allPassportsFieldCodes = entries.map(function (entry) {
    return getFieldCodes(entry);
});
var requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
];
function getFieldCodes(str) {
    var entry = str.split(/\s/);
    var allPassportsFieldCodes = ['', ''];
    for (var _i = 0, entry_1 = entry; _i < entry_1.length; _i++) {
        var part = entry_1[_i];
        var _a = part.split(':'), code = _a[0], _ = _a[1];
        allPassportsFieldCodes.push(code);
    }
    return allPassportsFieldCodes;
}
// Solution
function countValidPassports(allPassportsFieldCodes, requiredFields) {
    var validPassportCount = 0;
    var _loop_1 = function (passportFieldCodes) {
        if (requiredFields.every(function (code) {
            return passportFieldCodes.includes(code);
        })) {
            ++validPassportCount;
        }
    };
    for (var _i = 0, allPassportsFieldCodes_1 = allPassportsFieldCodes; _i < allPassportsFieldCodes_1.length; _i++) {
        var passportFieldCodes = allPassportsFieldCodes_1[_i];
        _loop_1(passportFieldCodes);
    }
    return validPassportCount;
}
console.log('Answer:', countValidPassports(allPassportsFieldCodes, requiredFields));
