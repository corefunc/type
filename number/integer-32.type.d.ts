/**
 * @alias INT32_MAX
 * @type {number}
 */
export declare const INT32: number;
/**
 * @type {number}
 */
export declare const INT32_MAX: number;
/**
 * @type {number}
 */
export declare const INT32_MIN: number;
/**
 * @alias int
 * @alias integer
 * @alias int32
 * @alias integer32
 */
export declare type TypeInteger32 = number & {
  __integer_32__: void;
};
/**
 * @name isInteger32
 * @param {number} [inputInteger32]
 * @return {boolean}
 */
export declare function isInteger32(inputInteger32: number): inputInteger32 is TypeInteger32;
/**
 * @name assertInteger32
 * @param {*} [inputInteger]
 * @returns {TypeInteger32}
 * @throws {Range|TypeError}
 */
export declare function assertInteger32(inputInteger: unknown): TypeInteger32;
