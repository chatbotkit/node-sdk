[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [platform/model](../README.md) / PlatformModelClient

# Class: PlatformModelClient

Defined in: [platform/model/index.js:13](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/model/index.js#L13)

Model client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PlatformModelClient**(`options`): `PlatformModelClient`

Defined in: [platform/model/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/model/index.js#L17)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PlatformModelClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### extend()

> **extend**(`extensionOptions`): `PlatformModelClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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

`PlatformModelClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [platform/model/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/model/index.js#L27)

Retrieves a list of all platform models.

#### Parameters

##### request?

[`PlatformModelListRequest`](../v1/type-aliases/PlatformModelListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>
