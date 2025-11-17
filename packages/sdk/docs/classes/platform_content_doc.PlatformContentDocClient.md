[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform/content/doc](../modules/platform_content_doc.md) / PlatformContentDocClient

# Class: PlatformContentDocClient

[platform/content/doc](../modules/platform_content_doc.md).PlatformContentDocClient

Platform content doc client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformContentDocClient`**

## Table of contents

### Constructors

- [constructor](platform_content_doc.PlatformContentDocClient.md#constructor)

### Methods

- [clientFetch](platform_content_doc.PlatformContentDocClient.md#clientfetch)
- [extend](platform_content_doc.PlatformContentDocClient.md#extend)
- [fetch](platform_content_doc.PlatformContentDocClient.md#fetch)
- [list](platform_content_doc.PlatformContentDocClient.md#list)
- [search](platform_content_doc.PlatformContentDocClient.md#search)

## Constructors

### constructor

• **new PlatformContentDocClient**(`options`): [`PlatformContentDocClient`](platform_content_doc.PlatformContentDocClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformContentDocClient`](platform_content_doc.PlatformContentDocClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/content/doc/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/doc/index.js#L21)

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

▸ **extend**(`extensionOptions`): [`PlatformContentDocClient`](platform_content_doc.PlatformContentDocClient.md)

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

[`PlatformContentDocClient`](platform_content_doc.PlatformContentDocClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`docId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a platform content doc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `docId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[platform/content/doc/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/doc/index.js#L51)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all platform content docs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PlatformContentDocListRequest`](../modules/platform_content_doc_v1.md#platformcontentdoclistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/content/doc/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/doc/index.js#L31)

___

### search

▸ **search**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Searches platform content docs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[platform/content/doc/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/doc/index.js#L41)
