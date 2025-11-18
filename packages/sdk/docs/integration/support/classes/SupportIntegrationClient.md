[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/support](../README.md) / SupportIntegrationClient

# Class: SupportIntegrationClient

Defined in: [integration/support/index.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L16)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SupportIntegrationClient**(`options`): `SupportIntegrationClient`

Defined in: [integration/support/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L20)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SupportIntegrationClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/support/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L50)

Creates a new support integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`supportId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/support/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L71)

Deletes a support integration.

#### Parameters

##### supportId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `SupportIntegrationClient`

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

`SupportIntegrationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`supportId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [integration/support/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L40)

Fetches a support integration.

#### Parameters

##### supportId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/support/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L30)

Retrieves a list of all support integrations.

#### Parameters

##### request?

[`SupportIntegrationListRequest`](../v1/type-aliases/SupportIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`supportId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/support/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L61)

Updates a support integration.

#### Parameters

##### supportId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
