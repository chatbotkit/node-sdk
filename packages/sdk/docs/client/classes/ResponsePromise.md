[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [client](../README.md) / ResponsePromise

# Class: ResponsePromise\<T, U\>

Defined in: [client.js:38](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L38)

## Type Parameters

### T

`T`

### U

`U`

## Constructors

### Constructor

> **new ResponsePromise**\<`T`, `U`\>(`url`, `request`, `cacheMap?`): `ResponsePromise`\<`T`, `U`\>

Defined in: [client.js:53](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L53)

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

Defined in: [client.js:253](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L253)

#### Parameters

##### key?

`string` = `'default'`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

***

### catch()

> **catch**\<`TResult`\>(`fn?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T` \| `TResult`\>

Defined in: [client.js:207](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L207)

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### fn?

(`reason`) => `TResult` \| `PromiseLike`\<`TResult`\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T` \| `TResult`\>

***

### finally()

> **finally**(`fn?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Defined in: [client.js:215](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L215)

#### Parameters

##### fn?

() => `void`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

***

### getRequest()

> **getRequest**(`params?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Defined in: [client.js:82](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L82)

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

Defined in: [client.js:164](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L164)

#### Parameters

##### params?

###### abortSignal?

[`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### stream()

> **stream**(`params?`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`U`, `any`, `any`\>

Defined in: [client.js:238](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L238)

#### Parameters

##### params?

###### abortSignal?

[`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

#### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`U`, `any`, `any`\>

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onSuccess?`, `onFail?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`TResult1` \| `TResult2`\>

Defined in: [client.js:182](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L182)

#### Type Parameters

##### TResult1

`TResult1`

##### TResult2

`TResult2`

#### Parameters

##### onSuccess?

(`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

##### onFail?

(`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`TResult1` \| `TResult2`\>
