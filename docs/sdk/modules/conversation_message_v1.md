[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/message/v1

# Module: conversation/message/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_message_v1.md#chatbotkitclient)
- [MessageCreateRequest](conversation_message_v1.md#messagecreaterequest)
- [MessageCreateResponse](conversation_message_v1.md#messagecreateresponse)
- [MessageDeleteResponse](conversation_message_v1.md#messagedeleteresponse)
- [MessageFetchResponse](conversation_message_v1.md#messagefetchresponse)
- [MessageInstance](conversation_message_v1.md#messageinstance)
- [MessageListResponse](conversation_message_v1.md#messagelistresponse)
- [MessageListStreamItem](conversation_message_v1.md#messageliststreamitem)
- [MessageListStreamType](conversation_message_v1.md#messageliststreamtype)
- [MessageOptions](conversation_message_v1.md#messageoptions)
- [MessageType](conversation_message_v1.md#messagetype)
- [MessageUpdateRequest](conversation_message_v1.md#messageupdaterequest)
- [MessageUpdateResponse](conversation_message_v1.md#messageupdateresponse)

### Functions

- [messageCreate](conversation_message_v1.md#messagecreate)
- [messageDelete](conversation_message_v1.md#messagedelete)
- [messageFetch](conversation_message_v1.md#messagefetch)
- [messageList](conversation_message_v1.md#messagelist)
- [messageUpdate](conversation_message_v1.md#messageupdate)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[conversation/message/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L2)

___

### MessageCreateRequest

Ƭ **MessageCreateRequest**<\>: [`MessageOptions`](conversation_message_v1.md#messageoptions)

#### Defined in

[conversation/message/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L56)

___

### MessageCreateResponse

Ƭ **MessageCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L60)

___

### MessageDeleteResponse

Ƭ **MessageDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L106)

___

### MessageFetchResponse

Ƭ **MessageFetchResponse**<\>: [`MessageInstance`](conversation_message_v1.md#messageinstance)

#### Defined in

[conversation/message/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L42)

___

### MessageInstance

Ƭ **MessageInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`MessageOptions`](conversation_message_v1.md#messageoptions)

#### Defined in

[conversation/message/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L18)

___

### MessageListResponse

Ƭ **MessageListResponse**<\>: [`MessageInstance`](conversation_message_v1.md#messageinstance)

#### Defined in

[conversation/message/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L22)

___

### MessageListStreamItem

Ƭ **MessageListStreamItem**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`MessageInstance`](conversation_message_v1.md#messageinstance) |
| `type` | ``"item"`` |

#### Defined in

[conversation/message/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L27)

___

### MessageListStreamType

Ƭ **MessageListStreamType**<\>: [`MessageListStreamItem`](conversation_message_v1.md#messageliststreamitem)

#### Defined in

[conversation/message/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L29)

___

### MessageOptions

Ƭ **MessageOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | `Record`<`string`, `any`\> |
| `text` | `string` |
| `type` | [`MessageType`](conversation_message_v1.md#messagetype) |

#### Defined in

[conversation/message/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L12)

___

### MessageType

Ƭ **MessageType**<\>: ``"user"`` \| ``"bot"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"``

#### Defined in

[conversation/message/v1.js:6](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L6)

___

### MessageUpdateRequest

Ƭ **MessageUpdateRequest**<\>: [`MessageOptions`](conversation_message_v1.md#messageoptions)

#### Defined in

[conversation/message/v1.js:77](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L77)

___

### MessageUpdateResponse

Ƭ **MessageUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[conversation/message/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L81)

## Functions

### messageCreate

▸ **messageCreate**(`client`, `conversationId`, `request`): `Promise`<[`MessageCreateResponse`](conversation_message_v1.md#messagecreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`MessageOptions`](conversation_message_v1.md#messageoptions) |

#### Returns

`Promise`<[`MessageCreateResponse`](conversation_message_v1.md#messagecreateresponse)\>

#### Defined in

[conversation/message/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L67)

___

### messageDelete

▸ **messageDelete**(`client`, `conversationId`, `messageId`): `Promise`<[`MessageDeleteResponse`](conversation_message_v1.md#messagedeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

`Promise`<[`MessageDeleteResponse`](conversation_message_v1.md#messagedeleteresponse)\>

#### Defined in

[conversation/message/v1.js:113](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L113)

___

### messageFetch

▸ **messageFetch**(`client`, `conversationId`, `messageId`): `Promise`<[`MessageInstance`](conversation_message_v1.md#messageinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `messageId` | `string` |

#### Returns

`Promise`<[`MessageInstance`](conversation_message_v1.md#messageinstance)\>

#### Defined in

[conversation/message/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L49)

___

### messageList

▸ **messageList**(`client`, `conversationId`): `ResponsePromise`<[`MessageInstance`](conversation_message_v1.md#messageinstance), [`MessageListStreamItem`](conversation_message_v1.md#messageliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |

#### Returns

`ResponsePromise`<[`MessageInstance`](conversation_message_v1.md#messageinstance), [`MessageListStreamItem`](conversation_message_v1.md#messageliststreamitem)\>

#### Defined in

[conversation/message/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L35)

___

### messageUpdate

▸ **messageUpdate**(`client`, `conversationId`, `messageId`, `request`): `Promise`<[`MessageUpdateResponse`](conversation_message_v1.md#messageupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `messageId` | `string` |
| `request` | [`MessageOptions`](conversation_message_v1.md#messageoptions) |

#### Returns

`Promise`<[`MessageUpdateResponse`](conversation_message_v1.md#messageupdateresponse)\>

#### Defined in

[conversation/message/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/message/v1.js#L89)
