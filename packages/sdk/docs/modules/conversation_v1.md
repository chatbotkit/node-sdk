[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/v1

# Module: conversation/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_v1.md#chatbotkitclient)
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

### ConversationCompleteMessageRequest

Ƭ **ConversationCompleteMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/v1.js:226](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L226)

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

[conversation/v1.js:232](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L232)

___

### ConversationCompleteMessageStreamResult

Ƭ **ConversationCompleteMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationCompleteMessageResponse`](conversation_v1.md#conversationcompletemessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:237](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L237)

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

[conversation/v1.js:244](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L244)

___

### ConversationCompleteMessageStreamType

Ƭ **ConversationCompleteMessageStreamType**\<\>: [`ConversationCompleteMessageStreamResult`](conversation_v1.md#conversationcompletemessagestreamresult) \| [`ConversationCompleteMessageStreamToken`](conversation_v1.md#conversationcompletemessagestreamtoken)

#### Defined in

[conversation/v1.js:246](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L246)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**\<\>: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `messages?`: [`Message`](conversation_v1.md#message)[] ; `model?`: [`model/v1`](model_v1.md) ; `skillsetId?`: `string`  } & \{ `text`: `string`  } \| \{ `messages`: [`Message`](conversation_v1.md#message)[]  }

#### Defined in

[conversation/v1.js:180](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L180)

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

[conversation/v1.js:185](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L185)

___

### ConversationCompleteStreamResult

Ƭ **ConversationCompleteStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:190](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L190)

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

[conversation/v1.js:197](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L197)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**\<\>: [`ConversationCompleteStreamResult`](conversation_v1.md#conversationcompletestreamresult) \| [`ConversationCompleteStreamToken`](conversation_v1.md#conversationcompletestreamtoken)

#### Defined in

[conversation/v1.js:199](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L199)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[conversation/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L96)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L100)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:155](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L155)

___

### ConversationDownvoteRequest

Ƭ **ConversationDownvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/v1.js:383](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L383)

___

### ConversationDownvoteResponse

Ƭ **ConversationDownvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:387](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L387)

___

### ConversationFetchResponse

Ƭ **ConversationFetchResponse**\<\>: [`ConversationInstance`](conversation_v1.md#conversationinstance) & {}

#### Defined in

[conversation/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L78)

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
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[conversation/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L50)

___

### ConversationListResponse

Ƭ **ConversationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ConversationInstance`](conversation_v1.md#conversationinstance)[] |

#### Defined in

[conversation/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L52)

___

### ConversationListStreamItem

Ƭ **ConversationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationInstance`](conversation_v1.md#conversationinstance) |
| `type` | ``"item"`` |

#### Defined in

[conversation/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L57)

___

### ConversationListStreamType

Ƭ **ConversationListStreamType**\<\>: [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)

#### Defined in

[conversation/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L59)

___

### ConversationOptions

Ƭ **ConversationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `botId?` | `string` |
| `datasetId?` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |
| `model?` | `string` |
| `skillsetId?` | `string` |

#### Defined in

[conversation/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L21)

___

### ConversationReceiveMessageRequest

Ƭ **ConversationReceiveMessageRequest**\<\>: `Object`

#### Defined in

[conversation/v1.js:308](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L308)

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

[conversation/v1.js:314](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L314)

___

### ConversationReceiveMessageStreamResult

Ƭ **ConversationReceiveMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationReceiveMessageResponse`](conversation_v1.md#conversationreceivemessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:319](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L319)

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

[conversation/v1.js:326](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L326)

___

### ConversationReceiveMessageStreamType

Ƭ **ConversationReceiveMessageStreamType**\<\>: [`ConversationReceiveMessageStreamResult`](conversation_v1.md#conversationreceivemessagestreamresult) \| [`ConversationReceiveMessageStreamToken`](conversation_v1.md#conversationreceivemessagestreamtoken)

#### Defined in

[conversation/v1.js:328](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L328)

___

### ConversationSendMessageRequest

Ƭ **ConversationSendMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text?` | `string` |

#### Defined in

[conversation/v1.js:272](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L272)

___

### ConversationSendMessageResponse

Ƭ **ConversationSendMessageResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_v1.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/v1.js:277](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L277)

___

### ConversationSendMessageStreamResult

Ƭ **ConversationSendMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationSendMessageResponse`](conversation_v1.md#conversationsendmessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:282](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L282)

___

### ConversationSendMessageStreamType

Ƭ **ConversationSendMessageStreamType**\<\>: [`ConversationSendMessageStreamResult`](conversation_v1.md#conversationsendmessagestreamresult)

#### Defined in

[conversation/v1.js:284](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L284)

___

### ConversationUpdateRequest

Ƭ **ConversationUpdateRequest**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[conversation/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L125)

___

### ConversationUpdateResponse

Ƭ **ConversationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:129](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L129)

___

### ConversationUpvoteRequest

Ƭ **ConversationUpvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/v1.js:353](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L353)

___

### ConversationUpvoteResponse

Ƭ **ConversationUpvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:357](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L357)

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

[conversation/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L46)

___

### Message

Ƭ **Message**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | [`MessageType`](conversation_v1.md#messagetype) |

#### Defined in

[conversation/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L34)

___

### MessageType

Ƭ **MessageType**\<\>: ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"``

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

[conversation/v1.js:205](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L205)

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

[conversation/v1.js:253](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L253)

___

### createConversation

▸ **createConversation**(`client`, `request`): `Promise`\<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`ConversationCreateRequest`](conversation_v1.md#conversationcreaterequest) |

#### Returns

`Promise`\<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L106)

___

### deleteConversation

▸ **deleteConversation**(`client`, `conversationId`): `Promise`\<[`ConversationDeleteResponse`](conversation_v1.md#conversationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |

#### Returns

`Promise`\<[`ConversationDeleteResponse`](conversation_v1.md#conversationdeleteresponse)\>

#### Defined in

[conversation/v1.js:161](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L161)

___

### downvoteConversation

▸ **downvoteConversation**(`client`, `conversationId`, `request`): `Promise`\<[`ConversationDownvoteResponse`](conversation_v1.md#conversationdownvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationDownvoteRequest`](conversation_v1.md#conversationdownvoterequest) |

#### Returns

`Promise`\<[`ConversationDownvoteResponse`](conversation_v1.md#conversationdownvoteresponse)\>

#### Defined in

[conversation/v1.js:394](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L394)

___

### fetchConversation

▸ **fetchConversation**(`client`, `conversationId`): `Promise`\<[`ConversationFetchResponse`](conversation_v1.md#conversationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |

#### Returns

`Promise`\<[`ConversationFetchResponse`](conversation_v1.md#conversationfetchresponse)\>

#### Defined in

[conversation/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L84)

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

[conversation/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L65)

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

[conversation/v1.js:335](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L335)

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

[conversation/v1.js:291](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L291)

___

### updateConversation

▸ **updateConversation**(`client`, `conversationId`, `request`): `Promise`\<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationUpdateRequest`](conversation_v1.md#conversationupdaterequest) |

#### Returns

`Promise`\<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/v1.js:136](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L136)

___

### upvoteConversation

▸ **upvoteConversation**(`client`, `conversationId`, `request`): `Promise`\<[`ConversationUpvoteResponse`](conversation_v1.md#conversationupvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationUpvoteRequest`](conversation_v1.md#conversationupvoterequest) |

#### Returns

`Promise`\<[`ConversationUpvoteResponse`](conversation_v1.md#conversationupvoteresponse)\>

#### Defined in

[conversation/v1.js:364](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L364)
