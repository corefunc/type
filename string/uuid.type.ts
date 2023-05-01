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


const UUID = {
  1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  any: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};

export type UUIDVersionType = '3' | '4' | '5' | 'all' | 3 | 4 | 5;

export function isUuid(inputUUID: unknown, version?: UUIDVersionType): inputUUID is TypeUUID {
  if (typeof inputUUID !== "string") {
    throw new TypeError(`Invalid input [${inputUUID}], value is not a string`);
  }
  const pattern = UUID[![undefined, null].includes(version) ? version : 'any'];
  return !!pattern && pattern.test(inputUUID);
}

export function assertUuid(inputUUID: unknown, version?: UUIDVersionType): TypeUUID {
  if (typeof inputUUID !== "string") {
    throw new TypeError(`Invalid input [${inputUUID}], value is not a string`);
  }
  if (!isUuid(inputUUID, version)) {
    throw new TypeError(`Input string [${inputUUID}] is not UUID`);
  }
  return inputUUID;
}
