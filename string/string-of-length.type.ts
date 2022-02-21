/**
 * @type {string}
 */
export type TypeStringOfLength<MinimumLength, MaximumLength> = string & {
  readonly __string_of_length__: void;
};

/**
 * @type {string}
 */
export type StringOfLengthType<MinimumLength, MaximumLength> = string & {
  readonly __string_of_length__: void;
};

/**
 * @type {string}
 */
export type StringOfLength<MinimumLength, MaximumLength> = string & {
  readonly __string_of_length__: void;
};

export function isStringOfLength<MinimumLength extends number, MaximumLength extends number>(
  inputString: string,
  minimumLength: MinimumLength,
  maximumLength: MaximumLength,
): inputString is TypeStringOfLength<MinimumLength, MaximumLength> {
  return inputString.length >= minimumLength && inputString.length <= maximumLength;
}

export function assertStringOfLength<MinimumLength extends number, MaximumLength extends number>(
  inputString: unknown,
  minimumLength: MinimumLength,
  maximumLength: MaximumLength,
): TypeStringOfLength<MinimumLength, MaximumLength> {
  if (typeof inputString !== "string") {
    throw new Error(`Invalid input [${inputString}], value is not a string`);
  }
  if (!isStringOfLength(inputString, minimumLength, maximumLength)) {
    throw new Error(
      `Input string [${inputString}] length is not between specified [${minimumLength}] and [${maximumLength}]`,
    );
  }
  return inputString;
}
