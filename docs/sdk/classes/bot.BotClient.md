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

[bot/index.js:8](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/bot/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:130](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/client.js#L130)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:132](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/client.js#L132)

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

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:149](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/client.js#L149)

___

### create

▸ **create**(`request`): `Promise`<[`BotCreateResponse`](../modules/bot_v1.md#botcreateresponse)\>

Creates a new bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`BotCreateRequest`](../modules/bot_v1.md#botcreaterequest) |

#### Returns

`Promise`<[`BotCreateResponse`](../modules/bot_v1.md#botcreateresponse)\>

#### Defined in

[bot/index.js:33](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/bot/index.js#L33)

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

[bot/index.js:52](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/bot/index.js#L52)

___

### fetch

▸ **fetch**(`botId`): `Promise`<[`BotFetchResponse`](../modules/bot_v1.md#botfetchresponse)\>

Fetches a bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

`Promise`<[`BotFetchResponse`](../modules/bot_v1.md#botfetchresponse)\>

#### Defined in

[bot/index.js:24](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/bot/index.js#L24)

___

### list

▸ **list**(): `ResponsePromise`<[`BotListResponse`](../modules/bot_v1.md#botlistresponse), [`BotListStreamItemType`](../modules/bot_v1.md#botliststreamitemtype)\>

Retrieves a list of all existing bots associated with this client.

#### Returns

`ResponsePromise`<[`BotListResponse`](../modules/bot_v1.md#botlistresponse), [`BotListStreamItemType`](../modules/bot_v1.md#botliststreamitemtype)\>

#### Defined in

[bot/index.js:15](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/bot/index.js#L15)

___

### update

▸ **update**(`botId`, `request`): `Promise`<[`BotUpdateResponse`](../modules/bot_v1.md#botupdateresponse)\>

Updates a new bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | [`BotUpdateRequest`](../modules/bot_v1.md#botupdaterequest) |

#### Returns

`Promise`<[`BotUpdateResponse`](../modules/bot_v1.md#botupdateresponse)\>

#### Defined in

[bot/index.js:43](https://github.com/chatbotkit/node-sdk/blob/7aee3d9/packages/sdk/src/bot/index.js#L43)
