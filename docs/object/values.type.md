# Object

## Values

_Since `1.3.5`_

```typescript
import type { ValuesType } from '@corefunc/type/object/values.type';

export const VALUES: (keyof ValuesType<typeof EnumAlpha & typeof EnumBeta>)[] = [
  ...Object.values(EnumAlpha),
  ...Object.values(EnumBeta),
];
```
