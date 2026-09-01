[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [platform](../README.md) / PlatformClient

# Class: PlatformClient

Defined in: [platform/index.js:12](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L12)

Platform client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PlatformClient**(`options`): `PlatformClient`

Defined in: [platform/index.js:16](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L16)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PlatformClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### ability

> **ability**: [`PlatformAbilityClient`](../ability/classes/PlatformAbilityClient.md)

Defined in: [platform/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L27)

***

### action

> **action**: [`PlatformActionClient`](../action/classes/PlatformActionClient.md)

Defined in: [platform/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L32)

***

### example

> **example**: [`PlatformExampleClient`](../example/classes/PlatformExampleClient.md)

Defined in: [platform/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L42)

***

### model

> **model**: [`PlatformModelClient`](../model/classes/PlatformModelClient.md)

Defined in: [platform/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L22)

***

### report

> **report**: [`PlatformReportClient`](../report/classes/PlatformReportClient.md)

Defined in: [platform/index.js:47](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L47)

***

### secret

> **secret**: [`PlatformSecretClient`](../secret/classes/PlatformSecretClient.md)

Defined in: [platform/index.js:37](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/index.js#L37)

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

### extend()

> **extend**(`extensionOptions`): `PlatformClient`

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

`PlatformClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)
