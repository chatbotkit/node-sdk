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

Ƭ **ChatBotKitClient**\<\>: `ChatBotKitClient`

#### Defined in

[conversation/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L2)

___

### ConversationCompleteMessageRequest

Ƭ **ConversationCompleteMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/v1.js:205](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L205)

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

[conversation/v1.js:211](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L211)

___

### ConversationCompleteMessageStreamResult

Ƭ **ConversationCompleteMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationCompleteMessageResponse`](conversation_v1.md#conversationcompletemessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:216](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L216)

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

[conversation/v1.js:223](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L223)

___

### ConversationCompleteMessageStreamType

Ƭ **ConversationCompleteMessageStreamType**\<\>: [`ConversationCompleteMessageStreamResult`](conversation_v1.md#conversationcompletemessagestreamresult) \| [`ConversationCompleteMessageStreamToken`](conversation_v1.md#conversationcompletemessagestreamtoken)

#### Defined in

[conversation/v1.js:225](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L225)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**\<\>: \{ `datasetId?`: `string` ; `messages?`: [`Message`](conversation_v1.md#message)[] ; `model?`: `string` ; `skillsetId?`: `string`  } & \{ `text`: `string`  } \| \{ `messages`: [`Message`](conversation_v1.md#message)[]  }

#### Defined in

[conversation/v1.js:163](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L163)

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

[conversation/v1.js:168](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L168)

___

### ConversationCompleteStreamResult

Ƭ **ConversationCompleteStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:173](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L173)

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

[conversation/v1.js:180](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L180)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**\<\>: [`ConversationCompleteStreamResult`](conversation_v1.md#conversationcompletestreamresult) \| [`ConversationCompleteStreamToken`](conversation_v1.md#conversationcompletestreamtoken)

#### Defined in

[conversation/v1.js:182](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L182)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions)

#### Defined in

[conversation/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L90)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L94)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L139)

___

### ConversationFetchResponse

Ƭ **ConversationFetchResponse**\<\>: [`ConversationInstance`](conversation_v1.md#conversationinstance)

#### Defined in

[conversation/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L74)

___

### ConversationInstance

Ƭ **ConversationInstance**\<\>: \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`ConversationOptions`](conversation_v1.md#conversationoptions)

#### Defined in

[conversation/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L24)

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

[conversation/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L47)

___

### ConversationListResponse

Ƭ **ConversationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ConversationInstance`](conversation_v1.md#conversationinstance)[] |

#### Defined in

[conversation/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L49)

___

### ConversationListStreamItem

Ƭ **ConversationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationInstance`](conversation_v1.md#conversationinstance) |
| `type` | ``"item"`` |

#### Defined in

[conversation/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L54)

___

### ConversationListStreamType

Ƭ **ConversationListStreamType**\<\>: [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)

#### Defined in

[conversation/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L56)

___

### ConversationOptions

Ƭ **ConversationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |
| `model?` | `string` |
| `skillsetId?` | `string` |

#### Defined in

[conversation/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L18)

___

### ConversationReceiveMessageRequest

Ƭ **ConversationReceiveMessageRequest**\<\>: `Object`

#### Defined in

[conversation/v1.js:283](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L283)

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

[conversation/v1.js:289](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L289)

___

### ConversationReceiveMessageStreamResult

Ƭ **ConversationReceiveMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationReceiveMessageResponse`](conversation_v1.md#conversationreceivemessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:294](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L294)

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

[conversation/v1.js:301](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L301)

___

### ConversationReceiveMessageStreamType

Ƭ **ConversationReceiveMessageStreamType**\<\>: [`ConversationReceiveMessageStreamResult`](conversation_v1.md#conversationreceivemessagestreamresult) \| [`ConversationReceiveMessageStreamToken`](conversation_v1.md#conversationreceivemessagestreamtoken)

#### Defined in

[conversation/v1.js:303](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L303)

___

### ConversationSendMessageRequest

Ƭ **ConversationSendMessageRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text?` | `string` |

#### Defined in

[conversation/v1.js:249](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L249)

___

### ConversationSendMessageResponse

Ƭ **ConversationSendMessageResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_v1.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/v1.js:254](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L254)

___

### ConversationSendMessageStreamResult

Ƭ **ConversationSendMessageStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationSendMessageResponse`](conversation_v1.md#conversationsendmessageresponse) |
| `type` | ``"result"`` |

#### Defined in

[conversation/v1.js:259](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L259)

___

### ConversationSendMessageStreamType

Ƭ **ConversationSendMessageStreamType**\<\>: [`ConversationSendMessageStreamResult`](conversation_v1.md#conversationsendmessagestreamresult)

#### Defined in

[conversation/v1.js:261](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L261)

___

### ConversationUpdateRequest

Ƭ **ConversationUpdateRequest**\<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions)

#### Defined in

[conversation/v1.js:113](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L113)

___

### ConversationUpdateResponse

Ƭ **ConversationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:117](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L117)

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

[conversation/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L43)

___

### Message

Ƭ **Message**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | [`MessageType`](conversation_v1.md#messagetype) |

#### Defined in

[conversation/v1.js:31](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L31)

___

### MessageType

Ƭ **MessageType**\<\>: ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"``

#### Defined in

[conversation/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L26)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: `ResponsePromise`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[conversation/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L8)

## Functions

### completeConversation

▸ **completeConversation**(`client`, `request`): `ResponsePromise`\<[`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_v1.md#conversationcompletestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`ConversationCompleteRequest`](conversation_v1.md#conversationcompleterequest) |

#### Returns

`ResponsePromise`\<[`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_v1.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/v1.js:188](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L188)

___

### completeConversationMessage

▸ **completeConversationMessage**(`client`, `conversationId`, `request`): `ResponsePromise`\<[`ConversationCompleteMessageResponse`](conversation_v1.md#conversationcompletemessageresponse), [`ConversationCompleteMessageStreamType`](conversation_v1.md#conversationcompletemessagestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationCompleteMessageRequest`](conversation_v1.md#conversationcompletemessagerequest) |

#### Returns

`ResponsePromise`\<[`ConversationCompleteMessageResponse`](conversation_v1.md#conversationcompletemessageresponse), [`ConversationCompleteMessageStreamType`](conversation_v1.md#conversationcompletemessagestreamtype)\>

#### Defined in

[conversation/v1.js:232](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L232)

___

### createConversation

▸ **createConversation**(`client`, `request`): `Promise`\<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`ConversationOptions`](conversation_v1.md#conversationoptions) |

#### Returns

`Promise`\<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L100)

___

### deleteConversation

▸ **deleteConversation**(`client`, `conversationId`): `Promise`\<[`ConversationDeleteResponse`](conversation_v1.md#conversationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |

#### Returns

`Promise`\<[`ConversationDeleteResponse`](conversation_v1.md#conversationdeleteresponse)\>

#### Defined in

[conversation/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L145)

___

### fetchConversation

▸ **fetchConversation**(`client`, `conversationId`): `Promise`\<[`ConversationInstance`](conversation_v1.md#conversationinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |

#### Returns

`Promise`\<[`ConversationInstance`](conversation_v1.md#conversationinstance)\>

#### Defined in

[conversation/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L80)

___

### listConversations

▸ **listConversations**(`client`, `request?`): `ResponsePromise`\<[`ConversationListResponse`](conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request?` | [`ConversationListRequest`](conversation_v1.md#conversationlistrequest) |

#### Returns

`ResponsePromise`\<[`ConversationListResponse`](conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)\>

#### Defined in

[conversation/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L62)

___

### receiveConversationMessage

▸ **receiveConversationMessage**(`client`, `conversationId`, `request`): `ResponsePromise`\<[`ConversationReceiveMessageResponse`](conversation_v1.md#conversationreceivemessageresponse), [`ConversationReceiveMessageStreamType`](conversation_v1.md#conversationreceivemessagestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveMessageRequest`](conversation_v1.md#conversationreceivemessagerequest) |

#### Returns

`ResponsePromise`\<[`ConversationReceiveMessageResponse`](conversation_v1.md#conversationreceivemessageresponse), [`ConversationReceiveMessageStreamType`](conversation_v1.md#conversationreceivemessagestreamtype)\>

#### Defined in

[conversation/v1.js:310](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L310)

___

### sendConversationMessage

▸ **sendConversationMessage**(`client`, `conversationId`, `request`): `ResponsePromise`\<[`ConversationSendMessageResponse`](conversation_v1.md#conversationsendmessageresponse), [`ConversationSendMessageStreamResult`](conversation_v1.md#conversationsendmessagestreamresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationSendMessageRequest`](conversation_v1.md#conversationsendmessagerequest) |

#### Returns

`ResponsePromise`\<[`ConversationSendMessageResponse`](conversation_v1.md#conversationsendmessageresponse), [`ConversationSendMessageStreamResult`](conversation_v1.md#conversationsendmessagestreamresult)\>

#### Defined in

[conversation/v1.js:268](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L268)

___

### updateConversation

▸ **updateConversation**(`client`, `conversationId`, `request`): `Promise`\<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationOptions`](conversation_v1.md#conversationoptions) |

#### Returns

`Promise`\<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/v1.js#L124)
