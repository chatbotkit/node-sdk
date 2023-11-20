[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation/session](../modules/conversation_session.md) / ConversationSessionClient

# Class: ConversationSessionClient

[conversation/session](../modules/conversation_session.md).ConversationSessionClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`ConversationSessionClient`**

## Table of contents

### Constructors

- [constructor](conversation_session.ConversationSessionClient.md#constructor)

### Properties

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
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[conversation/session/index.js:8](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/session/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/client.js#L189)

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

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/client.js#L206)

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

[conversation/session/index.js:19](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/conversation/session/index.js#L19)
