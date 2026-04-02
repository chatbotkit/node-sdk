[**@chatbotkit/fetch**](../README.md)

***

[@chatbotkit/fetch](../globals.md) / FetchError

# Class: FetchError

Defined in: [packages/fetch/src/index.js:116](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/fetch/src/index.js#L116)

A FetchError is thrown when a fetch request fails.

## Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Constructors

### Constructor

> **new FetchError**(`message`, `code`, `meta?`): `FetchError`

Defined in: [packages/fetch/src/index.js:122](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/fetch/src/index.js#L122)

#### Parameters

##### message

`string`

##### code

`string`

##### meta?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

#### Returns

`FetchError`

#### Overrides

`Error.constructor`
