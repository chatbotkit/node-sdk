[**@chatbotkit/sdk**](../../../../README.md)

***

[@chatbotkit/sdk](../../../../modules.md) / [integration/trigger/execution](../README.md) / TriggerIntegrationExecutionClient

# Class: TriggerIntegrationExecutionClient

Defined in: [integration/trigger/execution/index.js:16](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/execution/index.js#L16)

Trigger integration execution client.

## Extends

- [`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new TriggerIntegrationExecutionClient**(`options`): `TriggerIntegrationExecutionClient`

Defined in: [integration/trigger/execution/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/execution/index.js#L20)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`TriggerIntegrationExecutionClient`

#### Overrides

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### cancel()

> **cancel**(`triggerId`, `triggerExecutionId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/execution/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/execution/index.js#L42)

Cancels a trigger integration execution.

#### Parameters

##### triggerId

`string`

##### triggerExecutionId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `TriggerIntegrationExecutionClient`

Defined in: [client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L390)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`TriggerIntegrationExecutionClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`extend`](../../../../client/classes/ChatBotKitClient.md#extend)

***

### list()

> **list**(`triggerId`, `request?`): [`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/trigger/execution/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/execution/index.js#L31)

Retrieves a list of all executions for a trigger integration.

#### Parameters

##### triggerId

`string`

##### request?

[`TriggerIntegrationExecutionListRequest`](../v1/type-aliases/TriggerIntegrationExecutionListRequest.md)

#### Returns

[`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>
