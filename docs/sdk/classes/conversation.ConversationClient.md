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

[conversation/index.js:19](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/index.js#L19)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:125](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/client.js#L125)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:127](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/client.js#L127)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `D`\>(`path`, `options?`): `ResponsePromise`<`T`, `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`ResponsePromise`<`T`, `D`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:140](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/client.js#L140)

___

### complete

▸ **complete**(`request`): `ResponsePromise`<[`ConversationCompleteResponse`](../modules/conversation_v2.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](../modules/conversation_v2.md#conversationcompletestreamtype)\>

Completes the next bot message in a stateless conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationCompleteRequest`](../modules/conversation_v2.md#conversationcompleterequest) |

#### Returns

`ResponsePromise`<[`ConversationCompleteResponse`](../modules/conversation_v2.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](../modules/conversation_v2.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/index.js:72](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/index.js#L72)

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

[conversation/index.js:44](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/index.js#L44)

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

[conversation/index.js:63](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/index.js#L63)

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

[conversation/index.js:35](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/index.js#L35)

___

### list

▸ **list**(): `Promise`<[`ConversationListResponse`](../modules/conversation_v1.md#conversationlistresponse)\>

Retrieves a list of all existing conversations associated with this client.

#### Returns

`Promise`<[`ConversationListResponse`](../modules/conversation_v1.md#conversationlistresponse)\>

#### Defined in

[conversation/index.js:26](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/index.js#L26)

___

### receive

▸ **receive**(`conversationId`, `request`): `Promise`<[`ConversationReceiveResponse`](../modules/conversation_v2.md#conversationreceiveresponse)\>

Receives a message from the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveRequest`](../modules/conversation_v2.md#conversationreceiverequest) |

#### Returns

`Promise`<[`ConversationReceiveResponse`](../modules/conversation_v2.md#conversationreceiveresponse)\>

#### Defined in

[conversation/index.js:92](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/index.js#L92)

___

### send

▸ **send**(`conversationId`, `request`): `Promise`<[`ConversationSendResponse`](../modules/conversation_v2.md#conversationsendresponse)\>

Sends a message to the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationSendRequest`](../modules/conversation_v2.md#conversationsendrequest) |

#### Returns

`Promise`<[`ConversationSendResponse`](../modules/conversation_v2.md#conversationsendresponse)\>

#### Defined in

[conversation/index.js:82](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/index.js#L82)

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

[conversation/index.js:54](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/index.js#L54)
