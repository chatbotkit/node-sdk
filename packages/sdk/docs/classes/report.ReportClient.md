[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [report](../modules/report.md) / ReportClient

# Class: ReportClient

[report](../modules/report.md).ReportClient

Report client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ReportClient`**

## Table of contents

### Constructors

- [constructor](report.ReportClient.md#constructor)

### Methods

- [extend](report.ReportClient.md#extend)
- [fetch](report.ReportClient.md#fetch)
- [fetchTyped](report.ReportClient.md#fetchtyped)

## Constructors

### constructor

• **new ReportClient**(`options`): [`ReportClient`](report.ReportClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ReportClient`](report.ReportClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[report/index.js:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/index.js#L11)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`ReportClient`](report.ReportClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`ReportClient`](report.ReportClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`reportId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\>\>

Generates a report.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reportId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\>\>

#### Defined in

[report/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/index.js#L22)

___

### fetchTyped

▸ **fetchTyped**\<`T`\>(`reportId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ReportOutputTypes`[`T`]\>

Generates a typed report with full type safety for input and output.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ReportId` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reportId` | `T` | The report ID |
| `request` | `ReportInputTypes`[`T`] | The report input |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ReportOutputTypes`[`T`]\>

#### Defined in

[report/index.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/report/index.js#L34)
