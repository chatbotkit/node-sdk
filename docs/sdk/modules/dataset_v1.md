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
- [DatasetUpdateRequest](dataset_v1.md#datasetupdaterequest)
- [DatasetUpdateResponse](dataset_v1.md#datasetupdateresponse)

### Functions

- [datasetCreate](dataset_v1.md#datasetcreate)
- [datasetDelete](dataset_v1.md#datasetdelete)
- [datasetFetch](dataset_v1.md#datasetfetch)
- [datasetList](dataset_v1.md#datasetlist)
- [datasetUpdate](dataset_v1.md#datasetupdate)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[dataset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L2)

___

### DatasetCreateRequest

Ƭ **DatasetCreateRequest**<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions)

#### Defined in

[dataset/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L41)

___

### DatasetCreateResponse

Ƭ **DatasetCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L45)

___

### DatasetDeleteResponse

Ƭ **DatasetDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L78)

___

### DatasetFetchResponse

Ƭ **DatasetFetchResponse**<\>: [`DatasetInstance`](dataset_v1.md#datasetinstance)

#### Defined in

[dataset/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L30)

___

### DatasetInstance

Ƭ **DatasetInstance**<\>: { `id`: `string`  } & [`DatasetOptions`](dataset_v1.md#datasetoptions)

#### Defined in

[dataset/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L16)

___

### DatasetListResponse

Ƭ **DatasetListResponse**<\>: [`DatasetInstance`](dataset_v1.md#datasetinstance)

#### Defined in

[dataset/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L20)

___

### DatasetOptions

Ƭ **DatasetOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdAt` | `number` |
| `description?` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `name?` | `string` |
| `updatedAt` | `number` |

#### Defined in

[dataset/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L12)

___

### DatasetUpdateRequest

Ƭ **DatasetUpdateRequest**<\>: [`DatasetOptions`](dataset_v1.md#datasetoptions)

#### Defined in

[dataset/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L58)

___

### DatasetUpdateResponse

Ƭ **DatasetUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L62)

## Functions

### datasetCreate

▸ **datasetCreate**(`client`, `request`): `Promise`<[`DatasetCreateResponse`](dataset_v1.md#datasetcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`DatasetOptions`](dataset_v1.md#datasetoptions) |

#### Returns

`Promise`<[`DatasetCreateResponse`](dataset_v1.md#datasetcreateresponse)\>

#### Defined in

[dataset/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L51)

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

[dataset/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L84)

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

[dataset/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L36)

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

[dataset/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L25)

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

[dataset/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/v1.js#L69)
