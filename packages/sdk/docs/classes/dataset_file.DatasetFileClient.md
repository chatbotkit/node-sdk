[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset/file](../modules/dataset_file.md) / DatasetFileClient

# Class: DatasetFileClient

[dataset/file](../modules/dataset_file.md).DatasetFileClient

Dataset file client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`DatasetFileClient`**

## Table of contents

### Constructors

- [constructor](dataset_file.DatasetFileClient.md#constructor)

### Methods

- [attach](dataset_file.DatasetFileClient.md#attach)
- [clientFetch](dataset_file.DatasetFileClient.md#clientfetch)
- [detach](dataset_file.DatasetFileClient.md#detach)
- [list](dataset_file.DatasetFileClient.md#list)
- [sync](dataset_file.DatasetFileClient.md#sync)

## Constructors

### constructor

• **new DatasetFileClient**(`options`): [`DatasetFileClient`](dataset_file.DatasetFileClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`DatasetFileClient`](dataset_file.DatasetFileClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[dataset/file/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L22)

## Methods

### attach

▸ **attach**(`datasetId`, `fileId`, `request`): `Promise`\<[`DatasetFileAttachResponse`](../modules/dataset_file_v1.md#datasetfileattachresponse)\>

Attaches a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`DatasetFileAttachRequest`](../modules/dataset_file_v1.md#datasetfileattachrequest) |

#### Returns

`Promise`\<[`DatasetFileAttachResponse`](../modules/dataset_file_v1.md#datasetfileattachresponse)\>

#### Defined in

[dataset/file/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L44)

___

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:213](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L213)

___

### detach

▸ **detach**(`datasetId`, `fileId`, `request`): `Promise`\<[`DatasetFileDetachResponse`](../modules/dataset_file_v1.md#datasetfiledetachresponse)\>

Detach a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`DatasetFileDetachRequest`](../modules/dataset_file_v1.md#datasetfiledetachrequest) |

#### Returns

`Promise`\<[`DatasetFileDetachResponse`](../modules/dataset_file_v1.md#datasetfiledetachresponse)\>

#### Defined in

[dataset/file/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L56)

___

### list

▸ **list**(`datasetId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`DatasetFileListResponse`](../modules/dataset_file_v1.md#datasetfilelistresponse), [`DatasetFileListStreamItemType`](../modules/dataset_file_v1.md#datasetfileliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request?` | [`DatasetFileListRequest`](../modules/dataset_file_v1.md#datasetfilelistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`DatasetFileListResponse`](../modules/dataset_file_v1.md#datasetfilelistresponse), [`DatasetFileListStreamItemType`](../modules/dataset_file_v1.md#datasetfileliststreamitemtype)\>

#### Defined in

[dataset/file/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L32)

___

### sync

▸ **sync**(`datasetId`, `fileId`, `request`): `Promise`\<[`DatasetFileSyncResponse`](../modules/dataset_file_v1.md#datasetfilesyncresponse)\>

Sync a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`DatasetFileSyncRequest`](../modules/dataset_file_v1.md#datasetfilesyncrequest) |

#### Returns

`Promise`\<[`DatasetFileSyncResponse`](../modules/dataset_file_v1.md#datasetfilesyncresponse)\>

#### Defined in

[dataset/file/index.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L68)
