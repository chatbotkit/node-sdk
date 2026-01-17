[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [conversation/message](../README.md) / ConversationMessageClient

# Class: ConversationMessageClient

Defined in: [conversation/message/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L21)

Conversation message client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new ConversationMessageClient**(`options`): `ConversationMessageClient`

Defined in: [conversation/message/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L25)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`ConversationMessageClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`conversationId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/message/index.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L58)

Creates a new message.

#### Parameters

##### conversationId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`conversationId`, `messageId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/message/index.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L81)

Deletes the message.

#### Parameters

##### conversationId

`string`

##### messageId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### downvote()

> **downvote**(`conversationId`, `messageId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/message/index.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L101)

#### Parameters

##### conversationId

`string`

##### messageId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `ConversationMessageClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`ConversationMessageClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`conversationId`, `messageId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [conversation/message/index.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L47)

Fetches a message.

#### Parameters

##### conversationId

`string`

##### messageId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`conversationId`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [conversation/message/index.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L36)

Retrieves a list of all messages.

#### Parameters

##### conversationId

`string`

##### request?

[`ConversationMessageListRequest`](../v1/type-aliases/ConversationMessageListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`conversationId`, `messageId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/message/index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L70)

Updates a message.

#### Parameters

##### conversationId

`string`

##### messageId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### upvote()

> **upvote**(`conversationId`, `messageId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/message/index.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/message/index.js#L91)

#### Parameters

##### conversationId

`string`

##### messageId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
