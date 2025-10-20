[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / memory/v1

# Module: memory/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](memory_v1.md#chatbotkitclient)
- [MemoryCreateRequest](memory_v1.md#memorycreaterequest)
- [MemoryCreateResponse](memory_v1.md#memorycreateresponse)
- [MemoryDeleteResponse](memory_v1.md#memorydeleteresponse)
- [MemoryExportRequest](memory_v1.md#memoryexportrequest)
- [MemoryExportResponse](memory_v1.md#memoryexportresponse)
- [MemoryExportStreamItemType](memory_v1.md#memoryexportstreamitemtype)
- [MemoryExportStreamType](memory_v1.md#memoryexportstreamtype)
- [MemoryFetchResponse](memory_v1.md#memoryfetchresponse)
- [MemoryInstance](memory_v1.md#memoryinstance)
- [MemoryListRequest](memory_v1.md#memorylistrequest)
- [MemoryListResponse](memory_v1.md#memorylistresponse)
- [MemoryListStreamItemType](memory_v1.md#memoryliststreamitemtype)
- [MemoryListStreamType](memory_v1.md#memoryliststreamtype)
- [MemoryOptions](memory_v1.md#memoryoptions)
- [MemorySearchItem](memory_v1.md#memorysearchitem)
- [MemorySearchRequest](memory_v1.md#memorysearchrequest)
- [MemorySearchResponse](memory_v1.md#memorysearchresponse)
- [MemoryUpdateRequest](memory_v1.md#memoryupdaterequest)
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

Ƭ **MemoryCreateRequest**\<\>: [`MemoryOptions`](memory_v1.md#memoryoptions) & {}

#### Defined in

[memory/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L82)

___

### MemoryCreateResponse

Ƭ **MemoryCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[memory/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L86)

___

### MemoryDeleteResponse

Ƭ **MemoryDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[memory/v1.js:136](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L136)

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

[memory/v1.js:162](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L162)

___

### MemoryExportResponse

Ƭ **MemoryExportResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`MemoryInstance`](memory_v1.md#memoryinstance)[] |

#### Defined in

[memory/v1.js:164](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L164)

___

### MemoryExportStreamItemType

Ƭ **MemoryExportStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`MemoryInstance`](memory_v1.md#memoryinstance) |
| `type` | ``"item"`` |

#### Defined in

[memory/v1.js:169](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L169)

___

### MemoryExportStreamType

Ƭ **MemoryExportStreamType**\<\>: [`MemoryExportStreamItemType`](memory_v1.md#memoryexportstreamitemtype)

#### Defined in

[memory/v1.js:171](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L171)

___

### MemoryFetchResponse

Ƭ **MemoryFetchResponse**\<\>: [`MemoryInstance`](memory_v1.md#memoryinstance) & {}

#### Defined in

[memory/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L64)

___

### MemoryInstance

Ƭ **MemoryInstance**\<\>: [`MemoryOptions`](memory_v1.md#memoryoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[memory/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L25)

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

[memory/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L36)

___

### MemoryListResponse

Ƭ **MemoryListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`MemoryInstance`](memory_v1.md#memoryinstance)[] |

#### Defined in

[memory/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L38)

___

### MemoryListStreamItemType

Ƭ **MemoryListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`MemoryInstance`](memory_v1.md#memoryinstance) |
| `type` | ``"item"`` |

#### Defined in

[memory/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L43)

___

### MemoryListStreamType

Ƭ **MemoryListStreamType**\<\>: [`MemoryListStreamItemType`](memory_v1.md#memoryliststreamitemtype)

#### Defined in

[memory/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L45)

___

### MemoryOptions

Ƭ **MemoryOptions**\<\>: `Object`

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

[memory/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L19)

___

### MemorySearchItem

Ƭ **MemorySearchItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `text` | `string` |

#### Defined in

[memory/v1.js:199](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L199)

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

[memory/v1.js:193](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L193)

___

### MemorySearchResponse

Ƭ **MemorySearchResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`MemorySearchItem`](memory_v1.md#memorysearchitem)[] |

#### Defined in

[memory/v1.js:203](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L203)

___

### MemoryUpdateRequest

Ƭ **MemoryUpdateRequest**\<\>: [`MemoryOptions`](memory_v1.md#memoryoptions) & {}

#### Defined in

[memory/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L108)

___

### MemoryUpdateResponse

Ƭ **MemoryUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[memory/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L112)

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

▸ **createMemory**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryCreateResponse`](memory_v1.md#memorycreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`MemoryOptions`](memory_v1.md#memoryoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryCreateResponse`](memory_v1.md#memorycreateresponse)\>

#### Defined in

[memory/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L92)

___

### deleteMemory

▸ **deleteMemory**(`client`, `memoryId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryDeleteResponse`](memory_v1.md#memorydeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `memoryId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryDeleteResponse`](memory_v1.md#memorydeleteresponse)\>

#### Defined in

[memory/v1.js:142](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L142)

___

### exportMemories

▸ **exportMemories**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MemoryExportResponse`](memory_v1.md#memoryexportresponse), [`MemoryExportStreamItemType`](memory_v1.md#memoryexportstreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`MemoryExportRequest`](memory_v1.md#memoryexportrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MemoryExportResponse`](memory_v1.md#memoryexportresponse), [`MemoryExportStreamItemType`](memory_v1.md#memoryexportstreamitemtype)\>

#### Defined in

[memory/v1.js:177](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L177)

___

### fetchMemory

▸ **fetchMemory**(`client`, `memoryId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MemoryFetchResponse`](memory_v1.md#memoryfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `memoryId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MemoryFetchResponse`](memory_v1.md#memoryfetchresponse), `never`\>

#### Defined in

[memory/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L70)

___

### listMemories

▸ **listMemories**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MemoryListResponse`](memory_v1.md#memorylistresponse), [`MemoryListStreamItemType`](memory_v1.md#memoryliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`MemoryListRequest`](memory_v1.md#memorylistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MemoryListResponse`](memory_v1.md#memorylistresponse), [`MemoryListStreamItemType`](memory_v1.md#memoryliststreamitemtype)\>

#### Defined in

[memory/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L51)

___

### searchMemory

▸ **searchMemory**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemorySearchResponse`](memory_v1.md#memorysearchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`MemorySearchRequest`](memory_v1.md#memorysearchrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemorySearchResponse`](memory_v1.md#memorysearchresponse)\>

#### Defined in

[memory/v1.js:209](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L209)

___

### updateMemory

▸ **updateMemory**(`client`, `memoryId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryUpdateResponse`](memory_v1.md#memoryupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `memoryId` | `string` |
| `request` | [`MemoryOptions`](memory_v1.md#memoryoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MemoryUpdateResponse`](memory_v1.md#memoryupdateresponse)\>

#### Defined in

[memory/v1.js:119](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/v1.js#L119)
