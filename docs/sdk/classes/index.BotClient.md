[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / BotClient

# Class: BotClient

[index](../modules/index.md).BotClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`BotClient`**

## Table of contents

### Constructors

- [constructor](index.BotClient.md#constructor)

### Properties

- [secret](index.BotClient.md#secret)
- [url](index.BotClient.md#url)

### Methods

- [clientFetch](index.BotClient.md#clientfetch)

## Constructors

### constructor

• **new BotClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

bot/index.js:7

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:125](https://github.com/chatbotkit/node-sdk/blob/7c74fe0/packages/sdk/src/client.js#L125)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:127](https://github.com/chatbotkit/node-sdk/blob/7c74fe0/packages/sdk/src/client.js#L127)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `D`\>(`path`, `options?`): `ResponsePromise`<`T`, `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`ResponsePromise`<`T`, `D`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:140](https://github.com/chatbotkit/node-sdk/blob/7c74fe0/packages/sdk/src/client.js#L140)
