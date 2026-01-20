[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [portal](../README.md) / PortalClient

# Class: PortalClient

Defined in: [portal/index.js:19](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/portal/index.js#L19)

Portal client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PortalClient**(`options`): `PortalClient`

Defined in: [portal/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/portal/index.js#L23)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PortalClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [portal/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/portal/index.js#L53)

Creates a new portal.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`portalId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [portal/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/portal/index.js#L74)

Deletes the portal.

#### Parameters

##### portalId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `PortalClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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

`PortalClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`portalId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [portal/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/portal/index.js#L43)

Fetches a portal.

#### Parameters

##### portalId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [portal/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/portal/index.js#L33)

Retrieves a list of all portals.

#### Parameters

##### request?

[`PortalListRequest`](../v1/type-aliases/PortalListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`portalId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [portal/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/portal/index.js#L64)

Updates a portal.

#### Parameters

##### portalId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
