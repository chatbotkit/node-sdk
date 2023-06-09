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
- [MessageType](conversation_v1.md#messagetype)

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

[conversation/v1.js:205](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L205)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[conversation/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L2)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**<\>: { `entities?`: [`Entity`](conversation_v1.md#entity)[] ; `model?`: `string` ; `parse?`: `boolean` ; `text?`: `string`  } & { `text`: `string`  } \| { `messages`: [`Message`](conversation_v1.md#message)[]  }

#### Defined in

[conversation/v1.js:134](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L134)

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

[conversation/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L139)

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

[conversation/v1.js:154](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L154)

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

[conversation/v1.js:146](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L146)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**<\>: [`ConversationCompleteStreamToken`](conversation_v1.md#conversationcompletestreamtoken) \| [`ConversationCompleteStreamResult`](conversation_v1.md#conversationcompletestreamresult)

#### Defined in

[conversation/v1.js:156](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L156)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions)

#### Defined in

[conversation/v1.js:73](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L73)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:77](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L77)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L114)

___

### ConversationFetchResponse

Ƭ **ConversationFetchResponse**<\>: [`ConversationInstance`](conversation_v1.md#conversationinstance)

#### Defined in

[conversation/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L60)

___

### ConversationInstance

Ƭ **ConversationInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`ConversationOptions`](conversation_v1.md#conversationoptions)

#### Defined in

[conversation/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L18)

___

### ConversationListResponse

Ƭ **ConversationListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ConversationInstance`](conversation_v1.md#conversationinstance)[] |

#### Defined in

[conversation/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L41)

___

### ConversationListStreamItem

Ƭ **ConversationListStreamItem**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ConversationInstance`](conversation_v1.md#conversationinstance) |
| `type` | ``"item"`` |

#### Defined in

[conversation/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L46)

___

### ConversationListStreamType

Ƭ **ConversationListStreamType**<\>: [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)

#### Defined in

[conversation/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L48)

___

### ConversationOptions

Ƭ **ConversationOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `model?` | `string` |
| `skillsetId?` | `string` |

#### Defined in

[conversation/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L12)

___

### ConversationReceiveRequest

Ƭ **ConversationReceiveRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages?` | [`Message`](conversation_v1.md#message)[] |
| `parse?` | `boolean` |

#### Defined in

[conversation/v1.js:210](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L210)

___

### ConversationReceiveResponse

Ƭ **ConversationReceiveResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `string` \| { `actions`: [`Action`](conversation_v1.md#action)[] ; `original`: `string` ; `stripped`: `string`  } |

#### Defined in

[conversation/v1.js:215](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L215)

___

### ConversationSendRequest

Ƭ **ConversationSendRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/v1.js:181](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L181)

___

### ConversationSendResponse

Ƭ **ConversationSendResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_v1.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/v1.js:186](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L186)

___

### ConversationUpdateRequest

Ƭ **ConversationUpdateRequest**<\>: [`ConversationOptions`](conversation_v1.md#conversationoptions)

#### Defined in

[conversation/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L92)

___

### ConversationUpdateResponse

Ƭ **ConversationUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L96)

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

[conversation/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L37)

___

### Message

Ƭ **Message**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | [`MessageType`](conversation_v1.md#messagetype) |

#### Defined in

[conversation/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L25)

___

### MessageType

Ƭ **MessageType**<\>: ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"``

#### Defined in

[conversation/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L20)

## Functions

### conversationComplete

▸ **conversationComplete**(`client`, `conversationId`, `request`): `ResponsePromise`<[`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_v1.md#conversationcompletestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | ``null`` \| `string` |
| `request` | [`ConversationCompleteRequest`](conversation_v1.md#conversationcompleterequest) |

#### Returns

`ResponsePromise`<[`ConversationCompleteResponse`](conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_v1.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/v1.js:163](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L163)

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

[conversation/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L83)

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

[conversation/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L120)

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

[conversation/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L66)

___

### conversationList

▸ **conversationList**(`client`): `ResponsePromise`<[`ConversationListResponse`](conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`ResponsePromise`<[`ConversationListResponse`](conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](conversation_v1.md#conversationliststreamitem)\>

#### Defined in

[conversation/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L53)

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

[conversation/v1.js:222](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L222)

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

[conversation/v1.js:193](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L193)

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

[conversation/v1.js:103](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/conversation/v1.js#L103)
