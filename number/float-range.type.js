"use strict";
exports.__esModule = true;
exports.assertFloatRange = exports.isFloatRange = void 0;
function isFloatRange(inputFloat, minimumFloat, maximumFloat) {
    return inputFloat >= minimumFloat && inputFloat <= maximumFloat;
}
exports.isFloatRange = isFloatRange;
function assertFloatRange(inputFloat, minimumFloat, maximumFloat) {
    if (typeof inputFloat !== "number") {
        throw new Error("Invalid input [" + inputFloat + "], value is not a number");
    }
    if (!isFloatRange(inputFloat, minimumFloat, maximumFloat)) {
        throw new Error("Input float [" + inputFloat + "] is not between specified [" + minimumFloat + "] and [" + maximumFloat + "]");
    }
    return inputFloat;
}
exports.assertFloatRange = assertFloatRange;
