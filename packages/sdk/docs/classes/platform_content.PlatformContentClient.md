[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform/content](../modules/platform_content.md) / PlatformContentClient

# Class: PlatformContentClient

[platform/content](../modules/platform_content.md).PlatformContentClient

Platform content client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformContentClient`**

## Table of contents

### Constructors

- [constructor](platform_content.PlatformContentClient.md#constructor)

### Properties

- [doc](platform_content.PlatformContentClient.md#doc)
- [manual](platform_content.PlatformContentClient.md#manual)

### Methods

- [clientFetch](platform_content.PlatformContentClient.md#clientfetch)
- [extend](platform_content.PlatformContentClient.md#extend)

## Constructors

### constructor

• **new PlatformContentClient**(`options`): [`PlatformContentClient`](platform_content.PlatformContentClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformContentClient`](platform_content.PlatformContentClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/content/index.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/index.js#L12)

## Properties

### doc

• **doc**: [`PlatformContentDocClient`](platform_content_doc.PlatformContentDocClient.md)

#### Defined in

[platform/content/index.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/index.js#L18)

___

### manual

• **manual**: [`PlatformContentManualClient`](platform_content_manual.PlatformContentManualClient.md)

#### Defined in

[platform/content/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/index.js#L23)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:449](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L449)

___

### extend

▸ **extend**(`extensionOptions`): [`PlatformContentClient`](platform_content.PlatformContentClient.md)

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

[`PlatformContentClient`](platform_content.PlatformContentClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)
