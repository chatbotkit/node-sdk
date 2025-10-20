[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/v1

# Module: dataset/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_v1.md#chatbotkitclient)
- [DatasetCreateRequest](dataset_v1.md#datasetcreaterequest)
- [DatasetCreateResponse](dataset_v1.md#datasetcreateresponse)
- [DatasetDeleteResponse](dataset_v1.md#datasetdeleteresponse)
- [DatasetFetchResponse](dataset_v1.md#datasetfetchresponse)
- [DatasetInstance](dataset_v1.md#datasetinstance)
- [DatasetListRequest](dataset_v1.md#datasetlistrequest)
- [DatasetListResponse](dataset_v1.md#datasetlistresponse)
- [DatasetListStreamItemType](dataset_v1.md#datasetliststreamitemtype)
- [DatasetListStreamType](dataset_v1.md#datasetliststreamtype)
- [DatasetOptions](dataset_v1.md#datasetoptions)
- [DatasetSearchResponse](dataset_v1.md#datasetsearchresponse)
- [DatasetUpdateRequest](dataset_v1.md#datasetupdaterequest)
- [DatasetUpdateResponse](dataset_v1.md#datasetupdateresponse)
- [ResponsePromise](dataset_v1.md#responsepromise)

### Functions

- [createDataset](dataset_v1.md#createdataset)
- [deleteDataset](dataset_v1.md#deletedataset)
- [fetchDataset](dataset_v1.md#fetchdataset)
- [listDatasets](dataset_v1.md#listdatasets)
- [searchDataset](dataset_v1.md#searchdataset)
- [updateDataset](dataset_v1.md#updatedataset)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[dataset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L2)

___

### DatasetCreateRequest

Ƭ **DatasetCreateRequest**\<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions) & \{ `store?`: `string`  }

#### Defined in

[dataset/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L88)

___

### DatasetCreateResponse

Ƭ **DatasetCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L92)

___

### DatasetDeleteResponse

Ƭ **DatasetDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:142](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L142)

___

### DatasetFetchResponse

Ƭ **DatasetFetchResponse**\<\>: [`DatasetInstance`](dataset_v1.md#datasetinstance) & {}

#### Defined in

[dataset/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L69)

___

### DatasetInstance

Ƭ **DatasetInstance**\<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[dataset/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L32)

___

### DatasetListRequest

Ƭ **DatasetListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[dataset/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L41)

___

### DatasetListResponse

Ƭ **DatasetListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DatasetInstance`](dataset_v1.md#datasetinstance)[] |

#### Defined in

[dataset/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L43)

___

### DatasetListStreamItemType

Ƭ **DatasetListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DatasetInstance`](dataset_v1.md#datasetinstance) |
| `type` | ``"item"`` |

#### Defined in

[dataset/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L48)

___

### DatasetListStreamType

Ƭ **DatasetListStreamType**\<\>: [`DatasetListStreamItemType`](dataset_v1.md#datasetliststreamitemtype)

#### Defined in

[dataset/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L50)

___

### DatasetOptions

Ƭ **DatasetOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `matchInstruction?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `mismatchInstruction?` | `string` |
| `name?` | `string` |
| `recordMaxTokens?` | `number` |
| `reranker?` | `string` |
| `searchMaxRecords?` | `number` |
| `searchMaxTokens?` | `number` |
| `searchMinScore?` | `number` |
| `separators?` | `string` |
| `store?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[dataset/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L26)

___

### DatasetSearchResponse

Ƭ **DatasetSearchResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `records` | \{ `id`: `string` ; `meta?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> ; `score`: `number` ; `source?`: `string` ; `text`: `string`  }[] |

#### Defined in

[dataset/v1.js:170](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L170)

___

### DatasetUpdateRequest

Ƭ **DatasetUpdateRequest**\<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions) & {}

#### Defined in

[dataset/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L114)

___

### DatasetUpdateResponse

Ƭ **DatasetUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L118)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[dataset/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L8)

## Functions

### createDataset

▸ **createDataset**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetCreateResponse`](dataset_v1.md#datasetcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`DatasetCreateRequest`](dataset_v1.md#datasetcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetCreateResponse`](dataset_v1.md#datasetcreateresponse)\>

#### Defined in

[dataset/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L98)

___

### deleteDataset

▸ **deleteDataset**(`client`, `datasetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetDeleteResponse`](dataset_v1.md#datasetdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetDeleteResponse`](dataset_v1.md#datasetdeleteresponse)\>

#### Defined in

[dataset/v1.js:148](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L148)

___

### fetchDataset

▸ **fetchDataset**(`client`, `datasetId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DatasetFetchResponse`](dataset_v1.md#datasetfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DatasetFetchResponse`](dataset_v1.md#datasetfetchresponse), `never`\>

#### Defined in

[dataset/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L75)

___

### listDatasets

▸ **listDatasets**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DatasetListResponse`](dataset_v1.md#datasetlistresponse), [`DatasetListStreamItemType`](dataset_v1.md#datasetliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`DatasetListRequest`](dataset_v1.md#datasetlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DatasetListResponse`](dataset_v1.md#datasetlistresponse), [`DatasetListStreamItemType`](dataset_v1.md#datasetliststreamitemtype)\>

#### Defined in

[dataset/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L56)

___

### searchDataset

▸ **searchDataset**(`client`, `datasetId`, `search`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetSearchResponse`](dataset_v1.md#datasetsearchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `search` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetSearchResponse`](dataset_v1.md#datasetsearchresponse)\>

#### Defined in

[dataset/v1.js:177](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L177)

___

### updateDataset

▸ **updateDataset**(`client`, `datasetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetUpdateResponse`](dataset_v1.md#datasetupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request` | [`DatasetOptions`](dataset_v1.md#datasetoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetUpdateResponse`](dataset_v1.md#datasetupdateresponse)\>

#### Defined in

[dataset/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L125)
