[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/support](../modules/integration_support.md) / SupportIntegrationClient

# Class: SupportIntegrationClient

[integration/support](../modules/integration_support.md).SupportIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SupportIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_support.SupportIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_support.SupportIntegrationClient.md#clientfetch)
- [create](integration_support.SupportIntegrationClient.md#create)
- [delete](integration_support.SupportIntegrationClient.md#delete)
- [extend](integration_support.SupportIntegrationClient.md#extend)
- [fetch](integration_support.SupportIntegrationClient.md#fetch)
- [list](integration_support.SupportIntegrationClient.md#list)
- [update](integration_support.SupportIntegrationClient.md#update)

## Constructors

### constructor

• **new SupportIntegrationClient**(`options`): [`SupportIntegrationClient`](integration_support.SupportIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`SupportIntegrationClient`](integration_support.SupportIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/support/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L20)

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

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new support integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/support/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L50)

___

### delete

▸ **delete**(`supportId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a support integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `supportId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/support/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L71)

___

### extend

▸ **extend**(`extensionOptions`): [`SupportIntegrationClient`](integration_support.SupportIntegrationClient.md)

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

[`SupportIntegrationClient`](integration_support.SupportIntegrationClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`supportId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a support integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `supportId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/support/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L40)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all support integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`SupportIntegrationListRequest`](../modules/integration_support_v1.md#supportintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/support/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L30)

___

### update

▸ **update**(`supportId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a support integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `supportId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/support/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L61)
