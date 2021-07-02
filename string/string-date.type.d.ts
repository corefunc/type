declare type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
declare type YearPrefix = '20';
declare type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';
declare type DayPrefix = '0' | '1' | '2' | '3';
export declare type TypeStringDate = `${YearPrefix}${Digit}${Digit}-${Month}-${DayPrefix}${Digit}`;
export declare function isStringDate(inputString: string): inputString is TypeStringDate;
export declare function assertStringDate(inputString: unknown): TypeStringDate;
export {};
