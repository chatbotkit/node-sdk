[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [usage](../modules/usage.md) / UsageClient

# Class: UsageClient

[usage](../modules/usage.md).UsageClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`UsageClient`**

## Table of contents

### Constructors

- [constructor](usage.UsageClient.md#constructor)

### Properties

- [series](usage.UsageClient.md#series)

### Methods

- [clientFetch](usage.UsageClient.md#clientfetch)
- [fetch](usage.UsageClient.md#fetch)

## Constructors

### constructor

• **new UsageClient**(`options`): [`UsageClient`](usage.UsageClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`UsageClient`](usage.UsageClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[usage/index.js:15](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/index.js#L15)

## Properties

### series

• **series**: [`UsageSeriesClient`](usage_series.UsageSeriesClient.md)

#### Defined in

[usage/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/index.js#L21)

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
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:331](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L331)

___

### fetch

▸ **fetch**(): [`ResponsePromise`](client.ResponsePromise.md)\<[`UsageOptions`](../modules/usage_v1.md#usageoptions), `never`\>

Fetches usage.

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`UsageOptions`](../modules/usage_v1.md#usageoptions), `never`\>

#### Defined in

[usage/index.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/index.js#L29)
