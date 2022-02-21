export declare type TypeUUID = string & {
  readonly __uuid__: void;
};
export declare function isUuid(inputUUID: string): inputUUID is TypeUUID;
export declare function assertUuid(inputUUID: unknown): TypeUUID;
