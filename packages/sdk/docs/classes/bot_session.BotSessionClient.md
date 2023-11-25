[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [bot/session](../modules/bot_session.md) / BotSessionClient

# Class: BotSessionClient

[bot/session](../modules/bot_session.md).BotSessionClient

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`BotSessionClient`**

## Table of contents

### Constructors

- [constructor](bot_session.BotSessionClient.md#constructor)

### Methods

- [clientFetch](bot_session.BotSessionClient.md#clientfetch)
- [create](bot_session.BotSessionClient.md#create)

## Constructors

### constructor

• **new BotSessionClient**(`options`): [`BotSessionClient`](bot_session.BotSessionClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`BotSessionClient`](bot_session.BotSessionClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[bot/session/index.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/index.js#L8)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L211)

___

### create

▸ **create**(`botId`, `request`): `Promise`\<[`BotSessionCreateResponse`](../modules/bot_session_v1.md#botsessioncreateresponse)\>

Creates a new session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | [`BotSessionCreateRequest`](../modules/bot_session_v1.md#botsessioncreaterequest) |

#### Returns

`Promise`\<[`BotSessionCreateResponse`](../modules/bot_session_v1.md#botsessioncreateresponse)\>

#### Defined in

[bot/session/index.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/session/index.js#L19)
