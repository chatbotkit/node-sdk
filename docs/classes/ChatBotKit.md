[@chatbotkit/sdk](../README.md) / [Exports](../modules.md) / ChatBotKit

# Class: ChatBotKit

## Hierarchy

- `ChatBotKitClient`

  ↳ **`ChatBotKit`**

## Table of contents

### Constructors

- [constructor](ChatBotKit.md#constructor)

### Properties

- [conversation](ChatBotKit.md#conversation)
- [secret](ChatBotKit.md#secret)

### Methods

- [clientFetch](ChatBotKit.md#clientfetch)

## Constructors

### constructor

• **new ChatBotKit**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[index.js:8](https://github.com/chatbotkit/node-sdk/blob/92d702c/lib/index.js#L8)

## Properties

### conversation

• **conversation**: [`ConversationClient`](ConversationClient.md)

#### Defined in

[index.js:11](https://github.com/chatbotkit/node-sdk/blob/92d702c/lib/index.js#L11)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:12](https://github.com/chatbotkit/node-sdk/blob/92d702c/lib/client.js#L12)

## Methods

### clientFetch

▸ **clientFetch**<`T`\>(`url`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:21](https://github.com/chatbotkit/node-sdk/blob/92d702c/lib/client.js#L21)
