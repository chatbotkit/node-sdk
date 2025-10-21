[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/message/v1

# Module: conversation/message/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_message_v1.md#chatbotkitclient)
- [ConversationMessageCreateRequest](conversation_message_v1.md#conversationmessagecreaterequest)
- [ConversationMessageCreateRequestBody](conversation_message_v1.md#conversationmessagecreaterequestbody)
- [ConversationMessageCreateResponse](conversation_message_v1.md#conversationmessagecreateresponse)
- [ConversationMessageDeleteRequestBody](conversation_message_v1.md#conversationmessagedeleterequestbody)
- [ConversationMessageDeleteResponse](conversation_message_v1.md#conversationmessagedeleteresponse)
- [ConversationMessageDownvoteRequest](conversation_message_v1.md#conversationmessagedownvoterequest)
- [ConversationMessageDownvoteRequestBody](conversation_message_v1.md#conversationmessagedownvoterequestbody)
- [ConversationMessageDownvoteResponse](conversation_message_v1.md#conversationmessagedownvoteresponse)
- [ConversationMessageFetchResponse](conversation_message_v1.md#conversationmessagefetchresponse)
- [ConversationMessageListRequest](conversation_message_v1.md#conversationmessagelistrequest)
- [ConversationMessageListResponse](conversation_message_v1.md#conversationmessagelistresponse)
- [ConversationMessageListStreamType](conversation_message_v1.md#conversationmessageliststreamtype)
- [ConversationMessageType](conversation_message_v1.md#conversationmessagetype)
- [ConversationMessageUpdateRequest](conversation_message_v1.md#conversationmessageupdaterequest)
- [ConversationMessageUpdateRequestBody](conversation_message_v1.md#conversationmessageupdaterequestbody)
- [ConversationMessageUpdateResponse](conversation_message_v1.md#conversationmessageupdateresponse)
- [ConversationMessageUpvoteRequest](conversation_message_v1.md#conversationmessageupvoterequest)
- [ConversationMessageUpvoteRequestBody](conversation_message_v1.md#conversationmessageupvoterequestbody)
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

Ƭ **ConversationMessageCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `text` | `string` |
| `type` | [`ConversationMessageType`](conversation_message_v1.md#conversationmessagetype) |

#### Defined in

[conversation/message/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L61)

___

### ConversationMessageCreateRequestBody

Ƭ **ConversationMessageCreateRequestBody**\<\>: `operations`[``"createConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L63)

___

### ConversationMessageCreateResponse

Ƭ **ConversationMessageCreateResponse**\<\>: `operations`[``"createConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L65)

___

### ConversationMessageDeleteRequestBody

Ƭ **ConversationMessageDeleteRequestBody**\<\>: `operations`[``"deleteConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:127](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L127)

___

### ConversationMessageDeleteResponse

Ƭ **ConversationMessageDeleteResponse**\<\>: `operations`[``"deleteConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:129](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L129)

___

### ConversationMessageDownvoteRequest

Ƭ **ConversationMessageDownvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/message/v1.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L191)

___

### ConversationMessageDownvoteRequestBody

Ƭ **ConversationMessageDownvoteRequestBody**\<\>: `operations`[``"downvoteConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:193](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L193)

___

### ConversationMessageDownvoteResponse

Ƭ **ConversationMessageDownvoteResponse**\<\>: `operations`[``"downvoteConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:195](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L195)

___

### ConversationMessageFetchResponse

Ƭ **ConversationMessageFetchResponse**\<\>: `operations`[``"fetchConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L40)

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

[conversation/message/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L19)

___

### ConversationMessageListResponse

Ƭ **ConversationMessageListResponse**\<\>: `operations`[``"listConversationMessages"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L21)

___

### ConversationMessageListStreamType

Ƭ **ConversationMessageListStreamType**\<\>: `operations`[``"listConversationMessages"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[conversation/message/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L23)

___

### ConversationMessageType

Ƭ **ConversationMessageType**\<\>: ``"user"`` \| ``"bot"`` \| ``"reasoning"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` \| ``"activity"``

#### Defined in

[conversation/message/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L12)

___

### ConversationMessageUpdateRequest

Ƭ **ConversationMessageUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `text?` | `string` |
| `type?` | [`ConversationMessageType`](conversation_message_v1.md#conversationmessagetype) |

#### Defined in

[conversation/message/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L95)

___

### ConversationMessageUpdateRequestBody

Ƭ **ConversationMessageUpdateRequestBody**\<\>: `operations`[``"updateConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L97)

___

### ConversationMessageUpdateResponse

Ƭ **ConversationMessageUpdateResponse**\<\>: `operations`[``"updateConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:99](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L99)

___

### ConversationMessageUpvoteRequest

Ƭ **ConversationMessageUpvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/message/v1.js:155](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L155)

___

### ConversationMessageUpvoteRequestBody

Ƭ **ConversationMessageUpvoteRequestBody**\<\>: `operations`[``"upvoteConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L157)

___

### ConversationMessageUpvoteResponse

Ƭ **ConversationMessageUpvoteResponse**\<\>: `operations`[``"upvoteConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:159](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L159)

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

▸ **createConversationMessage**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationMessageCreateRequest`](conversation_message_v1.md#conversationmessagecreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/message/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L72)

___

### deleteConversationMessage

▸ **deleteConversationMessage**(`client`, `conversationId`, `messageId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/message/v1.js:136](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L136)

___

### downvoteConversationMessage

▸ **downvoteConversationMessage**(`client`, `conversationId`, `messageId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`ConversationMessageDownvoteRequest`](conversation_message_v1.md#conversationmessagedownvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/message/v1.js:203](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L203)

___

### fetchConversationMessage

▸ **fetchConversationMessage**(`client`, `conversationId`, `messageId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[conversation/message/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L47)

___

### listConversationMessages

▸ **listConversationMessages**(`client`, `conversationId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request?` | [`ConversationMessageListRequest`](conversation_message_v1.md#conversationmessagelistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[conversation/message/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L30)

___

### updateConversationMessage

▸ **updateConversationMessage**(`client`, `conversationId`, `messageId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`ConversationMessageUpdateRequest`](conversation_message_v1.md#conversationmessageupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/message/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L107)

___

### upvoteConversationMessage

▸ **upvoteConversationMessage**(`client`, `conversationId`, `messageId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`ConversationMessageUpvoteRequest`](conversation_message_v1.md#conversationmessageupvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/message/v1.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L167)
