"use strict";
exports.__esModule = true;
exports.assertUuid = exports.isUuid = void 0;
var class_validator_1 = require("class-validator");
function isUuid(inputUUID) {
    return (0, class_validator_1.isUUID)(inputUUID);
}
exports.isUuid = isUuid;
function assertUuid(inputUUID) {
    if (typeof inputUUID !== "string") {
        throw new Error("Invalid input [".concat(inputUUID, "], value is not a string"));
    }
    if (!isUuid(inputUUID)) {
        throw new Error("Input string [".concat(inputUUID, "] is not UUID"));
    }
    return inputUUID;
}
exports.assertUuid = assertUuid;
