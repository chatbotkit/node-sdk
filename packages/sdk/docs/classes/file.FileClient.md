[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [file](../modules/file.md) / FileClient

# Class: FileClient

[file](../modules/file.md).FileClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`FileClient`**

## Table of contents

### Constructors

- [constructor](file.FileClient.md#constructor)

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

• **new FileClient**(`options`): [`FileClient`](file.FileClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`FileClient`](file.FileClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[file/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L22)

## Methods

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

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L211)

___

### create

▸ **create**(`request`): `Promise`\<[`FileCreateResponse`](../modules/file_v1.md#filecreateresponse)\>

Creates a new file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`FileOptions`](../modules/file_v1.md#fileoptions) |

#### Returns

`Promise`\<[`FileCreateResponse`](../modules/file_v1.md#filecreateresponse)\>

#### Defined in

[file/index.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L52)

___

### delete

▸ **delete**(`fileId`): `Promise`\<[`FileDeleteResponse`](../modules/file_v1.md#filedeleteresponse)\>

Deletes the file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`Promise`\<[`FileDeleteResponse`](../modules/file_v1.md#filedeleteresponse)\>

#### Defined in

[file/index.js:73](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L73)

___

### download

▸ **download**(`fileId`): `Promise`\<[`FileDownloadResponse`](../modules/file_v1.md#filedownloadresponse)\>

Download file data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`Promise`\<[`FileDownloadResponse`](../modules/file_v1.md#filedownloadresponse)\>

#### Defined in

[file/index.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L94)

___

### fetch

▸ **fetch**(`fileId`): `Promise`\<[`FileFetchResponse`](../modules/file_v1.md#filefetchresponse)\>

Fetches a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`Promise`\<[`FileFetchResponse`](../modules/file_v1.md#filefetchresponse)\>

#### Defined in

[file/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L42)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`FileListResponse`](../modules/file_v1.md#filelistresponse), [`FileListStreamItemType`](../modules/file_v1.md#fileliststreamitemtype)\>

Retrieves a list of all files.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`FileListRequest`](../modules/file_v1.md#filelistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`FileListResponse`](../modules/file_v1.md#filelistresponse), [`FileListStreamItemType`](../modules/file_v1.md#fileliststreamitemtype)\>

#### Defined in

[file/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L32)

___

### update

▸ **update**(`fileId`, `request`): `Promise`\<[`FileUpdateResponse`](../modules/file_v1.md#fileupdateresponse)\>

Updates a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `request` | [`FileOptions`](../modules/file_v1.md#fileoptions) |

#### Returns

`Promise`\<[`FileUpdateResponse`](../modules/file_v1.md#fileupdateresponse)\>

#### Defined in

[file/index.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L63)

___

### upload

▸ **upload**(`fileId`, `request`): `Promise`\<[`FileUploadResponse`](../modules/file_v1.md#fileuploadresponse)\>

Upload file data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `request` | [`FileUploadRequest`](../modules/file_v1.md#fileuploadrequest) |

#### Returns

`Promise`\<[`FileUploadResponse`](../modules/file_v1.md#fileuploadresponse)\>

#### Defined in

[file/index.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L84)