/**
 * @type {string}
 */
export type TypeStringVarying<MaximumLength> = string & {
  readonly __string_varying__: void;
};

/**
 * @type {string}
 */
export type StringVaryingType<MaximumLength> = string & {
  readonly __string_varying__: void;
};

/**
 * @type {string}
 */
export type StringVarying<MaximumLength> = string & {
  readonly __string_varying__: void;
};

export function isStringVarying<MaximumLength extends number>(
  inputString: string,
  maximumLength: MaximumLength,
): inputString is TypeStringVarying<MaximumLength> {
  return inputString.length <= maximumLength;
}

export function assertStringVarying<MaximumLength extends number>(
  inputString: unknown,
  maximumLength: MaximumLength,
): TypeStringVarying<MaximumLength> {
  if (typeof inputString !== "string") {
    throw new Error(`Invalid input [${inputString}], value is not a string`);
  }
  if (!isStringVarying(inputString, maximumLength)) {
    throw new Error(`Input string [${inputString}] length exceeds maximum specified length [${maximumLength}]`);
  }
  return inputString;
}
