[@chatbotkit/fetch](../README.md) / [Exports](../modules.md) / FetchError

# Class: FetchError

## Hierarchy

- [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error )

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
| `response` | [`Response`]( https://developer.mozilla.org/docs/Web/API/Response ) |

#### Returns

[`FetchError`](FetchError.md)

#### Overrides

Error.constructor

#### Defined in

[index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L62)
