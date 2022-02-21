"use strict";
exports.__esModule = true;
exports.assertStringDate = exports.isStringDate = void 0;
function isStringDate(inputString) {
  return new RegExp("^\\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$").test(inputString);
}
exports.isStringDate = isStringDate;
function assertStringDate(inputString) {
  if (typeof inputString !== "string") {
    throw new Error("Invalid input [" + inputString + "], value is not a date string");
  }
  if (!isStringDate(inputString)) {
    throw new Error("Input string [" + inputString + "] is not valid date string");
  }
  return inputString;
}
exports.assertStringDate = assertStringDate;
