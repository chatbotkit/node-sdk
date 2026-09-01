[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [integration/mcpserver](../README.md) / McpServerIntegrationClient

# Class: McpServerIntegrationClient

Defined in: [integration/mcpserver/index.js:16](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/mcpserver/index.js#L16)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new McpServerIntegrationClient**(`options`): `McpServerIntegrationClient`

Defined in: [integration/mcpserver/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/mcpserver/index.js#L20)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`McpServerIntegrationClient`

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

Defined in: [integration/mcpserver/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/mcpserver/index.js#L50)

Creates a new mcpserver integration.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`mcpserverId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/mcpserver/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/mcpserver/index.js#L71)

Deletes a mcpserver integration.

#### Parameters

##### mcpserverId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `McpServerIntegrationClient`

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

`McpServerIntegrationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`mcpserverId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [integration/mcpserver/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/mcpserver/index.js#L40)

Fetches a mcpserver integration.

#### Parameters

##### mcpserverId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [integration/mcpserver/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/mcpserver/index.js#L30)

Retrieves a list of all mcpserver integrations.

#### Parameters

##### request?

[`McpServerIntegrationListRequest`](../v1/type-aliases/McpServerIntegrationListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`mcpserverId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [integration/mcpserver/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/integration/mcpserver/index.js#L61)

Updates a mcpserver integration.

#### Parameters

##### mcpserverId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
