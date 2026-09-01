[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [client](../README.md) / ResponsePromise

# Class: ResponsePromise\<T, U\>

Defined in: [client.js:58](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L58)

## Template

## Template

## Type Parameters

### T

`T`

### U

`U`

## Constructors

### Constructor

> **new ResponsePromise**\<`T`, `U`\>(`url`, `request`, `cacheMap?`): `ResponsePromise`\<`T`, `U`\>

Defined in: [client.js:74](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L74)

#### Parameters

##### url

`string` | [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

##### request

###### data?

`any`

###### fetchFn?

[`FetchFunction`](../type-aliases/FetchFunction.md)

###### headers

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### method

`string`

###### passthrough?

`boolean`

###### retries?

`number`

###### retryDelay?

`number`

###### retryTimeout?

`boolean`

###### timeout?

`number`

##### cacheMap?

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>\> = `...`

#### Returns

`ResponsePromise`\<`T`, `U`\>

## Methods

### cache()

> **cache**(`key?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Defined in: [client.js:305](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L305)

#### Parameters

##### key?

`string` = `'default'`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

***

### catch()

> **catch**\<`TResult`\>(`fn?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T` \| `TResult`\>

Defined in: [client.js:259](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L259)

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### fn?

(`reason`) => `TResult` \| `PromiseLike`\<`TResult`\> | `null`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T` \| `TResult`\>

***

### finally()

> **finally**(`fn?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Defined in: [client.js:267](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L267)

#### Parameters

##### fn?

() => `void` | `null`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

***

### getRequest()

> **getRequest**(`params?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Defined in: [client.js:103](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L103)

#### Parameters

##### params?

###### abortSignal?

[`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

###### data?

`any`

###### fetchFn?

[`FetchFunction`](../type-aliases/FetchFunction.md)

###### headers?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### method?

`string`

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

***

### getStreamPromise()

> **getStreamPromise**(`params?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Defined in: [client.js:216](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L216)

#### Parameters

##### params?

###### abortSignal?

[`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### raw()

> **raw**(`params?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Defined in: [client.js:209](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L209)

Resolves to the raw `Response` without parsing the body. Combined with the
`passthrough` request option it does not throw on a non-2xx status, which
makes it suitable for passthrough endpoints such as the secret proxy.

#### Parameters

##### params?

###### abortSignal?

[`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### stream()

> **stream**(`params?`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`U`, `any`, `any`\>

Defined in: [client.js:290](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L290)

#### Parameters

##### params?

###### abortSignal?

[`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

#### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`U`, `any`, `any`\>

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onSuccess?`, `onFail?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`TResult1` \| `TResult2`\>

Defined in: [client.js:234](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L234)

#### Type Parameters

##### TResult1

`TResult1`

##### TResult2

`TResult2`

#### Parameters

##### onSuccess?

(`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\> | `null`

##### onFail?

(`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\> | `null`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`TResult1` \| `TResult2`\>
