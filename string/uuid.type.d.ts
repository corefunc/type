/**
 * @type {string}
 */
export declare type TypeUUID = string & {
    readonly __uuid__: void;
};
/**
 * @type {string}
 */
export declare type UUIDType = string & {
    readonly __uuid__: void;
};
/**
 * @type {string}
 */
export declare type UUID = string & {
    readonly __uuid__: void;
};
export declare function isUuid(inputUUID: string): inputUUID is TypeUUID;
export declare function assertUuid(inputUUID: unknown): TypeUUID;
