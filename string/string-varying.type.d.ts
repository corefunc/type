export declare type TypeStringVarying<MaximumLength> = string & {
    readonly __string_varying__: void;
};
export declare function isStringVarying<MaximumLength extends number>(inputString: string, maximumLength: MaximumLength): inputString is TypeStringVarying<MaximumLength>;
export declare function assertStringVarying<MaximumLength extends number>(inputString: unknown, maximumLength: MaximumLength): TypeStringVarying<MaximumLength>;
