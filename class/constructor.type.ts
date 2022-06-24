/**
 * @description Generic constructor type.
 * @summary ```import type { ConstructorType } from '@corefunc/type/class/constructor.type';```
 * @since 1.3.0
 */
export type ConstructorType<T> = new (...args: any[]) => T;
