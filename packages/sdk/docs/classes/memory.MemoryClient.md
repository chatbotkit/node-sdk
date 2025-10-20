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

- [clientFetch](memory.MemoryClient.md#clientfetch)
- [create](memory.MemoryClient.md#create)
- [delete](memory.MemoryClient.md#delete)
- [export](memory.MemoryClient.md#export)
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

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryCreateResponse`](../modules/memory_v1.md#memorycreateresponse)\>

Creates a new memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`MemoryOptions`](../modules/memory_v1.md#memoryoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryCreateResponse`](../modules/memory_v1.md#memorycreateresponse)\>

#### Defined in

[memory/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L55)

___

### delete

▸ **delete**(`memoryId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryDeleteResponse`](../modules/memory_v1.md#memorydeleteresponse)\>

Deletes the memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoryId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryDeleteResponse`](../modules/memory_v1.md#memorydeleteresponse)\>

#### Defined in

[memory/index.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L76)

___

### export

▸ **export**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`MemoryExportResponse`](../modules/memory_v1.md#memoryexportresponse), [`MemoryExportStreamItemType`](../modules/memory_v1.md#memoryexportstreamitemtype)\>

Exports memories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`MemoryExportRequest`](../modules/memory_v1.md#memoryexportrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`MemoryExportResponse`](../modules/memory_v1.md#memoryexportresponse), [`MemoryExportStreamItemType`](../modules/memory_v1.md#memoryexportstreamitemtype)\>

#### Defined in

[memory/index.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L86)

___

### fetch

▸ **fetch**(`memoryId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`MemoryFetchResponse`](../modules/memory_v1.md#memoryfetchresponse), `never`\>

Fetches a memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoryId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`MemoryFetchResponse`](../modules/memory_v1.md#memoryfetchresponse), `never`\>

#### Defined in

[memory/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L45)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`MemoryListResponse`](../modules/memory_v1.md#memorylistresponse), [`MemoryListStreamItemType`](../modules/memory_v1.md#memoryliststreamitemtype)\>

Retrieves a list of all memories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`MemoryListRequest`](../modules/memory_v1.md#memorylistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`MemoryListResponse`](../modules/memory_v1.md#memorylistresponse), [`MemoryListStreamItemType`](../modules/memory_v1.md#memoryliststreamitemtype)\>

#### Defined in

[memory/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L35)

___

### search

▸ **search**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemorySearchResponse`](../modules/memory_v1.md#memorysearchresponse)\>

Searches for memories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`MemorySearchRequest`](../modules/memory_v1.md#memorysearchrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemorySearchResponse`](../modules/memory_v1.md#memorysearchresponse)\>

#### Defined in

[memory/index.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L96)

___

### update

▸ **update**(`memoryId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryUpdateResponse`](../modules/memory_v1.md#memoryupdateresponse)\>

Updates a memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoryId` | `string` |
| `request` | [`MemoryOptions`](../modules/memory_v1.md#memoryoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryUpdateResponse`](../modules/memory_v1.md#memoryupdateresponse)\>

#### Defined in

[memory/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L66)
