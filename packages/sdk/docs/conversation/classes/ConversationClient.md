[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [conversation](../README.md) / ConversationClient

# Class: ConversationClient

Defined in: [conversation/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L28)

Conversation client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new ConversationClient**(`options`): `ConversationClient`

Defined in: [conversation/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L32)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`ConversationClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### attachment

> **attachment**: [`ConversationAttachmentClient`](../attachment/classes/ConversationAttachmentClient.md)

Defined in: [conversation/index.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L48)

***

### message

> **message**: [`ConversationMessageClient`](../message/classes/ConversationMessageClient.md)

Defined in: [conversation/index.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L38)

***

### session

> **session**: [`ConversationSessionClient`](../session/classes/ConversationSessionClient.md)

Defined in: [conversation/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L43)

## Methods

### complete()

#### Call Signature

> **complete**(`conversationId`, `request`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

Defined in: [conversation/index.js:103](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L103)

##### Parameters

###### conversationId

`null`

###### request

`object` & `object` | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`object` & `object`, `"model"`\> & `object`

##### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

#### Call Signature

> **complete**(`conversationId`, `request`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

Defined in: [conversation/index.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L110)

##### Parameters

###### conversationId

`string`

###### request

##### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

***

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/index.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L77)

Creates a new conversation.

#### Parameters

##### request

[`ConversationCreateRequestBody`](../v1/type-aliases/ConversationCreateRequestBody.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`conversationId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/index.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L98)

Deletes the conversation.

#### Parameters

##### conversationId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### downvote()

> **downvote**(`conversationId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/index.js:176](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L176)

#### Parameters

##### conversationId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `ConversationClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`ConversationClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`conversationId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<`object` & \{ \} \| \{ \}, `never`\>

Defined in: [conversation/index.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L67)

Fetches a conversation.

#### Parameters

##### conversationId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<`object` & \{ \} \| \{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [conversation/index.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L57)

Retrieves a list of all conversations.

#### Parameters

##### request?

[`ConversationListRequest`](../v1/type-aliases/ConversationListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### receive()

> **receive**(`conversationId`, `request`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

Defined in: [conversation/index.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L158)

Receives a message from the conversation.

#### Parameters

##### conversationId

`string`

##### request

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

***

### send()

> **send**(`conversationId`, `request`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

Defined in: [conversation/index.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L147)

Sends a message to the conversation.

#### Parameters

##### conversationId

`string`

##### request

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

***

### update()

> **update**(`conversationId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/index.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L88)

Updates a conversation.

#### Parameters

##### conversationId

`string`

##### request

[`ConversationUpdateRequestBody`](../v1/type-aliases/ConversationUpdateRequestBody.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### upvote()

> **upvote**(`conversationId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/index.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L167)

#### Parameters

##### conversationId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
