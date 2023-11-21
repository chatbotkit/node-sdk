[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation](../modules/conversation.md) / ConversationClient

# Class: ConversationClient

[conversation](../modules/conversation.md).ConversationClient

**`Template`**

**`Template`**

## Hierarchy

- `ChatBotKitClient`

  ↳ **`ConversationClient`**

## Table of contents

### Constructors

- [constructor](conversation.ConversationClient.md#constructor)

### Properties

- [message](conversation.ConversationClient.md#message)
- [secret](conversation.ConversationClient.md#secret)
- [session](conversation.ConversationClient.md#session)
- [url](conversation.ConversationClient.md#url)

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
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`ConversationClient`](conversation.ConversationClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[conversation/index.js:26](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L26)

## Properties

### message

• **message**: [`ConversationMessageClient`](conversation_message.ConversationMessageClient.md)

#### Defined in

[conversation/index.js:29](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L29)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L187)

___

### session

• **session**: [`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Defined in

[conversation/index.js:30](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L30)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L189)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): `ResponsePromise`\<`T`, `U`\>

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

`ResponsePromise`\<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L206)

___

### complete

▸ **complete**(`conversationId`, `request`): `ResponsePromise`\<[`ConversationCompleteResponse`](../modules/conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](../modules/conversation_v1.md#conversationcompletestreamtype)\>

Completes the next bot message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | ``null`` \| `string` |
| `request` | [`ConversationCompleteRequest`](../modules/conversation_v1.md#conversationcompleterequest) \| [`ConversationCompleteMessageRequest`](../modules/conversation_v1.md#conversationcompletemessagerequest) |

#### Returns

`ResponsePromise`\<[`ConversationCompleteResponse`](../modules/conversation_v1.md#conversationcompleteresponse), [`ConversationCompleteStreamType`](../modules/conversation_v1.md#conversationcompletestreamtype)\>

#### Defined in

[conversation/index.js:104](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L104)

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

[conversation/index.js:59](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L59)

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

[conversation/index.js:80](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L80)

___

### fetch

▸ **fetch**(`conversationId`): `Promise`\<[`ConversationInstance`](../modules/conversation_v1.md#conversationinstance)\>

Fetches a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`\<[`ConversationInstance`](../modules/conversation_v1.md#conversationinstance)\>

#### Defined in

[conversation/index.js:49](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L49)

___

### list

▸ **list**(`request?`): `ResponsePromise`\<[`ConversationListResponse`](../modules/conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](../modules/conversation_v1.md#conversationliststreamitem)\>

Retrieves a list of all conversations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`ConversationListRequest`](../modules/conversation_v1.md#conversationlistrequest) |

#### Returns

`ResponsePromise`\<[`ConversationListResponse`](../modules/conversation_v1.md#conversationlistresponse), [`ConversationListStreamItem`](../modules/conversation_v1.md#conversationliststreamitem)\>

#### Defined in

[conversation/index.js:39](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L39)

___

### receive

▸ **receive**(`conversationId`, `request`): `ResponsePromise`\<[`ConversationReceiveMessageResponse`](../modules/conversation_v1.md#conversationreceivemessageresponse), [`ConversationReceiveMessageStreamType`](../modules/conversation_v1.md#conversationreceivemessagestreamtype)\>

Receives a message from the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationReceiveMessageRequest`](../modules/conversation_v1.md#conversationreceivemessagerequest) |

#### Returns

`ResponsePromise`\<[`ConversationReceiveMessageResponse`](../modules/conversation_v1.md#conversationreceivemessageresponse), [`ConversationReceiveMessageStreamType`](../modules/conversation_v1.md#conversationreceivemessagestreamtype)\>

#### Defined in

[conversation/index.js:139](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L139)

___

### send

▸ **send**(`conversationId`, `request`): `ResponsePromise`\<[`ConversationSendMessageResponse`](../modules/conversation_v1.md#conversationsendmessageresponse), [`ConversationSendMessageStreamResult`](../modules/conversation_v1.md#conversationsendmessagestreamresult)\>

Sends a message to the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationSendMessageRequest`](../modules/conversation_v1.md#conversationsendmessagerequest) |

#### Returns

`ResponsePromise`\<[`ConversationSendMessageResponse`](../modules/conversation_v1.md#conversationsendmessageresponse), [`ConversationSendMessageStreamResult`](../modules/conversation_v1.md#conversationsendmessagestreamresult)\>

#### Defined in

[conversation/index.js:128](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L128)

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

[conversation/index.js:70](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/conversation/index.js#L70)
