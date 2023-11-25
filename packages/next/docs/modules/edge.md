[@chatbotkit/next](../README.md) / [Modules](../modules.md) / edge

# Module: edge

## Table of contents

### References

- [default](edge.md#default)

### Type Aliases

- [IterableObject](edge.md#iterableobject)

### Functions

- [stream](edge.md#stream)

## References

### default

Renames and re-exports [stream](edge.md#stream)

## Type Aliases

### IterableObject

Ƭ **IterableObject**\<\>: `Generator`\<`object`\> \| `AsyncGenerator`\<`object`\>

#### Defined in

[edge.js:2](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/next/src/edge.js#L2)

## Functions

### stream

▸ **stream**(`source`): `Response`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`IterableObject`](edge.md#iterableobject) \| \{ `stream`: () => [`IterableObject`](edge.md#iterableobject)  } |

#### Returns

`Response`

#### Defined in

[edge.js:7](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/next/src/edge.js#L7)
