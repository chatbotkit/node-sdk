[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/v1

# Module: conversation/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_v1.md#chatbotkitclient)
- [ConversationCompleteMessage](conversation_v1.md#conversationcompletemessage)
- [ConversationCompleteMessageRequest](conversation_v1.md#conversationcompletemessagerequest)
- [ConversationCompleteMessageResponse](conversation_v1.md#conversationcompletemessageresponse)
- [ConversationCompleteMessageStreamMessage](conversation_v1.md#conversationcompletemessagestreammessage)
- [ConversationCompleteMessageStreamResult](conversation_v1.md#conversationcompletemessagestreamresult)
- [ConversationCompleteMessageStreamToken](conversation_v1.md#conversationcompletemessagestreamtoken)
- [ConversationCompleteMessageStreamType](conversation_v1.md#conversationcompletemessagestreamtype)
- [ConversationCompleteRequest](conversation_v1.md#conversationcompleterequest)
- [ConversationCompleteResponse](conversation_v1.md#conversationcompleteresponse)
- [ConversationCompleteStreamResult](conversation_v1.md#conversationcompletestreamresult)
- [ConversationCompleteStreamToken](conversation_v1.md#conversationcompletestreamtoken)
- [ConversationCompleteStreamType](conversation_v1.md#conversationcompletestreamtype)
- [ConversationContactUpsertRequest](conversation_v1.md#conversationcontactupsertrequest)
- [ConversationContactUpsertResponse](conversation_v1.md#conversationcontactupsertresponse)
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
- [ConversationReceiveMessageStreamMessage](conversation_v1.md#conversationreceivemessagestreammessage)
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
- [upsertConversationContact](conversation_v1.md#upsertconversationcontact)
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

[conversation/v1.js:218](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L218)

___

### ConversationCompleteMessageRequest

Ƭ **ConversationCompleteMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/v1.js:247](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L247)

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

[conversation/v1.js:253](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L253)

___

### ConversationCompleteMessageStreamMessage

Ƭ **ConversationCompleteMessageStreamMessage**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`Message`](conversation_v1.md#message) |
| `type` | ``"message"`` |

#### Defined in

[conversation/v1.js:263](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L263)

___

### ConversationCompleteMessageStreamResult

Ƭ **ConversationCompleteMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationCompleteMessageResponse`](conversation_v1.md#conversationcompletemessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:258](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L258)

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

[conversation/v1.js:270](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L270)

___

### ConversationCompleteMessageStreamType

Ƭ **ConversationCompleteMessageStreamType**\<\>: [`ConversationCompleteMessageStreamResult`](conversation_v1.md#conversationcompletemessagestreamresult) \| [`ConversationCompleteMessageStreamMessage`](conversation_v1.md#conversationcompletemessagestreammessage) \| [`ConversationCompleteMessageStreamToken`](conversation_v1.md#conversationcompletemessagestreamtoken)

#### Defined in

[conversation/v1.js:272](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L272)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**\<\>: \{ `backstory?`: `string` ; `botId?`: `string` ; `datasetId?`: `string` ; `functions?`: \{ `description`: `string` ; `name`: `string` ; `parameters`: `any`  }[] ; `messages?`: [`Message`](conversation_v1.md#message)[] ; `model?`: [`model/v1`](model_v1.md) ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } & \{ `text`: `string`  } \| \{ `messages`: [`Message`](conversation_v1.md#message)[]  }

#### Defined in

[conversation/v1.js:196](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L196)

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

[conversation/v1.js:201](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L201)

___

### ConversationCompleteStreamResult

Ƭ **ConversationCompleteStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:206](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L206)

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

[conversation/v1.js:213](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L213)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**\<\>: [`ConversationCompleteStreamResult`](conversation_v1.md#conversationcompletestreamresult) \| [`ConversationCompleteStreamToken`](conversation_v1.md#conversationcompletestreamtoken) \| [`ConversationCompleteMessage`](conversation_v1.md#conversationcompletemessage)

#### Defined in

[conversation/v1.js:220](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L220)

___

### ConversationContactUpsertRequest

Ƭ **ConversationContactUpsertRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `email?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `phone?` | `string` |

#### Defined in

[conversation/v1.js:458](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L458)

___

### ConversationContactUpsertResponse

Ƭ **ConversationContactUpsertResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:462](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L462)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[conversation/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L104)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L108)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:165](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L165)

___

### ConversationDownvoteRequest

Ƭ **ConversationDownvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/v1.js:422](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L422)

___

### ConversationDownvoteResponse

Ƭ **ConversationDownvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:426](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L426)

___

### ConversationFetchResponse

Ƭ **ConversationFetchResponse**\<\>: [`ConversationInstance`](conversation_v1.md#conversationinstance) & {}

#### Defined in

[conversation/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L83)

___

### ConversationInstance

Ƭ **ConversationInstance**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[conversation/v1.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L31)

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

[conversation/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L55)

___

### ConversationListResponse

Ƭ **ConversationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ConversationInstance`](conversation_v1.md#conversationinstance)[] |

#### Defined in

[conversation/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L57)

___

### ConversationListStreamItem

Ƭ **ConversationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationInstance`](conversation_v1.md#conversationinstance) |
| `type` | ``"item"`` |

#### Defined in

[conversation/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L62)

___

### ConversationListStreamType

Ƭ **ConversationListStreamType**\<\>: [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)

#### Defined in

[conversation/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L64)

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

[conversation/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L25)

___

### ConversationReceiveMessageRequest

Ƭ **ConversationReceiveMessageRequest**\<\>: `Object`

#### Defined in

[conversation/v1.js:338](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L338)

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

[conversation/v1.js:344](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L344)

___

### ConversationReceiveMessageStreamMessage

Ƭ **ConversationReceiveMessageStreamMessage**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`Message`](conversation_v1.md#message) |
| `type` | ``"message"`` |

#### Defined in

[conversation/v1.js:354](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L354)

___

### ConversationReceiveMessageStreamResult

Ƭ **ConversationReceiveMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationReceiveMessageResponse`](conversation_v1.md#conversationreceivemessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:349](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L349)

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

[conversation/v1.js:361](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L361)

___

### ConversationReceiveMessageStreamType

Ƭ **ConversationReceiveMessageStreamType**\<\>: [`ConversationReceiveMessageStreamResult`](conversation_v1.md#conversationreceivemessagestreamresult) \| [`ConversationReceiveMessageStreamMessage`](conversation_v1.md#conversationreceivemessagestreammessage) \| [`ConversationReceiveMessageStreamToken`](conversation_v1.md#conversationreceivemessagestreamtoken)

#### Defined in

[conversation/v1.js:363](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L363)

___

### ConversationSendMessageRequest

Ƭ **ConversationSendMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text?` | `string` |

#### Defined in

[conversation/v1.js:300](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L300)

___

### ConversationSendMessageResponse

Ƭ **ConversationSendMessageResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_v1.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/v1.js:305](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L305)

___

### ConversationSendMessageStreamResult

Ƭ **ConversationSendMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationSendMessageResponse`](conversation_v1.md#conversationsendmessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:310](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L310)

___

### ConversationSendMessageStreamType

Ƭ **ConversationSendMessageStreamType**\<\>: [`ConversationSendMessageStreamResult`](conversation_v1.md#conversationsendmessagestreamresult)

#### Defined in

[conversation/v1.js:312](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L312)

___

### ConversationUpdateRequest

Ƭ **ConversationUpdateRequest**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[conversation/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L133)

___

### ConversationUpdateResponse

Ƭ **ConversationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L137)

___

### ConversationUpvoteRequest

Ƭ **ConversationUpvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value?` | `number` |

#### Defined in

[conversation/v1.js:390](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L390)

___

### ConversationUpvoteResponse

Ƭ **ConversationUpvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:394](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L394)

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

[conversation/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L51)

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

[conversation/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L39)

___

### MessageType

Ƭ **MessageType**\<\>: ``"user"`` \| ``"bot"`` \| ``"reasoning"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` \| ``"activity"``

#### Defined in

[conversation/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L33)

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

[conversation/v1.js:226](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L226)

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

[conversation/v1.js:279](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L279)

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

[conversation/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L114)

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

[conversation/v1.js:171](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L171)

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

[conversation/v1.js:433](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L433)

___

### fetchConversation

▸ **fetchConversation**(`client`, `conversationId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationFetchResponse`](conversation_v1.md#conversationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ConversationFetchResponse`](conversation_v1.md#conversationfetchresponse), `never`\>

#### Defined in

[conversation/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L89)

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

[conversation/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L70)

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

[conversation/v1.js:370](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L370)

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

[conversation/v1.js:319](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L319)

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

[conversation/v1.js:144](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L144)

___

### upsertConversationContact

▸ **upsertConversationContact**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationContactUpsertResponse`](conversation_v1.md#conversationcontactupsertresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationContactUpsertRequest`](conversation_v1.md#conversationcontactupsertrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationContactUpsertResponse`](conversation_v1.md#conversationcontactupsertresponse)\>

#### Defined in

[conversation/v1.js:469](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L469)

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

[conversation/v1.js:401](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L401)
