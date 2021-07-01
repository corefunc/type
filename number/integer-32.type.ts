/**
 * @alias int
 * @alias integer
 * @alias int32
 * @alias integer32
 */
export type TypeInteger32 = number & { __integer_32__: void };

export function isInteger32(inputInteger32: number): inputInteger32 is TypeInteger32 {
  return inputInteger32 >= -2_147_483_647 && inputInteger32 <= 2_147_483_647;
}

export function assertInteger32(inputInteger: unknown): TypeInteger32 {
  if (typeof inputInteger !== "number") {
    throw new Error(`Invalid input [${inputInteger}], value is not a number`);
  }
  if (!isInteger32(inputInteger)) {
    throw new Error(`Input integer [${inputInteger}] is not in integer 4 bytes range`);
  }
  return inputInteger;
}
