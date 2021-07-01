import { isUUID } from "class-validator";

export type TypeUUID4 = string & {
  readonly __uuid_4__: void;
};

export function isUuid4(inputUUID4: string): inputUUID4 is TypeUUID4 {
  return isUUID(inputUUID4, 4);
}

export function assertUuid4(inputUUID4: unknown): TypeUUID4 {
  if (typeof inputUUID4 !== "string") {
    throw new Error(`Invalid input [${inputUUID4}], value is not a string`);
  }
  if (!isUuid4(inputUUID4)) {
    throw new Error(`Input string [${inputUUID4}] is not UUID 4`);
  }
  return inputUUID4;
}
