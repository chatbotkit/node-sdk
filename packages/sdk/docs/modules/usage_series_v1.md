[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / usage/series/v1

# Module: usage/series/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](usage_series_v1.md#chatbotkitclient)
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

### UsageSeriesFetchResponse

Ƭ **UsageSeriesFetchResponse**\<\>: [`UsageSeriesInstance`](usage_series_v1.md#usageseriesinstance) & {}

#### Defined in

[usage/series/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L18)

___

### UsageSeriesInstance

Ƭ **UsageSeriesInstance**\<\>: [`UsageSeriesOptions`](usage_series_v1.md#usageseriesoptions) & {}

#### Defined in

[usage/series/v1.js:13](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L13)

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

[usage/series/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L10)

## Functions

### fetchUsageSeries

▸ **fetchUsageSeries**(`client`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`UsageSeriesOptions`](usage_series_v1.md#usageseriesoptions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`UsageSeriesOptions`](usage_series_v1.md#usageseriesoptions)\>

#### Defined in

[usage/series/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L23)
