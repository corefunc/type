/**
 * @type {number}
 */
export declare type TypeFloatRange<MinimumFloat, MaximumFloat> = number & {
    __float_range__: void;
};
/**
 * @type {number}
 */
export declare type FloatRangeType<MinimumFloat, MaximumFloat> = number & {
    __float_range__: void;
};
/**
 * @type {number}
 */
export declare type FloatRange<MinimumFloat, MaximumFloat> = number & {
    __float_range__: void;
};
export declare function isFloatRange<MinimumFloat extends number, MaximumFloat extends number>(inputFloat: number, minimumFloat: MinimumFloat, maximumFloat: MaximumFloat): inputFloat is TypeFloatRange<MinimumFloat, MaximumFloat>;
export declare function assertFloatRange<MinimumFloat extends number, MaximumFloat extends number>(inputFloat: unknown, minimumFloat: MinimumFloat, maximumFloat: MaximumFloat): TypeFloatRange<MinimumFloat, MaximumFloat>;
