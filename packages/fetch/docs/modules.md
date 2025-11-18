[@chatbotkit/fetch](README.md) / Exports

# @chatbotkit/fetch

## Table of contents

### Classes

- [AbortError](classes/AbortError.md)
- [FetchError](classes/FetchError.md)
- [TimeoutError](classes/TimeoutError.md)

### Type Aliases

- [FetchFn](modules.md#fetchfn)
- [withRetryOptions](modules.md#withretryoptions)
- [withTimeoutOptions](modules.md#withtimeoutoptions)

### Variables

- [statusToCodeMap](modules.md#statustocodemap)

### Functions

- [anySignal](modules.md#anysignal)
- [fetch](modules.md#fetch)
- [getFetchError](modules.md#getfetcherror)
- [jsonl](modules.md#jsonl)
- [withRetry](modules.md#withretry)
- [withTimeout](modules.md#withtimeout)

## Type Aliases

### FetchFn

Ƭ **FetchFn**\<`T`\>: (`url`: `string` \| [`URL`]( https://developer.mozilla.org/docs/Web/API/URL ), `options?`: `RequestInit` & `T`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`url`, `options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`]( https://developer.mozilla.org/docs/Web/API/URL ) |
| `options?` | `RequestInit` & `T` |

##### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Defined in

[packages/fetch/src/index.js:248](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L248)

___

### withRetryOptions

Ƭ **withRetryOptions**\<\>: `Object`

Add retry capabilities to any fetch implementation.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retries?` | `number` |
| `retryDelay?` | `number` |
| `retryStatuses?` | `number`[] |
| `retryTimeout?` | `boolean` |

#### Defined in

[packages/fetch/src/index.js:334](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L334)

___

### withTimeoutOptions

Ƭ **withTimeoutOptions**\<\>: `Object`

Add timeout capabilities to any fetch implementation.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `timeout?` | `number` |

#### Defined in

[packages/fetch/src/index.js:254](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L254)

## Variables

### statusToCodeMap

• `Const` **statusToCodeMap**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`number`, `string`\>

#### Defined in

[packages/fetch/src/index.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L92)

## Functions

### anySignal

▸ **anySignal**(`signals`): [`AbortSignal`]( https://developer.mozilla.org/docs/Web/API/AbortSignal )

#### Parameters

| Name | Type |
| :------ | :------ |
| `signals` | [`AbortSignal`]( https://developer.mozilla.org/docs/Web/API/AbortSignal )[] |

#### Returns

[`AbortSignal`]( https://developer.mozilla.org/docs/Web/API/AbortSignal )

#### Defined in

[packages/fetch/src/index.js:224](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L224)

___

### fetch

▸ **fetch**(`url`, `init?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`]( https://developer.mozilla.org/docs/Web/API/URL ) |
| `init?` | `RequestInit` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Defined in

[packages/fetch/src/index.js:209](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L209)

___

### getFetchError

▸ **getFetchError**(`response`, `meta?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FetchError`](classes/FetchError.md)\>

Create a FetchError from a Response object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`Response`]( https://developer.mozilla.org/docs/Web/API/Response ) |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FetchError`](classes/FetchError.md)\>

#### Defined in

[packages/fetch/src/index.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L139)

___

### jsonl

▸ **jsonl**(`body`): [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\>, `any`, `any`\>

Expose a JSONL stream as an async iterable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`ReadableStream`]( https://developer.mozilla.org/docs/Web/API/ReadableStream )\<[`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\<`ArrayBufferLike`\>\> & \{ `[asyncIterator]`: () => [`AsyncIterator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator )\<[`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\<`ArrayBufferLike`\>, `any`, `any`\>  } |

#### Returns

[`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\>, `any`, `any`\>

#### Defined in

[packages/fetch/src/index.js:423](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L423)

___

### withRetry

▸ **withRetry**(`fetch`, `defaultOptions?`): [`FetchFn`](modules.md#fetchfn)\<[`withRetryOptions`](modules.md#withretryoptions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fetch` | [`FetchFn`](modules.md#fetchfn)\<{}\> |
| `defaultOptions?` | [`withRetryOptions`](modules.md#withretryoptions) |

#### Returns

[`FetchFn`](modules.md#fetchfn)\<[`withRetryOptions`](modules.md#withretryoptions)\>

#### Defined in

[packages/fetch/src/index.js:342](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L342)

___

### withTimeout

▸ **withTimeout**(`fetch`, `defaultOptions?`): [`FetchFn`](modules.md#fetchfn)\<[`withTimeoutOptions`](modules.md#withtimeoutoptions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fetch` | [`FetchFn`](modules.md#fetchfn)\<{}\> |
| `defaultOptions?` | [`withTimeoutOptions`](modules.md#withtimeoutoptions) |

#### Returns

[`FetchFn`](modules.md#fetchfn)\<[`withTimeoutOptions`](modules.md#withtimeoutoptions)\>

#### Defined in

[packages/fetch/src/index.js:262](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L262)
