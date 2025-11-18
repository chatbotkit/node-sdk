[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform/content/manual](../modules/platform_content_manual.md) / PlatformContentManualClient

# Class: PlatformContentManualClient

[platform/content/manual](../modules/platform_content_manual.md).PlatformContentManualClient

Platform content manual client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformContentManualClient`**

## Table of contents

### Constructors

- [constructor](platform_content_manual.PlatformContentManualClient.md#constructor)

### Methods

- [extend](platform_content_manual.PlatformContentManualClient.md#extend)
- [fetch](platform_content_manual.PlatformContentManualClient.md#fetch)
- [list](platform_content_manual.PlatformContentManualClient.md#list)
- [search](platform_content_manual.PlatformContentManualClient.md#search)

## Constructors

### constructor

• **new PlatformContentManualClient**(`options`): [`PlatformContentManualClient`](platform_content_manual.PlatformContentManualClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformContentManualClient`](platform_content_manual.PlatformContentManualClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/content/manual/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/index.js#L21)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`PlatformContentManualClient`](platform_content_manual.PlatformContentManualClient.md)

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

[`PlatformContentManualClient`](platform_content_manual.PlatformContentManualClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`manualId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a platform content manual.

#### Parameters

| Name | Type |
| :------ | :------ |
| `manualId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[platform/content/manual/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/index.js#L51)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all platform content manuals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PlatformContentManualListRequest`](../modules/platform_content_manual_v1.md#platformcontentmanuallistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/content/manual/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/index.js#L31)

___

### search

▸ **search**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Searches platform content manuals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[platform/content/manual/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/index.js#L41)
