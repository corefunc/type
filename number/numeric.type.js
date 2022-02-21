"use strict";
exports.__esModule = true;
exports.assertNumeric = exports.isNumeric = void 0;
function isNumeric(inputNumeric, precision, scale) {
    var _a = inputNumeric.toString().split("."), wholePart = _a[0], fractionalPart = _a[1];
    return !(wholePart.length > precision || fractionalPart.length > scale);
}
exports.isNumeric = isNumeric;
function assertNumeric(inputNumeric, precision, scale) {
    if (typeof inputNumeric !== "number") {
        throw new Error("Invalid input [".concat(inputNumeric, "], value is not a number"));
    }
    if (!isNumeric(inputNumeric, precision, scale)) {
        throw new Error("Input numeric [".concat(inputNumeric, "] is not between specified precision [").concat(precision, "] and scale [").concat(scale, "]"));
    }
    return inputNumeric;
}
exports.assertNumeric = assertNumeric;
