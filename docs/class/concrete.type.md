# Class

## Concrete

> Disallow 'optional' properties from inherited type.

_Since `1.2.0`_

```typescript
import type { ConcreteType } from "@corefunc/type/class/concrete.type";

interface UserInterface {
  email: string;
  nickname?: string;
}

class User implements ConcreteType<UserInterface> {
  email: string;
  nickname: string | undefined;
}
```
