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
- [DatasetListResponse](dataset_v1.md#datasetlistresponse)
- [DatasetListStreamItemType](dataset_v1.md#datasetliststreamitemtype)
- [DatasetListStreamType](dataset_v1.md#datasetliststreamtype)
- [DatasetOptions](dataset_v1.md#datasetoptions)
- [DatasetSearchResponse](dataset_v1.md#datasetsearchresponse)
- [DatasetUpdateRequest](dataset_v1.md#datasetupdaterequest)
- [DatasetUpdateResponse](dataset_v1.md#datasetupdateresponse)

### Functions

- [datasetCreate](dataset_v1.md#datasetcreate)
- [datasetDelete](dataset_v1.md#datasetdelete)
- [datasetFetch](dataset_v1.md#datasetfetch)
- [datasetList](dataset_v1.md#datasetlist)
- [datasetSearch](dataset_v1.md#datasetsearch)
- [datasetUpdate](dataset_v1.md#datasetupdate)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[dataset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L2)

___

### DatasetCreateRequest

Ƭ **DatasetCreateRequest**<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions) & { `store`: `string`  }

#### Defined in

[dataset/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L57)

___

### DatasetCreateResponse

Ƭ **DatasetCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L61)

___

### DatasetDeleteResponse

Ƭ **DatasetDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L94)

___

### DatasetFetchResponse

Ƭ **DatasetFetchResponse**<\>: [`DatasetInstance`](dataset_v1.md#datasetinstance)

#### Defined in

[dataset/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L44)

___

### DatasetInstance

Ƭ **DatasetInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `store`: `string` ; `updatedAt`: `number`  } & [`DatasetOptions`](dataset_v1.md#datasetoptions)

#### Defined in

[dataset/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L23)

___

### DatasetListResponse

Ƭ **DatasetListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DatasetInstance`](dataset_v1.md#datasetinstance)[] |

#### Defined in

[dataset/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L27)

___

### DatasetListStreamItemType

Ƭ **DatasetListStreamItemType**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DatasetInstance`](dataset_v1.md#datasetinstance) |
| `type` | ``"item"`` |

#### Defined in

[dataset/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L32)

___

### DatasetListStreamType

Ƭ **DatasetListStreamType**<\>: [`DatasetListStreamItemType`](dataset_v1.md#datasetliststreamitemtype)

#### Defined in

[dataset/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L34)

___

### DatasetOptions

Ƭ **DatasetOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `matchInstruction?` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `mismatchInstruction?` | `string` |
| `name?` | `string` |
| `recordMaxTokens?` | `number` |
| `searchMaxRecords?` | `number` |
| `searchMaxTokens?` | `number` |
| `store?` | `string` |

#### Defined in

[dataset/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L16)

___

### DatasetSearchResponse

Ƭ **DatasetSearchResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `records` | [`dataset/record/v1`](dataset_record_v1.md)[] |

#### Defined in

[dataset/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L109)

___

### DatasetUpdateRequest

Ƭ **DatasetUpdateRequest**<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions)

#### Defined in

[dataset/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L74)

___

### DatasetUpdateResponse

Ƭ **DatasetUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L78)

## Functions

### datasetCreate

▸ **datasetCreate**(`client`, `request`): `Promise`<[`DatasetCreateResponse`](dataset_v1.md#datasetcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`DatasetCreateRequest`](dataset_v1.md#datasetcreaterequest) |

#### Returns

`Promise`<[`DatasetCreateResponse`](dataset_v1.md#datasetcreateresponse)\>

#### Defined in

[dataset/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L67)

___

### datasetDelete

▸ **datasetDelete**(`client`, `datasetId`): `Promise`<[`DatasetDeleteResponse`](dataset_v1.md#datasetdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |

#### Returns

`Promise`<[`DatasetDeleteResponse`](dataset_v1.md#datasetdeleteresponse)\>

#### Defined in

[dataset/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L100)

___

### datasetFetch

▸ **datasetFetch**(`client`, `datasetId`): `Promise`<[`DatasetInstance`](dataset_v1.md#datasetinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |

#### Returns

`Promise`<[`DatasetInstance`](dataset_v1.md#datasetinstance)\>

#### Defined in

[dataset/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L50)

___

### datasetList

▸ **datasetList**(`client`): `ResponsePromise`<[`DatasetListResponse`](dataset_v1.md#datasetlistresponse), [`DatasetListStreamItemType`](dataset_v1.md#datasetliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`ResponsePromise`<[`DatasetListResponse`](dataset_v1.md#datasetlistresponse), [`DatasetListStreamItemType`](dataset_v1.md#datasetliststreamitemtype)\>

#### Defined in

[dataset/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L39)

___

### datasetSearch

▸ **datasetSearch**(`client`, `datasetId`, `search`): `Promise`<[`DatasetSearchResponse`](dataset_v1.md#datasetsearchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `search` | `string` |

#### Returns

`Promise`<[`DatasetSearchResponse`](dataset_v1.md#datasetsearchresponse)\>

#### Defined in

[dataset/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L116)

___

### datasetUpdate

▸ **datasetUpdate**(`client`, `datasetId`, `request`): `Promise`<[`DatasetUpdateResponse`](dataset_v1.md#datasetupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `request` | [`DatasetOptions`](dataset_v1.md#datasetoptions) |

#### Returns

`Promise`<[`DatasetUpdateResponse`](dataset_v1.md#datasetupdateresponse)\>

#### Defined in

[dataset/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/v1.js#L85)
