[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [client](../README.md) / ChatBotKitClientOptions

# Interface: ChatBotKitClientOptions

Defined in: [client.js:277](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L277)

## Properties

### baseUrl?

> `optional` **baseUrl**: `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

Defined in: [client.js:279](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L279)

An optional base URL to use for the API

***

### endpoints?

> `optional` **endpoints**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [client.js:282](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L282)

An optional map of endpoints to override

***

### fetchFn?

> `optional` **fetchFn**: [`FetchFunction`](../type-aliases/FetchFunction.md)

Defined in: [client.js:291](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L291)

An optional fetch implementation function to use instead

***

### headers?

> `optional` **headers**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [client.js:286](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L286)

An optional map of headers to add to the request

***

### host?

> `optional` **host**: `string`

Defined in: [client.js:280](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L280)

An optional hostname to use for the API

***

### protocol?

> `optional` **protocol**: `"http:"` \| `"https:"`

Defined in: [client.js:281](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L281)

An optional protocol to use for the API

***

### retries?

> `optional` **retries**: `number`

Defined in: [client.js:288](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L288)

An optional number of retries for the request

***

### retryDelay?

> `optional` **retryDelay**: `number`

Defined in: [client.js:289](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L289)

An optional delay in milliseconds between retries

***

### retryTimeout?

> `optional` **retryTimeout**: `boolean`

Defined in: [client.js:290](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L290)

An optional flag to retry on timeout errors

***

### runAsChildUserEmail?

> `optional` **runAsChildUserEmail**: `string`

Defined in: [client.js:284](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L284)

An optional child user email to run as (experimental)

***

### runAsUserId?

> `optional` **runAsUserId**: `string`

Defined in: [client.js:283](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L283)

An optional user ID to run as

***

### secret

> **secret**: `string`

Defined in: [client.js:278](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L278)

A token to authenticate with the API

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [client.js:287](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L287)

An optional timeout in milliseconds for the request

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [client.js:285](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L285)

An optional timezone to use for the API
