[**@chatbotkit/nextauth**](../../../README.md)

***

[@chatbotkit/nextauth](../../../modules.md) / [contact/adapter](../README.md) / ContactMemoryStore

# Class: ContactMemoryStore

Defined in: [contact/adapter.js:57](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/nextauth/src/contact/adapter.js#L57)

A store that uses memory. Do not use in production.

## Extends

- [`ContactStore`](ContactStore.md)

## Methods

### del()

> **del**(`key`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [contact/adapter.js:88](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/nextauth/src/contact/adapter.js#L88)

#### Parameters

##### key

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Overrides

[`ContactStore`](ContactStore.md).[`del`](ContactStore.md#del)

***

### get()

> **get**(`key`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

Defined in: [contact/adapter.js:68](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/nextauth/src/contact/adapter.js#L68)

#### Parameters

##### key

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

#### Overrides

[`ContactStore`](ContactStore.md).[`get`](ContactStore.md#get)

***

### set()

> **set**(`key`, `value`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [contact/adapter.js:78](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/nextauth/src/contact/adapter.js#L78)

#### Parameters

##### key

`string`

##### value

`any`

##### options?

###### px?

`number`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Overrides

[`ContactStore`](ContactStore.md).[`set`](ContactStore.md#set)
