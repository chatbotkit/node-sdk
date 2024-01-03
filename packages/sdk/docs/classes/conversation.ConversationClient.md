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

[conversation/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L31)

## Properties

### message

• **message**: [`ConversationMessageClient`](conversation_message.ConversationMessageClient.md)

#### Defined in

[conversation/index.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L37)

___

### session

• **session**: [`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Defined in

[conversation/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L42)

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
| `options.buffer?` | `ArrayBuffer` |
| `options.external?` | `boolean` |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | `Record`\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |
| `options.record?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:219](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L219)

___

### complete

▸ **complete**(`conversationId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationCompleteResponse`](../modules/conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](../modules/conversation_v1.md#conversationcompletestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | ``null`` |
| `request` | [`ConversationCompleteRequest`](../modules/conversation_v1.md#conversationcompleterequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationCompleteResponse`](../modules/conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](../modules/conversation_v1.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/index.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L97)

▸ **complete**(`conversationId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationCompleteMessageResponse`](../modules/conversation_v1.md#conversationcompletemessageresponse), [`ConversationCompleteMessageStreamType`](../modules/conversation_v1.md#conversationcompletemessagestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationCompleteMessageRequest`](../modules/conversation_v1.md#conversationcompletemessagerequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationCompleteMessageResponse`](../modules/conversation_v1.md#conversationcompletemessageresponse), [`ConversationCompleteMessageStreamType`](../modules/conversation_v1.md#conversationcompletemessagestreamtype)\>

#### Defined in

[conversation/index.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L104)

___

### create

▸ **create**(`request`): `Promise`\<[`ConversationCreateResponse`](../modules/conversation_v1.md#conversationcreateresponse)\>

Creates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationCreateRequest`](../modules/conversation_v1.md#conversationcreaterequest) |

#### Returns

`Promise`\<[`ConversationCreateResponse`](../modules/conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L71)

___

### delete

▸ **delete**(`conversationId`): `Promise`\<[`ConversationDeleteResponse`](../modules/conversation_v1.md#conversationdeleteresponse)\>

Deletes the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`\<[`ConversationDeleteResponse`](../modules/conversation_v1.md#conversationdeleteresponse)\>

#### Defined in

[conversation/index.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L92)

___

### downvote

▸ **downvote**(`conversationId`, `request`): `Promise`\<[`ConversationDownvoteResponse`](../modules/conversation_v1.md#conversationdownvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationDownvoteRequest`](../modules/conversation_v1.md#conversationdownvoterequest) |

#### Returns

`Promise`\<[`ConversationDownvoteResponse`](../modules/conversation_v1.md#conversationdownvoteresponse)\>

#### Defined in

[conversation/index.js:169](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L169)

___

### fetch

▸ **fetch**(`conversationId`): `Promise`\<[`ConversationFetchResponse`](../modules/conversation_v1.md#conversationfetchresponse)\>

Fetches a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`\<[`ConversationFetchResponse`](../modules/conversation_v1.md#conversationfetchresponse)\>

#### Defined in

[conversation/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L61)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationListResponse`](../modules/conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](../modules/conversation_v1.md#conversationliststreamitem)\>

Retrieves a list of all conversations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`ConversationListRequest`](../modules/conversation_v1.md#conversationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationListResponse`](../modules/conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](../modules/conversation_v1.md#conversationliststreamitem)\>

#### Defined in

[conversation/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L51)

___

### receive

▸ **receive**(`conversationId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationReceiveMessageResponse`](../modules/conversation_v1.md#conversationreceivemessageresponse), [`ConversationReceiveMessageStreamType`](../modules/conversation_v1.md#conversationreceivemessagestreamtype)\>

Receives a message from the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveMessageRequest`](../modules/conversation_v1.md#conversationreceivemessagerequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationReceiveMessageResponse`](../modules/conversation_v1.md#conversationreceivemessageresponse), [`ConversationReceiveMessageStreamType`](../modules/conversation_v1.md#conversationreceivemessagestreamtype)\>

#### Defined in

[conversation/index.js:151](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L151)

___

### send

▸ **send**(`conversationId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationSendMessageResponse`](../modules/conversation_v1.md#conversationsendmessageresponse), [`ConversationSendMessageStreamResult`](../modules/conversation_v1.md#conversationsendmessagestreamresult)\>

Sends a message to the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationSendMessageRequest`](../modules/conversation_v1.md#conversationsendmessagerequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationSendMessageResponse`](../modules/conversation_v1.md#conversationsendmessageresponse), [`ConversationSendMessageStreamResult`](../modules/conversation_v1.md#conversationsendmessagestreamresult)\>

#### Defined in

[conversation/index.js:140](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L140)

___

### update

▸ **update**(`conversationId`, `request`): `Promise`\<[`ConversationUpdateResponse`](../modules/conversation_v1.md#conversationupdateresponse)\>

Updates a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationUpdateRequest`](../modules/conversation_v1.md#conversationupdaterequest) |

#### Returns

`Promise`\<[`ConversationUpdateResponse`](../modules/conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L82)

___

### upvote

▸ **upvote**(`conversationId`, `request`): `Promise`\<[`ConversationUpvoteResponse`](../modules/conversation_v1.md#conversationupvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationUpvoteRequest`](../modules/conversation_v1.md#conversationupvoterequest) |

#### Returns

`Promise`\<[`ConversationUpvoteResponse`](../modules/conversation_v1.md#conversationupvoteresponse)\>

#### Defined in

[conversation/index.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L160)
