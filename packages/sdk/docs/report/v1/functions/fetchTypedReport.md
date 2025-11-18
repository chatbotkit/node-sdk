[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [report/v1](../README.md) / fetchTypedReport

# Function: fetchTypedReport()

> **fetchTypedReport**\<`T`\>(`client`, `reportId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ReportOutputTypes`\[`T`\]\>

Defined in: [report/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/v1.js#L46)

Fetch a typed report with input and output type safety

## Type Parameters

### T

`T` *extends* `ReportId`

## Parameters

### client

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

### reportId

`T`

The report ID

### request

`ReportInputTypes`\[`T`\]

The report input

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ReportOutputTypes`\[`T`\]\>
