/**
 * @alias INT16_MAX
 * @type {number}
 */
export declare const INT16: number;
/**
 * @type {number}
 */
export declare const INT16_MAX: number;
/**
 * @type {number}
 */
export declare const INT16_MIN: number;
/**
 * @alias smallint
 * @alias int16
 * @alias integer16
 */
export declare type TypeInteger16 = number & {
  __integer_16__: void;
};
/**
 * @name isInteger16
 * @param {number} [inputInteger16]
 * @return {boolean}
 */
export declare function isInteger16(inputInteger16: number): inputInteger16 is TypeInteger16;
/**
 * @name assertInteger16
 * @param {*} [inputInteger]
 * @returns {TypeInteger16}
 * @throws {Range|TypeError}
 */
export declare function assertInteger16(inputInteger: unknown): TypeInteger16;
