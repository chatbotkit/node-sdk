[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/messenger](../README.md) / MessengerIntegrationClient

# Class: MessengerIntegrationClient

Defined in: [integration/messenger/index.js:17](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/messenger/index.js#L17)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new MessengerIntegrationClient**(`options`): `MessengerIntegrationClient`

Defined in: [integration/messenger/index.js:21](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/messenger/index.js#L21)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`MessengerIntegrationClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/messenger/index.js:51](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/messenger/index.js#L51)

Creates a new messenger integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`messengerId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/messenger/index.js:72](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/messenger/index.js#L72)

Deletes a messenger integration.

#### Parameters

##### messengerId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `MessengerIntegrationClient`

Defined in: [client.js:382](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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

`MessengerIntegrationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`messengerId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [integration/messenger/index.js:41](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/messenger/index.js#L41)

Fetches a messenger integration.

#### Parameters

##### messengerId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/messenger/index.js:31](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/messenger/index.js#L31)

Retrieves a list of all messenger integrations.

#### Parameters

##### request?

[`MessengerIntegrationListRequest`](../v1/type-aliases/MessengerIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### setup()

> **setup**(`messengerId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/messenger/index.js:82](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/messenger/index.js#L82)

Setups a messenger integration.

#### Parameters

##### messengerId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`messengerId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/messenger/index.js:62](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/messenger/index.js#L62)

Updates a messenger integration.

#### Parameters

##### messengerId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
