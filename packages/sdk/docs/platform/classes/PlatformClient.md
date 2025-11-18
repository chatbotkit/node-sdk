[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [platform](../README.md) / PlatformClient

# Class: PlatformClient

Defined in: [platform/index.js:13](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L13)

Platform client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PlatformClient**(`options`): `PlatformClient`

Defined in: [platform/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L17)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PlatformClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### ability

> **ability**: [`PlatformAbilityClient`](../ability/classes/PlatformAbilityClient.md)

Defined in: [platform/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L28)

***

### action

> **action**: [`PlatformActionClient`](../action/classes/PlatformActionClient.md)

Defined in: [platform/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L33)

***

### content

> **content**: [`PlatformContentClient`](../content/classes/PlatformContentClient.md)

Defined in: [platform/index.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L38)

***

### example

> **example**: [`PlatformExampleClient`](../example/classes/PlatformExampleClient.md)

Defined in: [platform/index.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L48)

***

### model

> **model**: [`PlatformModelClient`](../model/classes/PlatformModelClient.md)

Defined in: [platform/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L23)

***

### report

> **report**: [`PlatformReportClient`](../report/classes/PlatformReportClient.md)

Defined in: [platform/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L53)

***

### secret

> **secret**: [`PlatformSecretClient`](../secret/classes/PlatformSecretClient.md)

Defined in: [platform/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L43)

## Methods

### extend()

> **extend**(`extensionOptions`): `PlatformClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`PlatformClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)
