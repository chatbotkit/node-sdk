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

Ƭ **DatasetCreateRequest**\<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions) & \{ `store`: `string`  }

#### Defined in

[dataset/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L79)

___

### DatasetCreateResponse

Ƭ **DatasetCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L83)

___

### DatasetDeleteResponse

Ƭ **DatasetDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L133)

___

### DatasetFetchResponse

Ƭ **DatasetFetchResponse**\<\>: [`DatasetInstance`](dataset_v1.md#datasetinstance) & {}

#### Defined in

[dataset/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L61)

___

### DatasetInstance

Ƭ **DatasetInstance**\<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `store`: `string` ; `updatedAt`: `number`  }

#### Defined in

[dataset/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L29)

___

### DatasetListRequest

Ƭ **DatasetListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[dataset/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L33)

___

### DatasetListResponse

Ƭ **DatasetListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DatasetInstance`](dataset_v1.md#datasetinstance)[] |

#### Defined in

[dataset/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L35)

___

### DatasetListStreamItemType

Ƭ **DatasetListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DatasetInstance`](dataset_v1.md#datasetinstance) |
| `type` | ``"item"`` |

#### Defined in

[dataset/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L40)

___

### DatasetListStreamType

Ƭ **DatasetListStreamType**\<\>: [`DatasetListStreamItemType`](dataset_v1.md#datasetliststreamitemtype)

#### Defined in

[dataset/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L42)

___

### DatasetOptions

Ƭ **DatasetOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `matchInstruction?` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |
| `mismatchInstruction?` | `string` |
| `name?` | `string` |
| `recordMaxTokens?` | `number` |
| `searchMaxRecords?` | `number` |
| `searchMaxTokens?` | `number` |
| `store?` | `string` |

#### Defined in

[dataset/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L22)

___

### DatasetSearchResponse

Ƭ **DatasetSearchResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `records` | \{ `id`: `string` ; `text`: `string`  }[] |

#### Defined in

[dataset/v1.js:154](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L154)

___

### DatasetUpdateRequest

Ƭ **DatasetUpdateRequest**\<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions) & {}

#### Defined in

[dataset/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L105)

___

### DatasetUpdateResponse

Ƭ **DatasetUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L109)

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

▸ **createDataset**(`client`, `request`): `Promise`\<[`DatasetCreateResponse`](dataset_v1.md#datasetcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`DatasetCreateRequest`](dataset_v1.md#datasetcreaterequest) |

#### Returns

`Promise`\<[`DatasetCreateResponse`](dataset_v1.md#datasetcreateresponse)\>

#### Defined in

[dataset/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L89)

___

### deleteDataset

▸ **deleteDataset**(`client`, `datasetId`): `Promise`\<[`DatasetDeleteResponse`](dataset_v1.md#datasetdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |

#### Returns

`Promise`\<[`DatasetDeleteResponse`](dataset_v1.md#datasetdeleteresponse)\>

#### Defined in

[dataset/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L139)

___

### fetchDataset

▸ **fetchDataset**(`client`, `datasetId`): `Promise`\<[`DatasetFetchResponse`](dataset_v1.md#datasetfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |

#### Returns

`Promise`\<[`DatasetFetchResponse`](dataset_v1.md#datasetfetchresponse)\>

#### Defined in

[dataset/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L67)

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

[dataset/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L48)

___

### searchDataset

▸ **searchDataset**(`client`, `datasetId`, `search`): `Promise`\<[`DatasetSearchResponse`](dataset_v1.md#datasetsearchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `search` | `string` |

#### Returns

`Promise`\<[`DatasetSearchResponse`](dataset_v1.md#datasetsearchresponse)\>

#### Defined in

[dataset/v1.js:161](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L161)

___

### updateDataset

▸ **updateDataset**(`client`, `datasetId`, `request`): `Promise`\<[`DatasetUpdateResponse`](dataset_v1.md#datasetupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request` | [`DatasetOptions`](dataset_v1.md#datasetoptions) |

#### Returns

`Promise`\<[`DatasetUpdateResponse`](dataset_v1.md#datasetupdateresponse)\>

#### Defined in

[dataset/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L116)
