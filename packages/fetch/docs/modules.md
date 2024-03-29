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

Ƭ **FetchFn**\<\>: (`url`: `string`, `options?`: `RequestInit`) => `Promise`\<`Response`\>

#### Type declaration

▸ (`url`, `options?`): `Promise`\<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | `RequestInit` |

##### Returns

`Promise`\<`Response`\>

#### Defined in

[index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L74)

___

### withRetryOptions

Ƭ **withRetryOptions**\<\>: `Object`

Add retry capabilities to any fetch implementation.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retries?` | `number` |
| `retryAbort?` | `boolean` |
| `retryDelay?` | `number` |
| `retryStatuses?` | `number`[] |
| `retryTimeout?` | `boolean` |

#### Defined in

[index.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L139)

___

### withTimeoutOptions

Ƭ **withTimeoutOptions**\<\>: `Object`

Add timeout capabilities to any fetch implementation.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `timeout?` | `number` |

#### Defined in

[index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L80)

## Functions

### jsonl

▸ **jsonl**(`body`): `AsyncGenerator`\<`Record`\<`string`, `any`\>, `any`, `any`\>

Expose a JSONL stream as an async iterable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `ReadableStream`\<`Uint8Array`\> & \{ `[asyncIterator]`: () => `AsyncIterator`\<`Uint8Array`, `any`, `undefined`\>  } |

#### Returns

`AsyncGenerator`\<`Record`\<`string`, `any`\>, `any`, `any`\>

#### Defined in

[index.js:224](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L224)

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

[index.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L147)

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

[index.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L88)
