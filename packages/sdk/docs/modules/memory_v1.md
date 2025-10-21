[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / memory/v1

# Module: memory/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](memory_v1.md#chatbotkitclient)
- [MemoryCreateRequest](memory_v1.md#memorycreaterequest)
- [MemoryCreateRequestBody](memory_v1.md#memorycreaterequestbody)
- [MemoryCreateResponse](memory_v1.md#memorycreateresponse)
- [MemoryCreateResponseBody](memory_v1.md#memorycreateresponsebody)
- [MemoryDeleteRequest](memory_v1.md#memorydeleterequest)
- [MemoryDeleteRequestBody](memory_v1.md#memorydeleterequestbody)
- [MemoryDeleteResponse](memory_v1.md#memorydeleteresponse)
- [MemoryDeleteResponseBody](memory_v1.md#memorydeleteresponsebody)
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
- [MemorySearchResponseBody](memory_v1.md#memorysearchresponsebody)
- [MemoryUpdateRequest](memory_v1.md#memoryupdaterequest)
- [MemoryUpdateRequestBody](memory_v1.md#memoryupdaterequestbody)
- [MemoryUpdateResponse](memory_v1.md#memoryupdateresponse)
- [MemoryUpdateResponseBody](memory_v1.md#memoryupdateresponsebody)
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

Ƭ **MemoryCreateRequest**\<\>: [`MemoryCreateRequestBody`](memory_v1.md#memorycreaterequestbody)

#### Defined in

[memory/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L57)

___

### MemoryCreateRequestBody

Ƭ **MemoryCreateRequestBody**\<\>: `operations`[``"createMemory"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L55)

___

### MemoryCreateResponse

Ƭ **MemoryCreateResponse**\<\>: [`MemoryCreateResponseBody`](memory_v1.md#memorycreateresponsebody)

#### Defined in

[memory/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L61)

___

### MemoryCreateResponseBody

Ƭ **MemoryCreateResponseBody**\<\>: `operations`[``"createMemory"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L59)

___

### MemoryDeleteRequest

Ƭ **MemoryDeleteRequest**\<\>: [`MemoryDeleteRequestBody`](memory_v1.md#memorydeleterequestbody)

#### Defined in

[memory/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L112)

___

### MemoryDeleteRequestBody

Ƭ **MemoryDeleteRequestBody**\<\>: `operations`[``"deleteMemory"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L110)

___

### MemoryDeleteResponse

Ƭ **MemoryDeleteResponse**\<\>: [`MemoryDeleteResponseBody`](memory_v1.md#memorydeleteresponsebody)

#### Defined in

[memory/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L116)

___

### MemoryDeleteResponseBody

Ƭ **MemoryDeleteResponseBody**\<\>: `operations`[``"deleteMemory"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L114)

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

[memory/v1.js:142](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L142)

___

### MemoryExportResponse

Ƭ **MemoryExportResponse**\<\>: `operations`[``"exportMemories"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:144](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L144)

___

### MemoryExportStreamType

Ƭ **MemoryExportStreamType**\<\>: `operations`[``"exportMemories"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[memory/v1.js:146](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L146)

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

Ƭ **MemorySearchRequest**\<\>: [`MemorySearchRequestBody`](memory_v1.md#memorysearchrequestbody)

#### Defined in

[memory/v1.js:164](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L164)

___

### MemorySearchRequestBody

Ƭ **MemorySearchRequestBody**\<\>: `operations`[``"searchMemory"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:162](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L162)

___

### MemorySearchResponse

Ƭ **MemorySearchResponse**\<\>: [`MemorySearchResponseBody`](memory_v1.md#memorysearchresponsebody)

#### Defined in

[memory/v1.js:168](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L168)

___

### MemorySearchResponseBody

Ƭ **MemorySearchResponseBody**\<\>: `operations`[``"searchMemory"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:166](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L166)

___

### MemoryUpdateRequest

Ƭ **MemoryUpdateRequest**\<\>: [`MemoryUpdateRequestBody`](memory_v1.md#memoryupdaterequestbody)

#### Defined in

[memory/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L84)

___

### MemoryUpdateRequestBody

Ƭ **MemoryUpdateRequestBody**\<\>: `operations`[``"updateMemory"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L82)

___

### MemoryUpdateResponse

Ƭ **MemoryUpdateResponse**\<\>: [`MemoryUpdateResponseBody`](memory_v1.md#memoryupdateresponsebody)

#### Defined in

[memory/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L88)

___

### MemoryUpdateResponseBody

Ƭ **MemoryUpdateResponseBody**\<\>: `operations`[``"updateMemory"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[memory/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L86)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L67)

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

[memory/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L122)

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

[memory/v1.js:152](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L152)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/v1.js:174](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L174)

___

### updateMemory

▸ **updateMemory**(`client`, `memoryId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `memoryId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[memory/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L95)
