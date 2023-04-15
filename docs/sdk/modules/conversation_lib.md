[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/lib

# Module: conversation/lib

## Table of contents

### Type Aliases

- [ConversationCompleteRequest](conversation_lib.md#conversationcompleterequest)
- [ConversationCompleteResponse](conversation_lib.md#conversationcompleteresponse)
- [ConversationCreateRequest](conversation_lib.md#conversationcreaterequest)
- [ConversationCreateResponse](conversation_lib.md#conversationcreateresponse)
- [ConversationDeleteResponse](conversation_lib.md#conversationdeleteresponse)
- [ConversationFetchResponse](conversation_lib.md#conversationfetchresponse)
- [ConversationListResponse](conversation_lib.md#conversationlistresponse)
- [Message](conversation_lib.md#message)

### Functions

- [conversationComplete](conversation_lib.md#conversationcomplete)
- [conversationCreate](conversation_lib.md#conversationcreate)
- [conversationDelete](conversation_lib.md#conversationdelete)
- [conversationFetch](conversation_lib.md#conversationfetch)
- [conversationList](conversation_lib.md#conversationlist)

## Type Aliases

### ConversationCompleteRequest

Ƭ **ConversationCompleteRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messages` | [`Message`](conversation_lib.md#message)[] |
| `model?` | `string` |

#### Defined in

conversation/lib.js:12

___

### ConversationCompleteResponse

Ƭ **ConversationCompleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Defined in

conversation/lib.js:16

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

conversation/lib.js:53

___

### ConversationCreateResponse

Ƭ **ConversationCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

conversation/lib.js:57

___

### ConversationDeleteResponse

Ƭ **ConversationDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

conversation/lib.js:97

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

conversation/lib.js:80

___

### ConversationListResponse

Ƭ **ConversationListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

conversation/lib.js:33

___

### Message

Ƭ **Message**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` |

#### Defined in

conversation/lib.js:5

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

conversation/lib.js:22

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

conversation/lib.js:63

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

conversation/lib.js:103

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

conversation/lib.js:86

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

conversation/lib.js:38
