[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [blueprint](../README.md) / BlueprintClient

# Class: BlueprintClient

Defined in: [blueprint/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L21)

Blueprint client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new BlueprintClient**(`options`): `BlueprintClient`

Defined in: [blueprint/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L25)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`BlueprintClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### clone()

> **clone**(`blueprintId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [blueprint/index.js:86](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L86)

Clones a blueprint.

#### Parameters

##### blueprintId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [blueprint/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L55)

Creates a new blueprint.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`blueprintId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [blueprint/index.js:76](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L76)

Deletes the blueprint.

#### Parameters

##### blueprintId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `BlueprintClient`

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

`BlueprintClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`blueprintId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [blueprint/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L45)

Fetches a blueprint.

#### Parameters

##### blueprintId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [blueprint/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L35)

Retrieves a list of all blueprints.

#### Parameters

##### request?

[`BlueprintListRequest`](../v1/type-aliases/BlueprintListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### listResources()

> **listResources**(`blueprintId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [blueprint/index.js:96](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L96)

Lists all resources for a blueprint.

#### Parameters

##### blueprintId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`blueprintId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [blueprint/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L66)

Updates a blueprint.

#### Parameters

##### blueprintId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
