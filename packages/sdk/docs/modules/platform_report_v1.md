[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/report/v1

# Module: platform/report/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_report_v1.md#chatbotkitclient)
- [PlatformReportListItem](platform_report_v1.md#platformreportlistitem)
- [PlatformReportListRequest](platform_report_v1.md#platformreportlistrequest)
- [PlatformReportListResponse](platform_report_v1.md#platformreportlistresponse)
- [PlatformReportListStreamType](platform_report_v1.md#platformreportliststreamtype)
- [ResponsePromise](platform_report_v1.md#responsepromise)

### Functions

- [listPlatformReports](platform_report_v1.md#listplatformreports)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[platform/report/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/report/v1.js#L2)

___

### PlatformReportListItem

Ƭ **PlatformReportListItem**\<\>: [`PlatformReportListResponse`](platform_report_v1.md#platformreportlistresponse)[``"items"``][`number`]

#### Defined in

[platform/report/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/report/v1.js#L21)

___

### PlatformReportListRequest

Ƭ **PlatformReportListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[platform/report/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/report/v1.js#L17)

___

### PlatformReportListResponse

Ƭ **PlatformReportListResponse**\<\>: `operations`[``"listPlatformReports"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/report/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/report/v1.js#L19)

___

### PlatformReportListStreamType

Ƭ **PlatformReportListStreamType**\<\>: `operations`[``"listPlatformReports"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[platform/report/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/report/v1.js#L23)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[platform/report/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/report/v1.js#L8)

## Functions

### listPlatformReports

▸ **listPlatformReports**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformReportListRequest`](platform_report_v1.md#platformreportlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/report/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/report/v1.js#L29)
