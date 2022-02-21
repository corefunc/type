declare type HourPrefix = "0" | "1" | "2";
declare type MinutePrefix = HourPrefix | "3" | "4" | "5";
declare type Digit = MinutePrefix | "6" | "7" | "8" | "9";
export declare type TypeStringTime = `${HourPrefix}${Digit}:${MinutePrefix}${Digit}`;
export declare function isStringTime(inputString: string): inputString is TypeStringTime;
export declare function assertStringTime(inputString: unknown): TypeStringTime;
export {};
