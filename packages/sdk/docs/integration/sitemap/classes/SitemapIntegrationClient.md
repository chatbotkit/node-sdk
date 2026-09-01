[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/sitemap](../README.md) / SitemapIntegrationClient

# Class: SitemapIntegrationClient

Defined in: [integration/sitemap/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/sitemap/index.js#L17)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SitemapIntegrationClient**(`options`): `SitemapIntegrationClient`

Defined in: [integration/sitemap/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/sitemap/index.js#L21)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SitemapIntegrationClient`

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

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/sitemap/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/sitemap/index.js#L51)

Creates a new sitemap integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`sitemapId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/sitemap/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/sitemap/index.js#L72)

Deletes a sitemap integration.

#### Parameters

##### sitemapId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `SitemapIntegrationClient`

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

`SitemapIntegrationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`sitemapId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [integration/sitemap/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/sitemap/index.js#L41)

Fetches a sitemap integration.

#### Parameters

##### sitemapId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/sitemap/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/sitemap/index.js#L31)

Retrieves a list of all sitemap integrations.

#### Parameters

##### request?

[`SitemapIntegrationListRequest`](../v1/type-aliases/SitemapIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### sync()

> **sync**(`sitemapId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/sitemap/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/sitemap/index.js#L82)

Syncs a sitemap integration.

#### Parameters

##### sitemapId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`sitemapId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/sitemap/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/sitemap/index.js#L62)

Updates a sitemap integration.

#### Parameters

##### sitemapId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
