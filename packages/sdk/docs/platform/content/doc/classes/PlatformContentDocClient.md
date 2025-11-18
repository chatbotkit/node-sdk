[**@chatbotkit/sdk**](../../../../README.md)

***

[@chatbotkit/sdk](../../../../modules.md) / [platform/content/doc](../README.md) / PlatformContentDocClient

# Class: PlatformContentDocClient

Defined in: [platform/content/doc/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/doc/index.js#L17)

Platform content doc client.

## Extends

- [`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PlatformContentDocClient**(`options`): `PlatformContentDocClient`

Defined in: [platform/content/doc/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/doc/index.js#L21)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PlatformContentDocClient`

#### Overrides

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### extend()

> **extend**(`extensionOptions`): `PlatformContentDocClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

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

`PlatformContentDocClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`extend`](../../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`docId`): [`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [platform/content/doc/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/doc/index.js#L51)

Fetches a platform content doc.

#### Parameters

##### docId

`string`

#### Returns

[`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [platform/content/doc/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/doc/index.js#L31)

Retrieves a list of all platform content docs.

#### Parameters

##### request?

[`PlatformContentDocListRequest`](../v1/type-aliases/PlatformContentDocListRequest.md)

#### Returns

[`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### search()

> **search**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [platform/content/doc/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/doc/index.js#L41)

Searches platform content docs.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
