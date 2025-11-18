[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [contact/conversation](../modules/contact_conversation.md) / ConversationClient

# Class: ConversationClient

[contact/conversation](../modules/contact_conversation.md).ConversationClient

Contact conversation client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ConversationClient`**

## Table of contents

### Constructors

- [constructor](contact_conversation.ConversationClient.md#constructor)

### Methods

- [extend](contact_conversation.ConversationClient.md#extend)
- [list](contact_conversation.ConversationClient.md#list)

## Constructors

### constructor

• **new ConversationClient**(`options`): [`ConversationClient`](contact_conversation.ConversationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ConversationClient`](contact_conversation.ConversationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[contact/conversation/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/index.js#L17)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`ConversationClient`](contact_conversation.ConversationClient.md)

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

[`ConversationClient`](contact_conversation.ConversationClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### list

▸ **list**(`contactId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all contact conversations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `request?` | [`ConversationListRequest`](../modules/contact_conversation_v1.md#conversationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[contact/conversation/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/index.js#L28)
