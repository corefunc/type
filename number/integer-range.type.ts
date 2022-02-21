export type TypeIntegerRange<MinimumInteger, MaximumInteger> = number & { __integer_range__: void };

export function isIntegerRange<MinimumInteger extends number, MaximumInteger extends number>(
  inputInteger: number,
  minimumInteger: MinimumInteger,
  maximumInteger: MaximumInteger,
): inputInteger is TypeIntegerRange<MinimumInteger, MaximumInteger> {
  return inputInteger >= minimumInteger && inputInteger <= maximumInteger;
}

export function assertIntegerRange<MinimumInteger extends number, MaximumInteger extends number>(
  inputInteger: unknown,
  minimumInteger: MinimumInteger,
  maximumInteger: MaximumInteger,
): TypeIntegerRange<MinimumInteger, MaximumInteger> {
  if (typeof inputInteger !== "number") {
    throw new Error(`Invalid input [${inputInteger}], value is not a number`);
  }
  if (!isIntegerRange(inputInteger, minimumInteger, maximumInteger)) {
    throw new Error(
      `Input integer [${inputInteger}] is not between specified [${minimumInteger}] and [${maximumInteger}]`,
    );
  }
  return inputInteger;
}
