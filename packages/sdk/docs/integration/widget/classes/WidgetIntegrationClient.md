[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/widget](../README.md) / WidgetIntegrationClient

# Class: WidgetIntegrationClient

Defined in: [integration/widget/index.js:17](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/widget/index.js#L17)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new WidgetIntegrationClient**(`options`): `WidgetIntegrationClient`

Defined in: [integration/widget/index.js:21](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/widget/index.js#L21)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`WidgetIntegrationClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/widget/index.js:51](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/widget/index.js#L51)

Creates a new widget integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`widgetId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/widget/index.js:72](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/widget/index.js#L72)

Deletes a widget integration.

#### Parameters

##### widgetId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `WidgetIntegrationClient`

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

`WidgetIntegrationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`widgetId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [integration/widget/index.js:41](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/widget/index.js#L41)

Fetches a widget integration.

#### Parameters

##### widgetId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/widget/index.js:31](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/widget/index.js#L31)

Retrieves a list of all widget integrations.

#### Parameters

##### request?

[`WidgetIntegrationListRequest`](../v1/type-aliases/WidgetIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### setup()

> **setup**(`widgetId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/widget/index.js:82](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/widget/index.js#L82)

Sets up a widget integration.

#### Parameters

##### widgetId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`widgetId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/widget/index.js:62](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/integration/widget/index.js#L62)

Updates a widget integration.

#### Parameters

##### widgetId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
