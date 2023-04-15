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
- [url](ChatBotKit.md#url)

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

index.js:8

## Properties

### conversation

• **conversation**: [`ConversationClient`](ConversationClient.md)

#### Defined in

index.js:11

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

client.js:15

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

client.js:17

## Methods

### clientFetch

▸ **clientFetch**<`T`\>(`path`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

client.js:28
