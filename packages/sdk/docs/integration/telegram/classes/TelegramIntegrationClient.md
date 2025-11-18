[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/telegram](../README.md) / TelegramIntegrationClient

# Class: TelegramIntegrationClient

Defined in: [integration/telegram/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L17)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new TelegramIntegrationClient**(`options`): `TelegramIntegrationClient`

Defined in: [integration/telegram/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L21)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`TelegramIntegrationClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/telegram/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L51)

Creates a new telegram integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`telegramId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/telegram/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L72)

Deletes a telegram integration.

#### Parameters

##### telegramId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `TelegramIntegrationClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`TelegramIntegrationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`telegramId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [integration/telegram/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L41)

Fetches a telegram integration.

#### Parameters

##### telegramId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/telegram/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L31)

Retrieves a list of all telegram integrations.

#### Parameters

##### request?

[`TelegramIntegrationListRequest`](../v1/type-aliases/TelegramIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### setup()

> **setup**(`telegramId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/telegram/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L82)

Setups a telegram integration.

#### Parameters

##### telegramId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`telegramId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/telegram/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L62)

Updates a telegram integration.

#### Parameters

##### telegramId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
