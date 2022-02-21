"use strict";
exports.__esModule = true;
exports.assertInteger16 = exports.isInteger16 = exports.INT16_MIN = exports.INT16_MAX = exports.INT16 = void 0;
/**
 * @alias INT16_MAX
 * @type {number}
 */
exports.INT16 = 32767;
/**
 * @type {number}
 */
exports.INT16_MAX = 32767;
/**
 * @type {number}
 */
exports.INT16_MIN = -32767;
/**
 * @name isInteger16
 * @param {number} [inputInteger16]
 * @return {boolean}
 */
function isInteger16(inputInteger16) {
    return inputInteger16 >= exports.INT16_MIN && inputInteger16 <= exports.INT16_MAX;
}
exports.isInteger16 = isInteger16;
/**
 * @name assertInteger16
 * @param {*} [inputInteger]
 * @returns {TypeInteger16}
 * @throws {Range|TypeError}
 */
function assertInteger16(inputInteger) {
    if (typeof inputInteger !== "number") {
        throw new TypeError("Invalid input [".concat(inputInteger, "], value is not a number"));
    }
    if (!isInteger16(inputInteger)) {
        throw new RangeError("Input integer [".concat(inputInteger, "] is not in integer 2 bytes range"));
    }
    return inputInteger;
}
exports.assertInteger16 = assertInteger16;
