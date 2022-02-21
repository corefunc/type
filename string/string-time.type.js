"use strict";
// Union types that not too complex to represent
exports.__esModule = true;
exports.assertStringTime = exports.isStringTime = void 0;
function isStringTime(inputString) {
    return new RegExp("((1{0,1}[012]{1})|[0-9]{1}){1}((:|\\s)?[0-5]{1}[0-9]{1})").test(inputString);
}
exports.isStringTime = isStringTime;
function assertStringTime(inputString) {
    if (typeof inputString !== "string") {
        throw new Error("Invalid input [".concat(inputString, "], value is not a time string"));
    }
    if (!isStringTime(inputString)) {
        throw new Error("Input string [".concat(inputString, "] is not valid time string"));
    }
    return inputString;
}
exports.assertStringTime = assertStringTime;
