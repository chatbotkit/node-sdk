[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation/session](../modules/conversation_session.md) / ConversationSessionClient

# Class: ConversationSessionClient

[conversation/session](../modules/conversation_session.md).ConversationSessionClient

Conversation session client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ConversationSessionClient`**

## Table of contents

### Constructors

- [constructor](conversation_session.ConversationSessionClient.md#constructor)

### Methods

- [clientFetch](conversation_session.ConversationSessionClient.md#clientfetch)
- [create](conversation_session.ConversationSessionClient.md#create)

## Constructors

### constructor

• **new ConversationSessionClient**(`options`): [`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[conversation/session/index.js:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/index.js#L11)

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

[client.js:254](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L254)

___

### create

▸ **create**(`conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationSessionCreateResponse`](../modules/conversation_session_v1.md#conversationsessioncreateresponse)\>

Creates a new session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationSessionCreateRequest`](../modules/conversation_session_v1.md#conversationsessioncreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ConversationSessionCreateResponse`](../modules/conversation_session_v1.md#conversationsessioncreateresponse)\>

#### Defined in

[conversation/session/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/index.js#L22)
