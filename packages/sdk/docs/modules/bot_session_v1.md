[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / bot/session/v1

# Module: bot/session/v1

## Table of contents

### Type Aliases

- [BotSessionCreateRequest](bot_session_v1.md#botsessioncreaterequest)
- [BotSessionCreateRequestBody](bot_session_v1.md#botsessioncreaterequestbody)
- [BotSessionCreateResponse](bot_session_v1.md#botsessioncreateresponse)
- [BotSessionCreateResponseBody](bot_session_v1.md#botsessioncreateresponsebody)
- [ChatBotKitClient](bot_session_v1.md#chatbotkitclient)

### Functions

- [createBotSession](bot_session_v1.md#createbotsession)

## Type Aliases

### BotSessionCreateRequest

Ƭ **BotSessionCreateRequest**\<\>: [`BotSessionCreateRequestBody`](bot_session_v1.md#botsessioncreaterequestbody)

#### Defined in

[bot/session/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/v1.js#L8)

___

### BotSessionCreateRequestBody

Ƭ **BotSessionCreateRequestBody**\<\>: `operations`[``"createBotSession"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/session/v1.js:6](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/v1.js#L6)

___

### BotSessionCreateResponse

Ƭ **BotSessionCreateResponse**\<\>: [`BotSessionCreateResponseBody`](bot_session_v1.md#botsessioncreateresponsebody)

#### Defined in

[bot/session/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/v1.js#L12)

___

### BotSessionCreateResponseBody

Ƭ **BotSessionCreateResponseBody**\<\>: `operations`[``"createBotSession"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/session/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/v1.js#L10)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[bot/session/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/v1.js#L2)

## Functions

### createBotSession

▸ **createBotSession**(`client`, `botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/session/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/v1.js#L19)
