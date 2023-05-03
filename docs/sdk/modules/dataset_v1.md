[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/v1

# Module: dataset/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_v1.md#chatbotkitclient)
- [DatasetCreateRequest](dataset_v1.md#datasetcreaterequest)
- [DatasetCreateResponse](dataset_v1.md#datasetcreateresponse)
- [DatasetDeleteResponse](dataset_v1.md#datasetdeleteresponse)
- [DatasetFetchResponse](dataset_v1.md#datasetfetchresponse)
- [DatasetListResponse](dataset_v1.md#datasetlistresponse)
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

[dataset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L2)

___

### DatasetCreateRequest

Ƭ **DatasetCreateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `name?` | `string` |

#### Defined in

[dataset/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L38)

___

### DatasetCreateResponse

Ƭ **DatasetCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L42)

___

### DatasetDeleteResponse

Ƭ **DatasetDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L78)

___

### DatasetFetchResponse

Ƭ **DatasetFetchResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdAt` | `number` |
| `description?` | `string` |
| `id` | `string` |
| `name?` | `string` |
| `updatedAt` | `number` |

#### Defined in

[dataset/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L24)

___

### DatasetListResponse

Ƭ **DatasetListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L8)

___

### DatasetUpdateRequest

Ƭ **DatasetUpdateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `name?` | `string` |

#### Defined in

[dataset/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L58)

___

### DatasetUpdateResponse

Ƭ **DatasetUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L62)

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

[dataset/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L48)

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

[dataset/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L84)

___

### datasetFetch

▸ **datasetFetch**(`client`, `datasetId`): `Promise`<[`DatasetFetchResponse`](dataset_v1.md#datasetfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |

#### Returns

`Promise`<[`DatasetFetchResponse`](dataset_v1.md#datasetfetchresponse)\>

#### Defined in

[dataset/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L30)

___

### datasetList

▸ **datasetList**(`client`): `Promise`<[`DatasetListResponse`](dataset_v1.md#datasetlistresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`Promise`<[`DatasetListResponse`](dataset_v1.md#datasetlistresponse)\>

#### Defined in

[dataset/v1.js:13](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L13)

___

### datasetUpdate

▸ **datasetUpdate**(`client`, `datasetId`, `request`): `Promise`<[`DatasetUpdateResponse`](dataset_v1.md#datasetupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `request` | [`DatasetUpdateRequest`](dataset_v1.md#datasetupdaterequest) |

#### Returns

`Promise`<[`DatasetUpdateResponse`](dataset_v1.md#datasetupdateresponse)\>

#### Defined in

[dataset/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/dataset/v1.js#L69)
