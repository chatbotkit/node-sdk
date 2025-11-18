[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [bot/session](../modules/bot_session.md) / BotSessionClient

# Class: BotSessionClient

[bot/session](../modules/bot_session.md).BotSessionClient

Bot session client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`BotSessionClient`**

## Table of contents

### Constructors

- [constructor](bot_session.BotSessionClient.md#constructor)

### Methods

- [create](bot_session.BotSessionClient.md#create)
- [extend](bot_session.BotSessionClient.md#extend)

## Constructors

### constructor

• **new BotSessionClient**(`options`): [`BotSessionClient`](bot_session.BotSessionClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`BotSessionClient`](bot_session.BotSessionClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[bot/session/index.js:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/index.js#L11)

## Methods

### create

▸ **create**(`botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/session/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/index.js#L22)

___

### extend

▸ **extend**(`extensionOptions`): [`BotSessionClient`](bot_session.BotSessionClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`BotSessionClient`](bot_session.BotSessionClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)
