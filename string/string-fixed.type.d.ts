/**
 * @type {string}
 */
export declare type TypeStringFixed<FixedLength> = string & {
    readonly __string_fixed__: void;
};
/**
 * @type {string}
 */
export declare type StringFixedType<FixedLength> = string & {
    readonly __string_fixed__: void;
};
/**
 * @type {string}
 */
export declare type StringFixed<FixedLength> = string & {
    readonly __string_fixed__: void;
};
export declare function isStringFixed<FixedLength extends number>(inputString: string, fixedLength: FixedLength): inputString is TypeStringFixed<FixedLength>;
export declare function assertStringFixed<FixedLength extends number>(inputString: unknown, fixedLength: FixedLength): TypeStringFixed<FixedLength>;
