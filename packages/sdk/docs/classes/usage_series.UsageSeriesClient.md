[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [usage/series](../modules/usage_series.md) / UsageSeriesClient

# Class: UsageSeriesClient

[usage/series](../modules/usage_series.md).UsageSeriesClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`UsageSeriesClient`**

## Table of contents

### Constructors

- [constructor](usage_series.UsageSeriesClient.md#constructor)

### Methods

- [clientFetch](usage_series.UsageSeriesClient.md#clientfetch)
- [fetch](usage_series.UsageSeriesClient.md#fetch)

## Constructors

### constructor

• **new UsageSeriesClient**(`options`): [`UsageSeriesClient`](usage_series.UsageSeriesClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`UsageSeriesClient`](usage_series.UsageSeriesClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[usage/series/index.js:14](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/index.js#L14)

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

[client.js:308](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L308)

___

### fetch

▸ **fetch**(): [`ResponsePromise`](client.ResponsePromise.md)\<[`UsageSeriesOptions`](../modules/usage_series_v1.md#usageseriesoptions), `never`\>

Fetches usage.

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`UsageSeriesOptions`](../modules/usage_series_v1.md#usageseriesoptions), `never`\>

#### Defined in

[usage/series/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/index.js#L23)
