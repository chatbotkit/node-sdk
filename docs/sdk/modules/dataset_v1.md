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

[dataset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L2)

___

### DatasetCreateRequest

Ƭ **DatasetCreateRequest**<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions) & { `store`: `string`  }

#### Defined in

[dataset/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L44)

___

### DatasetCreateResponse

Ƭ **DatasetCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L48)

___

### DatasetDeleteResponse

Ƭ **DatasetDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L81)

___

### DatasetFetchResponse

Ƭ **DatasetFetchResponse**<\>: [`DatasetInstance`](dataset_v1.md#datasetinstance)

#### Defined in

[dataset/v1.js:31](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L31)

___

### DatasetInstance

Ƭ **DatasetInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `store`: `string` ; `updatedAt`: `number`  } & [`DatasetOptions`](dataset_v1.md#datasetoptions)

#### Defined in

[dataset/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L17)

___

### DatasetListResponse

Ƭ **DatasetListResponse**<\>: [`DatasetInstance`](dataset_v1.md#datasetinstance)

#### Defined in

[dataset/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L21)

___

### DatasetOptions

Ƭ **DatasetOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[dataset/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L10)

___

### DatasetSearchResponse

Ƭ **DatasetSearchResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `records` | [`dataset/record/v1`](dataset_record_v1.md)[] |

#### Defined in

[dataset/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L94)

___

### DatasetUpdateRequest

Ƭ **DatasetUpdateRequest**<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions)

#### Defined in

[dataset/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L61)

___

### DatasetUpdateResponse

Ƭ **DatasetUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L65)

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

[dataset/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L54)

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

[dataset/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L87)

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

[dataset/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L37)

___

### datasetList

▸ **datasetList**(`client`): `Promise`<[`DatasetInstance`](dataset_v1.md#datasetinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`Promise`<[`DatasetInstance`](dataset_v1.md#datasetinstance)\>

#### Defined in

[dataset/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L26)

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

[dataset/v1.js:101](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L101)

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

[dataset/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/dataset/v1.js#L72)