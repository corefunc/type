export type JsonPrimitiveType = boolean | null | number | string;

export interface JsonArrayType extends Array<JsonType> {
  [key: number]: JsonType;
}

export interface JsonObjectType extends Record<string, JsonType> {
  [key: string]: JsonType;
}

export type JsonType = JsonPrimitiveType | JsonArrayType | JsonObjectType;
