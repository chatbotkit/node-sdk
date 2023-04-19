[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/v2

# Module: conversation/v2

## Table of contents

### Type Aliases

- [Action](conversation_v2.md#action)
- [ChatBotKitClient](conversation_v2.md#chatbotkitclient)
- [ConversationCompleteRequest](conversation_v2.md#conversationcompleterequest)
- [ConversationCompleteResponse](conversation_v2.md#conversationcompleteresponse)
- [ConversationCompleteStreamResult](conversation_v2.md#conversationcompletestreamresult)
- [ConversationCompleteStreamToken](conversation_v2.md#conversationcompletestreamtoken)
- [ConversationCompleteStreamType](conversation_v2.md#conversationcompletestreamtype)
- [ConversationReceiveRequest](conversation_v2.md#conversationreceiverequest)
- [ConversationReceiveResponse](conversation_v2.md#conversationreceiveresponse)
- [ConversationSendRequest](conversation_v2.md#conversationsendrequest)
- [ConversationSendResponse](conversation_v2.md#conversationsendresponse)
- [Entity](conversation_v2.md#entity)
- [Message](conversation_v2.md#message)

### Functions

- [conversationComplete](conversation_v2.md#conversationcomplete)
- [conversationReceive](conversation_v2.md#conversationreceive)
- [conversationSend](conversation_v2.md#conversationsend)

## Type Aliases

### Action

Ƭ **Action**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | `string` |

#### Defined in

[conversation/v2.js:82](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L82)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[conversation/v2.js:2](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L2)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](conversation_v2.md#message)[] |
| `model?` | `string` |

#### Defined in

[conversation/v2.js:16](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L16)

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

[conversation/v2.js:21](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L21)

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

[conversation/v2.js:31](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L31)

___

### ConversationCompleteStreamToken

Ƭ **ConversationCompleteStreamToken**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `type` | ``"token"`` |

#### Defined in

[conversation/v2.js:26](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L26)

___

### ConversationCompleteStreamType

Ƭ **ConversationCompleteStreamType**<\>: [`ConversationCompleteStreamToken`](conversation_v2.md#conversationcompletestreamtoken) \| [`ConversationCompleteStreamResult`](conversation_v2.md#conversationcompletestreamresult)

#### Defined in

[conversation/v2.js:32](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L32)

___

### ConversationReceiveRequest

Ƭ **ConversationReceiveRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages?` | [`Message`](conversation_v2.md#message)[] |
| `parse?` | `boolean` |

#### Defined in

[conversation/v2.js:87](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L87)

___

### ConversationReceiveResponse

Ƭ **ConversationReceiveResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `string` \| { `actions`: [`Action`](conversation_v2.md#action)[] ; `original`: `string` ; `stripped`: `string`  } |

#### Defined in

[conversation/v2.js:92](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L92)

___

### ConversationSendRequest

Ƭ **ConversationSendRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_v2.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/v2.js:60](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L60)

___

### ConversationSendResponse

Ƭ **ConversationSendResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_v2.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/v2.js:65](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L65)

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

[conversation/v2.js:55](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L55)

___

### Message

Ƭ **Message**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` |

#### Defined in

[conversation/v2.js:9](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L9)

## Functions

### conversationComplete

▸ **conversationComplete**(`client`, `request`): `ResponsePromise`<[`ConversationCompleteResponse`](conversation_v2.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_v2.md#conversationcompletestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`ConversationCompleteRequest`](conversation_v2.md#conversationcompleterequest) |

#### Returns

`ResponsePromise`<[`ConversationCompleteResponse`](conversation_v2.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](conversation_v2.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/v2.js:38](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L38)

___

### conversationReceive

▸ **conversationReceive**(`client`, `conversationId`, `request`): `Promise`<[`ConversationReceiveResponse`](conversation_v2.md#conversationreceiveresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveRequest`](conversation_v2.md#conversationreceiverequest) |

#### Returns

`Promise`<[`ConversationReceiveResponse`](conversation_v2.md#conversationreceiveresponse)\>

#### Defined in

[conversation/v2.js:99](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L99)

___

### conversationSend

▸ **conversationSend**(`client`, `conversationId`, `request`): `Promise`<[`ConversationSendResponse`](conversation_v2.md#conversationsendresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationSendRequest`](conversation_v2.md#conversationsendrequest) |

#### Returns

`Promise`<[`ConversationSendResponse`](conversation_v2.md#conversationsendresponse)\>

#### Defined in

[conversation/v2.js:72](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/conversation/v2.js#L72)
