[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/file/v1

# Module: dataset/file/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_file_v1.md#chatbotkitclient)
- [DatasetFileAttachRequest](dataset_file_v1.md#datasetfileattachrequest)
- [DatasetFileAttachResponse](dataset_file_v1.md#datasetfileattachresponse)
- [DatasetFileDetachRequest](dataset_file_v1.md#datasetfiledetachrequest)
- [DatasetFileDetachResponse](dataset_file_v1.md#datasetfiledetachresponse)
- [DatasetFileInstance](dataset_file_v1.md#datasetfileinstance)
- [DatasetFileListRequest](dataset_file_v1.md#datasetfilelistrequest)
- [DatasetFileListResponse](dataset_file_v1.md#datasetfilelistresponse)
- [DatasetFileListStreamItemType](dataset_file_v1.md#datasetfileliststreamitemtype)
- [DatasetFileListStreamType](dataset_file_v1.md#datasetfileliststreamtype)
- [DatasetFileSyncRequest](dataset_file_v1.md#datasetfilesyncrequest)
- [DatasetFileSyncResponse](dataset_file_v1.md#datasetfilesyncresponse)
- [ResponsePromise](dataset_file_v1.md#responsepromise)

### Functions

- [attachDatasetFile](dataset_file_v1.md#attachdatasetfile)
- [detachDatasetFile](dataset_file_v1.md#detachdatasetfile)
- [listDatasetFiles](dataset_file_v1.md#listdatasetfiles)
- [syncDatasetFile](dataset_file_v1.md#syncdatasetfile)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[dataset/file/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L2)

___

### DatasetFileAttachRequest

Ƭ **DatasetFileAttachRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"source"`` |

#### Defined in

[dataset/file/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L45)

___

### DatasetFileAttachResponse

Ƭ **DatasetFileAttachResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/file/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L49)

___

### DatasetFileDetachRequest

Ƭ **DatasetFileDetachRequest**\<\>: `Object`

#### Defined in

[dataset/file/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L70)

___

### DatasetFileDetachResponse

Ƭ **DatasetFileDetachResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/file/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L74)

___

### DatasetFileInstance

Ƭ **DatasetFileInstance**\<\>: [`FileOptions`](file_v1.md#fileoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[file/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L22)

___

### DatasetFileListRequest

Ƭ **DatasetFileListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[dataset/file/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L16)

___

### DatasetFileListResponse

Ƭ **DatasetFileListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance)[] |

#### Defined in

[dataset/file/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L17)

___

### DatasetFileListStreamItemType

Ƭ **DatasetFileListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance) |
| `type` | ``"item"`` |

#### Defined in

[dataset/file/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L22)

___

### DatasetFileListStreamType

Ƭ **DatasetFileListStreamType**\<\>: [`DatasetFileListStreamItemType`](dataset_file_v1.md#datasetfileliststreamitemtype)

#### Defined in

[dataset/file/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L24)

___

### DatasetFileSyncRequest

Ƭ **DatasetFileSyncRequest**\<\>: `Object`

#### Defined in

[dataset/file/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L95)

___

### DatasetFileSyncResponse

Ƭ **DatasetFileSyncResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/file/v1.js:99](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L99)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[dataset/file/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L8)

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

[dataset/file/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L57)

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

[dataset/file/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L82)

___

### listDatasetFiles

▸ **listDatasetFiles**(`client`, `datasetId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DatasetFileListResponse`](dataset_file_v1.md#datasetfilelistresponse), [`DatasetFileListStreamItemType`](dataset_file_v1.md#datasetfileliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request?` | [`DatasetFileListRequest`](dataset_file_v1.md#datasetfilelistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DatasetFileListResponse`](dataset_file_v1.md#datasetfilelistresponse), [`DatasetFileListStreamItemType`](dataset_file_v1.md#datasetfileliststreamitemtype)\>

#### Defined in

[dataset/file/v1.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L31)

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

[dataset/file/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L107)
