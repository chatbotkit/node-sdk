[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / MemoryClient

# Class: MemoryClient

[index](../modules/index.md).MemoryClient

Memory client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`MemoryClient`**

## Table of contents

### Constructors

- [constructor](index.MemoryClient.md#constructor)

### Methods

- [clientFetch](index.MemoryClient.md#clientfetch)
- [create](index.MemoryClient.md#create)
- [delete](index.MemoryClient.md#delete)
- [export](index.MemoryClient.md#export)
- [fetch](index.MemoryClient.md#fetch)
- [list](index.MemoryClient.md#list)
- [search](index.MemoryClient.md#search)
- [update](index.MemoryClient.md#update)

## Constructors

### constructor

• **new MemoryClient**(`options`): [`MemoryClient`](index.MemoryClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`MemoryClient`](index.MemoryClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[memory/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L25)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:331](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L331)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`MemoryCreateResponse`\>

Creates a new memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `MemoryOptions` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`MemoryCreateResponse`\>

#### Defined in

[memory/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L55)

___

### delete

▸ **delete**(`memoryId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`MemoryDeleteResponse`\>

Deletes the memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoryId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`MemoryDeleteResponse`\>

#### Defined in

[memory/index.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L76)

___

### export

▸ **export**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<`MemoryExportResponse`, `MemoryExportStreamItemType`\>

Exports memories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | `MemoryExportRequest` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`MemoryExportResponse`, `MemoryExportStreamItemType`\>

#### Defined in

[memory/index.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L86)

___

### fetch

▸ **fetch**(`memoryId`): [`ResponsePromise`](client.ResponsePromise.md)\<`MemoryFetchResponse`, `never`\>

Fetches a memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoryId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`MemoryFetchResponse`, `never`\>

#### Defined in

[memory/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L45)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<`MemoryListResponse`, `MemoryListStreamItemType`\>

Retrieves a list of all memories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | `MemoryListRequest` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`MemoryListResponse`, `MemoryListStreamItemType`\>

#### Defined in

[memory/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L35)

___

### search

▸ **search**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`MemorySearchResponse`\>

Searches for memories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `MemorySearchRequest` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`MemorySearchResponse`\>

#### Defined in

[memory/index.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L96)

___

### update

▸ **update**(`memoryId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`MemoryUpdateResponse`\>

Updates a memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoryId` | `string` |
| `request` | `MemoryOptions` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`MemoryUpdateResponse`\>

#### Defined in

[memory/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L66)
