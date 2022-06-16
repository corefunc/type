/**
 * @description Forces class to implement all interface properties.
 * @summary ```import type { CompleteType } from '@corefunc/type/class/complete.type';```
 * @since 1.1.0
 */
export declare type CompleteType<Interface> = {
    [Property in keyof Required<Interface>]: Pick<Interface, Property> extends Required<Pick<Interface, Property>> ? Interface[Property] : Interface[Property] | undefined;
};
