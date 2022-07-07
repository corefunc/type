"use strict";
exports.__esModule = true;
exports.keyOfClass = void 0;
/**
 * @category Class
 * @name keyOfClass
 * @description Checks if name is a key of class. String only, no Symbols or Numbers.
 * @summary ```import type { keyOfClass } from "@corefunc/type/class/key-of-class";```
 * @returns {string}
 * @since 1.3.2
 */
function keyOfClass(propertyName) {
    return String(propertyName);
}
exports.keyOfClass = keyOfClass;
