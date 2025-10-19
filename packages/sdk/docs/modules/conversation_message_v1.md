[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/message/v1

# Module: conversation/message/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_message_v1.md#chatbotkitclient)
- [ConversationMessageCreateRequest](conversation_message_v1.md#conversationmessagecreaterequest)
- [ConversationMessageCreateResponse](conversation_message_v1.md#conversationmessagecreateresponse)
- [ConversationMessageDeleteResponse](conversation_message_v1.md#conversationmessagedeleteresponse)
- [ConversationMessageDownvoteRequest](conversation_message_v1.md#conversationmessagedownvoterequest)
- [ConversationMessageDownvoteResponse](conversation_message_v1.md#conversationmessagedownvoteresponse)
- [ConversationMessageFetchResponse](conversation_message_v1.md#conversationmessagefetchresponse)
- [ConversationMessageInstance](conversation_message_v1.md#conversationmessageinstance)
- [ConversationMessageListRequest](conversation_message_v1.md#conversationmessagelistrequest)
- [ConversationMessageListResponse](conversation_message_v1.md#conversationmessagelistresponse)
- [ConversationMessageListStreamItem](conversation_message_v1.md#conversationmessageliststreamitem)
- [ConversationMessageListStreamType](conversation_message_v1.md#conversationmessageliststreamtype)
- [ConversationMessageOptions](conversation_message_v1.md#conversationmessageoptions)
- [ConversationMessageType](conversation_message_v1.md#conversationmessagetype)
- [ConversationMessageUpdateRequest](conversation_message_v1.md#conversationmessageupdaterequest)
- [ConversationMessageUpdateResponse](conversation_message_v1.md#conversationmessageupdateresponse)
- [ConversationMessageUpvoteRequest](conversation_message_v1.md#conversationmessageupvoterequest)
- [ConversationMessageUpvoteResponse](conversation_message_v1.md#conversationmessageupvoteresponse)
- [ResponsePromise](conversation_message_v1.md#responsepromise)

### Functions

- [createConversationMessage](conversation_message_v1.md#createconversationmessage)
- [deleteConversationMessage](conversation_message_v1.md#deleteconversationmessage)
- [downvoteConversationMessage](conversation_message_v1.md#downvoteconversationmessage)
- [fetchConversationMessage](conversation_message_v1.md#fetchconversationmessage)
- [listConversationMessages](conversation_message_v1.md#listconversationmessages)
- [updateConversationMessage](conversation_message_v1.md#updateconversationmessage)
- [upvoteConversationMessage](conversation_message_v1.md#upvoteconversationmessage)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[conversation/message/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L2)

___

### ConversationMessageCreateRequest

Ƭ **ConversationMessageCreateRequest**\<\>: [`ConversationMessageOptions`](conversation_message_v1.md#conversationmessageoptions) & {}

#### Defined in

[conversation/message/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L81)

___

### ConversationMessageCreateResponse

Ƭ **ConversationMessageCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L85)

___

### ConversationMessageDeleteResponse

Ƭ **ConversationMessageDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:146](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L146)

___

### ConversationMessageDownvoteRequest

Ƭ **ConversationMessageDownvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/message/v1.js:208](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L208)

___

### ConversationMessageDownvoteResponse

Ƭ **ConversationMessageDownvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:212](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L212)

___

### ConversationMessageFetchResponse

Ƭ **ConversationMessageFetchResponse**\<\>: [`ConversationMessageInstance`](conversation_message_v1.md#conversationmessageinstance) & {}

#### Defined in

[conversation/message/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L62)

___

### ConversationMessageInstance

Ƭ **ConversationMessageInstance**\<\>: [`ConversationMessageOptions`](conversation_message_v1.md#conversationmessageoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[conversation/message/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L24)

___

### ConversationMessageListRequest

Ƭ **ConversationMessageListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[conversation/message/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L33)

___

### ConversationMessageListResponse

Ƭ **ConversationMessageListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ConversationMessageInstance`](conversation_message_v1.md#conversationmessageinstance)[] |

#### Defined in

[conversation/message/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L35)

___

### ConversationMessageListStreamItem

Ƭ **ConversationMessageListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationMessageInstance`](conversation_message_v1.md#conversationmessageinstance) |
| `type` | ``"item"`` |

#### Defined in

[conversation/message/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L40)

___

### ConversationMessageListStreamType

Ƭ **ConversationMessageListStreamType**\<\>: [`ConversationMessageListStreamItem`](conversation_message_v1.md#conversationmessageliststreamitem)

#### Defined in

[conversation/message/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L42)

___

### ConversationMessageOptions

Ƭ **ConversationMessageOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `text` | `string` |
| `type` | [`ConversationMessageType`](conversation_message_v1.md#conversationmessagetype) |

#### Defined in

[conversation/message/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L18)

___

### ConversationMessageType

Ƭ **ConversationMessageType**\<\>: ``"user"`` \| ``"bot"`` \| ``"reasoning"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` \| ``"activity"``

#### Defined in

[conversation/message/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L12)

___

### ConversationMessageUpdateRequest

Ƭ **ConversationMessageUpdateRequest**\<\>: [`ConversationMessageOptions`](conversation_message_v1.md#conversationmessageoptions) & {}

#### Defined in

[conversation/message/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L112)

___

### ConversationMessageUpdateResponse

Ƭ **ConversationMessageUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L116)

___

### ConversationMessageUpvoteRequest

Ƭ **ConversationMessageUpvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/message/v1.js:172](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L172)

___

### ConversationMessageUpvoteResponse

Ƭ **ConversationMessageUpvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:176](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L176)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[conversation/message/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L8)

## Functions

### createConversationMessage

▸ **createConversationMessage**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationMessageCreateResponse`](conversation_message_v1.md#conversationmessagecreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationMessageOptions`](conversation_message_v1.md#conversationmessageoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationMessageCreateResponse`](conversation_message_v1.md#conversationmessagecreateresponse)\>

#### Defined in

[conversation/message/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L92)

___

### deleteConversationMessage

▸ **deleteConversationMessage**(`client`, `conversationId`, `messageId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationMessageDeleteResponse`](conversation_message_v1.md#conversationmessagedeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationMessageDeleteResponse`](conversation_message_v1.md#conversationmessagedeleteresponse)\>

#### Defined in

[conversation/message/v1.js:153](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L153)

___

### downvoteConversationMessage

▸ **downvoteConversationMessage**(`client`, `conversationId`, `messageId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationMessageDownvoteResponse`](conversation_message_v1.md#conversationmessagedownvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`ConversationMessageDownvoteRequest`](conversation_message_v1.md#conversationmessagedownvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationMessageDownvoteResponse`](conversation_message_v1.md#conversationmessagedownvoteresponse)\>

#### Defined in

[conversation/message/v1.js:220](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L220)

___

### fetchConversationMessage

▸ **fetchConversationMessage**(`client`, `conversationId`, `messageId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationMessageFetchResponse`](conversation_message_v1.md#conversationmessagefetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationMessageFetchResponse`](conversation_message_v1.md#conversationmessagefetchresponse), `never`\>

#### Defined in

[conversation/message/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L69)

___

### listConversationMessages

▸ **listConversationMessages**(`client`, `conversationId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationMessageListResponse`](conversation_message_v1.md#conversationmessagelistresponse), [`ConversationMessageListStreamItem`](conversation_message_v1.md#conversationmessageliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request?` | [`ConversationMessageListRequest`](conversation_message_v1.md#conversationmessagelistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationMessageListResponse`](conversation_message_v1.md#conversationmessagelistresponse), [`ConversationMessageListStreamItem`](conversation_message_v1.md#conversationmessageliststreamitem)\>

#### Defined in

[conversation/message/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L49)

___

### updateConversationMessage

▸ **updateConversationMessage**(`client`, `conversationId`, `messageId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationMessageUpdateResponse`](conversation_message_v1.md#conversationmessageupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`ConversationMessageOptions`](conversation_message_v1.md#conversationmessageoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationMessageUpdateResponse`](conversation_message_v1.md#conversationmessageupdateresponse)\>

#### Defined in

[conversation/message/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L124)

___

### upvoteConversationMessage

▸ **upvoteConversationMessage**(`client`, `conversationId`, `messageId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationMessageUpvoteResponse`](conversation_message_v1.md#conversationmessageupvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`ConversationMessageUpvoteRequest`](conversation_message_v1.md#conversationmessageupvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationMessageUpvoteResponse`](conversation_message_v1.md#conversationmessageupvoteresponse)\>

#### Defined in

[conversation/message/v1.js:184](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L184)
