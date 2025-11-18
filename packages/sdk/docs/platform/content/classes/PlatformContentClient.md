[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [platform/content](../README.md) / PlatformContentClient

# Class: PlatformContentClient

Defined in: [platform/content/index.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/index.js#L8)

Platform content client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PlatformContentClient**(`options`): `PlatformContentClient`

Defined in: [platform/content/index.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/index.js#L12)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PlatformContentClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### doc

> **doc**: [`PlatformContentDocClient`](../doc/classes/PlatformContentDocClient.md)

Defined in: [platform/content/index.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/index.js#L18)

***

### manual

> **manual**: [`PlatformContentManualClient`](../manual/classes/PlatformContentManualClient.md)

Defined in: [platform/content/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/index.js#L23)

## Methods

### extend()

> **extend**(`extensionOptions`): `PlatformContentClient`

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

`PlatformContentClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)
