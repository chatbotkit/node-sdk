[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [bot](../modules/bot.md) / BotClient

# Class: BotClient

[bot](../modules/bot.md).BotClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`BotClient`**

## Table of contents

### Constructors

- [constructor](bot.BotClient.md#constructor)

### Properties

- [secret](bot.BotClient.md#secret)
- [session](bot.BotClient.md#session)
- [url](bot.BotClient.md#url)

### Methods

- [clientFetch](bot.BotClient.md#clientfetch)
- [create](bot.BotClient.md#create)
- [delete](bot.BotClient.md#delete)
- [fetch](bot.BotClient.md#fetch)
- [list](bot.BotClient.md#list)
- [update](bot.BotClient.md#update)

## Constructors

### constructor

• **new BotClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[bot/index.js:9](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/bot/index.js#L9)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:155](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/client.js#L155)

___

### session

• **session**: [`SessionClient`](bot_session.SessionClient.md)

#### Defined in

[bot/index.js:12](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/bot/index.js#L12)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:157](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/client.js#L157)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `U`\>(`path`, `options?`): `ResponsePromise`<`T`, `U`\>

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
| `options.data?` | `Record`<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:174](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/client.js#L174)

___

### create

▸ **create**(`request`): `Promise`<[`BotCreateResponse`](../modules/bot_v1.md#botcreateresponse)\>

Creates a new bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`BotOptions`](../modules/bot_v1.md#botoptions) |

#### Returns

`Promise`<[`BotCreateResponse`](../modules/bot_v1.md#botcreateresponse)\>

#### Defined in

[bot/index.js:39](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/bot/index.js#L39)

___

### delete

▸ **delete**(`botId`): `Promise`<[`BotDeleteResponse`](../modules/bot_v1.md#botdeleteresponse)\>

Deletes the bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

`Promise`<[`BotDeleteResponse`](../modules/bot_v1.md#botdeleteresponse)\>

#### Defined in

[bot/index.js:60](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/bot/index.js#L60)

___

### fetch

▸ **fetch**(`botId`): `Promise`<[`BotInstance`](../modules/bot_v1.md#botinstance)\>

Fetches a bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

`Promise`<[`BotInstance`](../modules/bot_v1.md#botinstance)\>

#### Defined in

[bot/index.js:29](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/bot/index.js#L29)

___

### list

▸ **list**(): `ResponsePromise`<[`BotListResponse`](../modules/bot_v1.md#botlistresponse), [`BotListStreamItemType`](../modules/bot_v1.md#botliststreamitemtype)\>

Retrieves a list of all existing bots associated with this client.

#### Returns

`ResponsePromise`<[`BotListResponse`](../modules/bot_v1.md#botlistresponse), [`BotListStreamItemType`](../modules/bot_v1.md#botliststreamitemtype)\>

#### Defined in

[bot/index.js:19](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/bot/index.js#L19)

___

### update

▸ **update**(`botId`, `request`): `Promise`<[`BotUpdateResponse`](../modules/bot_v1.md#botupdateresponse)\>

Updates a new bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | [`BotOptions`](../modules/bot_v1.md#botoptions) |

#### Returns

`Promise`<[`BotUpdateResponse`](../modules/bot_v1.md#botupdateresponse)\>

#### Defined in

[bot/index.js:50](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/bot/index.js#L50)
