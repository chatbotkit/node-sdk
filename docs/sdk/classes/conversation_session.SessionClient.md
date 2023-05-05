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

[conversation/session/index.js:8](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/conversation/session/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:130](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/client.js#L130)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:132](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/client.js#L132)

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

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:149](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/client.js#L149)

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

[conversation/session/index.js:18](https://github.com/chatbotkit/node-sdk/blob/dcc2aa9/packages/sdk/src/conversation/session/index.js#L18)
