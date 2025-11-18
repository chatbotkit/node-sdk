[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [report](../README.md) / ReportClient

# Class: ReportClient

Defined in: [report/index.js:7](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/index.js#L7)

Report client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new ReportClient**(`options`): `ReportClient`

Defined in: [report/index.js:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/index.js#L11)

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

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

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

### fetch()

> **fetch**(`reportId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\>\>

Defined in: [report/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/index.js#L22)

Generates a report.

#### Parameters

##### reportId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\>\>

***

### fetchTyped()

> **fetchTyped**\<`T`\>(`reportId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ReportOutputTypes`\[`T`\]\>

Defined in: [report/index.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/index.js#L34)

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
