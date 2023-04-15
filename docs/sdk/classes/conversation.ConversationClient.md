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

[conversation/index.js:16](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/index.js#L16)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:15](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/client.js#L15)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:17](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/client.js#L17)

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

[client.js:30](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/client.js#L30)

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

[conversation/index.js:23](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/index.js#L23)

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

[conversation/index.js:36](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/index.js#L36)

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

[conversation/index.js:66](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/index.js#L66)

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

[conversation/index.js:43](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/index.js#L43)

___

### list

▸ **list**(): `Promise`<[`ConversationListResponse`](../modules/conversation_lib.md#conversationlistresponse)\>

#### Returns

`Promise`<[`ConversationListResponse`](../modules/conversation_lib.md#conversationlistresponse)\>

#### Defined in

[conversation/index.js:29](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/index.js#L29)

___

### receive

▸ **receive**(`conversationId`, `request`): `Promise`<[`ConversationReceiveResponse`](../modules/conversation_lib.md#conversationreceiveresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveRequest`](../modules/conversation_lib.md#conversationreceiverequest) |

#### Returns

`Promise`<[`ConversationReceiveResponse`](../modules/conversation_lib.md#conversationreceiveresponse)\>

#### Defined in

[conversation/index.js:59](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/index.js#L59)

___

### send

▸ **send**(`conversationId`, `request`): `Promise`<[`ConversationSendResponse`](../modules/conversation_lib.md#conversationsendresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationSendRequest`](../modules/conversation_lib.md#conversationsendrequest) |

#### Returns

`Promise`<[`ConversationSendResponse`](../modules/conversation_lib.md#conversationsendresponse)\>

#### Defined in

[conversation/index.js:51](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/index.js#L51)
