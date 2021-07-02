/**
 * @alias INT32_MAX
 * @type {number}
 */
export const INT32: number = 2_147_483_647 as const;

/**
 * @type {number}
 */
export const INT32_MAX: number = 2_147_483_647 as const;

/**
 * @type {number}
 */
export const INT32_MIN: number = -2_147_483_647 as const;

/**
 * @alias int
 * @alias integer
 * @alias int32
 * @alias integer32
 */
export type TypeInteger32 = number & { __integer_32__: void };

/**
 * @name isInteger32
 * @param {number} [inputInteger32]
 * @return {boolean}
 */
export function isInteger32(inputInteger32: number): inputInteger32 is TypeInteger32 {
  return inputInteger32 >= INT32_MIN && inputInteger32 <= INT32_MAX;
}

/**
 * @name assertInteger32
 * @param {*} [inputInteger]
 * @returns {TypeInteger32}
 * @throws {Range|TypeError}
 */
export function assertInteger32(inputInteger: unknown): TypeInteger32 {
  if (typeof inputInteger !== "number") {
    throw new TypeError(`Invalid input [${inputInteger}], value is not a number`);
  }
  if (!isInteger32(inputInteger)) {
    throw new RangeError(`Input integer [${inputInteger}] is not in integer 4 bytes range`);
  }
  return inputInteger;
}
