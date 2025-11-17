[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / report/v1

# Module: report/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](report_v1.md#chatbotkitclient)
- [ReportFetchRequest](report_v1.md#reportfetchrequest)
- [ReportFetchRequestBody](report_v1.md#reportfetchrequestbody)
- [ReportFetchResponse](report_v1.md#reportfetchresponse)

### Functions

- [fetchReport](report_v1.md#fetchreport)
- [fetchTypedReport](report_v1.md#fetchtypedreport)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[report/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L2)

___

### ReportFetchRequest

Ƭ **ReportFetchRequest**\<\>: [`ReportFetchRequestBody`](report_v1.md#reportfetchrequestbody)

#### Defined in

[report/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L8)

___

### ReportFetchRequestBody

Ƭ **ReportFetchRequestBody**\<\>: `operations`[``"fetchReport"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[report/v1.js:6](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L6)

___

### ReportFetchResponse

Ƭ **ReportFetchResponse**\<\>: `operations`[``"fetchReport"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[report/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L10)

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

[report/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L17)

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

[report/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L46)
