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

[bot/index.js:9](https://github.com/chatbotkit/node-sdk/blob/a3e56ee/packages/sdk/src/bot/index.js#L9)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:135](https://github.com/chatbotkit/node-sdk/blob/a3e56ee/packages/sdk/src/client.js#L135)

___

### session

• **session**: [`SessionClient`](bot_session.SessionClient.md)

#### Defined in

[bot/index.js:12](https://github.com/chatbotkit/node-sdk/blob/a3e56ee/packages/sdk/src/bot/index.js#L12)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:137](https://github.com/chatbotkit/node-sdk/blob/a3e56ee/packages/sdk/src/client.js#L137)

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

[client.js:154](https://github.com/chatbotkit/node-sdk/blob/a3e56ee/packages/sdk/src/client.js#L154)

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

[bot/index.js:36](https://github.com/chatbotkit/node-sdk/blob/a3e56ee/packages/sdk/src/bot/index.js#L36)

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

[bot/index.js:55](https://github.com/chatbotkit/node-sdk/blob/a3e56ee/packages/sdk/src/bot/index.js#L55)

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

[bot/index.js:27](https://github.com/chatbotkit/node-sdk/blob/a3e56ee/packages/sdk/src/bot/index.js#L27)

___

### list

▸ **list**(): `ResponsePromise`<[`BotInstance`](../modules/bot_v1.md#botinstance), [`BotListStreamItemType`](../modules/bot_v1.md#botliststreamitemtype)\>

Retrieves a list of all existing bots associated with this client.

#### Returns

`ResponsePromise`<[`BotInstance`](../modules/bot_v1.md#botinstance), [`BotListStreamItemType`](../modules/bot_v1.md#botliststreamitemtype)\>

#### Defined in

[bot/index.js:18](https://github.com/chatbotkit/node-sdk/blob/a3e56ee/packages/sdk/src/bot/index.js#L18)

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

[bot/index.js:46](https://github.com/chatbotkit/node-sdk/blob/a3e56ee/packages/sdk/src/bot/index.js#L46)
