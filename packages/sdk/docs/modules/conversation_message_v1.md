[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/message/v1

# Module: conversation/message/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_message_v1.md#chatbotkitclient)
- [ConversationMessageCreateRequest](conversation_message_v1.md#conversationmessagecreaterequest)
- [ConversationMessageCreateRequestBody](conversation_message_v1.md#conversationmessagecreaterequestbody)
- [ConversationMessageCreateResponse](conversation_message_v1.md#conversationmessagecreateresponse)
- [ConversationMessageCreateResponseBody](conversation_message_v1.md#conversationmessagecreateresponsebody)
- [ConversationMessageDeleteRequest](conversation_message_v1.md#conversationmessagedeleterequest)
- [ConversationMessageDeleteRequestBody](conversation_message_v1.md#conversationmessagedeleterequestbody)
- [ConversationMessageDeleteResponse](conversation_message_v1.md#conversationmessagedeleteresponse)
- [ConversationMessageDeleteResponseBody](conversation_message_v1.md#conversationmessagedeleteresponsebody)
- [ConversationMessageDownvoteRequest](conversation_message_v1.md#conversationmessagedownvoterequest)
- [ConversationMessageDownvoteRequestBody](conversation_message_v1.md#conversationmessagedownvoterequestbody)
- [ConversationMessageDownvoteResponse](conversation_message_v1.md#conversationmessagedownvoteresponse)
- [ConversationMessageDownvoteResponseBody](conversation_message_v1.md#conversationmessagedownvoteresponsebody)
- [ConversationMessageFetchResponse](conversation_message_v1.md#conversationmessagefetchresponse)
- [ConversationMessageListRequest](conversation_message_v1.md#conversationmessagelistrequest)
- [ConversationMessageListResponse](conversation_message_v1.md#conversationmessagelistresponse)
- [ConversationMessageListStreamType](conversation_message_v1.md#conversationmessageliststreamtype)
- [ConversationMessageType](conversation_message_v1.md#conversationmessagetype)
- [ConversationMessageUpdateRequest](conversation_message_v1.md#conversationmessageupdaterequest)
- [ConversationMessageUpdateRequestBody](conversation_message_v1.md#conversationmessageupdaterequestbody)
- [ConversationMessageUpdateResponse](conversation_message_v1.md#conversationmessageupdateresponse)
- [ConversationMessageUpdateResponseBody](conversation_message_v1.md#conversationmessageupdateresponsebody)
- [ConversationMessageUpvoteRequest](conversation_message_v1.md#conversationmessageupvoterequest)
- [ConversationMessageUpvoteRequestBody](conversation_message_v1.md#conversationmessageupvoterequestbody)
- [ConversationMessageUpvoteResponse](conversation_message_v1.md#conversationmessageupvoteresponse)
- [ConversationMessageUpvoteResponseBody](conversation_message_v1.md#conversationmessageupvoteresponsebody)
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

Ƭ **ConversationMessageCreateRequest**\<\>: [`ConversationMessageCreateRequestBody`](conversation_message_v1.md#conversationmessagecreaterequestbody)

#### Defined in

[conversation/message/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L59)

___

### ConversationMessageCreateRequestBody

Ƭ **ConversationMessageCreateRequestBody**\<\>: `operations`[``"createConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L57)

___

### ConversationMessageCreateResponse

Ƭ **ConversationMessageCreateResponse**\<\>: [`ConversationMessageCreateResponseBody`](conversation_message_v1.md#conversationmessagecreateresponsebody)

#### Defined in

[conversation/message/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L63)

___

### ConversationMessageCreateResponseBody

Ƭ **ConversationMessageCreateResponseBody**\<\>: `operations`[``"createConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L61)

___

### ConversationMessageDeleteRequest

Ƭ **ConversationMessageDeleteRequest**\<\>: [`ConversationMessageDeleteRequestBody`](conversation_message_v1.md#conversationmessagedeleterequestbody)

#### Defined in

[conversation/message/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L125)

___

### ConversationMessageDeleteRequestBody

Ƭ **ConversationMessageDeleteRequestBody**\<\>: `operations`[``"deleteConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:123](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L123)

___

### ConversationMessageDeleteResponse

Ƭ **ConversationMessageDeleteResponse**\<\>: [`ConversationMessageDeleteResponseBody`](conversation_message_v1.md#conversationmessagedeleteresponsebody)

#### Defined in

[conversation/message/v1.js:129](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L129)

___

### ConversationMessageDeleteResponseBody

Ƭ **ConversationMessageDeleteResponseBody**\<\>: `operations`[``"deleteConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:127](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L127)

___

### ConversationMessageDownvoteRequest

Ƭ **ConversationMessageDownvoteRequest**\<\>: [`ConversationMessageDownvoteRequestBody`](conversation_message_v1.md#conversationmessagedownvoterequestbody)

#### Defined in

[conversation/message/v1.js:189](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L189)

___

### ConversationMessageDownvoteRequestBody

Ƭ **ConversationMessageDownvoteRequestBody**\<\>: `operations`[``"downvoteConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:187](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L187)

___

### ConversationMessageDownvoteResponse

Ƭ **ConversationMessageDownvoteResponse**\<\>: [`ConversationMessageDownvoteResponseBody`](conversation_message_v1.md#conversationmessagedownvoteresponsebody)

#### Defined in

[conversation/message/v1.js:193](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L193)

___

### ConversationMessageDownvoteResponseBody

Ƭ **ConversationMessageDownvoteResponseBody**\<\>: `operations`[``"downvoteConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L191)

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

Ƭ **ConversationMessageUpdateRequest**\<\>: [`ConversationMessageUpdateRequestBody`](conversation_message_v1.md#conversationmessageupdaterequestbody)

#### Defined in

[conversation/message/v1.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L91)

___

### ConversationMessageUpdateRequestBody

Ƭ **ConversationMessageUpdateRequestBody**\<\>: `operations`[``"updateConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L89)

___

### ConversationMessageUpdateResponse

Ƭ **ConversationMessageUpdateResponse**\<\>: [`ConversationMessageUpdateResponseBody`](conversation_message_v1.md#conversationmessageupdateresponsebody)

#### Defined in

[conversation/message/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L95)

___

### ConversationMessageUpdateResponseBody

Ƭ **ConversationMessageUpdateResponseBody**\<\>: `operations`[``"updateConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L93)

___

### ConversationMessageUpvoteRequest

Ƭ **ConversationMessageUpvoteRequest**\<\>: [`ConversationMessageUpvoteRequestBody`](conversation_message_v1.md#conversationmessageupvoterequestbody)

#### Defined in

[conversation/message/v1.js:155](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L155)

___

### ConversationMessageUpvoteRequestBody

Ƭ **ConversationMessageUpvoteRequestBody**\<\>: `operations`[``"upvoteConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:153](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L153)

___

### ConversationMessageUpvoteResponse

Ƭ **ConversationMessageUpvoteResponse**\<\>: [`ConversationMessageUpvoteResponseBody`](conversation_message_v1.md#conversationmessageupvoteresponsebody)

#### Defined in

[conversation/message/v1.js:159](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L159)

___

### ConversationMessageUpvoteResponseBody

Ƭ **ConversationMessageUpvoteResponseBody**\<\>: `operations`[``"upvoteConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/message/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L157)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/message/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L70)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/message/v1.js:201](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L201)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/message/v1.js:103](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L103)

___

### upvoteConversationMessage

▸ **upvoteConversationMessage**(`client`, `conversationId`, `messageId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/message/v1.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/v1.js#L167)
