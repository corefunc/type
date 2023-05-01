/**
 * @description Requires all of the given keys or none of the given keys in the given interface.
 * @summary ```import type { AllOrNoneType } from '@corefunc/type/class/all-or-none.type';```
 * @since 1.5.0
 */
export declare type AllOrNoneType<Interface, Keys extends keyof Interface> = (Required<Pick<Interface, Keys>> | Partial<Record<Keys, never>>) & Omit<Interface, Keys>;
