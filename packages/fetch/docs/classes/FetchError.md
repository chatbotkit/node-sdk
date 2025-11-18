[@chatbotkit/fetch](../README.md) / [Exports](../modules.md) / FetchError

# Class: FetchError

A FetchError is thrown when a fetch request fails.

## Hierarchy

- [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error )

  ↳ **`FetchError`**

## Table of contents

### Constructors

- [constructor](FetchError.md#constructor)

## Constructors

### constructor

• **new FetchError**(`message`, `code`, `meta?`): [`FetchError`](FetchError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |

#### Returns

[`FetchError`](FetchError.md)

#### Overrides

Error.constructor

#### Defined in

[packages/fetch/src/index.js:122](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L122)
