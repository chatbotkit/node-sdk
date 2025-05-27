[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [file](../modules/file.md) / FileClient

# Class: FileClient

[file](../modules/file.md).FileClient

File client.

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
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`FileClient`](file.FileClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[file/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L25)

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
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:308](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L308)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileCreateResponse`](../modules/file_v1.md#filecreateresponse)\>

Creates a new file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`FileOptions`](../modules/file_v1.md#fileoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileCreateResponse`](../modules/file_v1.md#filecreateresponse)\>

#### Defined in

[file/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L55)

___

### delete

▸ **delete**(`fileId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileDeleteResponse`](../modules/file_v1.md#filedeleteresponse)\>

Deletes the file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileDeleteResponse`](../modules/file_v1.md#filedeleteresponse)\>

#### Defined in

[file/index.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L76)

___

### download

▸ **download**(`fileId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileDownloadResponse`](../modules/file_v1.md#filedownloadresponse)\>

Download file data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileDownloadResponse`](../modules/file_v1.md#filedownloadresponse)\>

#### Defined in

[file/index.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L97)

___

### fetch

▸ **fetch**(`fileId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`FileFetchResponse`](../modules/file_v1.md#filefetchresponse), `never`\>

Fetches a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`FileFetchResponse`](../modules/file_v1.md#filefetchresponse), `never`\>

#### Defined in

[file/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L45)

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

[file/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L35)

___

### update

▸ **update**(`fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileUpdateResponse`](../modules/file_v1.md#fileupdateresponse)\>

Updates a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `request` | [`FileOptions`](../modules/file_v1.md#fileoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileUpdateResponse`](../modules/file_v1.md#fileupdateresponse)\>

#### Defined in

[file/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L66)

___

### upload

▸ **upload**(`fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileUploadResponse`](../modules/file_v1.md#fileuploadresponse)\>

Upload file data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `request` | [`FileUploadRequest`](../modules/file_v1.md#fileuploadrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileUploadResponse`](../modules/file_v1.md#fileuploadresponse)\>

#### Defined in

[file/index.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L87)
