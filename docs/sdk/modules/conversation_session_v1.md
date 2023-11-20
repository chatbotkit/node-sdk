[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/session/v1

# Module: conversation/session/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_session_v1.md#chatbotkitclient)
- [ConversationSessionCreateRequest](conversation_session_v1.md#conversationsessioncreaterequest)
- [ConversationSessionCreateResponse](conversation_session_v1.md#conversationsessioncreateresponse)

### Functions

- [createConversationSession](conversation_session_v1.md#createconversationsession)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: `ChatBotKitClient`

#### Defined in

[conversation/session/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/session/v1.js#L2)

___

### ConversationSessionCreateRequest

Ƭ **ConversationSessionCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `durationInSeconds?` | `number` |

#### Defined in

[conversation/session/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/session/v1.js#L8)

___

### ConversationSessionCreateResponse

Ƭ **ConversationSessionCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expiresAt` | `number` |
| `token` | `string` |

#### Defined in

[conversation/session/v1.js:13](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/session/v1.js#L13)

## Functions

### createConversationSession

▸ **createConversationSession**(`client`, `conversationId`, `request`): `Promise`\<[`ConversationSessionCreateResponse`](conversation_session_v1.md#conversationsessioncreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`ConversationSessionCreateRequest`](conversation_session_v1.md#conversationsessioncreaterequest) |

#### Returns

`Promise`\<[`ConversationSessionCreateResponse`](conversation_session_v1.md#conversationsessioncreateresponse)\>

#### Defined in

[conversation/session/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/session/v1.js#L20)
