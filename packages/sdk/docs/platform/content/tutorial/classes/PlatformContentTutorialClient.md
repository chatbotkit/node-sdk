[**@chatbotkit/sdk**](../../../../README.md)

***

[@chatbotkit/sdk](../../../../modules.md) / [platform/content/tutorial](../README.md) / PlatformContentTutorialClient

# Class: PlatformContentTutorialClient

Defined in: [platform/content/tutorial/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/tutorial/index.js#L17)

Platform content tutorial client.

## Extends

- [`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PlatformContentTutorialClient**(`options`): `PlatformContentTutorialClient`

Defined in: [platform/content/tutorial/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/tutorial/index.js#L21)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PlatformContentTutorialClient`

#### Overrides

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### extend()

> **extend**(`extensionOptions`): `PlatformContentTutorialClient`

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

`PlatformContentTutorialClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`extend`](../../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`tutorialId`): [`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [platform/content/tutorial/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/tutorial/index.js#L51)

Fetches a platform content tutorial.

#### Parameters

##### tutorialId

`string`

#### Returns

[`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [platform/content/tutorial/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/tutorial/index.js#L31)

Retrieves a list of all platform content tutorials.

#### Parameters

##### request?

[`PlatformContentTutorialListRequest`](../v1/type-aliases/PlatformContentTutorialListRequest.md)

#### Returns

[`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### search()

> **search**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [platform/content/tutorial/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/tutorial/index.js#L41)

Searches platform content tutorials.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
