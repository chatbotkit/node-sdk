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
- [fetch](integration_widget.WidgetIntegrationClient.md#fetch)
- [list](integration_widget.WidgetIntegrationClient.md#list)
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

[integration/widget/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L20)

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

[client.js:308](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L308)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationCreateResponse`](../modules/integration_widget_v1.md#widgetintegrationcreateresponse)\>

Creates a new widget integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`WidgetIntegrationOptions`](../modules/integration_widget_v1.md#widgetintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationCreateResponse`](../modules/integration_widget_v1.md#widgetintegrationcreateresponse)\>

#### Defined in

[integration/widget/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L50)

___

### delete

▸ **delete**(`widgetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationDeleteResponse`](../modules/integration_widget_v1.md#widgetintegrationdeleteresponse)\>

Deletes a widget integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `widgetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationDeleteResponse`](../modules/integration_widget_v1.md#widgetintegrationdeleteresponse)\>

#### Defined in

[integration/widget/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L71)

___

### fetch

▸ **fetch**(`widgetId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`WidgetIntegrationFetchResponse`](../modules/integration_widget_v1.md#widgetintegrationfetchresponse), `never`\>

Fetches a widget integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `widgetId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`WidgetIntegrationFetchResponse`](../modules/integration_widget_v1.md#widgetintegrationfetchresponse), `never`\>

#### Defined in

[integration/widget/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L40)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`WidgetIntegrationListResponse`](../modules/integration_widget_v1.md#widgetintegrationlistresponse), [`WidgetIntegrationListStreamItem`](../modules/integration_widget_v1.md#widgetintegrationliststreamitem)\>

Retrieves a list of all widget integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`WidgetIntegrationListRequest`](../modules/integration_widget_v1.md#widgetintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`WidgetIntegrationListResponse`](../modules/integration_widget_v1.md#widgetintegrationlistresponse), [`WidgetIntegrationListStreamItem`](../modules/integration_widget_v1.md#widgetintegrationliststreamitem)\>

#### Defined in

[integration/widget/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L30)

___

### update

▸ **update**(`widgetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationUpdateResponse`](../modules/integration_widget_v1.md#widgetintegrationupdateresponse)\>

Updates a widget integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `widgetId` | `string` |
| `request` | [`WidgetIntegrationOptions`](../modules/integration_widget_v1.md#widgetintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationUpdateResponse`](../modules/integration_widget_v1.md#widgetintegrationupdateresponse)\>

#### Defined in

[integration/widget/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/index.js#L61)
