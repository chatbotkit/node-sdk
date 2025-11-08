[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation](../modules/conversation.md) / ConversationClient

# Class: ConversationClient

[conversation](../modules/conversation.md).ConversationClient

Conversation client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ConversationClient`**

## Table of contents

### Constructors

- [constructor](conversation.ConversationClient.md#constructor)

### Properties

- [attachment](conversation.ConversationClient.md#attachment)
- [message](conversation.ConversationClient.md#message)
- [session](conversation.ConversationClient.md#session)

### Methods

- [clientFetch](conversation.ConversationClient.md#clientfetch)
- [complete](conversation.ConversationClient.md#complete)
- [create](conversation.ConversationClient.md#create)
- [delete](conversation.ConversationClient.md#delete)
- [downvote](conversation.ConversationClient.md#downvote)
- [fetch](conversation.ConversationClient.md#fetch)
- [list](conversation.ConversationClient.md#list)
- [receive](conversation.ConversationClient.md#receive)
- [send](conversation.ConversationClient.md#send)
- [update](conversation.ConversationClient.md#update)
- [upvote](conversation.ConversationClient.md#upvote)

## Constructors

### constructor

• **new ConversationClient**(`options`): [`ConversationClient`](conversation.ConversationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ConversationClient`](conversation.ConversationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[conversation/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L32)

## Properties

### attachment

• **attachment**: [`ConversationAttachmentClient`](conversation_attachment.ConversationAttachmentClient.md)

#### Defined in

[conversation/index.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L48)

___

### message

• **message**: [`ConversationMessageClient`](conversation_message.ConversationMessageClient.md)

#### Defined in

[conversation/index.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L38)

___

### session

• **session**: [`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Defined in

[conversation/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L43)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:351](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L351)

___

### complete

▸ **complete**(`conversationId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {} \| {} \| {} \| {} \| {} \| {} \| {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | ``null`` |
| `request` | {} & {} \| [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<{} & {}, ``"model"``\> & \{ `model?`: [`Model`](../modules/model_v1.md#model)  } |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {} \| {} \| {} \| {} \| {} \| {} \| {}\>

#### Defined in

[conversation/index.js:103](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L103)

▸ **complete**(`conversationId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {} \| {} \| {} \| {} \| {} \| {} \| {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {} \| {} \| {} \| {} \| {} \| {} \| {}\>

#### Defined in

[conversation/index.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L110)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationCreateRequestBody`](../modules/conversation_v1.md#conversationcreaterequestbody) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/index.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L77)

___

### delete

▸ **delete**(`conversationId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/index.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L98)

___

### downvote

▸ **downvote**(`conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/index.js:176](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L176)

___

### fetch

▸ **fetch**(`conversationId`): [`ResponsePromise`](client.ResponsePromise.md)\<{} & {} \| {}, `never`\>

Fetches a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{} & {} \| {}, `never`\>

#### Defined in

[conversation/index.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L67)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all conversations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`ConversationListRequest`](../modules/conversation_v1.md#conversationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[conversation/index.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L57)

___

### receive

▸ **receive**(`conversationId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {} \| {} \| {} \| {} \| {} \| {} \| {}\>

Receives a message from the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {} \| {} \| {} \| {} \| {} \| {} \| {}\>

#### Defined in

[conversation/index.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L158)

___

### send

▸ **send**(`conversationId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {} \| {} \| {} \| {} \| {} \| {} \| {}\>

Sends a message to the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {} \| {} \| {} \| {} \| {} \| {} \| {}\>

#### Defined in

[conversation/index.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L147)

___

### update

▸ **update**(`conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationUpdateRequestBody`](../modules/conversation_v1.md#conversationupdaterequestbody) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/index.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L88)

___

### upvote

▸ **upvote**(`conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/index.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L167)
