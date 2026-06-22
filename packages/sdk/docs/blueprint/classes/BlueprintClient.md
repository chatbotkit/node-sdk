[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [blueprint](../README.md) / BlueprintClient

# Class: BlueprintClient

Defined in: [blueprint/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L25)

Blueprint client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new BlueprintClient**(`options`): `BlueprintClient`

Defined in: [blueprint/index.js:29](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L29)

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

Defined in: [blueprint/index.js:91](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L91)

Clones a blueprint.

#### Parameters

##### blueprintId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [blueprint/index.js:59](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L59)

Creates a new blueprint.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### createBulletin()

> **createBulletin**(`blueprintId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [blueprint/index.js:145](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L145)

Posts a bulletin to a blueprint's shared board.

#### Parameters

##### blueprintId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`blueprintId`, `request?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [blueprint/index.js:81](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L81)

Deletes the blueprint.

#### Parameters

##### blueprintId

`string`

##### request?

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### exportResources()

> **exportResources**(`blueprintId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BlueprintExportResourcesResponse`](../v1/type-aliases/BlueprintExportResourcesResponse.md)\>

Defined in: [blueprint/index.js:123](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L123)

Exports a blueprint's resources as a transportable document.

#### Parameters

##### blueprintId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BlueprintExportResourcesResponse`](../v1/type-aliases/BlueprintExportResourcesResponse.md)\>

***

### extend()

> **extend**(`extensionOptions`): `BlueprintClient`

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

`BlueprintClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`blueprintId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [blueprint/index.js:49](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L49)

Fetches a blueprint.

#### Parameters

##### blueprintId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### importResources()

> **importResources**(`blueprintId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BlueprintImportResourcesResponse`](../v1/type-aliases/BlueprintImportResourcesResponse.md)\>

Defined in: [blueprint/index.js:113](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L113)

Imports (reconciles) resources into a blueprint. The blueprint may be
addressed by id or `@alias`; pass `ensure: true` to create it on miss.

#### Parameters

##### blueprintId

`string`

##### request

[`BlueprintImportResourcesRequest`](../v1/type-aliases/BlueprintImportResourcesRequest.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BlueprintImportResourcesResponse`](../v1/type-aliases/BlueprintImportResourcesResponse.md)\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [blueprint/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L39)

Retrieves a list of all blueprints.

#### Parameters

##### request?

[`BlueprintListRequest`](../v1/type-aliases/BlueprintListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### listBulletins()

> **listBulletins**(`blueprintId`, `request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [blueprint/index.js:134](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L134)

Lists the bulletins on a blueprint's shared board.

#### Parameters

##### blueprintId

`string`

##### request?

[`BlueprintBulletinListRequest`](../v1/type-aliases/BlueprintBulletinListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### listResources()

> **listResources**(`blueprintId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [blueprint/index.js:101](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L101)

Lists all resources for a blueprint.

#### Parameters

##### blueprintId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`blueprintId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [blueprint/index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/blueprint/index.js#L70)

Updates a blueprint.

#### Parameters

##### blueprintId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
