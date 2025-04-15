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

- [clientFetch](conversation_attachment.ConversationAttachmentClient.md#clientfetch)
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

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:257](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L257)

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
