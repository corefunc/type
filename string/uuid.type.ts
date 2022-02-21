import { isUUID } from "class-validator";

/**
 * @type {string}
 */
export type TypeUUID = string & {
  readonly __uuid__: void;
};

/**
 * @type {string}
 */
export type UUIDType = string & {
  readonly __uuid__: void;
};

/**
 * @type {string}
 */
export type UUID = string & {
  readonly __uuid__: void;
};

export function isUuid(inputUUID: string): inputUUID is TypeUUID {
  return isUUID(inputUUID);
}

export function assertUuid(inputUUID: unknown): TypeUUID {
  if (typeof inputUUID !== "string") {
    throw new Error(`Invalid input [${inputUUID}], value is not a string`);
  }
  if (!isUuid(inputUUID)) {
    throw new Error(`Input string [${inputUUID}] is not UUID`);
  }
  return inputUUID;
}
