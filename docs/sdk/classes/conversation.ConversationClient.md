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

[conversation/index.js:16](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/conversation/index.js#L16)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:15](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/client.js#L15)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:17](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/client.js#L17)

## Methods

### clientFetch

▸ **clientFetch**<`T`\>(`path`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:30](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/client.js#L30)

___

### complete

▸ **complete**(`request`): `Promise`<[`ConversationCompleteResponse`](../modules/conversation_lib.md#conversationcompleteresponse)\>

Completes the next bot message in a stateless conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationCompleteRequest`](../modules/conversation_lib.md#conversationcompleterequest) |

#### Returns

`Promise`<[`ConversationCompleteResponse`](../modules/conversation_lib.md#conversationcompleteresponse)\>

#### Defined in

[conversation/index.js:25](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/conversation/index.js#L25)

___

### create

▸ **create**(`request`): `Promise`<[`ConversationCreateResponse`](../modules/conversation_lib.md#conversationcreateresponse)\>

Creates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationCreateRequest`](../modules/conversation_lib.md#conversationcreaterequest) |

#### Returns

`Promise`<[`ConversationCreateResponse`](../modules/conversation_lib.md#conversationcreateresponse)\>

#### Defined in

[conversation/index.js:41](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/conversation/index.js#L41)

___

### delete

▸ **delete**(`conversationId`): `Promise`<[`ConversationDeleteResponse`](../modules/conversation_lib.md#conversationdeleteresponse)\>

Deletes the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationDeleteResponse`](../modules/conversation_lib.md#conversationdeleteresponse)\>

#### Defined in

[conversation/index.js:79](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/conversation/index.js#L79)

___

### fetch

▸ **fetch**(`conversationId`): `Promise`<[`ConversationFetchResponse`](../modules/conversation_lib.md#conversationfetchresponse)\>

Fetches a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationFetchResponse`](../modules/conversation_lib.md#conversationfetchresponse)\>

#### Defined in

[conversation/index.js:50](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/conversation/index.js#L50)

___

### list

▸ **list**(): `Promise`<[`ConversationListResponse`](../modules/conversation_lib.md#conversationlistresponse)\>

Retrieves a list of all existing conversations associated with this client.

#### Returns

`Promise`<[`ConversationListResponse`](../modules/conversation_lib.md#conversationlistresponse)\>

#### Defined in

[conversation/index.js:32](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/conversation/index.js#L32)

___

### receive

▸ **receive**(`conversationId`, `request`): `Promise`<[`ConversationReceiveResponse`](../modules/conversation_lib.md#conversationreceiveresponse)\>

Receives a message from the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveRequest`](../modules/conversation_lib.md#conversationreceiverequest) |

#### Returns

`Promise`<[`ConversationReceiveResponse`](../modules/conversation_lib.md#conversationreceiveresponse)\>

#### Defined in

[conversation/index.js:70](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/conversation/index.js#L70)

___

### send

▸ **send**(`conversationId`, `request`): `Promise`<[`ConversationSendResponse`](../modules/conversation_lib.md#conversationsendresponse)\>

Sends a message to the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationSendRequest`](../modules/conversation_lib.md#conversationsendrequest) |

#### Returns

`Promise`<[`ConversationSendResponse`](../modules/conversation_lib.md#conversationsendresponse)\>

#### Defined in

[conversation/index.js:60](https://github.com/chatbotkit/node-sdk/blob/0d637a5/packages/sdk/src/conversation/index.js#L60)
