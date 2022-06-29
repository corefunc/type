/**
 * @category Class
 * @name keyOfClass
 * @description Checks if name is a key of class. String only, no Symbols or Numbers.
 * @summary ```import type { keyOfClass } from "@corefunc/type/class/key-of-class";```
 * @returns {(propertyName: string) => string}
 * @since 1.3.2
 */
export declare function keyOfClass<ClassName>(propertyName: keyof ClassName): string;
