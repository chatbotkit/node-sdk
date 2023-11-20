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
- [partner](index.ChatBotKit.md#partner)
- [secret](index.ChatBotKit.md#secret)
- [skillset](index.ChatBotKit.md#skillset)
- [url](index.ChatBotKit.md#url)

### Methods

- [clientFetch](index.ChatBotKit.md#clientfetch)

## Constructors

### constructor

• **new ChatBotKit**(`options`): [`ChatBotKit`](index.ChatBotKit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`ChatBotKit`](index.ChatBotKit.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[index.js:23](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/index.js#L23)

## Properties

### bot

• **bot**: [`BotClient`](bot.BotClient.md)

#### Defined in

[index.js:26](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/index.js#L26)

___

### conversation

• **conversation**: [`ConversationClient`](conversation.ConversationClient.md)

#### Defined in

[index.js:32](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/index.js#L32)

___

### dataset

• **dataset**: [`DatasetClient`](dataset.DatasetClient.md)

#### Defined in

[index.js:29](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/index.js#L29)

___

### file

• **file**: [`FileClient`](file.FileClient.md)

#### Defined in

[index.js:27](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/index.js#L27)

___

### integration

• **integration**: [`IntegrationClient`](integration.IntegrationClient.md)

#### Defined in

[index.js:31](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/index.js#L31)

___

### partner

• **partner**: [`PartnerClient`](partner.PartnerClient.md)

#### Defined in

[index.js:28](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/index.js#L28)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L187)

___

### skillset

• **skillset**: [`SkillsetClient`](skillset.SkillsetClient.md)

#### Defined in

[index.js:30](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/index.js#L30)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L189)

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

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L206)
