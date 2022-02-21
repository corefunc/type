/**
 * @alias INT64_MAX
 * @type {number}
 */
export declare const INT64: number;
/**
 * @type {number}
 */
export declare const INT64_MAX: number;
/**
 * @type {number}
 */
export declare const INT64_MIN: number;
/**
 * @alias bigint
 * @alias biginteger
 * @alias int64
 * @alias integer64
 * @type {number}
 */
export declare type TypeInteger64 = number & {
    __integer_64__: void;
};
/**
 * @alias bigint
 * @alias biginteger
 * @alias int64
 * @alias integer64
 * @type {number}
 */
export declare type Integer64Type = number & {
    __integer_64__: void;
};
/**
 * @alias bigint
 * @alias biginteger
 * @alias int64
 * @alias integer64
 * @type {number}
 */
export declare type Integer64 = number & {
    __integer_64__: void;
};
/**
 * @name isInteger64
 * @param {number} [inputInteger64]
 * @return {boolean}
 */
export declare function isInteger64(inputInteger64: number): inputInteger64 is TypeInteger64;
/**
 * @name assertInteger64
 * @param {*} [inputInteger]
 * @returns {TypeInteger64}
 * @throws {Range|TypeError}
 */
export declare function assertInteger64(inputInteger: unknown): TypeInteger64;
