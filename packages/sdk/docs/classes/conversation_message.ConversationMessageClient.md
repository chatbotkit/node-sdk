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
- [downvote](conversation_message.ConversationMessageClient.md#downvote)
- [fetch](conversation_message.ConversationMessageClient.md#fetch)
- [list](conversation_message.ConversationMessageClient.md#list)
- [update](conversation_message.ConversationMessageClient.md#update)
- [upvote](conversation_message.ConversationMessageClient.md#upvote)

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

[conversation/message/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L25)

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
| `options.buffer?` | `ArrayBuffer` |
| `options.external?` | `boolean` |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | `Record`\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |
| `options.record?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:219](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L219)

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

[conversation/message/index.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L58)

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

[conversation/message/index.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L81)

___

### downvote

▸ **downvote**(`conversationId`, `messageId`, `request`): `Promise`\<[`ConversationMessageDownvoteResponse`](../modules/conversation_message_v1.md#conversationmessagedownvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`ConversationMessageDownvoteRequest`](../modules/conversation_message_v1.md#conversationmessagedownvoterequest) |

#### Returns

`Promise`\<[`ConversationMessageDownvoteResponse`](../modules/conversation_message_v1.md#conversationmessagedownvoteresponse)\>

#### Defined in

[conversation/message/index.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L101)

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

[conversation/message/index.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L47)

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

[conversation/message/index.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L36)

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

[conversation/message/index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L70)

___

### upvote

▸ **upvote**(`conversationId`, `messageId`, `request`): `Promise`\<[`ConversationMessageUpvoteResponse`](../modules/conversation_message_v1.md#conversationmessageupvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`ConversationMessageUpvoteRequest`](../modules/conversation_message_v1.md#conversationmessageupvoterequest) |

#### Returns

`Promise`\<[`ConversationMessageUpvoteResponse`](../modules/conversation_message_v1.md#conversationmessageupvoteresponse)\>

#### Defined in

[conversation/message/index.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L91)
