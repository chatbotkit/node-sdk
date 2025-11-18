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

- [create](bot.BotClient.md#create)
- [delete](bot.BotClient.md#delete)
- [downvote](bot.BotClient.md#downvote)
- [extend](bot.BotClient.md#extend)
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

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`BotCreateRequest`](../modules/bot_v1.md#botcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L61)

___

### delete

▸ **delete**(`botId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L82)

___

### downvote

▸ **downvote**(`botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/index.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L100)

___

### extend

▸ **extend**(`extensionOptions`): [`BotClient`](bot.BotClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`BotClient`](bot.BotClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`botId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[bot/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L51)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all bots.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`BotListRequest`](../modules/bot_v1.md#botlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[bot/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L41)

___

### update

▸ **update**(`botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a bot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | [`BotUpdateRequest`](../modules/bot_v1.md#botupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L72)

___

### upvote

▸ **upvote**(`botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/index.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L91)
