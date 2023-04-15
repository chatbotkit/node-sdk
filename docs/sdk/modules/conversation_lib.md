[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/lib

# Module: conversation/lib

## Table of contents

### Type Aliases

- [Action](conversation_lib.md#action)
- [ConversationCompleteRequest](conversation_lib.md#conversationcompleterequest)
- [ConversationCompleteResponse](conversation_lib.md#conversationcompleteresponse)
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

[conversation/lib.js:137](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L137)

___

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](conversation_lib.md#message)[] |
| `model?` | `string` |

#### Defined in

[conversation/lib.js:12](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L12)

___

### ConversationCompleteResponse

Ƭ **ConversationCompleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Defined in

[conversation/lib.js:16](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L16)

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

[conversation/lib.js:53](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L53)

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/lib.js:57](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L57)

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/lib.js:168](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L168)

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

[conversation/lib.js:80](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L80)

___

### ConversationListResponse

Ƭ **ConversationListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/lib.js:33](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L33)

___

### ConversationReceiveRequest

Ƭ **ConversationReceiveRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages?` | [`Message`](conversation_lib.md#message)[] |
| `parse?` | `boolean` |

#### Defined in

[conversation/lib.js:142](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L142)

___

### ConversationReceiveResponse

Ƭ **ConversationReceiveResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `string` \| { `actions`: [`Action`](conversation_lib.md#action)[] ; `original`: `string` ; `stripped`: `string`  } |

#### Defined in

[conversation/lib.js:147](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L147)

___

### ConversationSendRequest

Ƭ **ConversationSendRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities?` | [`Entity`](conversation_lib.md#entity)[] |
| `text` | `string` |

#### Defined in

[conversation/lib.js:110](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L110)

___

### ConversationSendResponse

Ƭ **ConversationSendResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entities` | [`Entity`](conversation_lib.md#entity)[] |
| `id` | `string` |

#### Defined in

[conversation/lib.js:115](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L115)

___

### Entity

Ƭ **Entity**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `begin` | `number` |
| `end` | `number` |
| `replacement?` | { `being`: `number` ; `end`: `number` ; `text`: `string`  } |
| `replacement.being` | `number` |
| `replacement.end` | `number` |
| `replacement.text` | `string` |
| `text` | `string` |
| `type` | `string` |

#### Defined in

[conversation/lib.js:105](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L105)

___

### Message

Ƭ **Message**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` |

#### Defined in

[conversation/lib.js:5](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L5)

## Functions

### conversationComplete

▸ **conversationComplete**(`client`, `request`): `Promise`<[`ConversationCompleteResponse`](conversation_lib.md#conversationcompleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`ConversationCompleteRequest`](conversation_lib.md#conversationcompleterequest) |

#### Returns

`Promise`<[`ConversationCompleteResponse`](conversation_lib.md#conversationcompleteresponse)\>

#### Defined in

[conversation/lib.js:22](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L22)

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

[conversation/lib.js:63](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L63)

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

[conversation/lib.js:174](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L174)

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

[conversation/lib.js:86](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L86)

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

[conversation/lib.js:38](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L38)

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

[conversation/lib.js:154](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L154)

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

[conversation/lib.js:122](https://github.com/chatbotkit/node-sdk/blob/985daa2/packages/sdk/src/conversation/lib.js#L122)
