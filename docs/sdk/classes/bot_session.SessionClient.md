[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [bot/session](../modules/bot_session.md) / SessionClient

# Class: SessionClient

[bot/session](../modules/bot_session.md).SessionClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`SessionClient`**

## Table of contents

### Constructors

- [constructor](bot_session.SessionClient.md#constructor)

### Properties

- [secret](bot_session.SessionClient.md#secret)
- [url](bot_session.SessionClient.md#url)

### Methods

- [clientFetch](bot_session.SessionClient.md#clientfetch)
- [create](bot_session.SessionClient.md#create)

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

[bot/session/index.js:8](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/bot/session/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:135](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/client.js#L135)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:137](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/client.js#L137)

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

[client.js:154](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/client.js#L154)

___

### create

▸ **create**(`botId`, `request`): `Promise`<[`SessionCreateResponse`](../modules/bot_session_v1.md#sessioncreateresponse)\>

Creates a new session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `botId` | `string` |
| `request` | [`SessionCreateRequest`](../modules/bot_session_v1.md#sessioncreaterequest) |

#### Returns

`Promise`<[`SessionCreateResponse`](../modules/bot_session_v1.md#sessioncreateresponse)\>

#### Defined in

[bot/session/index.js:18](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/bot/session/index.js#L18)
