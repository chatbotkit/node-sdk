[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [usage](../modules/usage.md) / UsageClient

# Class: UsageClient

[usage](../modules/usage.md).UsageClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`UsageClient`**

## Table of contents

### Constructors

- [constructor](usage.UsageClient.md#constructor)

### Properties

- [series](usage.UsageClient.md#series)

### Methods

- [extend](usage.UsageClient.md#extend)
- [fetch](usage.UsageClient.md#fetch)

## Constructors

### constructor

• **new UsageClient**(`options`): [`UsageClient`](usage.UsageClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`UsageClient`](usage.UsageClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[usage/index.js:15](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/index.js#L15)

## Properties

### series

• **series**: [`UsageSeriesClient`](usage_series.UsageSeriesClient.md)

#### Defined in

[usage/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/index.js#L21)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`UsageClient`](usage.UsageClient.md)

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

[`UsageClient`](usage.UsageClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches usage.

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[usage/index.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/index.js#L29)
