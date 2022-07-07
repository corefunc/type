# Class

## Complete

>  Forces class to implement all interface properties.

_Since `1.1.0`_

```typescript
import type { CompleteType } from "@corefunc/type/class/complete.type";

interface UserInterface {
  name: string;
  zip: string;
}

class User implements CompleteType<UserInterface> {
  public name: string;
  public zip: string;
}
```
