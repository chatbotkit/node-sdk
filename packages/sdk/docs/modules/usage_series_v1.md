[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / usage/series/v1

# Module: usage/series/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](usage_series_v1.md#chatbotkitclient)
- [ResponsePromise](usage_series_v1.md#responsepromise)
- [UsageSeriesFetchResponse](usage_series_v1.md#usageseriesfetchresponse)

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

Ƭ **UsageSeriesFetchResponse**\<\>: `operations`[``"fetchUsageSeries"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[usage/series/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L12)

## Functions

### fetchUsageSeries

▸ **fetchUsageSeries**(`client`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[usage/series/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/series/v1.js#L17)
