[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/extract](../README.md) / ExtractIntegrationClient

# Class: ExtractIntegrationClient

Defined in: [integration/extract/index.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L16)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new ExtractIntegrationClient**(`options`): `ExtractIntegrationClient`

Defined in: [integration/extract/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L20)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`ExtractIntegrationClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/extract/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L50)

Creates a new extract integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`extractId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/extract/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L71)

Deletes a extract integration.

#### Parameters

##### extractId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `ExtractIntegrationClient`

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

`ExtractIntegrationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`extractId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [integration/extract/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L40)

Fetches a extract integration.

#### Parameters

##### extractId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/extract/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L30)

Retrieves a list of all extract integrations.

#### Parameters

##### request?

[`ExtractIntegrationListRequest`](../v1/type-aliases/ExtractIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`extractId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/extract/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L61)

Updates a extract integration.

#### Parameters

##### extractId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
