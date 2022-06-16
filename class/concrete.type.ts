/**
 * @description Disallow 'optional' properties from inherited type.
 * @summary ```import type { ConcreteType } from '@corefunc/type/class/concrete.type';```
 * @since 1.2.0
 */
export type ConcreteType<Interface> = {
  [Property in keyof Interface]-?: Interface[Property];
};
