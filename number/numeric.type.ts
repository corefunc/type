/**
 * @type {number}
 */
export type TypeNumeric<Precision, Scale> = number & { __numeric__: void };

/**
 * @type {number}
 */
export type NumericType<Precision, Scale> = number & { __numeric__: void };

/**
 * @type {number}
 */
export type Numeric<Precision, Scale> = number & { __numeric__: void };

export function isNumeric<Precision extends number, Scale extends number>(
  inputNumeric: number,
  precision: Precision,
  scale: Scale,
): inputNumeric is TypeNumeric<Precision, Scale> {
  const [wholePart, fractionalPart] = inputNumeric.toString().split(".");
  return !(wholePart.length > precision || fractionalPart.length > scale);
}

export function assertNumeric<Precision extends number, Scale extends number>(
  inputNumeric: unknown,
  precision: Precision,
  scale: Scale,
): TypeNumeric<Precision, Scale> {
  if (typeof inputNumeric !== "number") {
    throw new Error(`Invalid input [${inputNumeric}], value is not a number`);
  }
  if (!isNumeric(inputNumeric, precision, scale)) {
    throw new Error(
      `Input numeric [${inputNumeric}] is not between specified precision [${precision}] and scale [${scale}]`,
    );
  }
  return inputNumeric;
}
