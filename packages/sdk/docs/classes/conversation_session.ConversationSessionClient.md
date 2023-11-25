[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation/session](../modules/conversation_session.md) / ConversationSessionClient

# Class: ConversationSessionClient

[conversation/session](../modules/conversation_session.md).ConversationSessionClient

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ConversationSessionClient`**

## Table of contents

### Constructors

- [constructor](conversation_session.ConversationSessionClient.md#constructor)

### Properties

- [endpoints](conversation_session.ConversationSessionClient.md#endpoints)
- [secret](conversation_session.ConversationSessionClient.md#secret)
- [url](conversation_session.ConversationSessionClient.md#url)

### Methods

- [clientFetch](conversation_session.ConversationSessionClient.md#clientfetch)
- [create](conversation_session.ConversationSessionClient.md#create)

## Constructors

### constructor

• **new ConversationSessionClient**(`options`): [`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[conversation/session/index.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/index.js#L8)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L201)

___

### secret

• **secret**: `string`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[secret](client.ChatBotKitClient.md#secret)

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L189)

___

### url

• **url**: `URL`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[url](client.ChatBotKitClient.md#url)

#### Defined in

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L191)

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

### create

▸ **create**(`conversationId`, `request`): `Promise`\<[`ConversationSessionCreateResponse`](../modules/conversation_session_v1.md#conversationsessioncreateresponse)\>

Creates a new session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`ConversationSessionCreateRequest`](../modules/conversation_session_v1.md#conversationsessioncreaterequest) |

#### Returns

`Promise`\<[`ConversationSessionCreateResponse`](../modules/conversation_session_v1.md#conversationsessioncreateresponse)\>

#### Defined in

[conversation/session/index.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/index.js#L19)
