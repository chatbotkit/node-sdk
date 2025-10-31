[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / contact/conversation/v1

# Module: contact/conversation/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](contact_conversation_v1.md#chatbotkitclient)
- [ConversationListRequest](contact_conversation_v1.md#conversationlistrequest)
- [ConversationListResponse](contact_conversation_v1.md#conversationlistresponse)
- [ConversationListStreamType](contact_conversation_v1.md#conversationliststreamtype)
- [ResponsePromise](contact_conversation_v1.md#responsepromise)

### Functions

- [listConversations](contact_conversation_v1.md#listconversations)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[contact/conversation/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L2)

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

[contact/conversation/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L17)

___

### ConversationListResponse

Ƭ **ConversationListResponse**\<\>: `operations`[``"listContactConversations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/conversation/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L19)

___

### ConversationListStreamType

Ƭ **ConversationListStreamType**\<\>: `operations`[``"listContactConversations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[contact/conversation/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L21)

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

▸ **listConversations**(`client`, `contactId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `request?` | [`ConversationListRequest`](contact_conversation_v1.md#conversationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[contact/conversation/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/v1.js#L28)
