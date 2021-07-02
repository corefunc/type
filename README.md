![CoreFunc Type](https://raw.githubusercontent.com/corefunc/type/master/.github/assets/logo_128.png?raw=true "CoreFunc Type")

# CoreFunc Type

TypeScript common types.

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![TypeScript Typings][ts-img]][ts-url]

# Reference

## Number

### Float

```typescript
import { TypeFloatRange, isFloatRange, assertFloatRange } from '@corefunc/type';
const value: TypeFloatRange<0.01, 99.99> = 10.50;
```

### Integer 16

```typescript
import { TypeInteger16, isInteger16, assertInteger16 } from '@corefunc/type';
const value: TypeInteger16 = 32_767;
```

### Integer 32

```typescript
import { TypeInteger32, isInteger32, assertInteger32 } from '@corefunc/type';
const value: TypeInteger32 = 2_147_483_647;
```

### Integer 64

```typescript
import { TypeInteger64, isInteger64, assertInteger64 } from '@corefunc/type';
const value: TypeInteger64 = 9_223_372_036_854_775_807;
```

### Integer Range

```typescript
import { TypeIntegerRange, isIntegerRange, assertIntegerRange } from '@corefunc/type';
const value: TypeIntegerRange<0, 100> = 50;
```

### Numeric

```typescript
import { TypeNumeric, isNumeric, assertNumeric } from '@corefunc/type';
const value: TypeNumeric<5, 2> = 999.99;
```

## String

### String Date

```typescript
import { TypeStringDate, isStringDate, assertStringDate } from '@corefunc/type';
const value: TypeStringDate = "2020-01-01";
```

### String Fixed

```typescript
import { TypeStringFixed, isStringFixed, assertStringFixed } from '@corefunc/type';
const value: TypeStringFixed<3> = "USD";
```

### String Of Length

```typescript
import { TypeStringOfLength, isStringOfLength, assertStringOfLength } from '@corefunc/type';
const value: TypeStringOfLength<2, 99> = "Billy";
```

### String Time

```typescript
import { TypeStringTime, isStringTime, assertStringTime } from '@corefunc/type';
const value: TypeStringTime = "12:59";
```

### String Varying

```typescript
import { TypeStringVarying, isStringVarying, assertStringVarying } from '@corefunc/type';
const value: TypeStringVarying<254> = "user+inbox@domain";
```

### UUID

```typescript
import { TypeUUID, isUuid, assertUuid } from '@corefunc/type';
const value: TypeUUID = "0b0bc0f0-db42-11eb-8d19-0242ac130003";
```

### UUID 4

```typescript
import { TypeUUID4, isUuid4, assertUuid4 } from '@corefunc/type';
const value: TypeUUID4 = "155fbaaf-09de-4141-80df-94696eed4cb6";
```

## See also

[💾 My other projects](https://r37r0m0d3l.icu/open_source_map)

<img alt="Open Source" src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

<!-- Badges -->

[npm-version-url]: https://npmjs.com/package/@corefunc/type
[npm-version-img]: https://badgen.net/npm/v/@corefunc/type?&icon=npm&label=npm&color=DD3636
[npm-downloads-url]: https://npmjs.com/package/@corefunc/type
[npm-downloads-img]: https://badgen.net/npm/dt/@corefunc/type?&icon=terminal&label=downloads&color=009688
[ts-url]: https://github.com/corefunc/type/blob/master/index.d.ts
[ts-img]: https://badgen.net/npm/types/@corefunc/type?&icon=typescript&label=types&color=1E90FF
