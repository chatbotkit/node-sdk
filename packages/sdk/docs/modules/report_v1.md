[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / report/v1

# Module: report/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](report_v1.md#chatbotkitclient)
- [ReportFetchRequest](report_v1.md#reportfetchrequest)
- [ReportFetchRequestBody](report_v1.md#reportfetchrequestbody)
- [ReportFetchResponse](report_v1.md#reportfetchresponse)
- [ReportListRequest](report_v1.md#reportlistrequest)
- [ReportListResponse](report_v1.md#reportlistresponse)
- [ReportListStreamType](report_v1.md#reportliststreamtype)
- [ResponsePromise](report_v1.md#responsepromise)

### Functions

- [fetchReport](report_v1.md#fetchreport)
- [fetchTypedReport](report_v1.md#fetchtypedreport)
- [listReports](report_v1.md#listreports)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[report/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L2)

___

### ReportFetchRequest

Ƭ **ReportFetchRequest**\<\>: [`ReportFetchRequestBody`](report_v1.md#reportfetchrequestbody)

#### Defined in

[report/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L39)

___

### ReportFetchRequestBody

Ƭ **ReportFetchRequestBody**\<\>: `operations`[``"fetchReport"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[report/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L37)

___

### ReportFetchResponse

Ƭ **ReportFetchResponse**\<\>: `operations`[``"fetchReport"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[report/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L41)

___

### ReportListRequest

Ƭ **ReportListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[report/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L17)

___

### ReportListResponse

Ƭ **ReportListResponse**\<\>: `operations`[``"listReports"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[report/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L19)

___

### ReportListStreamType

Ƭ **ReportListStreamType**\<\>: `operations`[``"listReports"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[report/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L21)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[report/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L8)

## Functions

### fetchReport

▸ **fetchReport**(`client`, `reportId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `reportId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\>\>

#### Defined in

[report/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L48)

___

### fetchTypedReport

▸ **fetchTypedReport**\<`T`\>(`client`, `reportId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ReportOutputTypes`[`T`]\>

Fetch a typed report with input and output type safety

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ReportId` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |  |
| `reportId` | `T` | The report ID |
| `request` | `ReportInputTypes`[`T`] | The report input |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ReportOutputTypes`[`T`]\>

#### Defined in

[report/v1.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L77)

___

### listReports

▸ **listReports**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`ReportListRequest`](report_v1.md#reportlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[report/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L27)
