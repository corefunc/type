# Class

## Key of class

> Checks if name is a key of class. String only, no Symbols or Numbers.

_Since `1.3.2`_

```typescript
import { keyOfClass } from "@corefunc/type/class/key-of-class";

class User {
  public static readonly name: string = keyOfClass<User>("name");
  public readonly name: string;
}
```
