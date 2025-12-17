[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [conversation](../README.md) / ConversationClient

# Class: ConversationClient

Defined in: [conversation/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L30)

Conversation client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new ConversationClient**(`options`): `ConversationClient`

Defined in: [conversation/index.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L34)

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

Defined in: [conversation/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L50)

***

### message

> **message**: [`ConversationMessageClient`](../message/classes/ConversationMessageClient.md)

Defined in: [conversation/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L40)

***

### session

> **session**: [`ConversationSessionClient`](../session/classes/ConversationSessionClient.md)

Defined in: [conversation/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L45)

## Methods

### complete()

#### Call Signature

> **complete**(`conversationId`, `request`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

Defined in: [conversation/index.js:105](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L105)

##### Parameters

###### conversationId

`null`

###### request

`object` & `object` | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`object` & `object`, `"model"`\> & `object`

##### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

#### Call Signature

> **complete**(`conversationId`, `request`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

Defined in: [conversation/index.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L112)

##### Parameters

###### conversationId

`string`

###### request

##### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

***

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/index.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L79)

Creates a new conversation.

#### Parameters

##### request

[`ConversationCreateRequestBody`](../v1/type-aliases/ConversationCreateRequestBody.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`conversationId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/index.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L100)

Deletes the conversation.

#### Parameters

##### conversationId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### dispatch()

> **dispatch**(`conversationId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \} \| \{ \}\>

Defined in: [conversation/index.js:150](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L150)

Dispatches a conversation completion to run in the background.
Returns a channel ID that can be used to subscribe to completion events.

#### Parameters

##### conversationId

`string`

##### request

`object` & `object` | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`object` & `object`, `"model"`\> & `object` | \{ \}

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \} \| \{ \}\>

***

### downvote()

> **downvote**(`conversationId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [conversation/index.js:203](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L203)

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

Defined in: [conversation/index.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L69)

Fetches a conversation.

#### Parameters

##### conversationId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<`object` & \{ \} \| \{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [conversation/index.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L59)

Retrieves a list of all conversations.

#### Parameters

##### request?

[`ConversationListRequest`](../v1/type-aliases/ConversationListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### receive()

> **receive**(`conversationId`, `request`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \}\>

Defined in: [conversation/index.js:185](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L185)

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

Defined in: [conversation/index.js:174](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L174)

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

Defined in: [conversation/index.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L90)

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

Defined in: [conversation/index.js:194](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L194)

#### Parameters

##### conversationId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
