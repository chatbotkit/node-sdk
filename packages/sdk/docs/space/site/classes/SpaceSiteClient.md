[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [space/site](../README.md) / SpaceSiteClient

# Class: SpaceSiteClient

Defined in: [space/site/index.js:19](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/site/index.js#L19)

Space site client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SpaceSiteClient**(`options`): `SpaceSiteClient`

Defined in: [space/site/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/site/index.js#L23)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SpaceSiteClient`

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

> **create**(`spaceId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/site/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/site/index.js#L56)

Creates a new space site.

#### Parameters

##### spaceId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`spaceId`, `siteId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/site/index.js:79](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/site/index.js#L79)

Deletes a space site.

#### Parameters

##### spaceId

`string`

##### siteId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `SpaceSiteClient`

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

`SpaceSiteClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`spaceId`, `siteId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [space/site/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/site/index.js#L45)

Fetches a space site.

#### Parameters

##### spaceId

`string`

##### siteId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`spaceId`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [space/site/index.js:34](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/site/index.js#L34)

Retrieves a list of all sites in a space.

#### Parameters

##### spaceId

`string`

##### request?

[`SpaceSiteListRequest`](../v1/type-aliases/SpaceSiteListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`spaceId`, `siteId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [space/site/index.js:68](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/space/site/index.js#L68)

Updates a space site.

#### Parameters

##### spaceId

`string`

##### siteId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
