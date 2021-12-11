"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = __importDefault(require("../utilities"));
// Data
var data = (0, utilities_1.default)('day-4');
var transformedData = data.trim().split('\n\n');
function parseEntry(str) {
    var entry = str.split(/\s/);
    var obj = {};
    for (var _i = 0, entry_1 = entry; _i < entry_1.length; _i++) {
        var part = entry_1[_i];
        var _a = part.split(':'), code = _a[0], value = _a[1];
        obj[code] = value;
    }
    return obj;
}
var entries = transformedData;
var parsedParsports = entries.map(function (entry) {
    return parseEntry(entry);
});
// Solution
function countValidPassports(parsedParsports) {
    var validPassportCount = 0;
    for (var _i = 0, parsedParsports_1 = parsedParsports; _i < parsedParsports_1.length; _i++) {
        var passport = parsedParsports_1[_i];
        var isValid = validatePassports(passport);
        if (isValid) {
            ++validPassportCount;
        }
    }
    return validPassportCount;
}
function validatePassports(data) {
    return (validBirthYear(data) &&
        validIssueYear(data) &&
        valiedExpirationYear(data) &&
        validHeight(data) &&
        validHairColour(data) &&
        validEyeColour(data) &&
        validPassportID(data));
}
// VALIDATIONS
function validRange(str, min, max) {
    if (str === undefined) {
        return false;
    }
    var val = Number(str);
    return min <= val && val <= max;
}
function validBirthYear(data) {
    return validRange(data.byr, 1920, 2002);
}
function validIssueYear(data) {
    return validRange(data.iyr, 2010, 2020);
}
function valiedExpirationYear(data) {
    return validRange(data.eyr, 2020, 2030);
}
function validHeight(data) {
    if (data.hgt === undefined) {
        return false;
    }
    var unit = data.hgt.slice(-2);
    var val = parseInt(data.hgt);
    if (unit === 'cm') {
        return 150 <= val && val <= 193;
    }
    else if (unit === 'in') {
        return 59 <= val && val <= 76;
    }
    else {
        return false;
    }
}
function validHairColour(data) {
    if (data.hcl === undefined) {
        return false;
    }
    var regex = /^#([0-9a-f]{6})$/;
    return data.hcl.match(regex) !== null;
}
function validEyeColour(data) {
    if (data.ecl === undefined) {
        return false;
    }
    var colours = [
        'amb',
        'blu',
        'brn',
        'gry',
        'grn',
        'hzl',
        'oth'
    ];
    return colours.includes(data.ecl);
}
function validPassportID(data) {
    if (data.pid === undefined) {
        return false;
    }
    return data.pid.length === 9;
}
console.log('PART TWO:', countValidPassports(parsedParsports));
