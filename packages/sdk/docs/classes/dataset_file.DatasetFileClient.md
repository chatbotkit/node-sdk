[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset/file](../modules/dataset_file.md) / DatasetFileClient

# Class: DatasetFileClient

[dataset/file](../modules/dataset_file.md).DatasetFileClient

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`DatasetFileClient`**

## Table of contents

### Constructors

- [constructor](dataset_file.DatasetFileClient.md#constructor)

### Properties

- [endpoints](dataset_file.DatasetFileClient.md#endpoints)
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
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`DatasetFileClient`](dataset_file.DatasetFileClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[dataset/file/index.js:8](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/index.js#L8)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L201)

___

### secret

• **secret**: `string`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[secret](client.ChatBotKitClient.md#secret)

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L189)

___

### url

• **url**: `URL`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[url](client.ChatBotKitClient.md#url)

#### Defined in

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L191)

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

[dataset/file/index.js:20](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/index.js#L20)

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

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L211)

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

[dataset/file/index.js:32](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/index.js#L32)

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

[dataset/file/index.js:44](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/file/index.js#L44)
