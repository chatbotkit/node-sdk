[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform/model](../modules/platform_model.md) / PlatformModelClient

# Class: PlatformModelClient

[platform/model](../modules/platform_model.md).PlatformModelClient

Model client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformModelClient`**

## Table of contents

### Constructors

- [constructor](platform_model.PlatformModelClient.md#constructor)

### Methods

- [extend](platform_model.PlatformModelClient.md#extend)
- [list](platform_model.PlatformModelClient.md#list)

## Constructors

### constructor

• **new PlatformModelClient**(`options`): [`PlatformModelClient`](platform_model.PlatformModelClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformModelClient`](platform_model.PlatformModelClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/model/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/index.js#L17)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`PlatformModelClient`](platform_model.PlatformModelClient.md)

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

[`PlatformModelClient`](platform_model.PlatformModelClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all platform models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PlatformModelListRequest`](../modules/platform_model_v1.md#platformmodellistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/model/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/index.js#L27)
