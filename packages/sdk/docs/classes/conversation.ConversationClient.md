[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation](../modules/conversation.md) / ConversationClient

# Class: ConversationClient

[conversation](../modules/conversation.md).ConversationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ConversationClient`**

## Table of contents

### Constructors

- [constructor](conversation.ConversationClient.md#constructor)

### Methods

- [clientFetch](conversation.ConversationClient.md#clientfetch)
- [complete](conversation.ConversationClient.md#complete)
- [create](conversation.ConversationClient.md#create)
- [delete](conversation.ConversationClient.md#delete)
- [fetch](conversation.ConversationClient.md#fetch)
- [list](conversation.ConversationClient.md#list)
- [receive](conversation.ConversationClient.md#receive)
- [send](conversation.ConversationClient.md#send)
- [update](conversation.ConversationClient.md#update)

## Constructors

### constructor

• **new ConversationClient**(`options`): [`ConversationClient`](conversation.ConversationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`ConversationClient`](conversation.ConversationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[conversation/index.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L26)

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
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L211)

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

[conversation/index.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L85)

▸ **complete**(`conversationId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationCompleteMessageResponse`](../modules/conversation_v1.md#conversationcompletemessageresponse), [`ConversationCompleteMessageStreamType`](../modules/conversation_v1.md#conversationcompletemessagestreamtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationCompleteMessageRequest`](../modules/conversation_v1.md#conversationcompletemessagerequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationCompleteMessageResponse`](../modules/conversation_v1.md#conversationcompletemessageresponse), [`ConversationCompleteMessageStreamType`](../modules/conversation_v1.md#conversationcompletemessagestreamtype)\>

#### Defined in

[conversation/index.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L92)

___

### create

▸ **create**(`request`): `Promise`\<[`ConversationCreateResponse`](../modules/conversation_v1.md#conversationcreateresponse)\>

Creates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ConversationOptions`](../modules/conversation_v1.md#conversationoptions) |

#### Returns

`Promise`\<[`ConversationCreateResponse`](../modules/conversation_v1.md#conversationcreateresponse)\>

#### Defined in

[conversation/index.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L59)

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

[conversation/index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L80)

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

[conversation/index.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L49)

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

[conversation/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L39)

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

[conversation/index.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L139)

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

[conversation/index.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L128)

___

### update

▸ **update**(`conversationId`, `request`): `Promise`\<[`ConversationUpdateResponse`](../modules/conversation_v1.md#conversationupdateresponse)\>

Updates a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationOptions`](../modules/conversation_v1.md#conversationoptions) |

#### Returns

`Promise`\<[`ConversationUpdateResponse`](../modules/conversation_v1.md#conversationupdateresponse)\>

#### Defined in

[conversation/index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/index.js#L70)