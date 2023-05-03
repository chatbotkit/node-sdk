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

- [secret](conversation.ConversationClient.md#secret)
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

[conversation/index.js:17](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/conversation/index.js#L17)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:130](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/client.js#L130)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:132](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/client.js#L132)

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

[client.js:149](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/client.js#L149)

___

### complete

▸ **complete**(`request`): `ResponsePromise`<[`ConversationCompleteResponse`](../modules/conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](../modules/conversation_v1.md#conversationcompletestreamtype)\>

Completes the next bot message in a stateless conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationCompleteRequest`](../modules/conversation_v1.md#conversationcompleterequest) |

#### Returns

`ResponsePromise`<[`ConversationCompleteResponse`](../modules/conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](../modules/conversation_v1.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/index.js:70](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/conversation/index.js#L70)

___

### create

▸ **create**(`request`): `Promise`<[`ConversationCreateResponse`](../modules/conversation_v1.md#conversationcreateresponse)\>

Creates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationCreateRequest`](../modules/conversation_v1.md#conversationcreaterequest) |

#### Returns

`Promise`<[`ConversationCreateResponse`](../modules/conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/index.js:42](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/conversation/index.js#L42)

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

[conversation/index.js:61](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/conversation/index.js#L61)

___

### fetch

▸ **fetch**(`conversationId`): `Promise`<[`ConversationFetchResponse`](../modules/conversation_v1.md#conversationfetchresponse)\>

Fetches a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationFetchResponse`](../modules/conversation_v1.md#conversationfetchresponse)\>

#### Defined in

[conversation/index.js:33](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/conversation/index.js#L33)

___

### list

▸ **list**(): `ResponsePromise`<[`ConversationListResponse`](../modules/conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](../modules/conversation_v1.md#conversationliststreamitem)\>

Retrieves a list of all existing conversations associated with this client.

#### Returns

`ResponsePromise`<[`ConversationListResponse`](../modules/conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](../modules/conversation_v1.md#conversationliststreamitem)\>

#### Defined in

[conversation/index.js:24](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/conversation/index.js#L24)

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

[conversation/index.js:90](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/conversation/index.js#L90)

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

[conversation/index.js:80](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/conversation/index.js#L80)

___

### update

▸ **update**(`conversationId`, `request`): `Promise`<[`ConversationUpdateResponse`](../modules/conversation_v1.md#conversationupdateresponse)\>

Updates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationUpdateRequest`](../modules/conversation_v1.md#conversationupdaterequest) |

#### Returns

`Promise`<[`ConversationUpdateResponse`](../modules/conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/index.js:52](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/conversation/index.js#L52)
