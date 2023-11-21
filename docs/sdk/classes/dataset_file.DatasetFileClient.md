[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset/file](../modules/dataset_file.md) / DatasetFileClient

# Class: DatasetFileClient

[dataset/file](../modules/dataset_file.md).DatasetFileClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`DatasetFileClient`**

## Table of contents

### Constructors

- [constructor](dataset_file.DatasetFileClient.md#constructor)

### Properties

- [secret](dataset_file.DatasetFileClient.md#secret)
- [url](dataset_file.DatasetFileClient.md#url)

### Methods

- [attach](dataset_file.DatasetFileClient.md#attach)
- [clientFetch](dataset_file.DatasetFileClient.md#clientfetch)
- [detach](dataset_file.DatasetFileClient.md#detach)
- [sync](dataset_file.DatasetFileClient.md#sync)

## Constructors

### constructor

• **new DatasetFileClient**(`options`): [`DatasetFileClient`](dataset_file.DatasetFileClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`DatasetFileClient`](dataset_file.DatasetFileClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[dataset/file/index.js:8](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/dataset/file/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L189)

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

[dataset/file/index.js:20](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/dataset/file/index.js#L20)

___

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): `ResponsePromise`\<`T`, `U`\>

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

`ResponsePromise`\<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L206)

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

[dataset/file/index.js:32](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/dataset/file/index.js#L32)

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

[dataset/file/index.js:44](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/dataset/file/index.js#L44)
