[@chatbotkit/nextauth](../README.md) / [Modules](../modules.md) / [adapter](../modules/adapter.md) / MemoryStore

# Class: MemoryStore

[adapter](../modules/adapter.md).MemoryStore

A store that uses memory. Do not use in production.

## Hierarchy

- [`Store`](adapter.Store.md)

  ↳ **`MemoryStore`**

## Table of contents

### Methods

- [del](adapter.MemoryStore.md#del)
- [get](adapter.MemoryStore.md#get)
- [set](adapter.MemoryStore.md#set)

## Methods

### del

▸ **del**(`key`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Overrides

[Store](adapter.Store.md).[del](adapter.Store.md#del)

#### Defined in

[adapter.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/nextauth/src/adapter.js#L85)

___

### get

▸ **get**(`key`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

#### Overrides

[Store](adapter.Store.md).[get](adapter.Store.md#get)

#### Defined in

[adapter.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/nextauth/src/adapter.js#L68)

___

### set

▸ **set**(`key`, `value`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Overrides

[Store](adapter.Store.md).[set](adapter.Store.md#set)

#### Defined in

[adapter.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/nextauth/src/adapter.js#L77)
