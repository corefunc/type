export type PrimitiveType = bigint | boolean | null | number | string | symbol | undefined;

export type NonPrimitiveType = object;

export type MergeType<T> = {
  [P in keyof T]: T[P];
};

/**
 * @example
 * interface User {
 *   name: string;
 *   age: number;
 *   address: string;
 * }
 * type UserPartialName = PartialByKeysType<User, "name">;
 * { name?:string; age:number; address:string }
 */
export type PartialByKeysType<T, K = keyof T> = MergeType<
  {
    [P in keyof T as P extends K ? P : never]?: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
>;

export type PartialDeepObjectType<T> = T extends object
  ? {
      [P in keyof T]?: PartialDeepObjectType<T[P]>;
    }
  : T;

export type PartialDeepType<T> = T extends Date | bigint | boolean | null | number | string | symbol | undefined
  ? T | undefined
  : T extends Array<infer ArrayType>
  ? Array<PartialDeepType<ArrayType>>
  : T extends ReadonlyArray<infer ArrayType>
  ? ReadonlyArray<ArrayType>
  : T extends Set<infer SetType>
  ? Set<PartialDeepType<SetType>>
  : T extends ReadonlySet<infer SetType>
  ? ReadonlySet<SetType>
  : T extends Map<infer KeyType, infer ValueType>
  ? Map<PartialDeepType<KeyType>, PartialDeepType<ValueType>>
  : T extends ReadonlyMap<infer KeyType, infer ValueType>
  ? ReadonlyMap<PartialDeepType<KeyType>, PartialDeepType<ValueType>>
  : {
      [K in keyof T]?: PartialDeepType<T[K]>;
    };
