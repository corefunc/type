export type TypeStringDate = `20${number}${number}-${number}${number}-${number}${number}`;

export function isStringDate(inputString: string): inputString is TypeStringDate {
  return new RegExp("^\\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$").test(inputString);
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
