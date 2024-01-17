[@chatbotkit/nextauth](../README.md) / [Modules](../modules.md) / [adapter](../modules/adapter.md) / Store

# Class: Store

[adapter](../modules/adapter.md).Store

A basic store for ChatBotKitPartnerAdapter. It is compatible with Redis.
Implement your own if you want to use a different storage.

## Hierarchy

- **`Store`**

  ↳ [`MemoryStore`](adapter.MemoryStore.md)

## Table of contents

### Methods

- [del](adapter.Store.md#del)
- [get](adapter.Store.md#get)
- [set](adapter.Store.md#set)

## Methods

### del

▸ **del**(`key`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[adapter.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/nextauth/src/adapter.js#L47)

___

### get

▸ **get**(`key`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[adapter.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/nextauth/src/adapter.js#L23)

___

### set

▸ **set**(`key`, `value`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |
| `options?` | `Object` |
| `options.px?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[adapter.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/nextauth/src/adapter.js#L35)
