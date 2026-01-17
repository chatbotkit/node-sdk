[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [task](../README.md) / TaskClient

# Class: TaskClient

Defined in: [task/index.js:21](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/task/index.js#L21)

Task client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new TaskClient**(`options`): `TaskClient`

Defined in: [task/index.js:25](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/task/index.js#L25)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`TaskClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [task/index.js:65](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/task/index.js#L65)

Creates a new task.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`taskId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [task/index.js:86](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/task/index.js#L86)

Deletes the task.

#### Parameters

##### taskId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### export()

> **export**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<`never`, \{ \}\>

Defined in: [task/index.js:45](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/task/index.js#L45)

Exports tasks.

#### Parameters

##### request?

[`TaskExportRequest`](../v1/type-aliases/TaskExportRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<`never`, \{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `TaskClient`

Defined in: [client.js:382](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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

`TaskClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`taskId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [task/index.js:55](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/task/index.js#L55)

Fetches a task.

#### Parameters

##### taskId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [task/index.js:35](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/task/index.js#L35)

Retrieves a list of all tasks.

#### Parameters

##### request?

[`TaskListRequest`](../v1/type-aliases/TaskListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### trigger()

> **trigger**(`taskId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [task/index.js:96](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/task/index.js#L96)

Triggers a task.

#### Parameters

##### taskId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`taskId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [task/index.js:76](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/task/index.js#L76)

Updates a task.

#### Parameters

##### taskId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
