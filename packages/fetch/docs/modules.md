[@chatbotkit/fetch](README.md) / Exports

# @chatbotkit/fetch

## Table of contents

### Classes

- [FetchError](classes/FetchError.md)

### Type Aliases

- [FetchFn](modules.md#fetchfn)
- [withRetryOptions](modules.md#withretryoptions)
- [withTimeoutOptions](modules.md#withtimeoutoptions)

### Variables

- [ABORT\_ERROR\_NAME](modules.md#abort_error_name)
- [TIMEOUT\_ERROR\_NAME](modules.md#timeout_error_name)

### Functions

- [anySignal](modules.md#anysignal)
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

[index.js:76](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/fetch/src/index.js#L76)

___

### withRetryOptions

Ƭ **withRetryOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retries?` | `number` |
| `retryAbort?` | `boolean` |
| `retryDelay?` | `number` |
| `retryStatuses?` | `number`[] |
| `retryTimeout?` | `boolean` |

#### Defined in

[index.js:139](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/fetch/src/index.js#L139)

___

### withTimeoutOptions

Ƭ **withTimeoutOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `timeout?` | `number` |

#### Defined in

[index.js:82](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/fetch/src/index.js#L82)

## Variables

### ABORT\_ERROR\_NAME

• `Const` **ABORT\_ERROR\_NAME**: ``"AbortError"``

#### Defined in

[index.js:27](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/fetch/src/index.js#L27)

___

### TIMEOUT\_ERROR\_NAME

• `Const` **TIMEOUT\_ERROR\_NAME**: ``"TimeoutError"``

#### Defined in

[index.js:28](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/fetch/src/index.js#L28)

## Functions

### anySignal

▸ **anySignal**(`signals`): `AbortSignal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signals` | `AbortSignal`[] |

#### Returns

`AbortSignal`

#### Defined in

[index.js:34](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/fetch/src/index.js#L34)

___

### jsonl

▸ **jsonl**(`body`): `AsyncGenerator`\<`Record`\<`string`, `any`\>, `any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `ReadableStream`\<`Uint8Array`\> & \{ `[asyncIterator]`: () => `AsyncIterator`\<`Uint8Array`, `any`, `undefined`\>  } |

#### Returns

`AsyncGenerator`\<`Record`\<`string`, `any`\>, `any`, `any`\>

#### Defined in

[index.js:221](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/fetch/src/index.js#L221)

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

**`Todo`**

move to @chatbotkit/fetch sdk

#### Defined in

[index.js:146](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/fetch/src/index.js#L146)

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

[index.js:88](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/fetch/src/index.js#L88)
