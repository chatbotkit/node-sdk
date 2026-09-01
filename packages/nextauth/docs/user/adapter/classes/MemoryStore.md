[**@chatbotkit/nextauth**](../../../README.md)

***

[@chatbotkit/nextauth](../../../modules.md) / [user/adapter](../README.md) / MemoryStore

# Class: MemoryStore

Defined in: user/adapter.js:57

A store that uses memory. Do not use in production.

## Extends

- [`Store`](Store.md)

## Methods

### del()

> **del**(`key`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: user/adapter.js:85

#### Parameters

##### key

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Overrides

[`Store`](Store.md).[`del`](Store.md#del)

***

### get()

> **get**(`key`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

Defined in: user/adapter.js:68

#### Parameters

##### key

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

#### Overrides

[`Store`](Store.md).[`get`](Store.md#get)

***

### set()

> **set**(`key`, `value`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: user/adapter.js:77

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Overrides

[`Store`](Store.md).[`set`](Store.md#set)
