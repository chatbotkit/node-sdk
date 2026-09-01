[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [user](../README.md) / UserClient

# Class: UserClient

Defined in: [user/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/user/index.js#L22)

User client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new UserClient**(`options`): `UserClient`

Defined in: [user/index.js:26](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/user/index.js#L26)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`UserClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### context

> **context**: [`UserContextClient`](../context/classes/UserContextClient.md)

Defined in: [user/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/user/index.js#L32)

***

### session

> **session**: [`UserSessionClient`](../session/classes/UserSessionClient.md)

Defined in: [user/index.js:37](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/user/index.js#L37)

***

### token

> **token**: [`UserTokenClient`](../token/classes/UserTokenClient.md)

Defined in: [user/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/user/index.js#L42)

## Methods

### clientProxy()

> **clientProxy**(`path`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Defined in: [client.js:646](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L646)

Proxies a request and resolves the upstream `Response`. Successful and
upstream-error responses pass through untouched - streaming, binary and
large bodies are preserved (the body is never read on the success path).
The one exception is a CBK `authorization_required` signal, which is thrown
as an [AuthorizationRequiredError](../../client/classes/AuthorizationRequiredError.md) carrying the `url` the user must
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

[`FetchFunction`](../../client/type-aliases/FetchFunction.md)

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

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`clientProxy`](../../client/classes/ChatBotKitClient.md#clientproxy)

***

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [user/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/user/index.js#L71)

Creates a new user.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`userId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [user/index.js:92](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/user/index.js#L92)

Deletes the user.

#### Parameters

##### userId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `UserClient`

Defined in: [client.js:442](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L442)

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

`UserClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`userId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [user/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/user/index.js#L61)

Fetches a user.

#### Parameters

##### userId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [user/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/user/index.js#L51)

Retrieves a list of all users.

#### Parameters

##### request?

[`UserListRequest`](../v1/type-aliases/UserListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`userId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [user/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/user/index.js#L82)

Updates the user.

#### Parameters

##### userId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
