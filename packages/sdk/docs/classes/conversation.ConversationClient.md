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
- [upsertContact](conversation.ConversationClient.md#upsertcontact)
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

[conversation/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L33)

## Properties

### attachment

• **attachment**: [`ConversationAttachmentClient`](conversation_attachment.ConversationAttachmentClient.md)

#### Defined in

[conversation/index.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L49)

___

### message

• **message**: [`ConversationMessageClient`](conversation_message.ConversationMessageClient.md)

#### Defined in

[conversation/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L39)

___

### session

• **session**: [`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Defined in

[conversation/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L44)

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

[client.js:330](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L330)

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

[conversation/index.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L104)

▸ **complete**(`conversationId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationCompleteMessageResponse`](../modules/conversation_v1.md#conversationcompletemessageresponse), [`ConversationCompleteMessageStreamType`](../modules/conversation_v1.md#conversationcompletemessagestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationCompleteMessageRequest`](../modules/conversation_v1.md#conversationcompletemessagerequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationCompleteMessageResponse`](../modules/conversation_v1.md#conversationcompletemessageresponse), [`ConversationCompleteMessageStreamType`](../modules/conversation_v1.md#conversationcompletemessagestreamtype)\>

#### Defined in

[conversation/index.js:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L111)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationCreateResponse`](../modules/conversation_v1.md#conversationcreateresponse)\>

Creates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationCreateRequest`](../modules/conversation_v1.md#conversationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationCreateResponse`](../modules/conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/index.js:78](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L78)

___

### delete

▸ **delete**(`conversationId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationDeleteResponse`](../modules/conversation_v1.md#conversationdeleteresponse)\>

Deletes the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationDeleteResponse`](../modules/conversation_v1.md#conversationdeleteresponse)\>

#### Defined in

[conversation/index.js:99](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L99)

___

### downvote

▸ **downvote**(`conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationDownvoteResponse`](../modules/conversation_v1.md#conversationdownvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationDownvoteRequest`](../modules/conversation_v1.md#conversationdownvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationDownvoteResponse`](../modules/conversation_v1.md#conversationdownvoteresponse)\>

#### Defined in

[conversation/index.js:176](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L176)

___

### fetch

▸ **fetch**(`conversationId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationFetchResponse`](../modules/conversation_v1.md#conversationfetchresponse), `never`\>

Fetches a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationFetchResponse`](../modules/conversation_v1.md#conversationfetchresponse), `never`\>

#### Defined in

[conversation/index.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L68)

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

[conversation/index.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L58)

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

[conversation/index.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L158)

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

[conversation/index.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L147)

___

### update

▸ **update**(`conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationUpdateResponse`](../modules/conversation_v1.md#conversationupdateresponse)\>

Updates a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationUpdateRequest`](../modules/conversation_v1.md#conversationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationUpdateResponse`](../modules/conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/index.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L89)

___

### upsertContact

▸ **upsertContact**(`conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationContactUpsertResponse`](../modules/conversation_v1.md#conversationcontactupsertresponse)\>

Upsert conversation contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationContactUpsertRequest`](../modules/conversation_v1.md#conversationcontactupsertrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationContactUpsertResponse`](../modules/conversation_v1.md#conversationcontactupsertresponse)\>

#### Defined in

[conversation/index.js:187](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L187)

___

### upvote

▸ **upvote**(`conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationUpvoteResponse`](../modules/conversation_v1.md#conversationupvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationUpvoteRequest`](../modules/conversation_v1.md#conversationupvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationUpvoteResponse`](../modules/conversation_v1.md#conversationupvoteresponse)\>

#### Defined in

[conversation/index.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L167)
