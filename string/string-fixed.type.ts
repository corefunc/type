export type TypeStringFixed<FixedLength> = string & {
  readonly __string_fixed__: void;
};

export type StringFixedType<FixedLength> = string & {
  readonly __string_fixed__: void;
};

export type StringFixed<FixedLength> = string & {
  readonly __string_fixed__: void;
};

export function isStringFixed<FixedLength extends number>(
  inputString: string,
  fixedLength: FixedLength,
): inputString is TypeStringFixed<FixedLength> {
  return inputString.length === fixedLength;
}

export function assertStringFixed<FixedLength extends number>(
  inputString: unknown,
  fixedLength: FixedLength,
): TypeStringFixed<FixedLength> {
  if (typeof inputString !== "string") {
    throw new Error(`Invalid input [${inputString}], value is not a string`);
  }
  if (!isStringFixed(inputString, fixedLength)) {
    throw new Error(`Input string [${inputString}] length don't fit in specified length [${fixedLength}]`);
  }
  return inputString;
}
