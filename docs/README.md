![CoreFunc Type](https://raw.githubusercontent.com/corefunc/type/master/.github/assets/logo_128.png?raw=true "CoreFunc Type")

# CoreFunc Type

TypeScript common types.

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![TypeScript Typings][ts-img]][ts-url]

# Reference

## Class

### Complete

```typescript
import type { CompleteType } from "@corefunc/type/class/complete.type";
interface UserInterface {
  name: string;
  zip: string;
}
// Forces class to implement all interface properties.
class User implements CompleteType<UserInterface> {
  public name: string;
  public zip: string;
}
```

### Concrete

```typescript
import type { ConcreteType } from "@corefunc/type/class/concrete.type";
interface UserInterface {
  email: string;
  nickname?: string;
}
// Disallow 'optional' properties from inherited type.
class User implements ConcreteType<UserInterface> {
  email: string;
  nickname: string | undefined;
}
```

### Constructor

```typescript
import type { ConstructorType } from "@corefunc/type/class/constructor.type";

class ExchangeClient {}

function mixinApiPostUser<T extends ConstructorType<ExchangeClient>>(superClass: T) {
  return class extends superClass {
    public postUser(data: any) {
      return this.post(`/users/`, data);
    }
  };
}

function mixinApiGetUser<T extends ConstructorType<ExchangeClient>>(superClass: T) {
  return class extends superClass {
    public getUser(id: string) {
      return this.get(`/users/${id}`);
    }
  };
}

class ApiClient extends mixinApiPostUser(mixinApiGetUser(ExchangeClient)) {}
```

## Number

### Float

```typescript
import { isFloatRange, assertFloatRange } from "@corefunc/type";
import { TypeFloatRange, FloatRangeType, FloatRange } from "@corefunc/type";
const value: TypeFloatRange<0.01, 99.99> = 10.5;
```

### Integer 16

```typescript
import { isInteger16, assertInteger16, INT16, INT16_MAX, INT16_MIN } from "@corefunc/type";
import type { TypeInteger16, Integer16Type, Integer16 } from "@corefunc/type";
const value: TypeInteger16 = 32_767;
```

### Integer 32

```typescript
import { isInteger32, assertInteger32, INT32, INT32_MAX, INT32_MIN } from "@corefunc/type";
import type { TypeInteger32, Integer32Type, Integer32 } from "@corefunc/type";
const value: TypeInteger32 = 2_147_483_647;
```

### Integer 64

```typescript
import { isInteger64, assertInteger64, INT64, INT64_MAX, INT64_MIN } from "@corefunc/type";
import type { TypeInteger64, Integer64Type, Integer64 } from "@corefunc/type";
const value: TypeInteger64 = 9_223_372_036_854_775_807;
```

### Integer Range

```typescript
import { isIntegerRange, assertIntegerRange } from "@corefunc/type";
import type { TypeIntegerRange, IntegerRangeType, IntegerRange } from "@corefunc/type";
const value: TypeIntegerRange<0, 100> = 50;
```

### Numeric

```typescript
import { isNumeric, assertNumeric } from "@corefunc/type";
import type { TypeNumeric, NumericType, Numeric } from "@corefunc/type";
const value: TypeNumeric<5, 2> = 999.99;
```

## String

### String Date

```typescript
import { isStringDate, assertStringDate } from "@corefunc/type";
import type { TypeStringDate, StringDateType, StringDate } from "@corefunc/type";
const value: StringDate = "2020-01-01";
```

### String Fixed

```typescript
import { isStringFixed, assertStringFixed } from "@corefunc/type";
import type { TypeStringFixed, StringFixedType, StringFixed } from "@corefunc/type";
const value: StringFixed<3> = "USD";
```

### String Of Length

```typescript
import { isStringOfLength, assertStringOfLength } from "@corefunc/type";
import type { TypeStringOfLength, StringOfLengthType, StringOfLength } from "@corefunc/type";
const value: StringOfLength<2, 99> = "Billy";
```

### String Time

```typescript
import { isStringTime, assertStringTime } from "@corefunc/type";
import type { TypeStringTime, StringTimeType, StringTime } from "@corefunc/type";
const value: StringTime = "12:59";
```

### String Varying

```typescript
import { isStringVarying, assertStringVarying } from "@corefunc/type";
import type { TypeStringVarying, StringVaryingType, StringVarying } from "@corefunc/type";
const value: StringVarying<254> = "user+inbox@domain";
```

### UUID

```typescript
import { isUuid, assertUuid } from "@corefunc/type";
import type { TypeUUID, UUIDType, UUID } from "@corefunc/type";
const value: UUID = "0b0bc0f0-db42-11eb-8d19-0242ac130003";
```

### UUID 4

```typescript
import { isUuid4, assertUuid4 } from "@corefunc/type";
import type { TypeUUID4, UUID4Type, UUID4 } from "@corefunc/type";
const value: UUID4 = "155fbaaf-09de-4141-80df-94696eed4cb6";
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
