export declare type TypeIntegerRange<MinimumInteger, MaximumInteger> = number & {
  __integer_range__: void;
};
export declare function isIntegerRange<MinimumInteger extends number, MaximumInteger extends number>(
  inputInteger: number,
  minimumInteger: MinimumInteger,
  maximumInteger: MaximumInteger,
): inputInteger is TypeIntegerRange<MinimumInteger, MaximumInteger>;
export declare function assertIntegerRange<MinimumInteger extends number, MaximumInteger extends number>(
  inputInteger: unknown,
  minimumInteger: MinimumInteger,
  maximumInteger: MaximumInteger,
): TypeIntegerRange<MinimumInteger, MaximumInteger>;
