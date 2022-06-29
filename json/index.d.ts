export declare type JsonPrimitiveType = boolean | null | number | string;
export interface JsonArrayType extends Array<JsonType> {
    [key: number]: JsonType;
}
export interface JsonObjectType extends Record<string, JsonType> {
    [key: string]: JsonType;
}
export declare type JsonType = JsonPrimitiveType | JsonArrayType | JsonObjectType;
