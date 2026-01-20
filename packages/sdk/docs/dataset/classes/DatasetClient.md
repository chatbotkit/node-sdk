[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [dataset](../README.md) / DatasetClient

# Class: DatasetClient

Defined in: [dataset/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/index.js#L22)

Dataset client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new DatasetClient**(`options`): `DatasetClient`

Defined in: [dataset/index.js:26](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/index.js#L26)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`DatasetClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### file

> **file**: [`DatasetFileClient`](../file/classes/DatasetFileClient.md)

Defined in: [dataset/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/index.js#L32)

***

### record

> **record**: [`DatasetRecordClient`](../record/classes/DatasetRecordClient.md)

Defined in: [dataset/index.js:37](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/index.js#L37)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [dataset/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/index.js#L66)

Creates a new dataset.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`datasetId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [dataset/index.js:87](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/index.js#L87)

Deletes the dataset.

#### Parameters

##### datasetId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `DatasetClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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

`DatasetClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`datasetId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [dataset/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/index.js#L56)

Fetches a dataset.

#### Parameters

##### datasetId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [dataset/index.js:46](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/index.js#L46)

Retrieves a list of all datasets.

#### Parameters

##### request?

[`DatasetListRequest`](../v1/type-aliases/DatasetListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### search()

> **search**(`datasetId`, `search`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [dataset/index.js:98](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/index.js#L98)

Searches the dataset.

#### Parameters

##### datasetId

`string`

##### search

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`datasetId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [dataset/index.js:77](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/index.js#L77)

Updates a dataset.

#### Parameters

##### datasetId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
