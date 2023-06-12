[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation/session](../modules/conversation_session.md) / SessionClient

# Class: SessionClient

[conversation/session](../modules/conversation_session.md).SessionClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`SessionClient`**

## Table of contents

### Constructors

- [constructor](conversation_session.SessionClient.md#constructor)

### Properties

- [secret](conversation_session.SessionClient.md#secret)
- [url](conversation_session.SessionClient.md#url)

### Methods

- [clientFetch](conversation_session.SessionClient.md#clientfetch)
- [create](conversation_session.SessionClient.md#create)

## Constructors

### constructor

• **new SessionClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[conversation/session/index.js:8](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/session/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:155](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/client.js#L155)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:157](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/client.js#L157)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `U`\>(`path`, `options?`): `ResponsePromise`<`T`, `U`\>

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
| `options.data?` | `Record`<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:174](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/client.js#L174)

___

### create

▸ **create**(`conversationId`, `request`): `Promise`<[`SessionCreateResponse`](../modules/conversation_session_v1.md#sessioncreateresponse)\>

Creates a new session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | [`SessionCreateRequest`](../modules/conversation_session_v1.md#sessioncreaterequest) |

#### Returns

`Promise`<[`SessionCreateResponse`](../modules/conversation_session_v1.md#sessioncreateresponse)\>

#### Defined in

[conversation/session/index.js:19](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/conversation/session/index.js#L19)
