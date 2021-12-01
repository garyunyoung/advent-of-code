"use strict";
exports.__esModule = true;
var fs = require("fs");
function getData(fileName) {
    var path = "inputs/" + fileName + ".txt";
    return fs.readFileSync(path, {
        encoding: 'utf8',
        flag: 'r'
    });
}
exports["default"] = getData;
