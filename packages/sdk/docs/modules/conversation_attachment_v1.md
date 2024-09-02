[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/attachment/v1

# Module: conversation/attachment/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_attachment_v1.md#chatbotkitclient)
- [ConversationAttachmentUploadRequest](conversation_attachment_v1.md#conversationattachmentuploadrequest)
- [ConversationAttachmentUploadResponse](conversation_attachment_v1.md#conversationattachmentuploadresponse)
- [ResponsePromise](conversation_attachment_v1.md#responsepromise)

### Functions

- [uploadConversationAttachment](conversation_attachment_v1.md#uploadconversationattachment)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[conversation/attachment/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/attachment/v1.js#L4)

___

### ConversationAttachmentUploadRequest

Ƭ **ConversationAttachmentUploadRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `name?` | `string` |
| `type` | `string` |

#### Defined in

[conversation/attachment/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/attachment/v1.js#L18)

___

### ConversationAttachmentUploadResponse

Ƭ **ConversationAttachmentUploadResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/attachment/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/attachment/v1.js#L22)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[conversation/attachment/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/attachment/v1.js#L10)

## Functions

### uploadConversationAttachment

▸ **uploadConversationAttachment**(`client`, `attachmentId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationAttachmentUploadResponse`](conversation_attachment_v1.md#conversationattachmentuploadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `attachmentId` | `string` |
| `request` | [`ConversationAttachmentUploadRequest`](conversation_attachment_v1.md#conversationattachmentuploadrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationAttachmentUploadResponse`](conversation_attachment_v1.md#conversationattachmentuploadresponse)\>

#### Defined in

[conversation/attachment/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/attachment/v1.js#L29)
