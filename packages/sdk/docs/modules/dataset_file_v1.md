[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/file/v1

# Module: dataset/file/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_file_v1.md#chatbotkitclient)
- [DatasetFileAttachRequest](dataset_file_v1.md#datasetfileattachrequest)
- [DatasetFileAttachResponse](dataset_file_v1.md#datasetfileattachresponse)
- [DatasetFileDetachRequest](dataset_file_v1.md#datasetfiledetachrequest)
- [DatasetFileDetachResponse](dataset_file_v1.md#datasetfiledetachresponse)
- [DatasetFileSyncRequest](dataset_file_v1.md#datasetfilesyncrequest)
- [DatasetFileSyncResponse](dataset_file_v1.md#datasetfilesyncresponse)

### Functions

- [attachDatasetFile](dataset_file_v1.md#attachdatasetfile)
- [detachDatasetFile](dataset_file_v1.md#detachdatasetfile)
- [syncDatasetFile](dataset_file_v1.md#syncdatasetfile)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[dataset/file/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/v1.js#L2)

___

### DatasetFileAttachRequest

Ƭ **DatasetFileAttachRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"source"`` |

#### Defined in

[dataset/file/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/v1.js#L8)

___

### DatasetFileAttachResponse

Ƭ **DatasetFileAttachResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/file/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/v1.js#L12)

___

### DatasetFileDetachRequest

Ƭ **DatasetFileDetachRequest**\<\>: `Object`

#### Defined in

[dataset/file/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/v1.js#L33)

___

### DatasetFileDetachResponse

Ƭ **DatasetFileDetachResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/file/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/v1.js#L37)

___

### DatasetFileSyncRequest

Ƭ **DatasetFileSyncRequest**\<\>: `Object`

#### Defined in

[dataset/file/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/v1.js#L58)

___

### DatasetFileSyncResponse

Ƭ **DatasetFileSyncResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/file/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/v1.js#L62)

## Functions

### attachDatasetFile

▸ **attachDatasetFile**(`client`, `datasetId`, `fileId`, `request`): `Promise`\<[`DatasetFileAttachResponse`](dataset_file_v1.md#datasetfileattachresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`DatasetFileAttachRequest`](dataset_file_v1.md#datasetfileattachrequest) |

#### Returns

`Promise`\<[`DatasetFileAttachResponse`](dataset_file_v1.md#datasetfileattachresponse)\>

#### Defined in

[dataset/file/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/v1.js#L20)

___

### detachDatasetFile

▸ **detachDatasetFile**(`client`, `datasetId`, `fileId`, `request`): `Promise`\<[`DatasetFileDetachResponse`](dataset_file_v1.md#datasetfiledetachresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`DatasetFileDetachRequest`](dataset_file_v1.md#datasetfiledetachrequest) |

#### Returns

`Promise`\<[`DatasetFileDetachResponse`](dataset_file_v1.md#datasetfiledetachresponse)\>

#### Defined in

[dataset/file/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/v1.js#L45)

___

### syncDatasetFile

▸ **syncDatasetFile**(`client`, `datasetId`, `fileId`, `request`): `Promise`\<[`DatasetFileSyncResponse`](dataset_file_v1.md#datasetfilesyncresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`DatasetFileSyncRequest`](dataset_file_v1.md#datasetfilesyncrequest) |

#### Returns

`Promise`\<[`DatasetFileSyncResponse`](dataset_file_v1.md#datasetfilesyncresponse)\>

#### Defined in

[dataset/file/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/v1.js#L70)
