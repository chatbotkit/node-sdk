[@chatbotkit/fetch](README.md) / Exports

# @chatbotkit/fetch

## Table of contents

### Classes

- [FetchError](classes/FetchError.md)

### Type Aliases

- [FetchFn](modules.md#fetchfn)
- [withRetryOptions](modules.md#withretryoptions)
- [withTimeoutOptions](modules.md#withtimeoutoptions)

### Functions

- [jsonl](modules.md#jsonl)
- [withRetry](modules.md#withretry)
- [withTimeout](modules.md#withtimeout)

## Type Aliases

### FetchFn

Ƭ **FetchFn**\<\>: (`url`: `string`, `options?`: `RequestInit`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Type declaration

▸ (`url`, `options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | `RequestInit` |

##### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Defined in

[index.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L75)

___

### withRetryOptions

Ƭ **withRetryOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retries?` | `number` |
| `retryDelay?` | `number` |
| `retryStatuses?` | `number`[] |
| `retryTimeout?` | `boolean` |

#### Defined in

[index.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L160)

___

### withTimeoutOptions

Ƭ **withTimeoutOptions**\<\>: `Object`

Add timeout capabilities to any fetch implementation.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `timeout?` | `number` |

#### Defined in

[index.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L81)

## Functions

### jsonl

▸ **jsonl**(`body`): [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\>, `any`, `any`\>

Expose a JSONL stream as an async iterable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`ReadableStream`]( https://developer.mozilla.org/docs/Web/API/ReadableStream )\<[`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\> & \{ `[asyncIterator]`: () => [`AsyncIterator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator )\<[`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ), `any`, `undefined`\>  } |

#### Returns

[`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\>, `any`, `any`\>

#### Defined in

[index.js:234](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L234)

___

### withRetry

▸ **withRetry**(`fetch`, `defaultOptions?`): [`FetchFn`](modules.md#fetchfn)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fetch` | [`FetchFn`](modules.md#fetchfn) |
| `defaultOptions?` | [`withRetryOptions`](modules.md#withretryoptions) |

#### Returns

[`FetchFn`](modules.md#fetchfn)

#### Defined in

[index.js:166](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L166)

___

### withTimeout

▸ **withTimeout**(`fetch`, `defaultOptions?`): [`FetchFn`](modules.md#fetchfn)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fetch` | [`FetchFn`](modules.md#fetchfn) |
| `defaultOptions?` | [`withTimeoutOptions`](modules.md#withtimeoutoptions) |

#### Returns

[`FetchFn`](modules.md#fetchfn)

#### Defined in

[index.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L89)
