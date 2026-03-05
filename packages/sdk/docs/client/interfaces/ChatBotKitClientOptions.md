[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [client](../README.md) / ChatBotKitClientOptions

# Interface: ChatBotKitClientOptions

Defined in: [client.js:285](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L285)

## Properties

### baseUrl?

> `optional` **baseUrl**: `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

Defined in: [client.js:287](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L287)

An optional base URL to use for the API

***

### endpoints?

> `optional` **endpoints**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [client.js:290](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L290)

An optional map of endpoints to override

***

### fetchFn?

> `optional` **fetchFn**: [`FetchFunction`](../type-aliases/FetchFunction.md)

Defined in: [client.js:299](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L299)

An optional fetch implementation function to use instead

***

### headers?

> `optional` **headers**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [client.js:294](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L294)

An optional map of headers to add to the request

***

### host?

> `optional` **host**: `string`

Defined in: [client.js:288](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L288)

An optional hostname to use for the API

***

### protocol?

> `optional` **protocol**: `"http:"` \| `"https:"`

Defined in: [client.js:289](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L289)

An optional protocol to use for the API

***

### retries?

> `optional` **retries**: `number`

Defined in: [client.js:296](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L296)

An optional number of retries for the request

***

### retryDelay?

> `optional` **retryDelay**: `number`

Defined in: [client.js:297](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L297)

An optional delay in milliseconds between retries

***

### retryTimeout?

> `optional` **retryTimeout**: `boolean`

Defined in: [client.js:298](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L298)

An optional flag to retry on timeout errors

***

### runAsChildUserEmail?

> `optional` **runAsChildUserEmail**: `string`

Defined in: [client.js:292](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L292)

An optional child user email to run as (experimental)

***

### runAsUserId?

> `optional` **runAsUserId**: `string`

Defined in: [client.js:291](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L291)

An optional user ID to run as

***

### secret

> **secret**: `string`

Defined in: [client.js:286](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L286)

A token to authenticate with the API

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [client.js:295](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L295)

An optional timeout in milliseconds for the request

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [client.js:293](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L293)

An optional timezone to use for the API
