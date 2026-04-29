[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/trigger](../README.md) / TriggerIntegrationClient

# Class: TriggerIntegrationClient

Defined in: [integration/trigger/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L20)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new TriggerIntegrationClient**(`options`): `TriggerIntegrationClient`

Defined in: [integration/trigger/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L24)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`TriggerIntegrationClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### execution

> **execution**: [`TriggerIntegrationExecutionClient`](../execution/classes/TriggerIntegrationExecutionClient.md)

Defined in: [integration/trigger/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L30)

## Methods

### cancel()

> **cancel**(`triggerId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:90](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L90)

Cancels a trigger integration.

#### Parameters

##### triggerId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:59](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L59)

Creates a new trigger integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`triggerId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L80)

Deletes a trigger integration.

#### Parameters

##### triggerId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `TriggerIntegrationClient`

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

`TriggerIntegrationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`triggerId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [integration/trigger/index.js:49](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L49)

Fetches a trigger integration.

#### Parameters

##### triggerId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### invoke()

> **invoke**(`triggerId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:111](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L111)

Invoke a trigger integration.

#### Parameters

##### triggerId

`string`

##### request

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/trigger/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L39)

Retrieves a list of all trigger integrations.

#### Parameters

##### request?

[`TriggerIntegrationListRequest`](../v1/type-aliases/TriggerIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### setup()

> **setup**(`triggerId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:100](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L100)

Setups a trigger integration.

#### Parameters

##### triggerId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`triggerId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L70)

Updates a trigger integration.

#### Parameters

##### triggerId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
