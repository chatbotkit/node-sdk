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

### Properties

- [code](FetchError.md#code)
- [request](FetchError.md#request)
- [response](FetchError.md#response)
- [url](FetchError.md#url)

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

## Properties

### code

• **code**: `string` \| `number`

#### Defined in

[index.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L67)

___

### request

• **request**: `RequestInit` & [`withTimeoutOptions`](../modules.md#withtimeoutoptions) & [`withRetryOptions`](../modules.md#withretryoptions)

#### Defined in

[index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L70)

___

### response

• **response**: `Response`

#### Defined in

[index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L71)

___

### url

• **url**: `string`

#### Defined in

[index.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L69)
