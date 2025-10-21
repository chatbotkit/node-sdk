[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / memory/v1

# Module: memory/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](memory_v1.md#chatbotkitclient)
- [MemoryCreateRequest](memory_v1.md#memorycreaterequest)
- [MemoryCreateRequestBody](memory_v1.md#memorycreaterequestbody)
- [MemoryCreateResponse](memory_v1.md#memorycreateresponse)
- [MemoryDeleteRequestBody](memory_v1.md#memorydeleterequestbody)
- [MemoryDeleteResponse](memory_v1.md#memorydeleteresponse)
- [MemoryExportRequest](memory_v1.md#memoryexportrequest)
- [MemoryExportResponse](memory_v1.md#memoryexportresponse)
- [MemoryExportStreamType](memory_v1.md#memoryexportstreamtype)
- [MemoryFetchResponse](memory_v1.md#memoryfetchresponse)
- [MemoryListRequest](memory_v1.md#memorylistrequest)
- [MemoryListResponse](memory_v1.md#memorylistresponse)
- [MemoryListStreamType](memory_v1.md#memoryliststreamtype)
- [MemorySearchRequest](memory_v1.md#memorysearchrequest)
- [MemorySearchRequestBody](memory_v1.md#memorysearchrequestbody)
- [MemorySearchResponse](memory_v1.md#memorysearchresponse)
- [MemoryUpdateRequest](memory_v1.md#memoryupdaterequest)
- [MemoryUpdateRequestBody](memory_v1.md#memoryupdaterequestbody)
- [MemoryUpdateResponse](memory_v1.md#memoryupdateresponse)
- [ResponsePromise](memory_v1.md#responsepromise)

### Functions

- [createMemory](memory_v1.md#creatememory)
- [deleteMemory](memory_v1.md#deletememory)
- [exportMemories](memory_v1.md#exportmemories)
- [fetchMemory](memory_v1.md#fetchmemory)
- [listMemories](memory_v1.md#listmemories)
- [searchMemory](memory_v1.md#searchmemory)
- [updateMemory](memory_v1.md#updatememory)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[memory/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L2)

___

### MemoryCreateRequest

Ƭ **MemoryCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `contactId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `text?` | `string` |

#### Defined in

[memory/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L62)

___

### MemoryCreateRequestBody

Ƭ **MemoryCreateRequestBody**\<\>: `operations`[``"createMemory"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L64)

___

### MemoryCreateResponse

Ƭ **MemoryCreateResponse**\<\>: `operations`[``"createMemory"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L66)

___

### MemoryDeleteRequestBody

Ƭ **MemoryDeleteRequestBody**\<\>: `operations`[``"deleteMemory"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L120)

___

### MemoryDeleteResponse

Ƭ **MemoryDeleteResponse**\<\>: `operations`[``"deleteMemory"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L122)

___

### MemoryExportRequest

Ƭ **MemoryExportRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `contactId?` | `string` |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[memory/v1.js:148](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L148)

___

### MemoryExportResponse

Ƭ **MemoryExportResponse**\<\>: `operations`[``"exportMemories"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:150](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L150)

___

### MemoryExportStreamType

Ƭ **MemoryExportStreamType**\<\>: `operations`[``"exportMemories"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[memory/v1.js:152](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L152)

___

### MemoryFetchResponse

Ƭ **MemoryFetchResponse**\<\>: `operations`[``"fetchMemory"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L39)

___

### MemoryListRequest

Ƭ **MemoryListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `contactId?` | `string` |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[memory/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L19)

___

### MemoryListResponse

Ƭ **MemoryListResponse**\<\>: `operations`[``"listMemories"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L21)

___

### MemoryListStreamType

Ƭ **MemoryListStreamType**\<\>: `operations`[``"listMemories"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[memory/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L23)

___

### MemorySearchRequest

Ƭ **MemorySearchRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `contactId?` | `string` |
| `search` | `string` |

#### Defined in

[memory/v1.js:172](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L172)

___

### MemorySearchRequestBody

Ƭ **MemorySearchRequestBody**\<\>: `operations`[``"searchMemory"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:174](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L174)

___

### MemorySearchResponse

Ƭ **MemorySearchResponse**\<\>: `operations`[``"searchMemory"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:176](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L176)

___

### MemoryUpdateRequest

Ƭ **MemoryUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `contactId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `text?` | `string` |

#### Defined in

[memory/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L94)

___

### MemoryUpdateRequestBody

Ƭ **MemoryUpdateRequestBody**\<\>: `operations`[``"updateMemory"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L96)

___

### MemoryUpdateResponse

Ƭ **MemoryUpdateResponse**\<\>: `operations`[``"updateMemory"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L98)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[memory/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L8)

## Functions

### createMemory

▸ **createMemory**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`MemoryCreateRequest`](memory_v1.md#memorycreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L72)

___

### deleteMemory

▸ **deleteMemory**(`client`, `memoryId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `memoryId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L128)

___

### exportMemories

▸ **exportMemories**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`MemoryExportRequest`](memory_v1.md#memoryexportrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[memory/v1.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L158)

___

### fetchMemory

▸ **fetchMemory**(`client`, `memoryId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `memoryId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[memory/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L45)

___

### listMemories

▸ **listMemories**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`MemoryListRequest`](memory_v1.md#memorylistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[memory/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L29)

___

### searchMemory

▸ **searchMemory**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`MemorySearchRequest`](memory_v1.md#memorysearchrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/v1.js:182](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L182)

___

### updateMemory

▸ **updateMemory**(`client`, `memoryId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `memoryId` | `string` |
| `request` | [`MemoryUpdateRequest`](memory_v1.md#memoryupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L105)
