[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation](../modules/conversation.md) / ConversationClient

# Class: ConversationClient

[conversation](../modules/conversation.md).ConversationClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`ConversationClient`**

## Table of contents

### Constructors

- [constructor](conversation.ConversationClient.md#constructor)

### Properties

- [message](conversation.ConversationClient.md#message)
- [secret](conversation.ConversationClient.md#secret)
- [session](conversation.ConversationClient.md#session)
- [url](conversation.ConversationClient.md#url)

### Methods

- [clientFetch](conversation.ConversationClient.md#clientfetch)
- [complete](conversation.ConversationClient.md#complete)
- [create](conversation.ConversationClient.md#create)
- [delete](conversation.ConversationClient.md#delete)
- [fetch](conversation.ConversationClient.md#fetch)
- [list](conversation.ConversationClient.md#list)
- [receive](conversation.ConversationClient.md#receive)
- [send](conversation.ConversationClient.md#send)
- [update](conversation.ConversationClient.md#update)

## Constructors

### constructor

• **new ConversationClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[conversation/index.js:19](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L19)

## Properties

### message

• **message**: [`MessageClient`](conversation_message.MessageClient.md)

#### Defined in

[conversation/index.js:22](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L22)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:135](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/client.js#L135)

___

### session

• **session**: [`SessionClient`](conversation_session.SessionClient.md)

#### Defined in

[conversation/index.js:23](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L23)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:137](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/client.js#L137)

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

[client.js:154](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/client.js#L154)

___

### complete

▸ **complete**(`conversationId`, `request`): `ResponsePromise`<[`ConversationCompleteResponse`](../modules/conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](../modules/conversation_v1.md#conversationcompletestreamtype)\>

Completes the next bot message in a stateless conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | ``null`` \| `string` |
| `request` | [`ConversationCompleteRequest`](../modules/conversation_v1.md#conversationcompleterequest) |

#### Returns

`ResponsePromise`<[`ConversationCompleteResponse`](../modules/conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](../modules/conversation_v1.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/index.js:77](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L77)

___

### create

▸ **create**(`request`): `Promise`<[`ConversationCreateResponse`](../modules/conversation_v1.md#conversationcreateresponse)\>

Creates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationOptions`](../modules/conversation_v1.md#conversationoptions) |

#### Returns

`Promise`<[`ConversationCreateResponse`](../modules/conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/index.js:47](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L47)

___

### delete

▸ **delete**(`conversationId`): `Promise`<[`ConversationDeleteResponse`](../modules/conversation_v1.md#conversationdeleteresponse)\>

Deletes the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationDeleteResponse`](../modules/conversation_v1.md#conversationdeleteresponse)\>

#### Defined in

[conversation/index.js:66](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L66)

___

### fetch

▸ **fetch**(`conversationId`): `Promise`<[`ConversationInstance`](../modules/conversation_v1.md#conversationinstance)\>

Fetches a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationInstance`](../modules/conversation_v1.md#conversationinstance)\>

#### Defined in

[conversation/index.js:38](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L38)

___

### list

▸ **list**(): `ResponsePromise`<[`ConversationInstance`](../modules/conversation_v1.md#conversationinstance), [`ConversationListStreamItem`](../modules/conversation_v1.md#conversationliststreamitem)\>

Retrieves a list of all existing conversations associated with this client.

#### Returns

`ResponsePromise`<[`ConversationInstance`](../modules/conversation_v1.md#conversationinstance), [`ConversationListStreamItem`](../modules/conversation_v1.md#conversationliststreamitem)\>

#### Defined in

[conversation/index.js:29](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L29)

___

### receive

▸ **receive**(`conversationId`, `request`): `Promise`<[`ConversationReceiveResponse`](../modules/conversation_v1.md#conversationreceiveresponse)\>

Receives a message from the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveRequest`](../modules/conversation_v1.md#conversationreceiverequest) |

#### Returns

`Promise`<[`ConversationReceiveResponse`](../modules/conversation_v1.md#conversationreceiveresponse)\>

#### Defined in

[conversation/index.js:97](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L97)

___

### send

▸ **send**(`conversationId`, `request`): `Promise`<[`ConversationSendResponse`](../modules/conversation_v1.md#conversationsendresponse)\>

Sends a message to the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationSendRequest`](../modules/conversation_v1.md#conversationsendrequest) |

#### Returns

`Promise`<[`ConversationSendResponse`](../modules/conversation_v1.md#conversationsendresponse)\>

#### Defined in

[conversation/index.js:87](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L87)

___

### update

▸ **update**(`conversationId`, `request`): `Promise`<[`ConversationUpdateResponse`](../modules/conversation_v1.md#conversationupdateresponse)\>

Updates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationOptions`](../modules/conversation_v1.md#conversationoptions) |

#### Returns

`Promise`<[`ConversationUpdateResponse`](../modules/conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/index.js:57](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/conversation/index.js#L57)
