[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [memory](../README.md) / MemoryClient

# Class: MemoryClient

Defined in: [memory/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L21)

Memory client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new MemoryClient**(`options`): `MemoryClient`

Defined in: [memory/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L25)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`MemoryClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [memory/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L55)

Creates a new memory.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`memoryId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [memory/index.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L76)

Deletes the memory.

#### Parameters

##### memoryId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### export()

> **export**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [memory/index.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L86)

Exports memories.

#### Parameters

##### request?

[`MemoryExportRequest`](../v1/type-aliases/MemoryExportRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `MemoryClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

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

`MemoryClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`memoryId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [memory/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L45)

Fetches a memory.

#### Parameters

##### memoryId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [memory/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L35)

Retrieves a list of all memories.

#### Parameters

##### request?

[`MemoryListRequest`](../v1/type-aliases/MemoryListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### search()

> **search**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [memory/index.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L96)

Searches for memories.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`memoryId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [memory/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/memory/index.js#L66)

Updates a memory.

#### Parameters

##### memoryId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
