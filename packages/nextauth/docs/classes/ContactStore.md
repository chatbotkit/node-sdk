[**@chatbotkit/nextauth**](../README.md)

***

[@chatbotkit/nextauth](../globals.md) / ContactStore

# Class: ContactStore

Defined in: [contact/adapter.js:18](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/nextauth/src/contact/adapter.js#L18)

A basic store for ChatBotKitContactAdapter. It is compatible with Redis.
Implement your own if you want to use a different storage.

## Extended by

- [`ContactMemoryStore`](ContactMemoryStore.md)

## Methods

### del()

> **del**(`key`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [contact/adapter.js:47](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/nextauth/src/contact/adapter.js#L47)

#### Parameters

##### key

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### get()

> **get**(`key`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

Defined in: [contact/adapter.js:23](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/nextauth/src/contact/adapter.js#L23)

#### Parameters

##### key

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

***

### set()

> **set**(`key`, `value`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [contact/adapter.js:35](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/nextauth/src/contact/adapter.js#L35)

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
