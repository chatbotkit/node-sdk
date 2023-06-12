[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [file](../modules/file.md) / FileClient

# Class: FileClient

[file](../modules/file.md).FileClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`FileClient`**

## Table of contents

### Constructors

- [constructor](file.FileClient.md#constructor)

### Properties

- [secret](file.FileClient.md#secret)
- [url](file.FileClient.md#url)

### Methods

- [clientFetch](file.FileClient.md#clientfetch)
- [create](file.FileClient.md#create)
- [delete](file.FileClient.md#delete)
- [download](file.FileClient.md#download)
- [fetch](file.FileClient.md#fetch)
- [list](file.FileClient.md#list)
- [update](file.FileClient.md#update)
- [upload](file.FileClient.md#upload)

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

[file/index.js:16](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/file/index.js#L16)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:155](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/client.js#L155)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:157](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/client.js#L157)

## Methods

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

[client.js:174](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/client.js#L174)

___

### create

▸ **create**(`request`): `Promise`<[`FileCreateResponse`](../modules/file_v1.md#filecreateresponse)\>

Creates a new file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`FileOptions`](../modules/file_v1.md#fileoptions) |

#### Returns

`Promise`<[`FileCreateResponse`](../modules/file_v1.md#filecreateresponse)\>

#### Defined in

[file/index.js:44](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/file/index.js#L44)

___

### delete

▸ **delete**(`fileId`): `Promise`<[`FileDeleteResponse`](../modules/file_v1.md#filedeleteresponse)\>

Deletes the file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`Promise`<[`FileDeleteResponse`](../modules/file_v1.md#filedeleteresponse)\>

#### Defined in

[file/index.js:65](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/file/index.js#L65)

___

### download

▸ **download**(`fileId`): `Promise`<[`FileDownloadResponse`](../modules/file_v1.md#filedownloadresponse)\>

Download file data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`Promise`<[`FileDownloadResponse`](../modules/file_v1.md#filedownloadresponse)\>

#### Defined in

[file/index.js:86](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/file/index.js#L86)

___

### fetch

▸ **fetch**(`fileId`): `Promise`<[`FileInstance`](../modules/file_v1.md#fileinstance)\>

Fetches a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`Promise`<[`FileInstance`](../modules/file_v1.md#fileinstance)\>

#### Defined in

[file/index.js:34](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/file/index.js#L34)

___

### list

▸ **list**(): `ResponsePromise`<[`FileInstance`](../modules/file_v1.md#fileinstance), [`FileListStreamItemType`](../modules/file_v1.md#fileliststreamitemtype)\>

Retrieves a list of all existing files associated with this client.

#### Returns

`ResponsePromise`<[`FileInstance`](../modules/file_v1.md#fileinstance), [`FileListStreamItemType`](../modules/file_v1.md#fileliststreamitemtype)\>

#### Defined in

[file/index.js:24](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/file/index.js#L24)

___

### update

▸ **update**(`fileId`, `request`): `Promise`<[`FileUpdateResponse`](../modules/file_v1.md#fileupdateresponse)\>

Updates a new file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `request` | [`FileOptions`](../modules/file_v1.md#fileoptions) |

#### Returns

`Promise`<[`FileUpdateResponse`](../modules/file_v1.md#fileupdateresponse)\>

#### Defined in

[file/index.js:55](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/file/index.js#L55)

___

### upload

▸ **upload**(`fileId`, `request`): `Promise`<[`FileUploadResponse`](../modules/file_v1.md#fileuploadresponse)\>

Upload file data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `request` | [`FileUploadRequest`](../modules/file_v1.md#fileuploadrequest) |

#### Returns

`Promise`<[`FileUploadResponse`](../modules/file_v1.md#fileuploadresponse)\>

#### Defined in

[file/index.js:76](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/file/index.js#L76)
