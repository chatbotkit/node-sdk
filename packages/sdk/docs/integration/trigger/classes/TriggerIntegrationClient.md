[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/trigger](../README.md) / TriggerIntegrationClient

# Class: TriggerIntegrationClient

Defined in: [integration/trigger/index.js:18](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L18)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new TriggerIntegrationClient**(`options`): `TriggerIntegrationClient`

Defined in: [integration/trigger/index.js:22](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L22)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`TriggerIntegrationClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:52](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L52)

Creates a new trigger integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`triggerId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:73](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L73)

Deletes a trigger integration.

#### Parameters

##### triggerId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `TriggerIntegrationClient`

Defined in: [client.js:382](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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

Defined in: [integration/trigger/index.js:42](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L42)

Fetches a trigger integration.

#### Parameters

##### triggerId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### invoke()

> **invoke**(`triggerId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:94](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L94)

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

Defined in: [integration/trigger/index.js:32](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L32)

Retrieves a list of all trigger integrations.

#### Parameters

##### request?

[`TriggerIntegrationListRequest`](../v1/type-aliases/TriggerIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### setup()

> **setup**(`triggerId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:83](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L83)

Setups a trigger integration.

#### Parameters

##### triggerId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`triggerId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/trigger/index.js:63](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/trigger/index.js#L63)

Updates a trigger integration.

#### Parameters

##### triggerId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
