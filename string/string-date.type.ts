// Union types that is not too complex to represent
type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type YearPrefix = "20";
type Month = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";
type DayPrefix = "0" | "1" | "2" | "3";

export type TypeStringDate = `${YearPrefix}${Digit}${Digit}-${Month}-${DayPrefix}${Digit}`;

export type StringDateType = `${YearPrefix}${Digit}${Digit}-${Month}-${DayPrefix}${Digit}`;

export type StringDate = `${YearPrefix}${Digit}${Digit}-${Month}-${DayPrefix}${Digit}`;

export function isStringDate(inputString: string): inputString is TypeStringDate {
  return new RegExp("^\\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$").test(inputString);
}

export function assertStringDate(inputString: unknown): TypeStringDate {
  if (typeof inputString !== "string") {
    throw new Error(`Invalid input [${inputString}], value is not a date string`);
  }
  if (!isStringDate(inputString)) {
    throw new Error(`Input string [${inputString}] is not valid date string`);
  }
  return inputString;
}
