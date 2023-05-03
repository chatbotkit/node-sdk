[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / ChatBotKit

# Class: ChatBotKit

[index](../modules/index.md).ChatBotKit

## Hierarchy

- `ChatBotKitClient`

  ↳ **`ChatBotKit`**

## Table of contents

### Constructors

- [constructor](index.ChatBotKit.md#constructor)

### Properties

- [bot](index.ChatBotKit.md#bot)
- [conversation](index.ChatBotKit.md#conversation)
- [dataset](index.ChatBotKit.md#dataset)
- [secret](index.ChatBotKit.md#secret)
- [skillset](index.ChatBotKit.md#skillset)
- [url](index.ChatBotKit.md#url)

### Methods

- [clientFetch](index.ChatBotKit.md#clientfetch)

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

[index.js:17](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/index.js#L17)

## Properties

### bot

• **bot**: [`BotClient`](bot.BotClient.md)

#### Defined in

[index.js:20](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/index.js#L20)

___

### conversation

• **conversation**: [`ConversationClient`](conversation.ConversationClient.md)

#### Defined in

[index.js:23](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/index.js#L23)

___

### dataset

• **dataset**: [`DatasetClient`](dataset.DatasetClient.md)

#### Defined in

[index.js:21](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/index.js#L21)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:130](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/client.js#L130)

___

### skillset

• **skillset**: [`SkillsetClient`](skillset.SkillsetClient.md)

#### Defined in

[index.js:22](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/index.js#L22)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:132](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/client.js#L132)

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

[client.js:149](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/client.js#L149)
