[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/lib

# Module: conversation/lib

## Table of contents

### Type Aliases

- [Action](conversation_lib.md#action)
- [ChatBotKitClient](conversation_lib.md#chatbotkitclient)
- [ConversationCompleteRequest](conversation_lib.md#conversationcompleterequest)
- [ConversationCompleteResponse](conversation_lib.md#conversationcompleteresponse)
- [ConversationCompleteStreamResult](conversation_lib.md#conversationcompletestreamresult)
- [ConversationCompleteStreamToken](conversation_lib.md#conversationcompletestreamtoken)
- [ConversationCompleteStreamType](conversation_lib.md#conversationcompletestreamtype)
- [ConversationCreateRequest](conversation_lib.md#conversationcreaterequest)
- [ConversationCreateResponse](conversation_lib.md#conversationcreateresponse)
- [ConversationDeleteResponse](conversation_lib.md#conversationdeleteresponse)
- [ConversationFetchResponse](conversation_lib.md#conversationfetchresponse)
- [ConversationListResponse](conversation_lib.md#conversationlistresponse)
- [ConversationReceiveRequest](conversation_lib.md#conversationreceiverequest)
- [ConversationReceiveResponse](conversation_lib.md#conversationreceiveresponse)
- [ConversationSendRequest](conversation_lib.md#conversationsendrequest)
- [ConversationSendResponse](conversation_lib.md#conversationsendresponse)
- [Entity](conversation_lib.md#entity)
- [Message](conversation_lib.md#message)

### Functions

- [conversationComplete](conversation_lib.md#conversationcomplete)
- [conversationCreate](conversation_lib.md#conversationcreate)
- [conversationDelete](conversation_lib.md#conversationdelete)
- [conversationFetch](conversation_lib.md#conversationfetch)
- [conversationList](conversation_lib.md#conversationlist)
- [conversationReceive](conversation_lib.md#conversationreceive)
- [conversationSend](conversation_lib.md#conversationsend)

## Type Aliases

### Action

Ƭ **Action**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | `string` |

#### Defined in

[conversation/lib.js:138](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L138)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[conversation/lib.js:2](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L2)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](conversation_lib.md#message)[] |
| `model?` | `string` |

#### Defined in

[conversation/lib.js:16](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L16)

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

[conversation/lib.js:21](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L21)

___

### ConversationCompleteStreamResult

Ƭ **ConversationCompleteStreamResult**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | ``"result"`` |
| `usage` | { `token`: `number`  } |
| `usage.token` | `number` |

#### Defined in

[conversation/lib.js:31](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L31)

___

### ConversationCompleteStreamToken

Ƭ **ConversationCompleteStreamToken**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `type` | ``"token"`` |

#### Defined in

[conversation/lib.js:26](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L26)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**<\>: [`ConversationCompleteStreamToken`](conversation_lib.md#conversationcompletestreamtoken) \| [`ConversationCompleteStreamResult`](conversation_lib.md#conversationcompletestreamresult)

#### Defined in

[conversation/lib.js:32](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L32)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `messages?` | [`Message`](conversation_lib.md#message)[] |
| `model?` | `string` |
| `moderation?` | `boolean` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |

#### Defined in

[conversation/lib.js:65](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L65)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/lib.js:69](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L69)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/lib.js:164](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L164)

___

### ConversationFetchResponse

Ƭ **ConversationFetchResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `createdAt` | `number` |
| `datasetId?` | `string` |
| `id` | `string` |
| `model?` | `string` |
| `skillsetId?` | `string` |
| `updatedAt` | `number` |

#### Defined in

[conversation/lib.js:90](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L90)

___

### ConversationListResponse

Ƭ **ConversationListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/lib.js:47](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L47)

___

### ConversationReceiveRequest

Ƭ **ConversationReceiveRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages?` | [`Message`](conversation_lib.md#message)[] |
| `parse?` | `boolean` |

#### Defined in

[conversation/lib.js:143](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L143)

___

### ConversationReceiveResponse

Ƭ **ConversationReceiveResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `string` \| { `actions`: [`Action`](conversation_lib.md#action)[] ; `original`: `string` ; `stripped`: `string`  } |

#### Defined in

[conversation/lib.js:148](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L148)

___

### ConversationSendRequest

Ƭ **ConversationSendRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_lib.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/lib.js:116](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L116)

___

### ConversationSendResponse

Ƭ **ConversationSendResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_lib.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/lib.js:121](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L121)

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

[conversation/lib.js:111](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L111)

___

### Message

Ƭ **Message**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` |

#### Defined in

[conversation/lib.js:9](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L9)

## Functions

### conversationComplete

▸ **conversationComplete**(`client`, `request`): `ResponsePromise`<[`ConversationCompleteResponse`](conversation_lib.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_lib.md#conversationcompletestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`ConversationCompleteRequest`](conversation_lib.md#conversationcompleterequest) |

#### Returns

`ResponsePromise`<[`ConversationCompleteResponse`](conversation_lib.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_lib.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/lib.js:38](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L38)

___

### conversationCreate

▸ **conversationCreate**(`client`, `request`): `Promise`<[`ConversationCreateResponse`](conversation_lib.md#conversationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`ConversationCreateRequest`](conversation_lib.md#conversationcreaterequest) |

#### Returns

`Promise`<[`ConversationCreateResponse`](conversation_lib.md#conversationcreateresponse)\>

#### Defined in

[conversation/lib.js:75](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L75)

___

### conversationDelete

▸ **conversationDelete**(`client`, `conversationId`): `Promise`<[`ConversationDeleteResponse`](conversation_lib.md#conversationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationDeleteResponse`](conversation_lib.md#conversationdeleteresponse)\>

#### Defined in

[conversation/lib.js:170](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L170)

___

### conversationFetch

▸ **conversationFetch**(`client`, `conversationId`): `Promise`<[`ConversationFetchResponse`](conversation_lib.md#conversationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationFetchResponse`](conversation_lib.md#conversationfetchresponse)\>

#### Defined in

[conversation/lib.js:96](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L96)

___

### conversationList

▸ **conversationList**(`client`): `Promise`<[`ConversationListResponse`](conversation_lib.md#conversationlistresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`Promise`<[`ConversationListResponse`](conversation_lib.md#conversationlistresponse)\>

#### Defined in

[conversation/lib.js:52](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L52)

___

### conversationReceive

▸ **conversationReceive**(`client`, `conversationId`, `request`): `Promise`<[`ConversationReceiveResponse`](conversation_lib.md#conversationreceiveresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveRequest`](conversation_lib.md#conversationreceiverequest) |

#### Returns

`Promise`<[`ConversationReceiveResponse`](conversation_lib.md#conversationreceiveresponse)\>

#### Defined in

[conversation/lib.js:155](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L155)

___

### conversationSend

▸ **conversationSend**(`client`, `conversationId`, `request`): `Promise`<[`ConversationSendResponse`](conversation_lib.md#conversationsendresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationSendRequest`](conversation_lib.md#conversationsendrequest) |

#### Returns

`Promise`<[`ConversationSendResponse`](conversation_lib.md#conversationsendresponse)\>

#### Defined in

[conversation/lib.js:128](https://github.com/chatbotkit/node-sdk/blob/80d2736/packages/sdk/src/conversation/lib.js#L128)
