"use strict";
exports.__esModule = true;
exports.assertUuid = exports.isUuid = void 0;
var UUID = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    any: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
function isUuid(inputUUID, version) {
    if (typeof inputUUID !== "string") {
        throw new TypeError("Invalid input [".concat(inputUUID, "], value is not a string"));
    }
    var pattern = UUID[![undefined, null].includes(version) ? version : 'any'];
    return !!pattern && pattern.test(inputUUID);
}
exports.isUuid = isUuid;
function assertUuid(inputUUID, version) {
    if (typeof inputUUID !== "string") {
        throw new TypeError("Invalid input [".concat(inputUUID, "], value is not a string"));
    }
    if (!isUuid(inputUUID, version)) {
        throw new TypeError("Input string [".concat(inputUUID, "] is not UUID"));
    }
    return inputUUID;
}
exports.assertUuid = assertUuid;
