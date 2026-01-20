[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [platform](../README.md) / PlatformClient

# Class: PlatformClient

Defined in: [platform/index.js:15](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L15)

Platform client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PlatformClient**(`options`): `PlatformClient`

Defined in: [platform/index.js:19](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L19)

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

Defined in: [platform/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L30)

***

### action

> **action**: [`PlatformActionClient`](../action/classes/PlatformActionClient.md)

Defined in: [platform/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L35)

***

### doc

> **doc**: [`PlatformDocClient`](../doc/classes/PlatformDocClient.md)

Defined in: [platform/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L40)

***

### example

> **example**: [`PlatformExampleClient`](../example/classes/PlatformExampleClient.md)

Defined in: [platform/index.js:60](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L60)

***

### manual

> **manual**: [`PlatformManualClient`](../manual/classes/PlatformManualClient.md)

Defined in: [platform/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L45)

***

### model

> **model**: [`PlatformModelClient`](../model/classes/PlatformModelClient.md)

Defined in: [platform/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L25)

***

### report

> **report**: [`PlatformReportClient`](../report/classes/PlatformReportClient.md)

Defined in: [platform/index.js:65](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L65)

***

### secret

> **secret**: [`PlatformSecretClient`](../secret/classes/PlatformSecretClient.md)

Defined in: [platform/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L55)

***

### tutorial

> **tutorial**: [`PlatformTutorialClient`](../tutorial/classes/PlatformTutorialClient.md)

Defined in: [platform/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L50)

## Methods

### extend()

> **extend**(`extensionOptions`): `PlatformClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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
