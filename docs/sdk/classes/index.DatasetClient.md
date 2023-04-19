[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / DatasetClient

# Class: DatasetClient

[index](../modules/index.md).DatasetClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`DatasetClient`**

## Table of contents

### Constructors

- [constructor](index.DatasetClient.md#constructor)

### Properties

- [secret](index.DatasetClient.md#secret)
- [url](index.DatasetClient.md#url)

### Methods

- [clientFetch](index.DatasetClient.md#clientfetch)

## Constructors

### constructor

• **new DatasetClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[dataset/index.js:7](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/dataset/index.js#L7)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:125](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/client.js#L125)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:127](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/client.js#L127)

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

[client.js:140](https://github.com/chatbotkit/node-sdk/blob/7f4f0d2/packages/sdk/src/client.js#L140)
