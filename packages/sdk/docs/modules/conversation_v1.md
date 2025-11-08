[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/v1

# Module: conversation/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_v1.md#chatbotkitclient)
- [ConversationCompleteMessageRequest](conversation_v1.md#conversationcompletemessagerequest)
- [ConversationCompleteMessageRequestBody](conversation_v1.md#conversationcompletemessagerequestbody)
- [ConversationCompleteMessageResponse](conversation_v1.md#conversationcompletemessageresponse)
- [ConversationCompleteMessageResponseBody](conversation_v1.md#conversationcompletemessageresponsebody)
- [ConversationCompleteMessageStreamType](conversation_v1.md#conversationcompletemessagestreamtype)
- [ConversationCompleteRequest](conversation_v1.md#conversationcompleterequest)
- [ConversationCompleteRequestBody](conversation_v1.md#conversationcompleterequestbody)
- [ConversationCompleteResponse](conversation_v1.md#conversationcompleteresponse)
- [ConversationCompleteResponseBody](conversation_v1.md#conversationcompleteresponsebody)
- [ConversationCompleteStreamType](conversation_v1.md#conversationcompletestreamtype)
- [ConversationCreateRequest](conversation_v1.md#conversationcreaterequest)
- [ConversationCreateRequestBody](conversation_v1.md#conversationcreaterequestbody)
- [ConversationCreateResponse](conversation_v1.md#conversationcreateresponse)
- [ConversationCreateResponseBody](conversation_v1.md#conversationcreateresponsebody)
- [ConversationDeleteRequest](conversation_v1.md#conversationdeleterequest)
- [ConversationDeleteRequestBody](conversation_v1.md#conversationdeleterequestbody)
- [ConversationDeleteResponse](conversation_v1.md#conversationdeleteresponse)
- [ConversationDeleteResponseBody](conversation_v1.md#conversationdeleteresponsebody)
- [ConversationDownvoteRequest](conversation_v1.md#conversationdownvoterequest)
- [ConversationDownvoteRequestBody](conversation_v1.md#conversationdownvoterequestbody)
- [ConversationDownvoteResponse](conversation_v1.md#conversationdownvoteresponse)
- [ConversationDownvoteResponseBody](conversation_v1.md#conversationdownvoteresponsebody)
- [ConversationFetchResponse](conversation_v1.md#conversationfetchresponse)
- [ConversationListRequest](conversation_v1.md#conversationlistrequest)
- [ConversationListResponse](conversation_v1.md#conversationlistresponse)
- [ConversationListStreamType](conversation_v1.md#conversationliststreamtype)
- [ConversationReceiveMessageRequest](conversation_v1.md#conversationreceivemessagerequest)
- [ConversationReceiveMessageRequestBody](conversation_v1.md#conversationreceivemessagerequestbody)
- [ConversationReceiveMessageResponse](conversation_v1.md#conversationreceivemessageresponse)
- [ConversationReceiveMessageResponseBody](conversation_v1.md#conversationreceivemessageresponsebody)
- [ConversationReceiveMessageStreamType](conversation_v1.md#conversationreceivemessagestreamtype)
- [ConversationSendMessageRequest](conversation_v1.md#conversationsendmessagerequest)
- [ConversationSendMessageRequestBody](conversation_v1.md#conversationsendmessagerequestbody)
- [ConversationSendMessageResponse](conversation_v1.md#conversationsendmessageresponse)
- [ConversationSendMessageResponseBody](conversation_v1.md#conversationsendmessageresponsebody)
- [ConversationSendMessageStreamType](conversation_v1.md#conversationsendmessagestreamtype)
- [ConversationUpdateRequest](conversation_v1.md#conversationupdaterequest)
- [ConversationUpdateRequestBody](conversation_v1.md#conversationupdaterequestbody)
- [ConversationUpdateResponse](conversation_v1.md#conversationupdateresponse)
- [ConversationUpdateResponseBody](conversation_v1.md#conversationupdateresponsebody)
- [ConversationUpvoteRequest](conversation_v1.md#conversationupvoterequest)
- [ConversationUpvoteRequestBody](conversation_v1.md#conversationupvoterequestbody)
- [ConversationUpvoteResponse](conversation_v1.md#conversationupvoteresponse)
- [ConversationUpvoteResponseBody](conversation_v1.md#conversationupvoteresponsebody)
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

Ƭ **ConversationCompleteMessageRequest**\<\>: [`ConversationCompleteMessageRequestBody`](conversation_v1.md#conversationcompletemessagerequestbody)

#### Defined in

[conversation/v1.js:213](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L213)

___

### ConversationCompleteMessageRequestBody

Ƭ **ConversationCompleteMessageRequestBody**\<\>: `operations`[``"completeConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L211)

___

### ConversationCompleteMessageResponse

Ƭ **ConversationCompleteMessageResponse**\<\>: [`ConversationCompleteMessageResponseBody`](conversation_v1.md#conversationcompletemessageresponsebody)

#### Defined in

[conversation/v1.js:217](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L217)

___

### ConversationCompleteMessageResponseBody

Ƭ **ConversationCompleteMessageResponseBody**\<\>: `operations`[``"completeConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:215](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L215)

___

### ConversationCompleteMessageStreamType

Ƭ **ConversationCompleteMessageStreamType**\<\>: `operations`[``"completeConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[conversation/v1.js:219](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L219)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**\<\>: [`ConversationCompleteRequestBody`](conversation_v1.md#conversationcompleterequestbody) extends infer U ? `U` extends `any` ? `U` extends \{ `model?`: `any`  } ? [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<`U`, ``"model"``\> & \{ `model?`: `string` \| [`model/v1`](model_v1.md)  } : `U` : `never` : `never`

#### Defined in

[conversation/v1.js:180](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L180)

___

### ConversationCompleteRequestBody

Ƭ **ConversationCompleteRequestBody**\<\>: `operations`[``"completeConversation"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:171](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L171)

___

### ConversationCompleteResponse

Ƭ **ConversationCompleteResponse**\<\>: [`ConversationCompleteResponseBody`](conversation_v1.md#conversationcompleteresponsebody)

#### Defined in

[conversation/v1.js:184](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L184)

___

### ConversationCompleteResponseBody

Ƭ **ConversationCompleteResponseBody**\<\>: `operations`[``"completeConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:182](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L182)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**\<\>: `operations`[``"completeConversation"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[conversation/v1.js:186](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L186)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**\<\>: [`ConversationCreateRequestBody`](conversation_v1.md#conversationcreaterequestbody)

#### Defined in

[conversation/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L83)

___

### ConversationCreateRequestBody

Ƭ **ConversationCreateRequestBody**\<\>: [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<`operations`[``"createConversation"``][``"requestBody"``][``"content"``][``"application/json"``], ``"model"``\> & \{ `model?`: `string` \| [`model/v1`](model_v1.md)  }

#### Defined in

[conversation/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L81)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**\<\>: [`ConversationCreateResponseBody`](conversation_v1.md#conversationcreateresponsebody)

#### Defined in

[conversation/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L87)

___

### ConversationCreateResponseBody

Ƭ **ConversationCreateResponseBody**\<\>: `operations`[``"createConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L85)

___

### ConversationDeleteRequest

Ƭ **ConversationDeleteRequest**\<\>: [`ConversationDeleteRequestBody`](conversation_v1.md#conversationdeleterequestbody)

#### Defined in

[conversation/v1.js:146](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L146)

___

### ConversationDeleteRequestBody

Ƭ **ConversationDeleteRequestBody**\<\>: `operations`[``"deleteConversation"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:144](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L144)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**\<\>: [`ConversationDeleteResponseBody`](conversation_v1.md#conversationdeleteresponsebody)

#### Defined in

[conversation/v1.js:150](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L150)

___

### ConversationDeleteResponseBody

Ƭ **ConversationDeleteResponseBody**\<\>: `operations`[``"deleteConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:148](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L148)

___

### ConversationDownvoteRequest

Ƭ **ConversationDownvoteRequest**\<\>: [`ConversationDownvoteRequestBody`](conversation_v1.md#conversationdownvoterequestbody)

#### Defined in

[conversation/v1.js:336](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L336)

___

### ConversationDownvoteRequestBody

Ƭ **ConversationDownvoteRequestBody**\<\>: `operations`[``"downvoteConversation"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:334](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L334)

___

### ConversationDownvoteResponse

Ƭ **ConversationDownvoteResponse**\<\>: [`ConversationDownvoteResponseBody`](conversation_v1.md#conversationdownvoteresponsebody)

#### Defined in

[conversation/v1.js:340](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L340)

___

### ConversationDownvoteResponseBody

Ƭ **ConversationDownvoteResponseBody**\<\>: `operations`[``"downvoteConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:338](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L338)

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

Ƭ **ConversationReceiveMessageRequest**\<\>: [`ConversationReceiveMessageRequestBody`](conversation_v1.md#conversationreceivemessagerequestbody)

#### Defined in

[conversation/v1.js:275](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L275)

___

### ConversationReceiveMessageRequestBody

Ƭ **ConversationReceiveMessageRequestBody**\<\>: `operations`[``"receiveConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:273](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L273)

___

### ConversationReceiveMessageResponse

Ƭ **ConversationReceiveMessageResponse**\<\>: [`ConversationReceiveMessageResponseBody`](conversation_v1.md#conversationreceivemessageresponsebody)

#### Defined in

[conversation/v1.js:279](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L279)

___

### ConversationReceiveMessageResponseBody

Ƭ **ConversationReceiveMessageResponseBody**\<\>: `operations`[``"receiveConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:277](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L277)

___

### ConversationReceiveMessageStreamType

Ƭ **ConversationReceiveMessageStreamType**\<\>: `operations`[``"receiveConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[conversation/v1.js:281](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L281)

___

### ConversationSendMessageRequest

Ƭ **ConversationSendMessageRequest**\<\>: [`ConversationSendMessageRequestBody`](conversation_v1.md#conversationsendmessagerequestbody)

#### Defined in

[conversation/v1.js:244](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L244)

___

### ConversationSendMessageRequestBody

Ƭ **ConversationSendMessageRequestBody**\<\>: `operations`[``"sendConversationMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:242](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L242)

___

### ConversationSendMessageResponse

Ƭ **ConversationSendMessageResponse**\<\>: [`ConversationSendMessageResponseBody`](conversation_v1.md#conversationsendmessageresponsebody)

#### Defined in

[conversation/v1.js:248](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L248)

___

### ConversationSendMessageResponseBody

Ƭ **ConversationSendMessageResponseBody**\<\>: `operations`[``"sendConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:246](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L246)

___

### ConversationSendMessageStreamType

Ƭ **ConversationSendMessageStreamType**\<\>: `operations`[``"sendConversationMessage"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[conversation/v1.js:250](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L250)

___

### ConversationUpdateRequest

Ƭ **ConversationUpdateRequest**\<\>: [`ConversationUpdateRequestBody`](conversation_v1.md#conversationupdaterequestbody)

#### Defined in

[conversation/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L114)

___

### ConversationUpdateRequestBody

Ƭ **ConversationUpdateRequestBody**\<\>: [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<`operations`[``"updateConversation"``][``"requestBody"``][``"content"``][``"application/json"``], ``"model"``\> & \{ `model?`: `string` \| [`model/v1`](model_v1.md)  }

#### Defined in

[conversation/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L112)

___

### ConversationUpdateResponse

Ƭ **ConversationUpdateResponse**\<\>: [`ConversationUpdateResponseBody`](conversation_v1.md#conversationupdateresponsebody)

#### Defined in

[conversation/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L118)

___

### ConversationUpdateResponseBody

Ƭ **ConversationUpdateResponseBody**\<\>: `operations`[``"updateConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L116)

___

### ConversationUpvoteRequest

Ƭ **ConversationUpvoteRequest**\<\>: [`ConversationUpvoteRequestBody`](conversation_v1.md#conversationupvoterequestbody)

#### Defined in

[conversation/v1.js:306](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L306)

___

### ConversationUpvoteRequestBody

Ƭ **ConversationUpvoteRequestBody**\<\>: `operations`[``"upvoteConversation"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:304](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L304)

___

### ConversationUpvoteResponse

Ƭ **ConversationUpvoteResponse**\<\>: [`ConversationUpvoteResponseBody`](conversation_v1.md#conversationupvoteresponsebody)

#### Defined in

[conversation/v1.js:310](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L310)

___

### ConversationUpvoteResponseBody

Ƭ **ConversationUpvoteResponseBody**\<\>: `operations`[``"upvoteConversation"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/v1.js:308](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L308)

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
| `request` | {} & {} \| [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<{} & {}, ``"model"``\> & \{ `model?`: [`Model`](model_v1.md#model)  } |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {} \| {} \| {}\>

#### Defined in

[conversation/v1.js:192](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L192)

___

### completeConversationMessage

▸ **completeConversationMessage**(`client`, `conversationId`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {} \| {} \| {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {} \| {} \| {}\>

#### Defined in

[conversation/v1.js:226](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L226)

___

### createConversation

▸ **createConversation**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`ConversationCreateRequestBody`](conversation_v1.md#conversationcreaterequestbody) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L93)

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

[conversation/v1.js:156](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L156)

___

### downvoteConversation

▸ **downvoteConversation**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/v1.js:347](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L347)

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
| `request` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\> |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {} \| {} \| {}\>

#### Defined in

[conversation/v1.js:288](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L288)

___

### sendConversationMessage

▸ **sendConversationMessage**(`client`, `conversationId`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[conversation/v1.js:257](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L257)

___

### updateConversation

▸ **updateConversation**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationUpdateRequestBody`](conversation_v1.md#conversationupdaterequestbody) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L125)

___

### upvoteConversation

▸ **upvoteConversation**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/v1.js:317](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L317)
