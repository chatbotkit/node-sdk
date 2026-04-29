[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [task](../README.md) / TaskClient

# Class: TaskClient

Defined in: [task/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L23)

Task client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new TaskClient**(`options`): `TaskClient`

Defined in: [task/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L27)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`TaskClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### execution

> **execution**: [`TaskExecutionClient`](../execution/classes/TaskExecutionClient.md)

Defined in: [task/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L33)

## Methods

### cancel()

> **cancel**(`taskId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [task/index.js:103](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L103)

Cancels a task.

#### Parameters

##### taskId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [task/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L72)

Creates a new task.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`taskId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [task/index.js:93](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L93)

Deletes the task.

#### Parameters

##### taskId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### export()

> **export**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<`never`, \{ \}\>

Defined in: [task/index.js:52](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L52)

Exports tasks.

#### Parameters

##### request?

[`TaskExportRequest`](../v1/type-aliases/TaskExportRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<`never`, \{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `TaskClient`

Defined in: [client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L390)

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

Defined in: [task/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L62)

Fetches a task.

#### Parameters

##### taskId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [task/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L42)

Retrieves a list of all tasks.

#### Parameters

##### request?

[`TaskListRequest`](../v1/type-aliases/TaskListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### trigger()

> **trigger**(`taskId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [task/index.js:113](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L113)

Triggers a task.

#### Parameters

##### taskId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`taskId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [task/index.js:83](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/index.js#L83)

Updates a task.

#### Parameters

##### taskId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
