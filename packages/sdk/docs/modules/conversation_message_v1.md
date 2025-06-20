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

[conversation/message/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L76)

___

### ConversationMessageCreateResponse

Ƭ **ConversationMessageCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L80)

___

### ConversationMessageDeleteResponse

Ƭ **ConversationMessageDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:141](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L141)

___

### ConversationMessageDownvoteRequest

Ƭ **ConversationMessageDownvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/message/v1.js:203](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L203)

___

### ConversationMessageDownvoteResponse

Ƭ **ConversationMessageDownvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:207](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L207)

___

### ConversationMessageFetchResponse

Ƭ **ConversationMessageFetchResponse**\<\>: [`ConversationMessageInstance`](conversation_message_v1.md#conversationmessageinstance) & {}

#### Defined in

[conversation/message/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L57)

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

[conversation/message/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L28)

___

### ConversationMessageListResponse

Ƭ **ConversationMessageListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ConversationMessageInstance`](conversation_message_v1.md#conversationmessageinstance)[] |

#### Defined in

[conversation/message/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L30)

___

### ConversationMessageListStreamItem

Ƭ **ConversationMessageListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationMessageInstance`](conversation_message_v1.md#conversationmessageinstance) |
| `type` | ``"item"`` |

#### Defined in

[conversation/message/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L35)

___

### ConversationMessageListStreamType

Ƭ **ConversationMessageListStreamType**\<\>: [`ConversationMessageListStreamItem`](conversation_message_v1.md#conversationmessageliststreamitem)

#### Defined in

[conversation/message/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L37)

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

[conversation/message/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L107)

___

### ConversationMessageUpdateResponse

Ƭ **ConversationMessageUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L111)

___

### ConversationMessageUpvoteRequest

Ƭ **ConversationMessageUpvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/message/v1.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L167)

___

### ConversationMessageUpvoteResponse

Ƭ **ConversationMessageUpvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:171](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L171)

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

[conversation/message/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L87)

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

[conversation/message/v1.js:148](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L148)

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

[conversation/message/v1.js:215](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L215)

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

[conversation/message/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L64)

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

[conversation/message/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L44)

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

[conversation/message/v1.js:119](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L119)

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

[conversation/message/v1.js:179](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L179)
