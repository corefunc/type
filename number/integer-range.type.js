"use strict";
exports.__esModule = true;
exports.assertIntegerRange = exports.isIntegerRange = void 0;
function isIntegerRange(inputInteger, minimumInteger, maximumInteger) {
  return inputInteger >= minimumInteger && inputInteger <= maximumInteger;
}
exports.isIntegerRange = isIntegerRange;
function assertIntegerRange(inputInteger, minimumInteger, maximumInteger) {
  if (typeof inputInteger !== "number") {
    throw new Error("Invalid input [" + inputInteger + "], value is not a number");
  }
  if (!isIntegerRange(inputInteger, minimumInteger, maximumInteger)) {
    throw new Error(
      "Input integer [" +
        inputInteger +
        "] is not between specified [" +
        minimumInteger +
        "] and [" +
        maximumInteger +
        "]",
    );
  }
  return inputInteger;
}
exports.assertIntegerRange = assertIntegerRange;
