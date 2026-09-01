[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [skillset](../README.md) / SkillsetClient

# Class: SkillsetClient

Defined in: [skillset/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/skillset/index.js#L20)

Skillset client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SkillsetClient**(`options`): `SkillsetClient`

Defined in: [skillset/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/skillset/index.js#L24)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SkillsetClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### ability

> **ability**: [`SkillsetAbilityClient`](../ability/classes/SkillsetAbilityClient.md)

Defined in: [skillset/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/skillset/index.js#L30)

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

Defined in: [skillset/index.js:59](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/skillset/index.js#L59)

Creates a new skillset.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`skillsetId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [skillset/index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/skillset/index.js#L80)

Deletes the skillset.

#### Parameters

##### skillsetId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `SkillsetClient`

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

`SkillsetClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`skillsetId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [skillset/index.js:49](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/skillset/index.js#L49)

Fetches a skillset.

#### Parameters

##### skillsetId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [skillset/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/skillset/index.js#L39)

Retrieves a list of all skillsets.

#### Parameters

##### request?

[`SkillsetListRequest`](../v1/type-aliases/SkillsetListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`skillsetId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [skillset/index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/skillset/index.js#L70)

Updates a skillset.

#### Parameters

##### skillsetId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
