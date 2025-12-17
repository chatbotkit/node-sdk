[**@chatbotkit/react**](../../../README.md)

***

[@chatbotkit/react](../../../modules.md) / [actions/complete](../README.md) / Options

# Type Alias: Options

> **Options**\<\> = [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`ConversationCompleteRequest`, `"messages"` \| `"functions"`\> & `object`

Defined in: [actions/complete.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L87)

## Type Declaration

### backstory?

> `optional` **backstory**: `string`

### client

> **client**: `ConversationClient`

### functions?

> `optional` **functions**: ([`InputFunction`](InputFunction.md) \| () => [`InputFunction`](InputFunction.md) \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`InputFunction`](InputFunction.md)\>)[]

### maxRecursion?

> `optional` **maxRecursion**: `number`

### messages

> **messages**: [`InputMessage`](InputMessage.md)[]

### onFinish?

> `optional` **onFinish**: [`OnFinishHandler`](OnFinishHandler.md)

### onItem?

> `optional` **onItem**: [`OnItemHandler`](OnItemHandler.md)

### onStart?

> `optional` **onStart**: [`OnStartHandler`](OnStartHandler.md)

## Type Parameters
