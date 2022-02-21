"use strict";
exports.__esModule = true;
exports.assertStringFixed = exports.isStringFixed = void 0;
function isStringFixed(inputString, fixedLength) {
  return inputString.length === fixedLength;
}
exports.isStringFixed = isStringFixed;
function assertStringFixed(inputString, fixedLength) {
  if (typeof inputString !== "string") {
    throw new Error("Invalid input [" + inputString + "], value is not a string");
  }
  if (!isStringFixed(inputString, fixedLength)) {
    throw new Error("Input string [" + inputString + "] length don't fit in specified length [" + fixedLength + "]");
  }
  return inputString;
}
exports.assertStringFixed = assertStringFixed;
