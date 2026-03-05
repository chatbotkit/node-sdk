[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [platform/report](../README.md) / PlatformReportClient

# Class: PlatformReportClient

Defined in: [platform/report/index.js:18](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/report/index.js#L18)

Platform Report client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PlatformReportClient**(`options`): `PlatformReportClient`

Defined in: [platform/report/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/report/index.js#L22)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PlatformReportClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### extend()

> **extend**(`extensionOptions`): `PlatformReportClient`

Defined in: [client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L390)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`PlatformReportClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### generate()

> **generate**(`reportId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\>\>

Defined in: [platform/report/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/report/index.js#L43)

Generates a specific report.

#### Parameters

##### reportId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\>\>

***

### generateBatch()

> **generateBatch**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{\[`key`: `string`\]: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\> \| \{ \}; \}\>

Defined in: [platform/report/index.js:65](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/report/index.js#L65)

Generates multiple reports in a single request.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{\[`key`: `string`\]: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\> \| \{ \}; \}\>

***

### generateTyped()

> **generateTyped**\<`T`\>(`reportId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ReportOutputTypes`\[`T`\]\>

Defined in: [platform/report/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/report/index.js#L55)

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

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [platform/report/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/platform/report/index.js#L32)

Retrieves a list of all available reports.

#### Parameters

##### request?

[`PlatformReportListRequest`](../v1/type-aliases/PlatformReportListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>
