/**
 * @alias smallint
 * @alias int16
 * @alias integer16
 */
export type TypeInteger16 = number & { __integer_16__: void };

export function isInteger16(inputInteger16: number): inputInteger16 is TypeInteger16 {
  return inputInteger16 >= -32_767 && inputInteger16 <= 32_767;
}

export function assertInteger16(inputInteger: unknown): TypeInteger16 {
  if (typeof inputInteger !== "number") {
    throw new Error(`Invalid input [${inputInteger}], value is not a number`);
  }
  if (!isInteger16(inputInteger)) {
    throw new Error(`Input integer [${inputInteger}] is not in integer 2 bytes range`);
  }
  return inputInteger;
}
