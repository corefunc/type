"use strict";
exports.__esModule = true;
exports.assertFloatRange = exports.isFloatRange = void 0;
function isFloatRange(inputFloat, minimumFloat, maximumFloat) {
    return inputFloat >= minimumFloat && inputFloat <= maximumFloat;
}
exports.isFloatRange = isFloatRange;
function assertFloatRange(inputFloat, minimumFloat, maximumFloat) {
    if (typeof inputFloat !== "number") {
        throw new Error("Invalid input [".concat(inputFloat, "], value is not a number"));
    }
    if (!isFloatRange(inputFloat, minimumFloat, maximumFloat)) {
        throw new Error("Input float [".concat(inputFloat, "] is not between specified [").concat(minimumFloat, "] and [").concat(maximumFloat, "]"));
    }
    return inputFloat;
}
exports.assertFloatRange = assertFloatRange;
