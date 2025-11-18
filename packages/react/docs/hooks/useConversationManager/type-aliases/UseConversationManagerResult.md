[**@chatbotkit/react**](../../../README.md)

***

[@chatbotkit/react](../../../modules.md) / [hooks/useConversationManager](../README.md) / UseConversationManagerResult

# Type Alias: UseConversationManagerResult

> **UseConversationManagerResult**\<\> = `object`

Defined in: [hooks/useConversationManager.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L44)

## Type Parameters

## Type Declaration

### error

> **error**: `any`

### message

> **message**: [`SimpleMessage`](SimpleMessage.md) \| `null`

### messages

> **messages**: [`ComplexMessage`](ComplexMessage.md)[]

### request()

> **request**: (`name`, `args`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

#### Parameters

##### name

`string`

##### args

`any`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

### setError()

> **setError**: (`error`) => `void`

#### Parameters

##### error

`any`

#### Returns

`void`

### setText()

> **setText**: (`text`) => `void`

#### Parameters

##### text

`string`

#### Returns

`void`

### submit()

> **submit**: () => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

### text

> **text**: `string`

### thinking

> **thinking**: `boolean`

### trigger()

> **trigger**: (`name`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

### typing

> **typing**: `boolean`
