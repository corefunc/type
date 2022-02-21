/**
 * @type {string}
 */
export declare type TypeUUID4 = string & {
    readonly __uuid_4__: void;
};
/**
 * @type {string}
 */
export declare type UUID4Type = string & {
    readonly __uuid_4__: void;
};
/**
 * @type {string}
 */
export declare type UUID4 = string & {
    readonly __uuid_4__: void;
};
export declare function isUuid4(inputUUID4: string): inputUUID4 is TypeUUID4;
export declare function assertUuid4(inputUUID4: unknown): TypeUUID4;
