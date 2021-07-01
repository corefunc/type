export type TypeFloatRange<MinimumFloat, MaximumFloat> = number & { __float_range__: void };

export function isFloatRange<MinimumFloat extends number, MaximumFloat extends number>(
  inputFloat: number,
  minimumFloat: MinimumFloat,
  maximumFloat: MaximumFloat,
): inputFloat is TypeFloatRange<MinimumFloat, MaximumFloat> {
  return inputFloat >= minimumFloat && inputFloat <= maximumFloat;
}

export function assertFloatRange<MinimumFloat extends number, MaximumFloat extends number>(
  inputFloat: unknown,
  minimumFloat: MinimumFloat,
  maximumFloat: MaximumFloat,
): TypeFloatRange<MinimumFloat, MaximumFloat> {
  if (typeof inputFloat !== "number") {
    throw new Error(`Invalid input [${inputFloat}], value is not a number`);
  }
  if (!isFloatRange(inputFloat, minimumFloat, maximumFloat)) {
    throw new Error(`Input float [${inputFloat}] is not between specified [${minimumFloat}] and [${maximumFloat}]`);
  }
  return inputFloat;
}
