[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/v1

# Module: conversation/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_v1.md#chatbotkitclient)
- [ConversationCompleteMessageRequest](conversation_v1.md#conversationcompletemessagerequest)
- [ConversationCompleteMessageResponse](conversation_v1.md#conversationcompletemessageresponse)
- [ConversationCompleteMessageStreamType](conversation_v1.md#conversationcompletemessagestreamtype)
- [ConversationCompleteRequest](conversation_v1.md#conversationcompleterequest)
- [ConversationCompleteResponse](conversation_v1.md#conversationcompleteresponse)
- [ConversationCompleteStreamType](conversation_v1.md#conversationcompletestreamtype)
- [ConversationCreateRequest](conversation_v1.md#conversationcreaterequest)
- [ConversationCreateRequestBody](conversation_v1.md#conversationcreaterequestbody)
- [ConversationCreateResponse](conversation_v1.md#conversationcreateresponse)
- [ConversationDeleteRequestBody](conversation_v1.md#conversationdeleterequestbody)
- [ConversationDeleteResponse](conversation_v1.md#conversationdeleteresponse)
- [ConversationDownvoteRequest](conversation_v1.md#conversationdownvoterequest)
- [ConversationDownvoteRequestBody](conversation_v1.md#conversationdownvoterequestbody)
- [ConversationDownvoteResponse](conversation_v1.md#conversationdownvoteresponse)
- [ConversationFetchResponse](conversation_v1.md#conversationfetchresponse)
- [ConversationListRequest](conversation_v1.md#conversationlistrequest)
- [ConversationListResponse](conversation_v1.md#conversationlistresponse)
- [ConversationListStreamType](conversation_v1.md#conversationliststreamtype)
- [ConversationReceiveMessageRequest](conversation_v1.md#conversationreceivemessagerequest)
- [ConversationReceiveMessageResponse](conversation_v1.md#conversationreceivemessageresponse)
- [ConversationReceiveMessageStreamType](conversation_v1.md#conversationreceivemessagestreamtype)
- [ConversationSendMessageRequest](conversation_v1.md#conversationsendmessagerequest)
- [ConversationSendMessageResponse](conversation_v1.md#conversationsendmessageresponse)
- [ConversationSendMessageStreamType](conversation_v1.md#conversationsendmessagestreamtype)
- [ConversationUpdateRequest](conversation_v1.md#conversationupdaterequest)
- [ConversationUpdateRequestBody](conversation_v1.md#conversationupdaterequestbody)
- [ConversationUpdateResponse](conversation_v1.md#conversationupdateresponse)
- [ConversationUpvoteRequest](conversation_v1.md#conversationupvoterequest)
- [ConversationUpvoteRequestBody](conversation_v1.md#conversationupvoterequestbody)
- [ConversationUpvoteResponse](conversation_v1.md#conversationupvoteresponse)
- [Entity](conversation_v1.md#entity)
- [Message](conversation_v1.md#message)
- [MessageType](conversation_v1.md#messagetype)
- [ResponsePromise](conversation_v1.md#responsepromise)

### Functions

- [completeConversation](conversation_v1.md#completeconversation)
- [completeConversationMessage](conversation_v1.md#completeconversationmessage)
- [createConversation](conversation_v1.md#createconversation)
- [deleteConversation](conversation_v1.md#deleteconversation)
- [downvoteConversation](conversation_v1.md#downvoteconversation)
- [fetchConversation](conversation_v1.md#fetchconversation)
- [listConversations](conversation_v1.md#listconversations)
- [receiveConversationMessage](conversation_v1.md#receiveconversationmessage)
- [sendConversationMessage](conversation_v1.md#sendconversationmessage)
- [updateConversation](conversation_v1.md#updateconversation)
- [upvoteConversation](conversation_v1.md#upvoteconversation)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[conversation/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L4)

___

### ConversationCompleteMessageRequest

Ƭ **ConversationCompleteMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/v1.js:220](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L220)

___

### ConversationCompleteMessageResponse

Ƭ **ConversationCompleteMessageResponse**\<\>: `operations`[``"completeConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:222](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L222)

___

### ConversationCompleteMessageStreamType

Ƭ **ConversationCompleteMessageStreamType**\<\>: `operations`[``"completeConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[conversation/v1.js:224](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L224)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**\<\>: \{ `backstory?`: `string` ; `botId?`: `string` ; `datasetId?`: `string` ; `functions?`: \{ `description`: `string` ; `name`: `string` ; `parameters`: `any`  }[] ; `messages?`: [`Message`](conversation_v1.md#message)[] ; `model?`: [`model/v1`](model_v1.md) ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } & \{ `text`: `string`  } \| \{ `messages`: [`Message`](conversation_v1.md#message)[]  }

#### Defined in

[conversation/v1.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L191)

___

### ConversationCompleteResponse

Ƭ **ConversationCompleteResponse**\<\>: `operations`[``"completeConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:193](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L193)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**\<\>: `operations`[``"completeConversation"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[conversation/v1.js:195](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L195)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `botId?` | `string` |
| `contactId?` | `string` |
| `datasetId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | `string` \| [`model/v1`](model_v1.md) |
| `name?` | `string` |
| `skillsetId?` | `string` |
| `taskId?` | `string` |

#### Defined in

[conversation/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L90)

___

### ConversationCreateRequestBody

Ƭ **ConversationCreateRequestBody**\<\>: `operations`[``"createConversation"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L92)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**\<\>: `operations`[``"createConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L94)

___

### ConversationDeleteRequestBody

Ƭ **ConversationDeleteRequestBody**\<\>: `operations`[``"deleteConversation"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L158)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**\<\>: `operations`[``"deleteConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L160)

___

### ConversationDownvoteRequest

Ƭ **ConversationDownvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `value?` | `number` |

#### Defined in

[conversation/v1.js:341](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L341)

___

### ConversationDownvoteRequestBody

Ƭ **ConversationDownvoteRequestBody**\<\>: `operations`[``"downvoteConversation"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:343](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L343)

___

### ConversationDownvoteResponse

Ƭ **ConversationDownvoteResponse**\<\>: `operations`[``"downvoteConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:345](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L345)

___

### ConversationFetchResponse

Ƭ **ConversationFetchResponse**\<\>: `operations`[``"fetchConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L61)

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

[conversation/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L41)

___

### ConversationListResponse

Ƭ **ConversationListResponse**\<\>: `operations`[``"listConversations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L43)

___

### ConversationListStreamType

Ƭ **ConversationListStreamType**\<\>: `operations`[``"listConversations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[conversation/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L45)

___

### ConversationReceiveMessageRequest

Ƭ **ConversationReceiveMessageRequest**\<\>: `Object`

#### Defined in

[conversation/v1.js:278](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L278)

___

### ConversationReceiveMessageResponse

Ƭ **ConversationReceiveMessageResponse**\<\>: `operations`[``"receiveConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:280](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L280)

___

### ConversationReceiveMessageStreamType

Ƭ **ConversationReceiveMessageStreamType**\<\>: `operations`[``"receiveConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[conversation/v1.js:282](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L282)

___

### ConversationSendMessageRequest

Ƭ **ConversationSendMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text?` | `string` |

#### Defined in

[conversation/v1.js:250](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L250)

___

### ConversationSendMessageResponse

Ƭ **ConversationSendMessageResponse**\<\>: `operations`[``"sendConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:252](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L252)

___

### ConversationSendMessageStreamType

Ƭ **ConversationSendMessageStreamType**\<\>: `operations`[``"sendConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[conversation/v1.js:254](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L254)

___

### ConversationUpdateRequest

Ƭ **ConversationUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `botId?` | `string` |
| `contactId?` | `string` |
| `datasetId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | `string` \| [`model/v1`](model_v1.md) |
| `name?` | `string` |
| `skillsetId?` | `string` |
| `taskId?` | `string` |

#### Defined in

[conversation/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L128)

___

### ConversationUpdateRequestBody

Ƭ **ConversationUpdateRequestBody**\<\>: `operations`[``"updateConversation"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L130)

___

### ConversationUpdateResponse

Ƭ **ConversationUpdateResponse**\<\>: `operations`[``"updateConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L132)

___

### ConversationUpvoteRequest

Ƭ **ConversationUpvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `value?` | `number` |

#### Defined in

[conversation/v1.js:308](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L308)

___

### ConversationUpvoteRequestBody

Ƭ **ConversationUpvoteRequestBody**\<\>: `operations`[``"upvoteConversation"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:310](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L310)

___

### ConversationUpvoteResponse

Ƭ **ConversationUpvoteResponse**\<\>: `operations`[``"upvoteConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:312](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L312)

___

### Entity

Ƭ **Entity**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `begin` | `number` |
| `end` | `number` |
| `replacement?` | \{ `begin`: `number` ; `end`: `number` ; `text`: `string`  } |
| `replacement.begin` | `number` |
| `replacement.end` | `number` |
| `replacement.text` | `string` |
| `text` | `string` |
| `type` | `string` |

#### Defined in

[conversation/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L32)

___

### Message

Ƭ **Message**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `text` | `string` |
| `type` | [`MessageType`](conversation_v1.md#messagetype) |

#### Defined in

[conversation/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L20)

___

### MessageType

Ƭ **MessageType**\<\>: ``"user"`` \| ``"bot"`` \| ``"reasoning"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` \| ``"activity"``

#### Defined in

[conversation/v1.js:14](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L14)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[conversation/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L10)

## Functions

### completeConversation

▸ **completeConversation**(`client`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {} \| {} \| {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`ConversationCompleteRequest`](conversation_v1.md#conversationcompleterequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {} \| {} \| {}\>

#### Defined in

[conversation/v1.js:201](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L201)

___

### completeConversationMessage

▸ **completeConversationMessage**(`client`, `conversationId`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {} \| {} \| {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationCompleteMessageRequest`](conversation_v1.md#conversationcompletemessagerequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {} \| {} \| {}\>

#### Defined in

[conversation/v1.js:231](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L231)

___

### createConversation

▸ **createConversation**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`ConversationCreateRequest`](conversation_v1.md#conversationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L100)

___

### deleteConversation

▸ **deleteConversation**(`client`, `conversationId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/v1.js:166](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L166)

___

### downvoteConversation

▸ **downvoteConversation**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationDownvoteRequest`](conversation_v1.md#conversationdownvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/v1.js:352](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L352)

___

### fetchConversation

▸ **fetchConversation**(`client`, `conversationId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{} & {} \| {}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{} & {} \| {}, `never`\>

#### Defined in

[conversation/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L67)

___

### listConversations

▸ **listConversations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`ConversationListRequest`](conversation_v1.md#conversationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[conversation/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L51)

___

### receiveConversationMessage

▸ **receiveConversationMessage**(`client`, `conversationId`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {} \| {} \| {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveMessageRequest`](conversation_v1.md#conversationreceivemessagerequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {} \| {} \| {}\>

#### Defined in

[conversation/v1.js:289](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L289)

___

### sendConversationMessage

▸ **sendConversationMessage**(`client`, `conversationId`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationSendMessageRequest`](conversation_v1.md#conversationsendmessagerequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[conversation/v1.js:261](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L261)

___

### updateConversation

▸ **updateConversation**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationUpdateRequest`](conversation_v1.md#conversationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L139)

___

### upvoteConversation

▸ **upvoteConversation**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationUpvoteRequest`](conversation_v1.md#conversationupvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/v1.js:319](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L319)
