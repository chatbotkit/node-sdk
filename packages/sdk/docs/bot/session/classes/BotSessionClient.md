[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [bot/session](../README.md) / BotSessionClient

# Class: BotSessionClient

Defined in: [bot/session/index.js:7](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/bot/session/index.js#L7)

Bot session client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new BotSessionClient**(`options`): `BotSessionClient`

Defined in: [bot/session/index.js:11](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/bot/session/index.js#L11)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`BotSessionClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`botId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [bot/session/index.js:22](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/bot/session/index.js#L22)

Creates a new session.

#### Parameters

##### botId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `BotSessionClient`

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

`BotSessionClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)
