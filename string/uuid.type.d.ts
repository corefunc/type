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
export declare type UUIDVersionType = '3' | '4' | '5' | 'all' | 3 | 4 | 5;
export declare function isUuid(inputUUID: unknown, version?: UUIDVersionType): inputUUID is TypeUUID;
export declare function assertUuid(inputUUID: unknown, version?: UUIDVersionType): TypeUUID;
