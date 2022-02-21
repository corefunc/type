"use strict";
exports.__esModule = true;
exports.assertStringOfLength = exports.isStringOfLength = void 0;
function isStringOfLength(inputString, minimumLength, maximumLength) {
    return inputString.length >= minimumLength && inputString.length <= maximumLength;
}
exports.isStringOfLength = isStringOfLength;
function assertStringOfLength(inputString, minimumLength, maximumLength) {
    if (typeof inputString !== "string") {
        throw new Error("Invalid input [".concat(inputString, "], value is not a string"));
    }
    if (!isStringOfLength(inputString, minimumLength, maximumLength)) {
        throw new Error("Input string [".concat(inputString, "] length is not between specified [").concat(minimumLength, "] and [").concat(maximumLength, "]"));
    }
    return inputString;
}
exports.assertStringOfLength = assertStringOfLength;
