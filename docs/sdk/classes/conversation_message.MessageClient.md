[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation/message](../modules/conversation_message.md) / MessageClient

# Class: MessageClient

[conversation/message](../modules/conversation_message.md).MessageClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`MessageClient`**

## Table of contents

### Constructors

- [constructor](conversation_message.MessageClient.md#constructor)

### Properties

- [secret](conversation_message.MessageClient.md#secret)
- [url](conversation_message.MessageClient.md#url)

### Methods

- [clientFetch](conversation_message.MessageClient.md#clientfetch)
- [create](conversation_message.MessageClient.md#create)
- [delete](conversation_message.MessageClient.md#delete)
- [fetch](conversation_message.MessageClient.md#fetch)
- [list](conversation_message.MessageClient.md#list)
- [update](conversation_message.MessageClient.md#update)

## Constructors

### constructor

• **new MessageClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[conversation/message/index.js:14](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/conversation/message/index.js#L14)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:155](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/client.js#L155)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:157](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/client.js#L157)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `U`\>(`path`, `options?`): `ResponsePromise`<`T`, `U`\>

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
| `options.data?` | `Record`<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:174](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/client.js#L174)

___

### create

▸ **create**(`conversationId`, `request`): `Promise`<[`MessageCreateResponse`](../modules/conversation_message_v1.md#messagecreateresponse)\>

Creates a new message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`MessageOptions`](../modules/conversation_message_v1.md#messageoptions) |

#### Returns

`Promise`<[`MessageCreateResponse`](../modules/conversation_message_v1.md#messagecreateresponse)\>

#### Defined in

[conversation/message/index.js:46](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/conversation/message/index.js#L46)

___

### delete

▸ **delete**(`conversationId`, `messageId`): `Promise`<[`MessageDeleteResponse`](../modules/conversation_message_v1.md#messagedeleteresponse)\>

Deletes the message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

`Promise`<[`MessageDeleteResponse`](../modules/conversation_message_v1.md#messagedeleteresponse)\>

#### Defined in

[conversation/message/index.js:69](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/conversation/message/index.js#L69)

___

### fetch

▸ **fetch**(`conversationId`, `messageId`): `Promise`<[`MessageInstance`](../modules/conversation_message_v1.md#messageinstance)\>

Fetches a message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

`Promise`<[`MessageInstance`](../modules/conversation_message_v1.md#messageinstance)\>

#### Defined in

[conversation/message/index.js:35](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/conversation/message/index.js#L35)

___

### list

▸ **list**(`conversationId`): `ResponsePromise`<[`MessageListResponse`](../modules/conversation_message_v1.md#messagelistresponse), [`MessageListStreamItem`](../modules/conversation_message_v1.md#messageliststreamitem)\>

Retrieves a list of all existing messages associated with this client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`ResponsePromise`<[`MessageListResponse`](../modules/conversation_message_v1.md#messagelistresponse), [`MessageListStreamItem`](../modules/conversation_message_v1.md#messageliststreamitem)\>

#### Defined in

[conversation/message/index.js:24](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/conversation/message/index.js#L24)

___

### update

▸ **update**(`conversationId`, `messageId`, `request`): `Promise`<[`MessageUpdateResponse`](../modules/conversation_message_v1.md#messageupdateresponse)\>

Updates a new message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`MessageOptions`](../modules/conversation_message_v1.md#messageoptions) |

#### Returns

`Promise`<[`MessageUpdateResponse`](../modules/conversation_message_v1.md#messageupdateresponse)\>

#### Defined in

[conversation/message/index.js:58](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/conversation/message/index.js#L58)
