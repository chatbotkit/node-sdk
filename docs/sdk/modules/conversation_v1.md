[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/v1

# Module: conversation/v1

## Table of contents

### Type Aliases

- [Action](conversation_v1.md#action)
- [ChatBotKitClient](conversation_v1.md#chatbotkitclient)
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
- [ConversationListResponse](conversation_v1.md#conversationlistresponse)
- [ConversationListStreamItem](conversation_v1.md#conversationliststreamitem)
- [ConversationListStreamType](conversation_v1.md#conversationliststreamtype)
- [ConversationOptions](conversation_v1.md#conversationoptions)
- [ConversationReceiveRequest](conversation_v1.md#conversationreceiverequest)
- [ConversationReceiveResponse](conversation_v1.md#conversationreceiveresponse)
- [ConversationSendRequest](conversation_v1.md#conversationsendrequest)
- [ConversationSendResponse](conversation_v1.md#conversationsendresponse)
- [ConversationUpdateRequest](conversation_v1.md#conversationupdaterequest)
- [ConversationUpdateResponse](conversation_v1.md#conversationupdateresponse)
- [Entity](conversation_v1.md#entity)
- [Message](conversation_v1.md#message)

### Functions

- [conversationComplete](conversation_v1.md#conversationcomplete)
- [conversationCreate](conversation_v1.md#conversationcreate)
- [conversationDelete](conversation_v1.md#conversationdelete)
- [conversationFetch](conversation_v1.md#conversationfetch)
- [conversationList](conversation_v1.md#conversationlist)
- [conversationReceive](conversation_v1.md#conversationreceive)
- [conversationSend](conversation_v1.md#conversationsend)
- [conversationUpdate](conversation_v1.md#conversationupdate)

## Type Aliases

### Action

Ƭ **Action**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | `string` |

#### Defined in

[conversation/v1.js:180](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L180)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[conversation/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L2)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](conversation_v1.md#message)[] |
| `model?` | `string` |

#### Defined in

[conversation/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L108)

___

### ConversationCompleteResponse

Ƭ **ConversationCompleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `usage` | { `token`: `number`  } |
| `usage.token` | `number` |

#### Defined in

[conversation/v1.js:113](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L113)

___

### ConversationCompleteStreamResult

Ƭ **ConversationCompleteStreamResult**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | { `text`: `string`  } |
| `data.text` | `string` |
| `type` | ``"result"`` |
| `usage` | { `token`: `number`  } |
| `usage.token` | `number` |

#### Defined in

[conversation/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L128)

___

### ConversationCompleteStreamToken

Ƭ **ConversationCompleteStreamToken**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | { `token`: `string`  } |
| `data.token` | `string` |
| `type` | ``"token"`` |

#### Defined in

[conversation/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L120)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**<\>: [`ConversationCompleteStreamToken`](conversation_v1.md#conversationcompletestreamtoken) \| [`ConversationCompleteStreamResult`](conversation_v1.md#conversationcompletestreamresult)

#### Defined in

[conversation/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L130)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions)

#### Defined in

[conversation/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L55)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L59)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L92)

___

### ConversationFetchResponse

Ƭ **ConversationFetchResponse**<\>: [`ConversationInstance`](conversation_v1.md#conversationinstance)

#### Defined in

[conversation/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L44)

___

### ConversationInstance

Ƭ **ConversationInstance**<\>: { `id`: `string`  } & [`ConversationOptions`](conversation_v1.md#conversationoptions)

#### Defined in

[conversation/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L18)

___

### ConversationListResponse

Ƭ **ConversationListResponse**<\>: [`ConversationInstance`](conversation_v1.md#conversationinstance)

#### Defined in

[conversation/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L27)

___

### ConversationListStreamItem

Ƭ **ConversationListStreamItem**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationInstance`](conversation_v1.md#conversationinstance) |
| `type` | ``"item"`` |

#### Defined in

[conversation/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L32)

___

### ConversationListStreamType

Ƭ **ConversationListStreamType**<\>: [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)

#### Defined in

[conversation/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L34)

___

### ConversationOptions

Ƭ **ConversationOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `createdAt` | `number` |
| `datasetId?` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `model?` | `string` |
| `skillsetId?` | `string` |
| `updatedAt` | `number` |

#### Defined in

[conversation/v1.js:14](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L14)

___

### ConversationReceiveRequest

Ƭ **ConversationReceiveRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages?` | [`Message`](conversation_v1.md#message)[] |
| `parse?` | `boolean` |

#### Defined in

[conversation/v1.js:185](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L185)

___

### ConversationReceiveResponse

Ƭ **ConversationReceiveResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `string` \| { `actions`: [`Action`](conversation_v1.md#action)[] ; `original`: `string` ; `stripped`: `string`  } |

#### Defined in

[conversation/v1.js:190](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L190)

___

### ConversationSendRequest

Ƭ **ConversationSendRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/v1.js:158](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L158)

___

### ConversationSendResponse

Ƭ **ConversationSendResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_v1.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/v1.js:163](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L163)

___

### ConversationUpdateRequest

Ƭ **ConversationUpdateRequest**<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions)

#### Defined in

[conversation/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L72)

___

### ConversationUpdateResponse

Ƭ **ConversationUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L76)

___

### Entity

Ƭ **Entity**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `begin` | `number` |
| `end` | `number` |
| `replacement?` | { `begin`: `number` ; `end`: `number` ; `text`: `string`  } |
| `replacement.begin` | `number` |
| `replacement.end` | `number` |
| `replacement.text` | `string` |
| `text` | `string` |
| `type` | `string` |

#### Defined in

[conversation/v1.js:153](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L153)

___

### Message

Ƭ **Message**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` |

#### Defined in

[conversation/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L23)

## Functions

### conversationComplete

▸ **conversationComplete**(`client`, `request`): `ResponsePromise`<[`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_v1.md#conversationcompletestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`ConversationCompleteRequest`](conversation_v1.md#conversationcompleterequest) |

#### Returns

`ResponsePromise`<[`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_v1.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/v1.js:136](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L136)

___

### conversationCreate

▸ **conversationCreate**(`client`, `request`): `Promise`<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`ConversationOptions`](conversation_v1.md#conversationoptions) |

#### Returns

`Promise`<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L65)

___

### conversationDelete

▸ **conversationDelete**(`client`, `conversationId`): `Promise`<[`ConversationDeleteResponse`](conversation_v1.md#conversationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationDeleteResponse`](conversation_v1.md#conversationdeleteresponse)\>

#### Defined in

[conversation/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L98)

___

### conversationFetch

▸ **conversationFetch**(`client`, `conversationId`): `Promise`<[`ConversationInstance`](conversation_v1.md#conversationinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationInstance`](conversation_v1.md#conversationinstance)\>

#### Defined in

[conversation/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L50)

___

### conversationList

▸ **conversationList**(`client`): `ResponsePromise`<[`ConversationInstance`](conversation_v1.md#conversationinstance), [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`ResponsePromise`<[`ConversationInstance`](conversation_v1.md#conversationinstance), [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)\>

#### Defined in

[conversation/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L39)

___

### conversationReceive

▸ **conversationReceive**(`client`, `conversationId`, `request`): `Promise`<[`ConversationReceiveResponse`](conversation_v1.md#conversationreceiveresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveRequest`](conversation_v1.md#conversationreceiverequest) |

#### Returns

`Promise`<[`ConversationReceiveResponse`](conversation_v1.md#conversationreceiveresponse)\>

#### Defined in

[conversation/v1.js:197](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L197)

___

### conversationSend

▸ **conversationSend**(`client`, `conversationId`, `request`): `Promise`<[`ConversationSendResponse`](conversation_v1.md#conversationsendresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationSendRequest`](conversation_v1.md#conversationsendrequest) |

#### Returns

`Promise`<[`ConversationSendResponse`](conversation_v1.md#conversationsendresponse)\>

#### Defined in

[conversation/v1.js:170](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L170)

___

### conversationUpdate

▸ **conversationUpdate**(`client`, `conversationId`, `request`): `Promise`<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationOptions`](conversation_v1.md#conversationoptions) |

#### Returns

`Promise`<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/conversation/v1.js#L83)
