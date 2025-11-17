[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/widget](../modules/integration_widget.md) / WidgetIntegrationClient

# Class: WidgetIntegrationClient

[integration/widget](../modules/integration_widget.md).WidgetIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`WidgetIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_widget.WidgetIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_widget.WidgetIntegrationClient.md#clientfetch)
- [create](integration_widget.WidgetIntegrationClient.md#create)
- [delete](integration_widget.WidgetIntegrationClient.md#delete)
- [extend](integration_widget.WidgetIntegrationClient.md#extend)
- [fetch](integration_widget.WidgetIntegrationClient.md#fetch)
- [list](integration_widget.WidgetIntegrationClient.md#list)
- [setup](integration_widget.WidgetIntegrationClient.md#setup)
- [update](integration_widget.WidgetIntegrationClient.md#update)

## Constructors

### constructor

• **new WidgetIntegrationClient**(`options`): [`WidgetIntegrationClient`](integration_widget.WidgetIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`WidgetIntegrationClient`](integration_widget.WidgetIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/widget/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L21)

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

Creates a new widget integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/widget/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L51)

___

### delete

▸ **delete**(`widgetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a widget integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `widgetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/widget/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L72)

___

### extend

▸ **extend**(`extensionOptions`): [`WidgetIntegrationClient`](integration_widget.WidgetIntegrationClient.md)

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

[`WidgetIntegrationClient`](integration_widget.WidgetIntegrationClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`widgetId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a widget integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `widgetId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/widget/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all widget integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`WidgetIntegrationListRequest`](../modules/integration_widget_v1.md#widgetintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/widget/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L31)

___

### setup

▸ **setup**(`widgetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Sets up a widget integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `widgetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/widget/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L82)

___

### update

▸ **update**(`widgetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a widget integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `widgetId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/widget/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L62)
