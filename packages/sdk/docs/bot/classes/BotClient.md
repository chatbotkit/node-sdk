[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [bot](../README.md) / BotClient

# Class: BotClient

Defined in: [bot/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L22)

Bot client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new BotClient**(`options`): `BotClient`

Defined in: [bot/index.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L26)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`BotClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### session

> **session**: [`BotSessionClient`](../session/classes/BotSessionClient.md)

Defined in: [bot/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L32)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [bot/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L61)

Creates a new bot.

#### Parameters

##### request

[`BotCreateRequest`](../v1/type-aliases/BotCreateRequest.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`botId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [bot/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L82)

Deletes the bot.

#### Parameters

##### botId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### downvote()

> **downvote**(`botId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [bot/index.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L100)

#### Parameters

##### botId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `BotClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`BotClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`botId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [bot/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L51)

Fetches a bot.

#### Parameters

##### botId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [bot/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L41)

Retrieves a list of all bots.

#### Parameters

##### request?

[`BotListRequest`](../v1/type-aliases/BotListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`botId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [bot/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L72)

Updates a bot.

#### Parameters

##### botId

`string`

##### request

[`BotUpdateRequest`](../v1/type-aliases/BotUpdateRequest.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### upvote()

> **upvote**(`botId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [bot/index.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/index.js#L91)

#### Parameters

##### botId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
