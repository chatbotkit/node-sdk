[@chatbotkit/react](../README.md) / [Modules](../modules.md) / utils/stream

# Module: utils/stream

## Table of contents

### Functions

- [consume](utils_stream.md#consume)
- [stream](utils_stream.md#stream)

## Functions

### consume

▸ **consume**(`source`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[asyncIterator]` | () => \{ `current`: `any` = source; `next`: () => `Promise`\<`any`\>  } |

**`Todo`**

come up with a better type for source

#### Defined in

[utils/stream.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L36)

___

### stream

▸ **stream**(`source`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `any` |

#### Returns

`Promise`\<`any`\>

**`Todo`**

come up with a better type for source

#### Defined in

[utils/stream.js:6](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L6)
