[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [report](../README.md) / ReportClient

# Class: ReportClient

Defined in: [report/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/report/index.js#L35)

Report client for generating analytics reports.

This client provides access to ChatBotKit's reporting system, which offers
various types of reports for analyzing conversations, usage, performance
metrics, and other platform data. Reports are identified by unique report IDs,
which can be discovered using the platform.report.list() method. Each report
may have different input parameters and output formats depending on the
specific analytics it provides.

## Examples

```ts
const client = new ReportClient({ secret: 'your-secret' })

// First, discover available reports
const reports = await client.platform.report.list()

// Then generate a specific report using its ID
const report = await client.generate('clr3m5n8k000508jq2j9k0l6f', {
  periodDays: 30
})

console.log(`Total conversations: ${report.value}`)
```

```ts
// Using typed reports for full type safety with total ratings
const report = await client.generateTyped('clr3m5n8k000008jq7h9e5b1a', {
  periodDays: 7
})

console.log(`Thumbs up: ${report.thumbsUp}, Thumbs down: ${report.thumbsDown}`)
```

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new ReportClient**(`options`): `ReportClient`

Defined in: [report/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/report/index.js#L39)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`ReportClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### extend()

> **extend**(`extensionOptions`): `ReportClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`ReportClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### generate()

> **generate**(`reportId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\>\>

Defined in: [report/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/report/index.js#L50)

Generates a report.

#### Parameters

##### reportId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\>\>

***

### generateTyped()

> **generateTyped**\<`T`\>(`reportId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ReportOutputTypes`\[`T`\]\>

Defined in: [report/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/report/index.js#L62)

Generates a typed report with full type safety for input and output.

#### Type Parameters

##### T

`T` *extends* `ReportId`

#### Parameters

##### reportId

`T`

The report ID

##### request

`ReportInputTypes`\[`T`\]

The report input

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ReportOutputTypes`\[`T`\]\>
