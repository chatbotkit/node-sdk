[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [contact/conversation](../modules/contact_conversation.md) / ConversationClient

# Class: ConversationClient

[contact/conversation](../modules/contact_conversation.md).ConversationClient

Contact conversation client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ConversationClient`**

## Table of contents

### Constructors

- [constructor](contact_conversation.ConversationClient.md#constructor)

### Methods

- [clientFetch](contact_conversation.ConversationClient.md#clientfetch)
- [list](contact_conversation.ConversationClient.md#list)

## Constructors

### constructor

• **new ConversationClient**(`options`): [`ConversationClient`](contact_conversation.ConversationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ConversationClient`](contact_conversation.ConversationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[contact/conversation/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/index.js#L17)

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
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:251](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L251)

___

### list

▸ **list**(`contactId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationListResponse`](../modules/contact_conversation_v1.md#conversationlistresponse), [`ConversationListStreamItemType`](../modules/contact_conversation_v1.md#conversationliststreamitemtype)\>

Retrieves a list of all contact conversations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `request?` | [`ConversationListRequest`](../modules/contact_conversation_v1.md#conversationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ConversationListResponse`](../modules/contact_conversation_v1.md#conversationlistresponse), [`ConversationListStreamItemType`](../modules/contact_conversation_v1.md#conversationliststreamitemtype)\>

#### Defined in

[contact/conversation/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/conversation/index.js#L28)
