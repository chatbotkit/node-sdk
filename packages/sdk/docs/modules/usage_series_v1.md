[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / usage/series/v1

# Module: usage/series/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](usage_series_v1.md#chatbotkitclient)
- [ResponsePromise](usage_series_v1.md#responsepromise)
- [UsageSeriesFetchResponse](usage_series_v1.md#usageseriesfetchresponse)
- [UsageSeriesInstance](usage_series_v1.md#usageseriesinstance)
- [UsageSeriesOptions](usage_series_v1.md#usageseriesoptions)

### Functions

- [fetchUsageSeries](usage_series_v1.md#fetchusageseries)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[usage/series/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[usage/series/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L8)

___

### UsageSeriesFetchResponse

Ƭ **UsageSeriesFetchResponse**\<\>: [`UsageSeriesInstance`](usage_series_v1.md#usageseriesinstance) & {}

#### Defined in

[usage/series/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L24)

___

### UsageSeriesInstance

Ƭ **UsageSeriesInstance**\<\>: [`UsageSeriesOptions`](usage_series_v1.md#usageseriesoptions) & {}

#### Defined in

[usage/series/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L19)

___

### UsageSeriesOptions

Ƭ **UsageSeriesOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conversations` | \{ `date`: `number` ; `total`: `number`  }[] |
| `messages` | \{ `date`: `number` ; `total`: `number`  }[] |
| `tokens` | \{ `date`: `number` ; `total`: `number`  }[] |

#### Defined in

[usage/series/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L16)

## Functions

### fetchUsageSeries

▸ **fetchUsageSeries**(`client`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`UsageSeriesOptions`](usage_series_v1.md#usageseriesoptions), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`UsageSeriesOptions`](usage_series_v1.md#usageseriesoptions), `never`\>

#### Defined in

[usage/series/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L29)
