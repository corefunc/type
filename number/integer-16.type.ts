/**
 * @alias INT16_MAX
 * @type {number}
 */
export const INT16: number = 32_767 as const;

/**
 * @type {number}
 */
export const INT16_MAX: number = 32_767 as const;

/**
 * @type {number}
 */
export const INT16_MIN: number = -32_767 as const;

/**
 * @alias smallint
 * @alias int16
 * @alias integer16
 */
export type TypeInteger16 = number & { __integer_16__: void };

/**
 * @name isInteger16
 * @param {number} [inputInteger16]
 * @return {boolean}
 */
export function isInteger16(inputInteger16: number): inputInteger16 is TypeInteger16 {
  return inputInteger16 >= INT16_MIN && inputInteger16 <= INT16_MAX;
}

/**
 * @name assertInteger16
 * @param {*} [inputInteger]
 * @returns {TypeInteger16}
 * @throws {Range|TypeError}
 */
export function assertInteger16(inputInteger: unknown): TypeInteger16 {
  if (typeof inputInteger !== "number") {
    throw new TypeError(`Invalid input [${inputInteger}], value is not a number`);
  }
  if (!isInteger16(inputInteger)) {
    throw new RangeError(`Input integer [${inputInteger}] is not in integer 2 bytes range`);
  }
  return inputInteger;
}
