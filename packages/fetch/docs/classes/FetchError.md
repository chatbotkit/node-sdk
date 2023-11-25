[@chatbotkit/fetch](../README.md) / [Exports](../modules.md) / FetchError

# Class: FetchError

**`Todo`**

add definition

**`Todo`**

move to @chatbotkit/fetch sdk

## Hierarchy

- `Error`

  ↳ **`FetchError`**

## Table of contents

### Constructors

- [constructor](FetchError.md#constructor)

## Constructors

### constructor

• **new FetchError**(`message`, `code`, `url`, `request`, `response`): [`FetchError`](FetchError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | `string` \| `number` |
| `url` | `string` |
| `request` | `RequestInit` & [`withTimeoutOptions`](../modules.md#withtimeoutoptions) & [`withRetryOptions`](../modules.md#withretryoptions) |
| `response` | `Response` |

#### Returns

[`FetchError`](FetchError.md)

#### Overrides

Error.constructor

#### Defined in

[index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L64)