[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [secret](../README.md) / SecretClient

# Class: SecretClient

Defined in: [secret/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L24)

Secret client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SecretClient**(`options`): `SecretClient`

Defined in: [secret/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L28)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SecretClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### authenticate()

> **authenticate**(`secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:109](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L109)

Authenticates the secret.

#### Parameters

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

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

Defined in: [secret/index.js:58](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L58)

Creates a new secret.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:79](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L79)

Deletes the secret.

#### Parameters

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `SecretClient`

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

`SecretClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`secretId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [secret/index.js:48](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L48)

Fetches a secret.

#### Parameters

##### secretId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [secret/index.js:38](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L38)

Retrieves a list of all secrets.

#### Parameters

##### request?

[`SecretListRequest`](../v1/type-aliases/SecretListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### mint()

> **mint**(`secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:131](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L131)

Mints a usable token from the secret (owner-only; `oauth`/`jwt` only).

#### Parameters

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### proxy()

> **proxy**(`secretId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Defined in: [secret/index.js:121](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L121)

Proxies a request through the secret, injecting it server-side. Returns the
raw upstream `Response` (a non-2xx status is returned, not thrown).

#### Parameters

##### secretId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### revoke()

> **revoke**(`secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:89](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L89)

Revokes a secret.

#### Parameters

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`secretId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:69](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L69)

Updates a secret.

#### Parameters

##### secretId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### verify()

> **verify**(`secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:99](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/index.js#L99)

Verifies the secret.

#### Parameters

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
