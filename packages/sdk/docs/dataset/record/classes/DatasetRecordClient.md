[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [dataset/record](../README.md) / DatasetRecordClient

# Class: DatasetRecordClient

Defined in: [dataset/record/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/record/index.js#L20)

Dataset record client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new DatasetRecordClient**(`options`): `DatasetRecordClient`

Defined in: [dataset/record/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/record/index.js#L24)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`DatasetRecordClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`datasetId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [dataset/record/index.js:57](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/record/index.js#L57)

Creates a new record.

#### Parameters

##### datasetId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`datasetId`, `recordId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [dataset/record/index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/record/index.js#L80)

Deletes the record.

#### Parameters

##### datasetId

`string`

##### recordId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### export()

> **export**(`datasetId`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [dataset/record/index.js:91](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/record/index.js#L91)

Exports records.

#### Parameters

##### datasetId

`string`

##### request?

[`DatasetRecordExportRequest`](../v1/type-aliases/DatasetRecordExportRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `DatasetRecordClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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

`DatasetRecordClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`datasetId`, `recordId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [dataset/record/index.js:46](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/record/index.js#L46)

Fetches a record.

#### Parameters

##### datasetId

`string`

##### recordId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`datasetId`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [dataset/record/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/record/index.js#L35)

Retrieves a list of all records.

#### Parameters

##### datasetId

`string`

##### request?

[`DatasetRecordListRequest`](../v1/type-aliases/DatasetRecordListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`datasetId`, `recordId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [dataset/record/index.js:69](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/dataset/record/index.js#L69)

Updates a record.

#### Parameters

##### datasetId

`string`

##### recordId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
