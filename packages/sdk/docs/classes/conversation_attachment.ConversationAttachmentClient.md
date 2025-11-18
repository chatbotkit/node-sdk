[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation/attachment](../modules/conversation_attachment.md) / ConversationAttachmentClient

# Class: ConversationAttachmentClient

[conversation/attachment](../modules/conversation_attachment.md).ConversationAttachmentClient

Attachment client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ConversationAttachmentClient`**

## Table of contents

### Constructors

- [constructor](conversation_attachment.ConversationAttachmentClient.md#constructor)

### Methods

- [extend](conversation_attachment.ConversationAttachmentClient.md#extend)
- [upload](conversation_attachment.ConversationAttachmentClient.md#upload)

## Constructors

### constructor

• **new ConversationAttachmentClient**(`options`): [`ConversationAttachmentClient`](conversation_attachment.ConversationAttachmentClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ConversationAttachmentClient`](conversation_attachment.ConversationAttachmentClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[conversation/attachment/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/attachment/index.js#L17)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`ConversationAttachmentClient`](conversation_attachment.ConversationAttachmentClient.md)

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

[`ConversationAttachmentClient`](conversation_attachment.ConversationAttachmentClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### upload

▸ **upload**(`fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationAttachmentUploadResponse`](../modules/conversation_attachment_v1.md#conversationattachmentuploadresponse)\>

Upload file data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `request` | [`ConversationAttachmentUploadRequest`](../modules/conversation_attachment_v1.md#conversationattachmentuploadrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationAttachmentUploadResponse`](../modules/conversation_attachment_v1.md#conversationattachmentuploadresponse)\>

#### Defined in

[conversation/attachment/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/attachment/index.js#L28)
