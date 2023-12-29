[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation/message](../modules/conversation_message.md) / ConversationMessageClient

# Class: ConversationMessageClient

[conversation/message](../modules/conversation_message.md).ConversationMessageClient

Conversation message client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ConversationMessageClient`**

## Table of contents

### Constructors

- [constructor](conversation_message.ConversationMessageClient.md#constructor)

### Methods

- [clientFetch](conversation_message.ConversationMessageClient.md#clientfetch)
- [create](conversation_message.ConversationMessageClient.md#create)
- [delete](conversation_message.ConversationMessageClient.md#delete)
- [fetch](conversation_message.ConversationMessageClient.md#fetch)
- [list](conversation_message.ConversationMessageClient.md#list)
- [update](conversation_message.ConversationMessageClient.md#update)

## Constructors

### constructor

• **new ConversationMessageClient**(`options`): [`ConversationMessageClient`](conversation_message.ConversationMessageClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ConversationMessageClient`](conversation_message.ConversationMessageClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[conversation/message/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L23)

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
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:213](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L213)

___

### create

▸ **create**(`conversationId`, `request`): `Promise`\<[`ConversationMessageCreateResponse`](../modules/conversation_message_v1.md#conversationmessagecreateresponse)\>

Creates a new message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationMessageOptions`](../modules/conversation_message_v1.md#conversationmessageoptions) |

#### Returns

`Promise`\<[`ConversationMessageCreateResponse`](../modules/conversation_message_v1.md#conversationmessagecreateresponse)\>

#### Defined in

[conversation/message/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L56)

___

### delete

▸ **delete**(`conversationId`, `messageId`): `Promise`\<[`ConversationMessageDeleteResponse`](../modules/conversation_message_v1.md#conversationmessagedeleteresponse)\>

Deletes the message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

`Promise`\<[`ConversationMessageDeleteResponse`](../modules/conversation_message_v1.md#conversationmessagedeleteresponse)\>

#### Defined in

[conversation/message/index.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L79)

___

### fetch

▸ **fetch**(`conversationId`, `messageId`): `Promise`\<[`ConversationMessageFetchResponse`](../modules/conversation_message_v1.md#conversationmessagefetchresponse)\>

Fetches a message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

`Promise`\<[`ConversationMessageFetchResponse`](../modules/conversation_message_v1.md#conversationmessagefetchresponse)\>

#### Defined in

[conversation/message/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L45)

___

### list

▸ **list**(`conversationId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationMessageListResponse`](../modules/conversation_message_v1.md#conversationmessagelistresponse), [`ConversationMessageListStreamItem`](../modules/conversation_message_v1.md#conversationmessageliststreamitem)\>

Retrieves a list of all messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request?` | [`ConversationMessageListRequest`](../modules/conversation_message_v1.md#conversationmessagelistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationMessageListResponse`](../modules/conversation_message_v1.md#conversationmessagelistresponse), [`ConversationMessageListStreamItem`](../modules/conversation_message_v1.md#conversationmessageliststreamitem)\>

#### Defined in

[conversation/message/index.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L34)

___

### update

▸ **update**(`conversationId`, `messageId`, `request`): `Promise`\<[`ConversationMessageUpdateResponse`](../modules/conversation_message_v1.md#conversationmessageupdateresponse)\>

Updates a message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`ConversationMessageOptions`](../modules/conversation_message_v1.md#conversationmessageoptions) |

#### Returns

`Promise`\<[`ConversationMessageUpdateResponse`](../modules/conversation_message_v1.md#conversationmessageupdateresponse)\>

#### Defined in

[conversation/message/index.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L68)
