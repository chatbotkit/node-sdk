[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [usage](../modules/usage.md) / UsageClient

# Class: UsageClient

[usage](../modules/usage.md).UsageClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`UsageClient`**

## Table of contents

### Constructors

- [constructor](usage.UsageClient.md#constructor)

### Properties

- [secret](usage.UsageClient.md#secret)
- [url](usage.UsageClient.md#url)

### Methods

- [clientFetch](usage.UsageClient.md#clientfetch)
- [fetch](usage.UsageClient.md#fetch)

## Constructors

### constructor

• **new UsageClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[usage/index.js:8](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/usage/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:182](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/client.js#L182)

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

___

### fetch

▸ **fetch**(): `Promise`<[`UsageInstance`](../modules/usage_v1.md#usageinstance)\>

Fetches usage.

#### Returns

`Promise`<[`UsageInstance`](../modules/usage_v1.md#usageinstance)\>

#### Defined in

[usage/index.js:17](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/usage/index.js#L17)
