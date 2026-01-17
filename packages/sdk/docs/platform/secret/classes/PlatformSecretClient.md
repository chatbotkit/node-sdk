[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [platform/secret](../README.md) / PlatformSecretClient

# Class: PlatformSecretClient

Defined in: [platform/secret/index.js:13](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/platform/secret/index.js#L13)

Secret client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PlatformSecretClient**(`options`): `PlatformSecretClient`

Defined in: [platform/secret/index.js:17](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/platform/secret/index.js#L17)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PlatformSecretClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### extend()

> **extend**(`extensionOptions`): `PlatformSecretClient`

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

`PlatformSecretClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [platform/secret/index.js:27](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/platform/secret/index.js#L27)

Retrieves a list of all platform secrets.

#### Parameters

##### request?

[`PlatformSecretListRequest`](../v1/type-aliases/PlatformSecretListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>
