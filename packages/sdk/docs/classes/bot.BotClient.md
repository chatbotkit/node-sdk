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
- [downvote](bot.BotClient.md#downvote)
- [fetch](bot.BotClient.md#fetch)
- [list](bot.BotClient.md#list)
- [update](bot.BotClient.md#update)
- [upvote](bot.BotClient.md#upvote)

## Constructors

### constructor

• **new BotClient**(`options`): [`BotClient`](bot.BotClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`BotClient`](bot.BotClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[bot/index.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L26)

## Properties

### session

• **session**: [`BotSessionClient`](bot_session.BotSessionClient.md)

#### Defined in

[bot/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L32)

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
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:222](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L222)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotCreateResponse`](../modules/bot_v1.md#botcreateresponse)\>

Creates a new bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`BotCreateRequest`](../modules/bot_v1.md#botcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotCreateResponse`](../modules/bot_v1.md#botcreateresponse)\>

#### Defined in

[bot/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L61)

___

### delete

▸ **delete**(`botId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotDeleteResponse`](../modules/bot_v1.md#botdeleteresponse)\>

Deletes the bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotDeleteResponse`](../modules/bot_v1.md#botdeleteresponse)\>

#### Defined in

[bot/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L82)

___

### downvote

▸ **downvote**(`botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotDownvoteResponse`](../modules/bot_v1.md#botdownvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | [`BotDownvoteRequest`](../modules/bot_v1.md#botdownvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotDownvoteResponse`](../modules/bot_v1.md#botdownvoteresponse)\>

#### Defined in

[bot/index.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L100)

___

### fetch

▸ **fetch**(`botId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotFetchResponse`](../modules/bot_v1.md#botfetchresponse)\>

Fetches a bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotFetchResponse`](../modules/bot_v1.md#botfetchresponse)\>

#### Defined in

[bot/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L51)

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

[bot/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L41)

___

### update

▸ **update**(`botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotUpdateResponse`](../modules/bot_v1.md#botupdateresponse)\>

Updates a bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | [`BotUpdateRequest`](../modules/bot_v1.md#botupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotUpdateResponse`](../modules/bot_v1.md#botupdateresponse)\>

#### Defined in

[bot/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L72)

___

### upvote

▸ **upvote**(`botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotUpvoteResponse`](../modules/bot_v1.md#botupvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | [`BotUpvoteRequest`](../modules/bot_v1.md#botupvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotUpvoteResponse`](../modules/bot_v1.md#botupvoteresponse)\>

#### Defined in

[bot/index.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L91)
