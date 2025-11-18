[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [memory](../modules/memory.md) / MemoryClient

# Class: MemoryClient

[memory](../modules/memory.md).MemoryClient

Memory client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`MemoryClient`**

## Table of contents

### Constructors

- [constructor](memory.MemoryClient.md#constructor)

### Methods

- [create](memory.MemoryClient.md#create)
- [delete](memory.MemoryClient.md#delete)
- [export](memory.MemoryClient.md#export)
- [extend](memory.MemoryClient.md#extend)
- [fetch](memory.MemoryClient.md#fetch)
- [list](memory.MemoryClient.md#list)
- [search](memory.MemoryClient.md#search)
- [update](memory.MemoryClient.md#update)

## Constructors

### constructor

• **new MemoryClient**(`options`): [`MemoryClient`](memory.MemoryClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`MemoryClient`](memory.MemoryClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[memory/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L25)

## Methods

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L55)

___

### delete

▸ **delete**(`memoryId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoryId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/index.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L76)

___

### export

▸ **export**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Exports memories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`MemoryExportRequest`](../modules/memory_v1.md#memoryexportrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[memory/index.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L86)

___

### extend

▸ **extend**(`extensionOptions`): [`MemoryClient`](memory.MemoryClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`MemoryClient`](memory.MemoryClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`memoryId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoryId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[memory/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L45)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all memories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`MemoryListRequest`](../modules/memory_v1.md#memorylistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[memory/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L35)

___

### search

▸ **search**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Searches for memories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/index.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L96)

___

### update

▸ **update**(`memoryId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoryId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L66)
