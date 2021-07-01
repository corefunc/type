/**
 * @alias bigint
 * @alias biginteger
 * @alias int64
 * @alias integer64
 */
export type TypeInteger64 = number & { __integer_64__: void };

export function isInteger64(inputInteger64: number): inputInteger64 is TypeInteger64 {
  return inputInteger64 >= -9_223_372_036_854_775_807 && inputInteger64 <= 9_223_372_036_854_775_807;
}

export function assertInteger64(inputInteger: unknown): TypeInteger64 {
  if (typeof inputInteger !== "number") {
    throw new Error(`Invalid input [${inputInteger}], value is not a number`);
  }
  if (!isInteger64(inputInteger)) {
    throw new Error(`Input integer [${inputInteger}] is not in integer 8 bytes range`);
  }
  return inputInteger;
}
