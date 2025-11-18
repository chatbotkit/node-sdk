[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform/secret](../modules/platform_secret.md) / PlatformSecretClient

# Class: PlatformSecretClient

[platform/secret](../modules/platform_secret.md).PlatformSecretClient

Secret client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformSecretClient`**

## Table of contents

### Constructors

- [constructor](platform_secret.PlatformSecretClient.md#constructor)

### Methods

- [extend](platform_secret.PlatformSecretClient.md#extend)
- [list](platform_secret.PlatformSecretClient.md#list)

## Constructors

### constructor

• **new PlatformSecretClient**(`options`): [`PlatformSecretClient`](platform_secret.PlatformSecretClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformSecretClient`](platform_secret.PlatformSecretClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/secret/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/index.js#L17)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`PlatformSecretClient`](platform_secret.PlatformSecretClient.md)

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

[`PlatformSecretClient`](platform_secret.PlatformSecretClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all platform secrets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PlatformSecretListRequest`](../modules/platform_secret_v1.md#platformsecretlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/secret/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/index.js#L27)
