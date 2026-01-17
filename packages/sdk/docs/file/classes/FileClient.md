[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [file](../README.md) / FileClient

# Class: FileClient

Defined in: [file/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L22)

File client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new FileClient**(`options`): `FileClient`

Defined in: [file/index.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L26)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`FileClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [file/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L56)

Creates a new file.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`fileId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [file/index.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L77)

Deletes the file.

#### Parameters

##### fileId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### download()

> **download**(`fileId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FileDownloadResponse`](../v1/type-aliases/FileDownloadResponse.md)\>

Defined in: [file/index.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L98)

Download file data.

#### Parameters

##### fileId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FileDownloadResponse`](../v1/type-aliases/FileDownloadResponse.md)\>

***

### extend()

> **extend**(`extensionOptions`): `FileClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`FileClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`fileId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [file/index.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L46)

Fetches a file.

#### Parameters

##### fileId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [file/index.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L36)

Retrieves a list of all files.

#### Parameters

##### request?

[`FileListRequest`](../v1/type-aliases/FileListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### sync()

> **sync**(`fileId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [file/index.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L108)

Syncs a file.

#### Parameters

##### fileId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`fileId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [file/index.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L67)

Updates a file.

#### Parameters

##### fileId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### upload()

> **upload**(`fileId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [file/index.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/index.js#L88)

Upload file data.

#### Parameters

##### fileId

`string`

##### request

[`FileUploadRequest`](../v1/type-aliases/FileUploadRequest.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
