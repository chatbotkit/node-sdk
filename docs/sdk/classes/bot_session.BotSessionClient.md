[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [bot/session](../modules/bot_session.md) / BotSessionClient

# Class: BotSessionClient

[bot/session](../modules/bot_session.md).BotSessionClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`BotSessionClient`**

## Table of contents

### Constructors

- [constructor](bot_session.BotSessionClient.md#constructor)

### Properties

- [secret](bot_session.BotSessionClient.md#secret)
- [url](bot_session.BotSessionClient.md#url)

### Methods

- [clientFetch](bot_session.BotSessionClient.md#clientfetch)
- [create](bot_session.BotSessionClient.md#create)

## Constructors

### constructor

• **new BotSessionClient**(`options`): [`BotSessionClient`](bot_session.BotSessionClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`BotSessionClient`](bot_session.BotSessionClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[bot/session/index.js:8](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/bot/session/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L189)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): `ResponsePromise`\<`T`, `U`\>

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

`ResponsePromise`\<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L206)

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

[bot/session/index.js:19](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/bot/session/index.js#L19)
