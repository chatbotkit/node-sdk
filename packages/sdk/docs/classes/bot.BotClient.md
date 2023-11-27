[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [bot](../modules/bot.md) / BotClient

# Class: BotClient

[bot](../modules/bot.md).BotClient

Bot client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`BotClient`**

## Table of contents

### Constructors

- [constructor](bot.BotClient.md#constructor)

### Properties

- [session](bot.BotClient.md#session)

### Methods

- [clientFetch](bot.BotClient.md#clientfetch)
- [create](bot.BotClient.md#create)
- [delete](bot.BotClient.md#delete)
- [fetch](bot.BotClient.md#fetch)
- [list](bot.BotClient.md#list)
- [update](bot.BotClient.md#update)

## Constructors

### constructor

• **new BotClient**(`options`): [`BotClient`](bot.BotClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`BotClient`](bot.BotClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[bot/index.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L18)

## Properties

### session

• **session**: [`BotSessionClient`](bot_session.BotSessionClient.md)

#### Defined in

[bot/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L24)

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

▸ **create**(`request`): `Promise`\<[`BotCreateResponse`](../modules/bot_v1.md#botcreateresponse)\>

Creates a new bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`BotOptions`](../modules/bot_v1.md#botoptions) |

#### Returns

`Promise`\<[`BotCreateResponse`](../modules/bot_v1.md#botcreateresponse)\>

#### Defined in

[bot/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L53)

___

### delete

▸ **delete**(`botId`): `Promise`\<[`BotDeleteResponse`](../modules/bot_v1.md#botdeleteresponse)\>

Deletes the bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

`Promise`\<[`BotDeleteResponse`](../modules/bot_v1.md#botdeleteresponse)\>

#### Defined in

[bot/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L74)

___

### fetch

▸ **fetch**(`botId`): `Promise`\<[`BotFetchResponse`](../modules/bot_v1.md#botfetchresponse)\>

Fetches a bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

`Promise`\<[`BotFetchResponse`](../modules/bot_v1.md#botfetchresponse)\>

#### Defined in

[bot/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L43)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`BotListResponse`](../modules/bot_v1.md#botlistresponse), [`BotListStreamItemType`](../modules/bot_v1.md#botliststreamitemtype)\>

Retrieves a list of all bots.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`BotListRequest`](../modules/bot_v1.md#botlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`BotListResponse`](../modules/bot_v1.md#botlistresponse), [`BotListStreamItemType`](../modules/bot_v1.md#botliststreamitemtype)\>

#### Defined in

[bot/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L33)

___

### update

▸ **update**(`botId`, `request`): `Promise`\<[`BotUpdateResponse`](../modules/bot_v1.md#botupdateresponse)\>

Updates a bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | [`BotOptions`](../modules/bot_v1.md#botoptions) |

#### Returns

`Promise`\<[`BotUpdateResponse`](../modules/bot_v1.md#botupdateresponse)\>

#### Defined in

[bot/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L64)
