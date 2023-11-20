[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation/message](../modules/conversation_message.md) / ConversationMessageClient

# Class: ConversationMessageClient

[conversation/message](../modules/conversation_message.md).ConversationMessageClient

**`Template`**

**`Template`**

## Hierarchy

- `ChatBotKitClient`

  ↳ **`ConversationMessageClient`**

## Table of contents

### Constructors

- [constructor](conversation_message.ConversationMessageClient.md#constructor)

### Properties

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
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`ConversationMessageClient`](conversation_message.ConversationMessageClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[conversation/message/index.js:20](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/message/index.js#L20)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/client.js#L189)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): `ResponsePromise`\<`T`, `U`\>

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

`ResponsePromise`\<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/client.js#L206)

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

[conversation/message/index.js:53](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/message/index.js#L53)

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

[conversation/message/index.js:76](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/message/index.js#L76)

___

### fetch

▸ **fetch**(`conversationId`, `messageId`): `Promise`\<[`ConversationMessageInstance`](../modules/conversation_message_v1.md#conversationmessageinstance)\>

Fetches a message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

`Promise`\<[`ConversationMessageInstance`](../modules/conversation_message_v1.md#conversationmessageinstance)\>

#### Defined in

[conversation/message/index.js:42](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/message/index.js#L42)

___

### list

▸ **list**(`conversationId`, `request?`): `ResponsePromise`\<[`ConversationMessageListResponse`](../modules/conversation_message_v1.md#conversationmessagelistresponse), [`ConversationMessageListStreamItem`](../modules/conversation_message_v1.md#conversationmessageliststreamitem)\>

Retrieves a list of all messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request?` | [`ConversationMessageListRequest`](../modules/conversation_message_v1.md#conversationmessagelistrequest) |

#### Returns

`ResponsePromise`\<[`ConversationMessageListResponse`](../modules/conversation_message_v1.md#conversationmessagelistresponse), [`ConversationMessageListStreamItem`](../modules/conversation_message_v1.md#conversationmessageliststreamitem)\>

#### Defined in

[conversation/message/index.js:31](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/message/index.js#L31)

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

[conversation/message/index.js:65](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/message/index.js#L65)
