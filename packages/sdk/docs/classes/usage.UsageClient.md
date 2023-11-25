[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [usage](../modules/usage.md) / UsageClient

# Class: UsageClient

[usage](../modules/usage.md).UsageClient

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`UsageClient`**

## Table of contents

### Constructors

- [constructor](usage.UsageClient.md#constructor)

### Methods

- [clientFetch](usage.UsageClient.md#clientfetch)
- [fetch](usage.UsageClient.md#fetch)

## Constructors

### constructor

• **new UsageClient**(`options`): [`UsageClient`](usage.UsageClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`UsageClient`](usage.UsageClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[usage/index.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/index.js#L8)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

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

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L211)

___

### fetch

▸ **fetch**(): `Promise`\<[`UsageOptions`](../modules/usage_v1.md#usageoptions)\>

Fetches usage.

#### Returns

`Promise`\<[`UsageOptions`](../modules/usage_v1.md#usageoptions)\>

#### Defined in

[usage/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/index.js#L17)
