"use strict";
exports.__esModule = true;
exports.assertInteger64 = exports.isInteger64 = exports.INT64_MIN = exports.INT64_MAX = exports.INT64 = void 0;
/**
 * @alias INT64_MAX
 * @type {number}
 */
exports.INT64 = 9223372036854776000;
/**
 * @type {number}
 */
exports.INT64_MAX = 9223372036854776000;
/**
 * @type {number}
 */
exports.INT64_MIN = -9223372036854776000;
/**
 * @name isInteger64
 * @param {number} [inputInteger64]
 * @return {boolean}
 */
function isInteger64(inputInteger64) {
    return inputInteger64 >= -exports.INT64_MIN && inputInteger64 <= exports.INT64_MAX;
}
exports.isInteger64 = isInteger64;
/**
 * @name assertInteger64
 * @param {*} [inputInteger]
 * @returns {TypeInteger64}
 * @throws {Range|TypeError}
 */
function assertInteger64(inputInteger) {
    if (typeof inputInteger !== "number") {
        throw new TypeError("Invalid input [".concat(inputInteger, "], value is not a number"));
    }
    if (!isInteger64(inputInteger)) {
        throw new RangeError("Input integer [".concat(inputInteger, "] is not in integer 8 bytes range"));
    }
    return inputInteger;
}
exports.assertInteger64 = assertInteger64;
