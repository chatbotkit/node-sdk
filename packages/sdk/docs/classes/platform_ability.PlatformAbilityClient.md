[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform/ability](../modules/platform_ability.md) / PlatformAbilityClient

# Class: PlatformAbilityClient

[platform/ability](../modules/platform_ability.md).PlatformAbilityClient

Ability client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformAbilityClient`**

## Table of contents

### Constructors

- [constructor](platform_ability.PlatformAbilityClient.md#constructor)

### Methods

- [extend](platform_ability.PlatformAbilityClient.md#extend)
- [list](platform_ability.PlatformAbilityClient.md#list)

## Constructors

### constructor

• **new PlatformAbilityClient**(`options`): [`PlatformAbilityClient`](platform_ability.PlatformAbilityClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformAbilityClient`](platform_ability.PlatformAbilityClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/ability/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/index.js#L17)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`PlatformAbilityClient`](platform_ability.PlatformAbilityClient.md)

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

[`PlatformAbilityClient`](platform_ability.PlatformAbilityClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all platform abilities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PlatformAbilityListRequest`](../modules/platform_ability_v1.md#platformabilitylistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/ability/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/index.js#L27)
