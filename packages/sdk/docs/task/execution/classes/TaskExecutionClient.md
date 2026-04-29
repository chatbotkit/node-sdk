[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [task/execution](../README.md) / TaskExecutionClient

# Class: TaskExecutionClient

Defined in: [task/execution/index.js:13](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/execution/index.js#L13)

Task execution client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new TaskExecutionClient**(`options`): `TaskExecutionClient`

Defined in: [task/execution/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/execution/index.js#L17)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`TaskExecutionClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### cancel()

> **cancel**(`taskId`, `taskExecutionId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [task/execution/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/execution/index.js#L39)

Cancels a task execution.

#### Parameters

##### taskId

`string`

##### taskExecutionId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `TaskExecutionClient`

Defined in: [client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L390)

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

`TaskExecutionClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### list()

> **list**(`taskId`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [task/execution/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/task/execution/index.js#L28)

Retrieves a list of all executions for a task.

#### Parameters

##### taskId

`string`

##### request?

[`TaskExecutionListRequest`](../v1/type-aliases/TaskExecutionListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>
