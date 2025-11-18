[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform](../modules/platform.md) / PlatformClient

# Class: PlatformClient

[platform](../modules/platform.md).PlatformClient

Platform client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformClient`**

## Table of contents

### Constructors

- [constructor](platform.PlatformClient.md#constructor)

### Properties

- [ability](platform.PlatformClient.md#ability)
- [action](platform.PlatformClient.md#action)
- [content](platform.PlatformClient.md#content)
- [example](platform.PlatformClient.md#example)
- [model](platform.PlatformClient.md#model)
- [report](platform.PlatformClient.md#report)
- [secret](platform.PlatformClient.md#secret)

### Methods

- [extend](platform.PlatformClient.md#extend)

## Constructors

### constructor

• **new PlatformClient**(`options`): [`PlatformClient`](platform.PlatformClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformClient`](platform.PlatformClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L17)

## Properties

### ability

• **ability**: [`PlatformAbilityClient`](platform_ability.PlatformAbilityClient.md)

#### Defined in

[platform/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L28)

___

### action

• **action**: [`PlatformActionClient`](platform_action.PlatformActionClient.md)

#### Defined in

[platform/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L33)

___

### content

• **content**: [`PlatformContentClient`](platform_content.PlatformContentClient.md)

#### Defined in

[platform/index.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L38)

___

### example

• **example**: [`PlatformExampleClient`](platform_example.PlatformExampleClient.md)

#### Defined in

[platform/index.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L48)

___

### model

• **model**: [`PlatformModelClient`](platform_model.PlatformModelClient.md)

#### Defined in

[platform/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L23)

___

### report

• **report**: [`PlatformReportClient`](platform_report.PlatformReportClient.md)

#### Defined in

[platform/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L53)

___

### secret

• **secret**: [`PlatformSecretClient`](platform_secret.PlatformSecretClient.md)

#### Defined in

[platform/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L43)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`PlatformClient`](platform.PlatformClient.md)

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

[`PlatformClient`](platform.PlatformClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)
