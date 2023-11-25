[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation/message](../modules/conversation_message.md) / ConversationMessageClient

# Class: ConversationMessageClient

[conversation/message](../modules/conversation_message.md).ConversationMessageClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ConversationMessageClient`**

## Table of contents

### Constructors

- [constructor](conversation_message.ConversationMessageClient.md#constructor)

### Properties

- [endpoints](conversation_message.ConversationMessageClient.md#endpoints)
- [secret](conversation_message.ConversationMessageClient.md#secret)
- [url](conversation_message.ConversationMessageClient.md#url)

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
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`ConversationMessageClient`](conversation_message.ConversationMessageClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[conversation/message/index.js:20](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/conversation/message/index.js#L20)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L201)

___

### secret

• **secret**: `string`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[secret](client.ChatBotKitClient.md#secret)

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L189)

___

### url

• **url**: `URL`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[url](client.ChatBotKitClient.md#url)

#### Defined in

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L191)

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

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L211)

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

[conversation/message/index.js:53](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/conversation/message/index.js#L53)

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

[conversation/message/index.js:76](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/conversation/message/index.js#L76)

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

[conversation/message/index.js:42](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/conversation/message/index.js#L42)

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

[conversation/message/index.js:31](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/conversation/message/index.js#L31)

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

[conversation/message/index.js:65](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/conversation/message/index.js#L65)
