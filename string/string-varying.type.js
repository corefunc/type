"use strict";
exports.__esModule = true;
exports.assertStringVarying = exports.isStringVarying = void 0;
function isStringVarying(inputString, maximumLength) {
    return inputString.length <= maximumLength;
}
exports.isStringVarying = isStringVarying;
function assertStringVarying(inputString, maximumLength) {
    if (typeof inputString !== "string") {
        throw new Error("Invalid input [" + inputString + "], value is not a string");
    }
    if (!isStringVarying(inputString, maximumLength)) {
        throw new Error("Input string [" + inputString + "] length exceeds maximum specified length [" + maximumLength + "]");
    }
    return inputString;
}
exports.assertStringVarying = assertStringVarying;
