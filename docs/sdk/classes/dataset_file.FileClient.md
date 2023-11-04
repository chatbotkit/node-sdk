[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset/file](../modules/dataset_file.md) / FileClient

# Class: FileClient

[dataset/file](../modules/dataset_file.md).FileClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`FileClient`**

## Table of contents

### Constructors

- [constructor](dataset_file.FileClient.md#constructor)

### Properties

- [secret](dataset_file.FileClient.md#secret)
- [url](dataset_file.FileClient.md#url)

### Methods

- [attach](dataset_file.FileClient.md#attach)
- [clientFetch](dataset_file.FileClient.md#clientfetch)
- [detach](dataset_file.FileClient.md#detach)
- [sync](dataset_file.FileClient.md#sync)

## Constructors

### constructor

• **new FileClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[dataset/file/index.js:8](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/dataset/file/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:182](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/client.js#L182)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:184](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/client.js#L184)

## Methods

### attach

▸ **attach**(`datasetId`, `fileId`, `request`): `Promise`<[`FileAttachResponse`](../modules/dataset_file_v1.md#fileattachresponse)\>

Attaches a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`FileAttachRequest`](../modules/dataset_file_v1.md#fileattachrequest) |

#### Returns

`Promise`<[`FileAttachResponse`](../modules/dataset_file_v1.md#fileattachresponse)\>

#### Defined in

[dataset/file/index.js:20](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/dataset/file/index.js#L20)

___

### clientFetch

▸ **clientFetch**<`T`, `U`\>(`path`, `options?`): `ResponsePromise`<`T`, `U`\>

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
| `options.data?` | `Record`<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/client.js#L201)

___

### detach

▸ **detach**(`datasetId`, `fileId`, `request`): `Promise`<[`FileDetachResponse`](../modules/dataset_file_v1.md#filedetachresponse)\>

Detach a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`FileDetachRequest`](../modules/dataset_file_v1.md#filedetachrequest) |

#### Returns

`Promise`<[`FileDetachResponse`](../modules/dataset_file_v1.md#filedetachresponse)\>

#### Defined in

[dataset/file/index.js:32](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/dataset/file/index.js#L32)

___

### sync

▸ **sync**(`datasetId`, `fileId`, `request`): `Promise`<[`FileSyncResponse`](../modules/dataset_file_v1.md#filesyncresponse)\>

Sync a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`FileSyncRequest`](../modules/dataset_file_v1.md#filesyncrequest) |

#### Returns

`Promise`<[`FileSyncResponse`](../modules/dataset_file_v1.md#filesyncresponse)\>

#### Defined in

[dataset/file/index.js:44](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/dataset/file/index.js#L44)
