/**
 * @alias INT64_MAX
 * @type {number}
 */
export const INT64: number = 9_223_372_036_854_775_807 as const;

/**
 * @type {number}
 */
export const INT64_MAX: number = 9_223_372_036_854_775_807 as const;

/**
 * @type {number}
 */
export const INT64_MIN: number = -9_223_372_036_854_775_807 as const;

/**
 * @alias bigint
 * @alias biginteger
 * @alias int64
 * @alias integer64
 */
export type TypeInteger64 = number & { __integer_64__: void };

/**
 * @name isInteger64
 * @param {number} [inputInteger64]
 * @return {boolean}
 */
export function isInteger64(inputInteger64: number): inputInteger64 is TypeInteger64 {
  return inputInteger64 >= -INT64_MIN && inputInteger64 <= INT64_MAX;
}

/**
 * @name assertInteger64
 * @param {*} [inputInteger]
 * @returns {TypeInteger64}
 * @throws {Range|TypeError}
 */
export function assertInteger64(inputInteger: unknown): TypeInteger64 {
  if (typeof inputInteger !== "number") {
    throw new TypeError(`Invalid input [${inputInteger}], value is not a number`);
  }
  if (!isInteger64(inputInteger)) {
    throw new RangeError(`Input integer [${inputInteger}] is not in integer 8 bytes range`);
  }
  return inputInteger;
}
