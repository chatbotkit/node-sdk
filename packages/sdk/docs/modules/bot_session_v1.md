[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / bot/session/v1

# Module: bot/session/v1

## Table of contents

### Type Aliases

- [BotSessionCreateRequest](bot_session_v1.md#botsessioncreaterequest)
- [BotSessionCreateResponse](bot_session_v1.md#botsessioncreateresponse)
- [ChatBotKitClient](bot_session_v1.md#chatbotkitclient)

### Functions

- [createBotSession](bot_session_v1.md#createbotsession)

## Type Aliases

### BotSessionCreateRequest

Ƭ **BotSessionCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `durationInSeconds?` | `number` |

#### Defined in

[bot/session/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/v1.js#L8)

___

### BotSessionCreateResponse

Ƭ **BotSessionCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `expiresAt` | `number` |
| `token` | `string` |

#### Defined in

[bot/session/v1.js:14](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/v1.js#L14)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[bot/session/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/v1.js#L2)

## Functions

### createBotSession

▸ **createBotSession**(`client`, `botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotSessionCreateResponse`](bot_session_v1.md#botsessioncreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | [`BotSessionCreateRequest`](bot_session_v1.md#botsessioncreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotSessionCreateResponse`](bot_session_v1.md#botsessioncreateresponse)\>

#### Defined in

[bot/session/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/v1.js#L21)
