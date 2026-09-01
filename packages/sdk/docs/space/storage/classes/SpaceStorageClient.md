[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [space/storage](../README.md) / SpaceStorageClient

# Class: SpaceStorageClient

Defined in: [space/storage/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/storage/index.js#L20)

Space storage client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SpaceStorageClient**(`options`): `SpaceStorageClient`

Defined in: [space/storage/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/storage/index.js#L24)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SpaceStorageClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### clientProxy()

> **clientProxy**(`path`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Defined in: [client.js:646](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L646)

Proxies a request and resolves the upstream `Response`. Successful and
upstream-error responses pass through untouched - streaming, binary and
large bodies are preserved (the body is never read on the success path).
The one exception is a CBK `authorization_required` signal, which is thrown
as an [AuthorizationRequiredError](../../../client/classes/AuthorizationRequiredError.md) carrying the `url` the user must
visit to authenticate.

#### Parameters

##### path

`string`

##### options?

###### buffer?

[`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

###### endpoint?

`string`

###### external?

`boolean`

###### fetchFn?

[`FetchFunction`](../../../client/type-aliases/FetchFunction.md)

###### file?

\{ `data`: `string` \| [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer); `name?`: `string`; `type?`: `string`; \}

###### file.data

`string` \| [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

###### file.name?

`string`

###### file.type?

`string`

###### headers?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### method?

`string`

###### query?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### record?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### retries?

`number`

###### retryDelay?

`number`

###### retryTimeout?

`boolean`

###### timeout?

`number`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`clientProxy`](../../../client/classes/ChatBotKitClient.md#clientproxy)

***

### copy()

> **copy**(`spaceId`, `path`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/storage/index.js:84](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/storage/index.js#L84)

Copies a file in space storage.

#### Parameters

##### spaceId

`string`

##### path

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`spaceId`, `path`, `request?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/storage/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/storage/index.js#L72)

Deletes a file or directory from space storage.

#### Parameters

##### spaceId

`string`

##### path

`string`

##### request?

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### download()

> **download**(`spaceId`, `path`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [space/storage/index.js:48](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/storage/index.js#L48)

Gets a presigned download URL for a file.

#### Parameters

##### spaceId

`string`

##### path

`string`

##### request?

`undefined`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### extend()

> **extend**(`extensionOptions`): `SpaceStorageClient`

Defined in: [client.js:442](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L442)

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

`SpaceStorageClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### list()

> **list**(`spaceId`, `path?`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [space/storage/index.js:36](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/storage/index.js#L36)

Lists files and directories in space storage.

#### Parameters

##### spaceId

`string`

##### path?

`string`

##### request?

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### move()

> **move**(`spaceId`, `path`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/storage/index.js:96](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/storage/index.js#L96)

Moves (renames) a file in space storage.

#### Parameters

##### spaceId

`string`

##### path

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### upload()

> **upload**(`spaceId`, `path`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/storage/index.js:60](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/storage/index.js#L60)

Uploads a file to space storage.

#### Parameters

##### spaceId

`string`

##### path

`string`

##### request

\{ \} | \{ \}

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
