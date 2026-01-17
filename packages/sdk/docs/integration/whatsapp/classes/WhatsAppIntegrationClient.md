[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/whatsapp](../README.md) / WhatsAppIntegrationClient

# Class: WhatsAppIntegrationClient

Defined in: [integration/whatsapp/index.js:17](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/whatsapp/index.js#L17)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new WhatsAppIntegrationClient**(`options`): `WhatsAppIntegrationClient`

Defined in: [integration/whatsapp/index.js:21](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/whatsapp/index.js#L21)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`WhatsAppIntegrationClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/whatsapp/index.js:51](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/whatsapp/index.js#L51)

Creates a new whatsapp integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`whatsappId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/whatsapp/index.js:72](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/whatsapp/index.js#L72)

Deletes a whatsapp integration.

#### Parameters

##### whatsappId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `WhatsAppIntegrationClient`

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

`WhatsAppIntegrationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`whatsappId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [integration/whatsapp/index.js:41](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/whatsapp/index.js#L41)

Fetches a whatsapp integration.

#### Parameters

##### whatsappId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/whatsapp/index.js:31](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/whatsapp/index.js#L31)

Retrieves a list of all whatsapp integrations.

#### Parameters

##### request?

[`WhatsAppIntegrationListRequest`](../v1/type-aliases/WhatsAppIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### setup()

> **setup**(`whatsappId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/whatsapp/index.js:82](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/whatsapp/index.js#L82)

Setups a whatsapp integration.

#### Parameters

##### whatsappId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`whatsappId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/whatsapp/index.js:62](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/whatsapp/index.js#L62)

Updates a whatsapp integration.

#### Parameters

##### whatsappId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
