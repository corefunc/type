# Class

## Constructor

> Generic constructor type.

_Since `1.3.0`_

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

class ApiClient extends
  mixinApiPostUser(
    mixinApiGetUser(
      ExchangeClient
    )
  ) {}
```
