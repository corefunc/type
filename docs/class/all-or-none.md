# Class

## All or None

> Requires all of the given keys or none of the given keys in the given interface.

_Since `1.5.0`_

```typescript
import { type AllOrNoneType } from "@corefunc/type/class/all-or-none.type";

interface User {
  name: string;
  age?: number;
  email?: number;
}

const user_1: AllOrNoneType<User, "age" | "email"> = {
  name: "John",
};

const user_2: AllOrNoneType<User, "age" | "email"> = {
  name: "John",
  age: 33,
  email: "john@doe.email",
};
```
