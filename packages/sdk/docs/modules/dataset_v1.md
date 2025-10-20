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

[dataset/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L89)

___

### DatasetCreateResponse

Ƭ **DatasetCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L93)

___

### DatasetDeleteResponse

Ƭ **DatasetDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:143](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L143)

___

### DatasetFetchResponse

Ƭ **DatasetFetchResponse**\<\>: [`DatasetInstance`](dataset_v1.md#datasetinstance) & {}

#### Defined in

[dataset/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L70)

___

### DatasetInstance

Ƭ **DatasetInstance**\<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[dataset/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L33)

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

[dataset/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L42)

___

### DatasetListResponse

Ƭ **DatasetListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DatasetInstance`](dataset_v1.md#datasetinstance)[] |

#### Defined in

[dataset/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L44)

___

### DatasetListStreamItemType

Ƭ **DatasetListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DatasetInstance`](dataset_v1.md#datasetinstance) |
| `type` | ``"item"`` |

#### Defined in

[dataset/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L49)

___

### DatasetListStreamType

Ƭ **DatasetListStreamType**\<\>: [`DatasetListStreamItemType`](dataset_v1.md#datasetliststreamitemtype)

#### Defined in

[dataset/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L51)

___

### DatasetOptions

Ƭ **DatasetOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
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
| `store` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[dataset/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L27)

___

### DatasetSearchResponse

Ƭ **DatasetSearchResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `records` | \{ `id`: `string` ; `meta?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> ; `score`: `number` ; `source?`: `string` ; `text`: `string`  }[] |

#### Defined in

[dataset/v1.js:171](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L171)

___

### DatasetUpdateRequest

Ƭ **DatasetUpdateRequest**\<\>: [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<[`DatasetOptions`](dataset_v1.md#datasetoptions), ``"store"``\> & {}

#### Defined in

[dataset/v1.js:115](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L115)

___

### DatasetUpdateResponse

Ƭ **DatasetUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:119](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L119)

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

[dataset/v1.js:99](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L99)

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

[dataset/v1.js:149](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L149)

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

[dataset/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L76)

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

[dataset/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L57)

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

[dataset/v1.js:178](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L178)

___

### updateDataset

▸ **updateDataset**(`client`, `datasetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetUpdateResponse`](dataset_v1.md#datasetupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request` | [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<[`DatasetOptions`](dataset_v1.md#datasetoptions), ``"store"``\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetUpdateResponse`](dataset_v1.md#datasetupdateresponse)\>

#### Defined in

[dataset/v1.js:126](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L126)
