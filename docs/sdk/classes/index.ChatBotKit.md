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
- [file](index.ChatBotKit.md#file)
- [integration](index.ChatBotKit.md#integration)
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

[index.js:20](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/index.js#L20)

## Properties

### bot

• **bot**: [`BotClient`](bot.BotClient.md)

#### Defined in

[index.js:23](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/index.js#L23)

___

### conversation

• **conversation**: [`ConversationClient`](conversation.ConversationClient.md)

#### Defined in

[index.js:28](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/index.js#L28)

___

### dataset

• **dataset**: [`DatasetClient`](dataset.DatasetClient.md)

#### Defined in

[index.js:25](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/index.js#L25)

___

### file

• **file**: [`FileClient`](file.FileClient.md)

#### Defined in

[index.js:24](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/index.js#L24)

___

### integration

• **integration**: [`IntegrationClient`](integration.IntegrationClient.md)

#### Defined in

[index.js:27](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/index.js#L27)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:182](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/client.js#L182)

___

### skillset

• **skillset**: [`SkillsetClient`](skillset.SkillsetClient.md)

#### Defined in

[index.js:26](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/index.js#L26)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:184](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/client.js#L184)

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

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/client.js#L201)
