[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / contact/conversation/v1

# Module: contact/conversation/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](contact_conversation_v1.md#chatbotkitclient)
- [ConversationInstance](contact_conversation_v1.md#conversationinstance)
- [ConversationListRequest](contact_conversation_v1.md#conversationlistrequest)
- [ConversationListResponse](contact_conversation_v1.md#conversationlistresponse)
- [ConversationListStreamItemType](contact_conversation_v1.md#conversationliststreamitemtype)
- [ConversationListStreamType](contact_conversation_v1.md#conversationliststreamtype)
- [ConversationOptions](contact_conversation_v1.md#conversationoptions)
- [ResponsePromise](contact_conversation_v1.md#responsepromise)

### Functions

- [listConversations](contact_conversation_v1.md#listconversations)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[contact/conversation/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L2)

___

### ConversationInstance

Ƭ **ConversationInstance**\<\>: [`ConversationOptions`](contact_conversation_v1.md#conversationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[contact/conversation/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L29)

___

### ConversationListRequest

Ƭ **ConversationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[contact/conversation/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L38)

___

### ConversationListResponse

Ƭ **ConversationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ConversationInstance`](contact_conversation_v1.md#conversationinstance)[] |

#### Defined in

[contact/conversation/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L40)

___

### ConversationListStreamItemType

Ƭ **ConversationListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationInstance`](contact_conversation_v1.md#conversationinstance) |
| `type` | ``"item"`` |

#### Defined in

[contact/conversation/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L45)

___

### ConversationListStreamType

Ƭ **ConversationListStreamType**\<\>: [`ConversationListStreamItemType`](contact_conversation_v1.md#conversationliststreamitemtype)

#### Defined in

[contact/conversation/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L47)

___

### ConversationOptions

Ƭ **ConversationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `botId?` | `string` |
| `contactId?` | `string` |
| `datasetId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | `string` |
| `name?` | `string` |
| `skillsetId?` | `string` |
| `taskId?` | `string` |

#### Defined in

[contact/conversation/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L23)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[contact/conversation/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L8)

## Functions

### listConversations

▸ **listConversations**(`client`, `contactId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationListResponse`](contact_conversation_v1.md#conversationlistresponse), [`ConversationListStreamItemType`](contact_conversation_v1.md#conversationliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `request?` | [`ConversationListRequest`](contact_conversation_v1.md#conversationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationListResponse`](contact_conversation_v1.md#conversationlistresponse), [`ConversationListStreamItemType`](contact_conversation_v1.md#conversationliststreamitemtype)\>

#### Defined in

[contact/conversation/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L54)
