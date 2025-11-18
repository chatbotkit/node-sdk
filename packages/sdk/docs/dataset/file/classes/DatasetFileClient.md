[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [dataset/file](../README.md) / DatasetFileClient

# Class: DatasetFileClient

Defined in: [dataset/file/index.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L18)

Dataset file client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new DatasetFileClient**(`options`): `DatasetFileClient`

Defined in: [dataset/file/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L22)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`DatasetFileClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### attach()

> **attach**(`datasetId`, `fileId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [dataset/file/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L44)

Attaches a file.

#### Parameters

##### datasetId

`string`

##### fileId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### detach()

> **detach**(`datasetId`, `fileId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [dataset/file/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L56)

Detach a file.

#### Parameters

##### datasetId

`string`

##### fileId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `DatasetFileClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`DatasetFileClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### list()

> **list**(`datasetId`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [dataset/file/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L32)

#### Parameters

##### datasetId

`string`

##### request?

[`DatasetFileListRequest`](../v1/type-aliases/DatasetFileListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### sync()

> **sync**(`datasetId`, `fileId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [dataset/file/index.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L68)

Sync a file.

#### Parameters

##### datasetId

`string`

##### fileId

`string`

##### request

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
