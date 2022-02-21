// Union types that not too complex to represent

type HourPrefix = "0" | "1" | "2";

type MinutePrefix = HourPrefix | "3" | "4" | "5";

type Digit = MinutePrefix | "6" | "7" | "8" | "9";

/**
 * @type {string}
 */
export type TypeStringTime = `${HourPrefix}${Digit}:${MinutePrefix}${Digit}`;

/**
 * @type {string}
 */
export type StringTimeType = `${HourPrefix}${Digit}:${MinutePrefix}${Digit}`;

/**
 * @type {string}
 */
export type StringTime = `${HourPrefix}${Digit}:${MinutePrefix}${Digit}`;

export function isStringTime(inputString: string): inputString is TypeStringTime {
  return new RegExp("((1{0,1}[012]{1})|[0-9]{1}){1}((:|\\s)?[0-5]{1}[0-9]{1})").test(inputString);
}

export function assertStringTime(inputString: unknown): TypeStringTime {
  if (typeof inputString !== "string") {
    throw new Error(`Invalid input [${inputString}], value is not a time string`);
  }
  if (!isStringTime(inputString)) {
    throw new Error(`Input string [${inputString}] is not valid time string`);
  }
  return inputString;
}
