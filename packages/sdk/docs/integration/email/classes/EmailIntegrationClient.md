[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/email](../README.md) / EmailIntegrationClient

# Class: EmailIntegrationClient

Defined in: [integration/email/index.js:17](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/email/index.js#L17)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new EmailIntegrationClient**(`options`): `EmailIntegrationClient`

Defined in: [integration/email/index.js:21](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/email/index.js#L21)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`EmailIntegrationClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/email/index.js:51](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/email/index.js#L51)

Creates a new email integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`emailId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/email/index.js:72](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/email/index.js#L72)

Deletes a email integration.

#### Parameters

##### emailId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `EmailIntegrationClient`

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

`EmailIntegrationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`emailId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [integration/email/index.js:41](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/email/index.js#L41)

Fetches a email integration.

#### Parameters

##### emailId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/email/index.js:31](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/email/index.js#L31)

Retrieves a list of all email integrations.

#### Parameters

##### request?

[`EmailIntegrationListRequest`](../v1/type-aliases/EmailIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### setup()

> **setup**(`emailId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/email/index.js:82](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/email/index.js#L82)

Setups a email integration.

#### Parameters

##### emailId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`emailId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/email/index.js:62](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/email/index.js#L62)

Updates a email integration.

#### Parameters

##### emailId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
