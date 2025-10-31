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
- [sync](file.FileClient.md#sync)
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

[file/index.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L26)

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
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
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

[client.js:351](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L351)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[file/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L56)

___

### delete

▸ **delete**(`fileId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[file/index.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L77)

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

[file/index.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L98)

___

### fetch

▸ **fetch**(`fileId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[file/index.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L46)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all files.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`FileListRequest`](../modules/file_v1.md#filelistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[file/index.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L36)

___

### sync

▸ **sync**(`fileId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Syncs a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[file/index.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L108)

___

### update

▸ **update**(`fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[file/index.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L67)

___

### upload

▸ **upload**(`fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Upload file data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `request` | [`FileUploadRequest`](../modules/file_v1.md#fileuploadrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[file/index.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L88)
