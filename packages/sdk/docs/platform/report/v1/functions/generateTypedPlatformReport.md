[**@chatbotkit/sdk**](../../../../README.md)

***

[@chatbotkit/sdk](../../../../modules.md) / [platform/report/v1](../README.md) / generateTypedPlatformReport

# Function: generateTypedPlatformReport()

> **generateTypedPlatformReport**\<`T`\>(`client`, `reportId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ReportOutputTypes`\[`T`\]\>

Defined in: [platform/report/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/report/v1.js#L79)

Generate a typed platform report with input and output type safety

## Type Parameters

### T

`T` *extends* `ReportId`

## Parameters

### client

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md)

### reportId

`T`

The report ID

### request

`ReportInputTypes`\[`T`\]

The report input

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ReportOutputTypes`\[`T`\]\>
