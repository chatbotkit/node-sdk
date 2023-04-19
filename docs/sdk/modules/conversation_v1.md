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
- [ConversationListResponse](conversation_v1.md#conversationlistresponse)
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

[conversation/v1.js:176](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L176)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[conversation/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L2)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](conversation_v1.md#message)[] |
| `model?` | `string` |

#### Defined in

[conversation/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L110)

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

[conversation/v1.js:115](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L115)

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

[conversation/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L125)

___

### ConversationCompleteStreamToken

Ƭ **ConversationCompleteStreamToken**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `type` | ``"token"`` |

#### Defined in

[conversation/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L120)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**<\>: [`ConversationCompleteStreamToken`](conversation_v1.md#conversationcompletestreamtoken) \| [`ConversationCompleteStreamResult`](conversation_v1.md#conversationcompletestreamresult)

#### Defined in

[conversation/v1.js:126](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L126)

___

### ConversationCreateRequest

Ƭ **ConversationCreateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `messages?` | [`Message`](conversation_v1.md#message)[] |
| `model?` | `string` |
| `moderation?` | `boolean` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |

#### Defined in

[conversation/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L52)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L56)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L96)

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

[conversation/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L33)

___

### ConversationListResponse

Ƭ **ConversationListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:15](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L15)

___

### ConversationReceiveRequest

Ƭ **ConversationReceiveRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages?` | [`Message`](conversation_v1.md#message)[] |
| `parse?` | `boolean` |

#### Defined in

[conversation/v1.js:181](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L181)

___

### ConversationReceiveResponse

Ƭ **ConversationReceiveResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `string` \| { `actions`: [`Action`](conversation_v1.md#action)[] ; `original`: `string` ; `stripped`: `string`  } |

#### Defined in

[conversation/v1.js:186](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L186)

___

### ConversationSendRequest

Ƭ **ConversationSendRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v1.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/v1.js:154](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L154)

___

### ConversationSendResponse

Ƭ **ConversationSendResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_v1.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/v1.js:159](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L159)

___

### ConversationUpdateRequest

Ƭ **ConversationUpdateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `model?` | `string` |
| `moderation?` | `boolean` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |

#### Defined in

[conversation/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L76)

___

### ConversationUpdateResponse

Ƭ **ConversationUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L80)

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

[conversation/v1.js:149](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L149)

___

### Message

Ƭ **Message**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` |

#### Defined in

[conversation/v1.js:9](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L9)

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

[conversation/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L132)

___

### conversationCreate

▸ **conversationCreate**(`client`, `request`): `Promise`<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`ConversationCreateRequest`](conversation_v1.md#conversationcreaterequest) |

#### Returns

`Promise`<[`ConversationCreateResponse`](conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L62)

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

[conversation/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L102)

___

### conversationFetch

▸ **conversationFetch**(`client`, `conversationId`): `Promise`<[`ConversationFetchResponse`](conversation_v1.md#conversationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |

#### Returns

`Promise`<[`ConversationFetchResponse`](conversation_v1.md#conversationfetchresponse)\>

#### Defined in

[conversation/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L39)

___

### conversationList

▸ **conversationList**(`client`): `Promise`<[`ConversationListResponse`](conversation_v1.md#conversationlistresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`Promise`<[`ConversationListResponse`](conversation_v1.md#conversationlistresponse)\>

#### Defined in

[conversation/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L20)

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

[conversation/v1.js:193](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L193)

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

[conversation/v1.js:166](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L166)

___

### conversationUpdate

▸ **conversationUpdate**(`client`, `conversationId`, `request`): `Promise`<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationUpdateRequest`](conversation_v1.md#conversationupdaterequest) |

#### Returns

`Promise`<[`ConversationUpdateResponse`](conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v1.js#L87)
