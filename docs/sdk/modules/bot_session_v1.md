[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / bot/session/v1

# Module: bot/session/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](bot_session_v1.md#chatbotkitclient)
- [SessionCreateRequest](bot_session_v1.md#sessioncreaterequest)
- [SessionCreateResponse](bot_session_v1.md#sessioncreateresponse)

### Functions

- [sessionCreate](bot_session_v1.md#sessioncreate)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[bot/session/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/bot/session/v1.js#L2)

___

### SessionCreateRequest

Ƭ **SessionCreateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `durationInSeconds?` | `number` |

#### Defined in

[bot/session/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/bot/session/v1.js#L8)

___

### SessionCreateResponse

Ƭ **SessionCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `expiresAt` | `number` |
| `token` | `string` |

#### Defined in

[bot/session/v1.js:14](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/bot/session/v1.js#L14)

## Functions

### sessionCreate

▸ **sessionCreate**(`client`, `botId`, `request`): `Promise`<[`SessionCreateResponse`](bot_session_v1.md#sessioncreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `botId` | `string` |
| `request` | [`SessionCreateRequest`](bot_session_v1.md#sessioncreaterequest) |

#### Returns

`Promise`<[`SessionCreateResponse`](bot_session_v1.md#sessioncreateresponse)\>

#### Defined in

[bot/session/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/757deec/packages/sdk/src/bot/session/v1.js#L21)
