[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [platform/example](../README.md) / PlatformExampleClient

# Class: PlatformExampleClient

Defined in: [platform/example/index.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L18)

Platform example client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PlatformExampleClient**(`options`): `PlatformExampleClient`

Defined in: [platform/example/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L22)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PlatformExampleClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### clone()

> **clone**(`exampleId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [platform/example/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L62)

Clones a platform example.

#### Parameters

##### exampleId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `PlatformExampleClient`

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

`PlatformExampleClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`exampleId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [platform/example/index.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L52)

Fetches a platform example.

#### Parameters

##### exampleId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [platform/example/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L32)

Retrieves a list of all platform examples.

#### Parameters

##### request?

[`PlatformExampleListRequest`](../v1/type-aliases/PlatformExampleListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### search()

> **search**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [platform/example/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L42)

Searches platform examples.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
