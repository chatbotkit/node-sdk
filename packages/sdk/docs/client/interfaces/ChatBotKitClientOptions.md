[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [client](../README.md) / ChatBotKitClientOptions

# Interface: ChatBotKitClientOptions

Defined in: [client.js:337](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L337)

## Properties

### baseUrl?

> `optional` **baseUrl**: `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

Defined in: [client.js:339](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L339)

An optional base URL to use for the API

***

### endpoints?

> `optional` **endpoints**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [client.js:342](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L342)

An optional map of endpoints to override

***

### fetchFn?

> `optional` **fetchFn**: [`FetchFunction`](../type-aliases/FetchFunction.md)

Defined in: [client.js:351](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L351)

An optional fetch implementation function to use instead

***

### headers?

> `optional` **headers**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [client.js:346](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L346)

An optional map of headers to add to the request

***

### host?

> `optional` **host**: `string`

Defined in: [client.js:340](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L340)

An optional hostname to use for the API

***

### protocol?

> `optional` **protocol**: `"http:"` \| `"https:"`

Defined in: [client.js:341](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L341)

An optional protocol to use for the API

***

### retries?

> `optional` **retries**: `number`

Defined in: [client.js:348](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L348)

An optional number of retries for the request

***

### retryDelay?

> `optional` **retryDelay**: `number`

Defined in: [client.js:349](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L349)

An optional delay in milliseconds between retries

***

### retryTimeout?

> `optional` **retryTimeout**: `boolean`

Defined in: [client.js:350](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L350)

An optional flag to retry on timeout errors

***

### runAsChildUserEmail?

> `optional` **runAsChildUserEmail**: `string`

Defined in: [client.js:344](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L344)

An optional child user email to run as (experimental)

***

### runAsUserId?

> `optional` **runAsUserId**: `string`

Defined in: [client.js:343](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L343)

An optional user ID to run as

***

### secret

> **secret**: `string`

Defined in: [client.js:338](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L338)

A token to authenticate with the API

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [client.js:347](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L347)

An optional timeout in milliseconds for the request

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [client.js:345](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L345)

An optional timezone to use for the API
