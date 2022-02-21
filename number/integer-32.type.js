"use strict";
exports.__esModule = true;
exports.assertInteger32 = exports.isInteger32 = exports.INT32_MIN = exports.INT32_MAX = exports.INT32 = void 0;
/**
 * @alias INT32_MAX
 * @type {number}
 */
exports.INT32 = 2147483647;
/**
 * @type {number}
 */
exports.INT32_MAX = 2147483647;
/**
 * @type {number}
 */
exports.INT32_MIN = -2147483647;
/**
 * @name isInteger32
 * @param {number} [inputInteger32]
 * @return {boolean}
 */
function isInteger32(inputInteger32) {
  return inputInteger32 >= exports.INT32_MIN && inputInteger32 <= exports.INT32_MAX;
}
exports.isInteger32 = isInteger32;
/**
 * @name assertInteger32
 * @param {*} [inputInteger]
 * @returns {TypeInteger32}
 * @throws {Range|TypeError}
 */
function assertInteger32(inputInteger) {
  if (typeof inputInteger !== "number") {
    throw new TypeError("Invalid input [" + inputInteger + "], value is not a number");
  }
  if (!isInteger32(inputInteger)) {
    throw new RangeError("Input integer [" + inputInteger + "] is not in integer 4 bytes range");
  }
  return inputInteger;
}
exports.assertInteger32 = assertInteger32;
