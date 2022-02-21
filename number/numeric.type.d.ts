export declare type TypeNumeric<Precision, Scale> = number & {
  __numeric__: void;
};
export declare function isNumeric<Precision extends number, Scale extends number>(
  inputNumeric: number,
  precision: Precision,
  scale: Scale,
): inputNumeric is TypeNumeric<Precision, Scale>;
export declare function assertNumeric<Precision extends number, Scale extends number>(
  inputNumeric: unknown,
  precision: Precision,
  scale: Scale,
): TypeNumeric<Precision, Scale>;
