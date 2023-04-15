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

conversation/index.js:14

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

client.js:15

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

client.js:17

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

client.js:28

___

### complete

▸ **complete**(`request`): `Promise`<[`ConversationCompleteResponse`](../modules/conversation_lib.md#conversationcompleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationCompleteRequest`](../modules/conversation_lib.md#conversationcompleterequest) |

#### Returns

`Promise`<[`ConversationCompleteResponse`](../modules/conversation_lib.md#conversationcompleteresponse)\>

#### Defined in

conversation/index.js:21

___

### create

▸ **create**(`request`): `Promise`<[`ConversationCreateResponse`](../modules/conversation_lib.md#conversationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationCreateRequest`](../modules/conversation_lib.md#conversationcreaterequest) |

#### Returns

`Promise`<[`ConversationCreateResponse`](../modules/conversation_lib.md#conversationcreateresponse)\>

#### Defined in

conversation/index.js:34

___

### delete

▸ **delete**(`conversationId`): `Promise`<[`ConversationDeleteResponse`](../modules/conversation_lib.md#conversationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationDeleteResponse`](../modules/conversation_lib.md#conversationdeleteresponse)\>

#### Defined in

conversation/index.js:48

___

### fetch

▸ **fetch**(`conversationId`): `Promise`<[`ConversationFetchResponse`](../modules/conversation_lib.md#conversationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationFetchResponse`](../modules/conversation_lib.md#conversationfetchresponse)\>

#### Defined in

conversation/index.js:41

___

### list

▸ **list**(): `Promise`<[`ConversationListResponse`](../modules/conversation_lib.md#conversationlistresponse)\>

#### Returns

`Promise`<[`ConversationListResponse`](../modules/conversation_lib.md#conversationlistresponse)\>

#### Defined in

conversation/index.js:27
