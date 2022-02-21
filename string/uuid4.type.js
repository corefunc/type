"use strict";
exports.__esModule = true;
exports.assertUuid4 = exports.isUuid4 = void 0;
var class_validator_1 = require("class-validator");
// type x = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
// export type TypeStringDate = `${x}${x}${x}${x}${x}${x}${x}${x}-${x}${x}${x}${x}-4${x}${x}${x}-${
//   '1' | '2' | '3'}${x}${x}${x}-${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}`;
function isUuid4(inputUUID4) {
    return (0, class_validator_1.isUUID)(inputUUID4, 4);
}
exports.isUuid4 = isUuid4;
function assertUuid4(inputUUID4) {
    if (typeof inputUUID4 !== "string") {
        throw new Error("Invalid input [".concat(inputUUID4, "], value is not a string"));
    }
    if (!isUuid4(inputUUID4)) {
        throw new Error("Input string [".concat(inputUUID4, "] is not UUID 4"));
    }
    return inputUUID4;
}
exports.assertUuid4 = assertUuid4;
