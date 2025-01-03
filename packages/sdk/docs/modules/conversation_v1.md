[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/v1

# Module: conversation/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_v1.md#chatbotkitclient)
- [ConversationCompleteMessage](conversation_v1.md#conversationcompletemessage)
- [ConversationCompleteMessageRequest](conversation_v1.md#conversationcompletemessagerequest)
- [ConversationCompleteMessageResponse](conversation_v1.md#conversationcompletemessageresponse)
- [ConversationCompleteMessageStreamResult](conversation_v1.md#conversationcompletemessagestreamresult)
- [ConversationCompleteMessageStreamToken](conversation_v1.md#conversationcompletemessagestreamtoken)
- [ConversationCompleteMessageStreamType](conversation_v1.md#conversationcompletemessagestreamtype)
- [ConversationCompleteRequest](conversation_v1.md#conversationcompleterequest)
- [ConversationCompleteResponse](conversation_v1.md#conversationcompleteresponse)
- [ConversationCompleteStreamResult](conversation_v1.md#conversationcompletestreamresult)
- [ConversationCompleteStreamToken](conversation_v1.md#conversationcompletestreamtoken)
- [ConversationCompleteStreamType](conversation_v1.md#conversationcompletestreamtype)
- [ConversationCreateRequest](conversation_v1.md#conversationcreaterequest)
- [ConversationCreateResponse](conversation_v1.md#conversationcreateresponse)
- [ConversationDeleteResponse](conversation_v1.md#conversationdeleteresponse)
- [ConversationDownvoteRequest](conversation_v1.md#conversationdownvoterequest)
- [ConversationDownvoteResponse](conversation_v1.md#conversationdownvoteresponse)
- [ConversationFetchResponse](conversation_v1.md#conversationfetchresponse)
- [ConversationInstance](conversation_v1.md#conversationinstance)
- [ConversationListRequest](conversation_v1.md#conversationlistrequest)
- [ConversationListResponse](conversation_v1.md#conversationlistresponse)
- [ConversationListStreamItem](conversation_v1.md#conversationliststreamitem)
- [ConversationListStreamType](conversation_v1.md#conversationliststreamtype)
- [ConversationOptions](conversation_v1.md#conversationoptions)
- [ConversationReceiveMessageRequest](conversation_v1.md#conversationreceivemessagerequest)
- [ConversationReceiveMessageResponse](conversation_v1.md#conversationreceivemessageresponse)
- [ConversationReceiveMessageStreamResult](conversation_v1.md#conversationreceivemessagestreamresult)
- [ConversationReceiveMessageStreamToken](conversation_v1.md#conversationreceivemessagestreamtoken)
- [ConversationReceiveMessageStreamType](conversation_v1.md#conversationreceivemessagestreamtype)
- [ConversationSendMessageRequest](conversation_v1.md#conversationsendmessagerequest)
- [ConversationSendMessageResponse](conversation_v1.md#conversationsendmessageresponse)
- [ConversationSendMessageStreamResult](conversation_v1.md#conversationsendmessagestreamresult)
- [ConversationSendMessageStreamType](conversation_v1.md#conversationsendmessagestreamtype)
- [ConversationUpdateRequest](conversation_v1.md#conversationupdaterequest)
- [ConversationUpdateResponse](conversation_v1.md#conversationupdateresponse)
- [ConversationUpvoteRequest](conversation_v1.md#conversationupvoterequest)
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

### ConversationCompleteMessage

Ƭ **ConversationCompleteMessage**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`Message`](conversation_v1.md#message) |
| `type` | ``"message"`` |

#### Defined in

[conversation/v1.js:207](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L207)

___

### ConversationCompleteMessageRequest

Ƭ **ConversationCompleteMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/v1.js:236](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L236)

___

### ConversationCompleteMessageResponse

Ƭ **ConversationCompleteMessageResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `string` |
| `usage` | \{ `token`: `number`  } |
| `usage.token` | `number` |

#### Defined in

[conversation/v1.js:242](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L242)

___

### ConversationCompleteMessageStreamResult

Ƭ **ConversationCompleteMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationCompleteMessageResponse`](conversation_v1.md#conversationcompletemessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:247](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L247)

___

### ConversationCompleteMessageStreamToken

Ƭ **ConversationCompleteMessageStreamToken**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | \{ `token`: `string`  } |
| `data.token` | `string` |
| `type` | ``"token"`` |

#### Defined in

[conversation/v1.js:254](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L254)

___

### ConversationCompleteMessageStreamType

Ƭ **ConversationCompleteMessageStreamType**\<\>: [`ConversationCompleteMessageStreamResult`](conversation_v1.md#conversationcompletemessagestreamresult) \| [`ConversationCompleteMessageStreamToken`](conversation_v1.md#conversationcompletemessagestreamtoken)

#### Defined in

[conversation/v1.js:256](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L256)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**\<\>: \{ `backstory?`: `string` ; `botId?`: `string` ; `datasetId?`: `string` ; `functions?`: \{ `description`: `string` ; `name`: `string` ; `parameters`: `any`  }[] ; `messages?`: [`Message`](conversation_v1.md#message)[] ; `model?`: [`model/v1`](model_v1.md) ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } & \{ `text`: `string`  } \| \{ `messages`: [`Message`](conversation_v1.md#message)[]  }

#### Defined in

[conversation/v1.js:185](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L185)

___

### ConversationCompleteResponse

Ƭ **ConversationCompleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `usage` | \{ `token`: `number`  } |
| `usage.token` | `number` |

#### Defined in

[conversation/v1.js:190](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L190)

___

### ConversationCompleteStreamResult

Ƭ **ConversationCompleteStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:195](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L195)

___

### ConversationCompleteStreamToken

Ƭ **ConversationCompleteStreamToken**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | \{ `token`: `string`  } |
| `data.token` | `string` |
| `type` | ``"token"`` |

#### Defined in

[conversation/v1.js:202](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L202)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**\<\>: [`ConversationCompleteStreamResult`](conversation_v1.md#conversationcompletestreamresult) \| [`ConversationCompleteStreamToken`](conversation_v1.md#conversationcompletestreamtoken) \| [`ConversationCompleteMessage`](conversation_v1.md#conversationcompletemessage)

#### Defined in

[conversation/v1.js:209](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L209)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[conversation/v1.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L97)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L101)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:156](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L156)

___

### ConversationDownvoteRequest

Ƭ **ConversationDownvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/v1.js:393](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L393)

___

### ConversationDownvoteResponse

Ƭ **ConversationDownvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:397](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L397)

___

### ConversationFetchResponse

Ƭ **ConversationFetchResponse**\<\>: [`ConversationInstance`](conversation_v1.md#conversationinstance) & {}

#### Defined in

[conversation/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L79)

___

### ConversationInstance

Ƭ **ConversationInstance**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[conversation/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L27)

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

[conversation/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L51)

___

### ConversationListResponse

Ƭ **ConversationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ConversationInstance`](conversation_v1.md#conversationinstance)[] |

#### Defined in

[conversation/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L53)

___

### ConversationListStreamItem

Ƭ **ConversationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationInstance`](conversation_v1.md#conversationinstance) |
| `type` | ``"item"`` |

#### Defined in

[conversation/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L58)

___

### ConversationListStreamType

Ƭ **ConversationListStreamType**\<\>: [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)

#### Defined in

[conversation/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L60)

___

### ConversationOptions

Ƭ **ConversationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `botId?` | `string` |
| `datasetId?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | `string` |
| `skillsetId?` | `string` |

#### Defined in

[conversation/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L21)

___

### ConversationReceiveMessageRequest

Ƭ **ConversationReceiveMessageRequest**\<\>: `Object`

#### Defined in

[conversation/v1.js:318](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L318)

___

### ConversationReceiveMessageResponse

Ƭ **ConversationReceiveMessageResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `string` |
| `usage` | \{ `token`: `number`  } |
| `usage.token` | `number` |

#### Defined in

[conversation/v1.js:324](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L324)

___

### ConversationReceiveMessageStreamResult

Ƭ **ConversationReceiveMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationReceiveMessageResponse`](conversation_v1.md#conversationreceivemessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:329](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L329)

___

### ConversationReceiveMessageStreamToken

Ƭ **ConversationReceiveMessageStreamToken**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | \{ `token`: `string`  } |
| `data.token` | `string` |
| `type` | ``"token"`` |

#### Defined in

[conversation/v1.js:336](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L336)

___

### ConversationReceiveMessageStreamType

Ƭ **ConversationReceiveMessageStreamType**\<\>: [`ConversationReceiveMessageStreamResult`](conversation_v1.md#conversationreceivemessagestreamresult) \| [`ConversationReceiveMessageStreamToken`](conversation_v1.md#conversationreceivemessagestreamtoken)

#### Defined in

[conversation/v1.js:338](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L338)

___

### ConversationSendMessageRequest

Ƭ **ConversationSendMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text?` | `string` |

#### Defined in

[conversation/v1.js:282](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L282)

___

### ConversationSendMessageResponse

Ƭ **ConversationSendMessageResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_v1.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/v1.js:287](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L287)

___

### ConversationSendMessageStreamResult

Ƭ **ConversationSendMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationSendMessageResponse`](conversation_v1.md#conversationsendmessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:292](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L292)

___

### ConversationSendMessageStreamType

Ƭ **ConversationSendMessageStreamType**\<\>: [`ConversationSendMessageStreamResult`](conversation_v1.md#conversationsendmessagestreamresult)

#### Defined in

[conversation/v1.js:294](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L294)

___

### ConversationUpdateRequest

Ƭ **ConversationUpdateRequest**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[conversation/v1.js:126](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L126)

___

### ConversationUpdateResponse

Ƭ **ConversationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L130)

___

### ConversationUpvoteRequest

Ƭ **ConversationUpvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/v1.js:363](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L363)

___

### ConversationUpvoteResponse

Ƭ **ConversationUpvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:367](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L367)

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

[conversation/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L47)

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

[conversation/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L35)

___

### MessageType

Ƭ **MessageType**\<\>: ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` \| ``"activity"``

#### Defined in

[conversation/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L29)

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

▸ **completeConversation**(`client`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_v1.md#conversationcompletestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`ConversationCompleteRequest`](conversation_v1.md#conversationcompleterequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_v1.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/v1.js:215](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L215)

___

### completeConversationMessage

▸ **completeConversationMessage**(`client`, `conversationId`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationCompleteMessageResponse`](conversation_v1.md#conversationcompletemessageresponse), [`ConversationCompleteMessageStreamType`](conversation_v1.md#conversationcompletemessagestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationCompleteMessageRequest`](conversation_v1.md#conversationcompletemessagerequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationCompleteMessageResponse`](conversation_v1.md#conversationcompletemessageresponse), [`ConversationCompleteMessageStreamType`](conversation_v1.md#conversationcompletemessagestreamtype)\>

#### Defined in

[conversation/v1.js:263](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L263)

___

### createConversation

▸ **createConversation**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`ConversationCreateRequest`](conversation_v1.md#conversationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L107)

___

### deleteConversation

▸ **deleteConversation**(`client`, `conversationId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationDeleteResponse`](conversation_v1.md#conversationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationDeleteResponse`](conversation_v1.md#conversationdeleteresponse)\>

#### Defined in

[conversation/v1.js:162](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L162)

___

### downvoteConversation

▸ **downvoteConversation**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationDownvoteResponse`](conversation_v1.md#conversationdownvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationDownvoteRequest`](conversation_v1.md#conversationdownvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationDownvoteResponse`](conversation_v1.md#conversationdownvoteresponse)\>

#### Defined in

[conversation/v1.js:404](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L404)

___

### fetchConversation

▸ **fetchConversation**(`client`, `conversationId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationFetchResponse`](conversation_v1.md#conversationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationFetchResponse`](conversation_v1.md#conversationfetchresponse)\>

#### Defined in

[conversation/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L85)

___

### listConversations

▸ **listConversations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationListResponse`](conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`ConversationListRequest`](conversation_v1.md#conversationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationListResponse`](conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)\>

#### Defined in

[conversation/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L66)

___

### receiveConversationMessage

▸ **receiveConversationMessage**(`client`, `conversationId`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationReceiveMessageResponse`](conversation_v1.md#conversationreceivemessageresponse), [`ConversationReceiveMessageStreamType`](conversation_v1.md#conversationreceivemessagestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveMessageRequest`](conversation_v1.md#conversationreceivemessagerequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationReceiveMessageResponse`](conversation_v1.md#conversationreceivemessageresponse), [`ConversationReceiveMessageStreamType`](conversation_v1.md#conversationreceivemessagestreamtype)\>

#### Defined in

[conversation/v1.js:345](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L345)

___

### sendConversationMessage

▸ **sendConversationMessage**(`client`, `conversationId`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationSendMessageResponse`](conversation_v1.md#conversationsendmessageresponse), [`ConversationSendMessageStreamResult`](conversation_v1.md#conversationsendmessagestreamresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationSendMessageRequest`](conversation_v1.md#conversationsendmessagerequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationSendMessageResponse`](conversation_v1.md#conversationsendmessageresponse), [`ConversationSendMessageStreamResult`](conversation_v1.md#conversationsendmessagestreamresult)\>

#### Defined in

[conversation/v1.js:301](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L301)

___

### updateConversation

▸ **updateConversation**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationUpdateRequest`](conversation_v1.md#conversationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L137)

___

### upvoteConversation

▸ **upvoteConversation**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationUpvoteResponse`](conversation_v1.md#conversationupvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationUpvoteRequest`](conversation_v1.md#conversationupvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationUpvoteResponse`](conversation_v1.md#conversationupvoteresponse)\>

#### Defined in

[conversation/v1.js:374](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L374)
