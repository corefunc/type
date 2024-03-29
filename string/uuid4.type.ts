import { isUuid } from "./uuid.type";

/**
 * @type {string}
 */
export type TypeUUID4 = string & {
  readonly __uuid_4__: void;
};

/**
 * @type {string}
 */
export type UUID4Type = string & {
  readonly __uuid_4__: void;
};

/**
 * @type {string}
 */
export type UUID4 = string & {
  readonly __uuid_4__: void;
};

// type x = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
// export type TypeStringDate = `${x}${x}${x}${x}${x}${x}${x}${x}-${x}${x}${x}${x}-4${x}${x}${x}-${
//   '1' | '2' | '3'}${x}${x}${x}-${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}${x}`;

export function isUuid4(inputUUID4: string): inputUUID4 is TypeUUID4 {
  return isUuid(inputUUID4, 4);
}

export function assertUuid4(inputUUID4: unknown): TypeUUID4 {
  if (typeof inputUUID4 !== "string") {
    throw new Error(`Invalid input [${inputUUID4}], value is not a string`);
  }
  if (!isUuid4(inputUUID4)) {
    throw new Error(`Input string [${inputUUID4}] is not UUID 4`);
  }
  return inputUUID4;
}
