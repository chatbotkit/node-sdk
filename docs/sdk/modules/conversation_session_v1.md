[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/session/v1

# Module: conversation/session/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_session_v1.md#chatbotkitclient)
- [SessionCreateRequest](conversation_session_v1.md#sessioncreaterequest)
- [SessionCreateResponse](conversation_session_v1.md#sessioncreateresponse)

### Functions

- [sessionCreate](conversation_session_v1.md#sessioncreate)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[conversation/session/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/conversation/session/v1.js#L2)

___

### SessionCreateRequest

Ƭ **SessionCreateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `durationInSeconds?` | `number` |

#### Defined in

[conversation/session/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/conversation/session/v1.js#L8)

___

### SessionCreateResponse

Ƭ **SessionCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expiresAt` | `number` |
| `token` | `string` |

#### Defined in

[conversation/session/v1.js:13](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/conversation/session/v1.js#L13)

## Functions

### sessionCreate

▸ **sessionCreate**(`client`, `conversationId`, `request`): `Promise`<[`SessionCreateResponse`](conversation_session_v1.md#sessioncreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `conversationId` | `string` |
| `request` | [`SessionCreateRequest`](conversation_session_v1.md#sessioncreaterequest) |

#### Returns

`Promise`<[`SessionCreateResponse`](conversation_session_v1.md#sessioncreateresponse)\>

#### Defined in

[conversation/session/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/conversation/session/v1.js#L20)
