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

• **new UsageClient**(`options`): [`UsageClient`](usage.UsageClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`UsageClient`](usage.UsageClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[usage/index.js:8](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/usage/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L189)

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

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L206)

___

### fetch

▸ **fetch**(): `Promise`\<[`UsageOptions`](../modules/usage_v1.md#usageoptions)\>

Fetches usage.

#### Returns

`Promise`\<[`UsageOptions`](../modules/usage_v1.md#usageoptions)\>

#### Defined in

[usage/index.js:17](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/usage/index.js#L17)
