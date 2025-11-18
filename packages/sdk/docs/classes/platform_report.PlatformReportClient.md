[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform/report](../modules/platform_report.md) / PlatformReportClient

# Class: PlatformReportClient

[platform/report](../modules/platform_report.md).PlatformReportClient

Platform Report client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformReportClient`**

## Table of contents

### Constructors

- [constructor](platform_report.PlatformReportClient.md#constructor)

### Methods

- [extend](platform_report.PlatformReportClient.md#extend)
- [list](platform_report.PlatformReportClient.md#list)

## Constructors

### constructor

• **new PlatformReportClient**(`options`): [`PlatformReportClient`](platform_report.PlatformReportClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformReportClient`](platform_report.PlatformReportClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/report/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/report/index.js#L17)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`PlatformReportClient`](platform_report.PlatformReportClient.md)

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

[`PlatformReportClient`](platform_report.PlatformReportClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all available reports.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PlatformReportListRequest`](../modules/platform_report_v1.md#platformreportlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/report/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/report/index.js#L27)
