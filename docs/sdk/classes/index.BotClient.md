[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / BotClient

# Class: BotClient

[index](../modules/index.md).BotClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`BotClient`**

## Table of contents

### Constructors

- [constructor](index.BotClient.md#constructor)

### Properties

- [secret](index.BotClient.md#secret)
- [url](index.BotClient.md#url)

### Methods

- [clientFetch](index.BotClient.md#clientfetch)
- [create](index.BotClient.md#create)
- [delete](index.BotClient.md#delete)
- [fetch](index.BotClient.md#fetch)
- [list](index.BotClient.md#list)
- [update](index.BotClient.md#update)

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

[bot/index.js:8](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/bot/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:125](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/client.js#L125)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:127](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/client.js#L127)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `D`\>(`path`, `options?`): `ResponsePromise`<`T`, `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`ResponsePromise`<`T`, `D`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:140](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/client.js#L140)

___

### create

▸ **create**(`request`): `Promise`<`BotCreateResponse`\>

Creates a new bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `BotCreateRequest` |

#### Returns

`Promise`<`BotCreateResponse`\>

#### Defined in

[bot/index.js:33](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/bot/index.js#L33)

___

### delete

▸ **delete**(`botId`): `Promise`<`BotDeleteResponse`\>

Deletes the bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

`Promise`<`BotDeleteResponse`\>

#### Defined in

[bot/index.js:52](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/bot/index.js#L52)

___

### fetch

▸ **fetch**(`botId`): `Promise`<`BotFetchResponse`\>

Fetches a bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

`Promise`<`BotFetchResponse`\>

#### Defined in

[bot/index.js:24](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/bot/index.js#L24)

___

### list

▸ **list**(): `Promise`<`BotListResponse`\>

Retrieves a list of all existing bots associated with this client.

#### Returns

`Promise`<`BotListResponse`\>

#### Defined in

[bot/index.js:15](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/bot/index.js#L15)

___

### update

▸ **update**(`botId`, `request`): `Promise`<`BotUpdateResponse`\>

Updates a new bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | `BotUpdateRequest` |

#### Returns

`Promise`<`BotUpdateResponse`\>

#### Defined in

[bot/index.js:43](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/bot/index.js#L43)
