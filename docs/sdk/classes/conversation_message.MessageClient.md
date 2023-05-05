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

[conversation/message/index.js:14](https://github.com/chatbotkit/node-sdk/blob/bd308cd/packages/sdk/src/conversation/message/index.js#L14)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:130](https://github.com/chatbotkit/node-sdk/blob/bd308cd/packages/sdk/src/client.js#L130)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:132](https://github.com/chatbotkit/node-sdk/blob/bd308cd/packages/sdk/src/client.js#L132)

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

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:149](https://github.com/chatbotkit/node-sdk/blob/bd308cd/packages/sdk/src/client.js#L149)

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

[conversation/message/index.js:43](https://github.com/chatbotkit/node-sdk/blob/bd308cd/packages/sdk/src/conversation/message/index.js#L43)

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

[conversation/message/index.js:64](https://github.com/chatbotkit/node-sdk/blob/bd308cd/packages/sdk/src/conversation/message/index.js#L64)

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

[conversation/message/index.js:33](https://github.com/chatbotkit/node-sdk/blob/bd308cd/packages/sdk/src/conversation/message/index.js#L33)

___

### list

▸ **list**(`conversationId`): `ResponsePromise`<[`MessageInstance`](../modules/conversation_message_v1.md#messageinstance), [`MessageListStreamItem`](../modules/conversation_message_v1.md#messageliststreamitem)\>

Retrieves a list of all existing messages associated with this client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`ResponsePromise`<[`MessageInstance`](../modules/conversation_message_v1.md#messageinstance), [`MessageListStreamItem`](../modules/conversation_message_v1.md#messageliststreamitem)\>

#### Defined in

[conversation/message/index.js:23](https://github.com/chatbotkit/node-sdk/blob/bd308cd/packages/sdk/src/conversation/message/index.js#L23)

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

[conversation/message/index.js:54](https://github.com/chatbotkit/node-sdk/blob/bd308cd/packages/sdk/src/conversation/message/index.js#L54)
