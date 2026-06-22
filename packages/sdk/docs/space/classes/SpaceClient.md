[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [space](../README.md) / SpaceClient

# Class: SpaceClient

Defined in: [space/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/index.js#L21)

Space client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SpaceClient**(`options`): `SpaceClient`

Defined in: [space/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/index.js#L25)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SpaceClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### site

> **site**: `SpaceSiteClient`

Defined in: [space/index.js:36](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/index.js#L36)

***

### storage

> **storage**: [`SpaceStorageClient`](../storage/classes/SpaceStorageClient.md)

Defined in: [space/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/index.js#L31)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/index.js:65](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/index.js#L65)

Creates a new space.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`spaceId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`SpaceDeleteResponse`](../v1/type-aliases/SpaceDeleteResponse.md)\>

Defined in: [space/index.js:86](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/index.js#L86)

Deletes the space.

#### Parameters

##### spaceId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`SpaceDeleteResponse`](../v1/type-aliases/SpaceDeleteResponse.md)\>

***

### extend()

> **extend**(`extensionOptions`): `SpaceClient`

Defined in: [client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L390)

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

Defined in: [space/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/index.js#L55)

Fetches a space.

#### Parameters

##### spaceId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [space/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/index.js#L45)

Retrieves a list of all spaces.

#### Parameters

##### request?

[`SpaceListRequest`](../v1/type-aliases/SpaceListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`spaceId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/index.js:76](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/index.js#L76)

Updates a space.

#### Parameters

##### spaceId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
