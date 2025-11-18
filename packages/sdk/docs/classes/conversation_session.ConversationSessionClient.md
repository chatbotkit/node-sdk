[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation/session](../modules/conversation_session.md) / ConversationSessionClient

# Class: ConversationSessionClient

[conversation/session](../modules/conversation_session.md).ConversationSessionClient

Conversation session client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ConversationSessionClient`**

## Table of contents

### Constructors

- [constructor](conversation_session.ConversationSessionClient.md#constructor)

### Methods

- [create](conversation_session.ConversationSessionClient.md#create)
- [extend](conversation_session.ConversationSessionClient.md#extend)

## Constructors

### constructor

• **new ConversationSessionClient**(`options`): [`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[conversation/session/index.js:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/index.js#L11)

## Methods

### create

▸ **create**(`conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/session/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/index.js#L22)

___

### extend

▸ **extend**(`extensionOptions`): [`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

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

[`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)
