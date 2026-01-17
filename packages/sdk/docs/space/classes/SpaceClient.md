[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [space](../README.md) / SpaceClient

# Class: SpaceClient

Defined in: [space/index.js:19](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/space/index.js#L19)

Space client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SpaceClient**(`options`): `SpaceClient`

Defined in: [space/index.js:23](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/space/index.js#L23)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SpaceClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/index.js:53](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/space/index.js#L53)

Creates a new space.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`spaceId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`SpaceDeleteResponse`](../v1/type-aliases/SpaceDeleteResponse.md)\>

Defined in: [space/index.js:74](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/space/index.js#L74)

Deletes the space.

#### Parameters

##### spaceId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`SpaceDeleteResponse`](../v1/type-aliases/SpaceDeleteResponse.md)\>

***

### extend()

> **extend**(`extensionOptions`): `SpaceClient`

Defined in: [client.js:382](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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

`SpaceClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`spaceId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [space/index.js:43](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/space/index.js#L43)

Fetches a space.

#### Parameters

##### spaceId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [space/index.js:33](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/space/index.js#L33)

Retrieves a list of all spaces.

#### Parameters

##### request?

[`SpaceListRequest`](../v1/type-aliases/SpaceListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`spaceId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/index.js:64](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/space/index.js#L64)

Updates a space.

#### Parameters

##### spaceId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
