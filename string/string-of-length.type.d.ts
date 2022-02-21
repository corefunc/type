export declare type TypeStringOfLength<MinimumLength, MaximumLength> = string & {
  readonly __string_of_length__: void;
};
export declare function isStringOfLength<MinimumLength extends number, MaximumLength extends number>(
  inputString: string,
  minimumLength: MinimumLength,
  maximumLength: MaximumLength,
): inputString is TypeStringOfLength<MinimumLength, MaximumLength>;
export declare function assertStringOfLength<MinimumLength extends number, MaximumLength extends number>(
  inputString: unknown,
  minimumLength: MinimumLength,
  maximumLength: MaximumLength,
): TypeStringOfLength<MinimumLength, MaximumLength>;
