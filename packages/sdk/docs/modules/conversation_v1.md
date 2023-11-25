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
- [Entity](conversation_v1.md#entity)
- [Message](conversation_v1.md#message)
- [MessageType](conversation_v1.md#messagetype)
- [ResponsePromise](conversation_v1.md#responsepromise)

### Functions

- [completeConversation](conversation_v1.md#completeconversation)
- [completeConversationMessage](conversation_v1.md#completeconversationmessage)
- [createConversation](conversation_v1.md#createconversation)
- [deleteConversation](conversation_v1.md#deleteconversation)
- [fetchConversation](conversation_v1.md#fetchconversation)
- [listConversations](conversation_v1.md#listconversations)
- [receiveConversationMessage](conversation_v1.md#receiveconversationmessage)
- [sendConversationMessage](conversation_v1.md#sendconversationmessage)
- [updateConversation](conversation_v1.md#updateconversation)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[conversation/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L2)

___

### ConversationCompleteMessageRequest

Ƭ **ConversationCompleteMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/v1.js:209](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L209)

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

[conversation/v1.js:215](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L215)

___

### ConversationCompleteMessageStreamResult

Ƭ **ConversationCompleteMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationCompleteMessageResponse`](conversation_v1.md#conversationcompletemessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:220](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L220)

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

[conversation/v1.js:227](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L227)

___

### ConversationCompleteMessageStreamType

Ƭ **ConversationCompleteMessageStreamType**\<\>: [`ConversationCompleteMessageStreamResult`](conversation_v1.md#conversationcompletemessagestreamresult) \| [`ConversationCompleteMessageStreamToken`](conversation_v1.md#conversationcompletemessagestreamtoken)

#### Defined in

[conversation/v1.js:229](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L229)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**\<\>: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `messages?`: [`Message`](conversation_v1.md#message)[] ; `model?`: `string` ; `skillsetId?`: `string`  } & \{ `text`: `string`  } \| \{ `messages`: [`Message`](conversation_v1.md#message)[]  }

#### Defined in

[conversation/v1.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L167)

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

[conversation/v1.js:172](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L172)

___

### ConversationCompleteStreamResult

Ƭ **ConversationCompleteStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:177](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L177)

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

[conversation/v1.js:184](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L184)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**\<\>: [`ConversationCompleteStreamResult`](conversation_v1.md#conversationcompletestreamresult) \| [`ConversationCompleteStreamToken`](conversation_v1.md#conversationcompletestreamtoken)

#### Defined in

[conversation/v1.js:186](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L186)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & {}

#### Defined in

[conversation/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L93)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L97)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:142](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L142)

___

### ConversationFetchResponse

Ƭ **ConversationFetchResponse**\<\>: [`ConversationInstance`](conversation_v1.md#conversationinstance) & {}

#### Defined in

[conversation/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L76)

___

### ConversationInstance

Ƭ **ConversationInstance**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[conversation/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L25)

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

[conversation/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L48)

___

### ConversationListResponse

Ƭ **ConversationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ConversationInstance`](conversation_v1.md#conversationinstance)[] |

#### Defined in

[conversation/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L50)

___

### ConversationListStreamItem

Ƭ **ConversationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationInstance`](conversation_v1.md#conversationinstance) |
| `type` | ``"item"`` |

#### Defined in

[conversation/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L55)

___

### ConversationListStreamType

Ƭ **ConversationListStreamType**\<\>: [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)

#### Defined in

[conversation/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L57)

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

[conversation/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L19)

___

### ConversationReceiveMessageRequest

Ƭ **ConversationReceiveMessageRequest**\<\>: `Object`

#### Defined in

[conversation/v1.js:287](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L287)

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

[conversation/v1.js:293](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L293)

___

### ConversationReceiveMessageStreamResult

Ƭ **ConversationReceiveMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationReceiveMessageResponse`](conversation_v1.md#conversationreceivemessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:298](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L298)

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

[conversation/v1.js:305](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L305)

___

### ConversationReceiveMessageStreamType

Ƭ **ConversationReceiveMessageStreamType**\<\>: [`ConversationReceiveMessageStreamResult`](conversation_v1.md#conversationreceivemessagestreamresult) \| [`ConversationReceiveMessageStreamToken`](conversation_v1.md#conversationreceivemessagestreamtoken)

#### Defined in

[conversation/v1.js:307](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L307)

___

### ConversationSendMessageRequest

Ƭ **ConversationSendMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text?` | `string` |

#### Defined in

[conversation/v1.js:253](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L253)

___

### ConversationSendMessageResponse

Ƭ **ConversationSendMessageResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_v1.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/v1.js:258](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L258)

___

### ConversationSendMessageStreamResult

Ƭ **ConversationSendMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationSendMessageResponse`](conversation_v1.md#conversationsendmessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:263](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L263)

___

### ConversationSendMessageStreamType

Ƭ **ConversationSendMessageStreamType**\<\>: [`ConversationSendMessageStreamResult`](conversation_v1.md#conversationsendmessagestreamresult)

#### Defined in

[conversation/v1.js:265](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L265)

___

### ConversationUpdateRequest

Ƭ **ConversationUpdateRequest**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions) & {}

#### Defined in

[conversation/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L116)

___

### ConversationUpdateResponse

Ƭ **ConversationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L120)

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

[conversation/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L44)

___

### Message

Ƭ **Message**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | [`MessageType`](conversation_v1.md#messagetype) |

#### Defined in

[conversation/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L32)

___

### MessageType

Ƭ **MessageType**\<\>: ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"``

#### Defined in

[conversation/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L27)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[conversation/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L8)

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

[conversation/v1.js:192](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L192)

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

[conversation/v1.js:236](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L236)

___

### createConversation

▸ **createConversation**(`client`, `request`): `Promise`\<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`ConversationOptions`](conversation_v1.md#conversationoptions) |

#### Returns

`Promise`\<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/v1.js:103](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L103)

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

[conversation/v1.js:148](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L148)

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

[conversation/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L82)

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

[conversation/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L63)

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

[conversation/v1.js:314](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L314)

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

[conversation/v1.js:272](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L272)

___

### updateConversation

▸ **updateConversation**(`client`, `conversationId`, `request`): `Promise`\<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | [`ConversationOptions`](conversation_v1.md#conversationoptions) |

#### Returns

`Promise`\<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/v1.js:127](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/v1.js#L127)
