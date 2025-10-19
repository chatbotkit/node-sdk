[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/widget/v1

# Module: integration/widget/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_widget_v1.md#chatbotkitclient)
- [ResponsePromise](integration_widget_v1.md#responsepromise)
- [WidgetInegrationInstance](integration_widget_v1.md#widgetinegrationinstance)
- [WidgetIntegrationCreateRequest](integration_widget_v1.md#widgetintegrationcreaterequest)
- [WidgetIntegrationCreateResponse](integration_widget_v1.md#widgetintegrationcreateresponse)
- [WidgetIntegrationDeleteResponse](integration_widget_v1.md#widgetintegrationdeleteresponse)
- [WidgetIntegrationFetchResponse](integration_widget_v1.md#widgetintegrationfetchresponse)
- [WidgetIntegrationListRequest](integration_widget_v1.md#widgetintegrationlistrequest)
- [WidgetIntegrationListResponse](integration_widget_v1.md#widgetintegrationlistresponse)
- [WidgetIntegrationListStreamItem](integration_widget_v1.md#widgetintegrationliststreamitem)
- [WidgetIntegrationListStreamType](integration_widget_v1.md#widgetintegrationliststreamtype)
- [WidgetIntegrationOptions](integration_widget_v1.md#widgetintegrationoptions)
- [WidgetIntegrationUpdateRequest](integration_widget_v1.md#widgetintegrationupdaterequest)
- [WidgetIntegrationUpdateResponse](integration_widget_v1.md#widgetintegrationupdateresponse)

### Functions

- [createWidgetIntegration](integration_widget_v1.md#createwidgetintegration)
- [deleteWidgetIntegration](integration_widget_v1.md#deletewidgetintegration)
- [fetchWidgetIntegration](integration_widget_v1.md#fetchwidgetintegration)
- [listWidgetIntegrations](integration_widget_v1.md#listwidgetintegrations)
- [updateWidgetIntegration](integration_widget_v1.md#updatewidgetintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/widget/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/widget/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L8)

___

### WidgetInegrationInstance

Ƭ **WidgetInegrationInstance**\<\>: [`WidgetIntegrationOptions`](integration_widget_v1.md#widgetintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/widget/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L45)

___

### WidgetIntegrationCreateRequest

Ƭ **WidgetIntegrationCreateRequest**\<\>: [`WidgetIntegrationOptions`](integration_widget_v1.md#widgetintegrationoptions) & {}

#### Defined in

[integration/widget/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L100)

___

### WidgetIntegrationCreateResponse

Ƭ **WidgetIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/widget/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L104)

___

### WidgetIntegrationDeleteResponse

Ƭ **WidgetIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/widget/v1.js:154](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L154)

___

### WidgetIntegrationFetchResponse

Ƭ **WidgetIntegrationFetchResponse**\<\>: [`WidgetInegrationInstance`](integration_widget_v1.md#widgetinegrationinstance) & {}

#### Defined in

[integration/widget/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L82)

___

### WidgetIntegrationListRequest

Ƭ **WidgetIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/widget/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L54)

___

### WidgetIntegrationListResponse

Ƭ **WidgetIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`WidgetInegrationInstance`](integration_widget_v1.md#widgetinegrationinstance)[] |

#### Defined in

[integration/widget/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L56)

___

### WidgetIntegrationListStreamItem

Ƭ **WidgetIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`WidgetInegrationInstance`](integration_widget_v1.md#widgetinegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/widget/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L61)

___

### WidgetIntegrationListStreamType

Ƭ **WidgetIntegrationListStreamType**\<\>: [`WidgetIntegrationListStreamItem`](integration_widget_v1.md#widgetintegrationliststreamitem)

#### Defined in

[integration/widget/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L63)

___

### WidgetIntegrationOptions

Ƭ **WidgetIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attachments?` | `boolean` |
| `autoScroll?` | `boolean` |
| `contactCollection?` | `boolean` |
| `description?` | `string` |
| `exportConversation?` | `boolean` |
| `initial?` | `string` |
| `intro?` | `string` |
| `language?` | `string` |
| `layout?` | `string` |
| `math?` | `boolean` |
| `maxsimize?` | `boolean` |
| `messagePeek?` | `boolean` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `origin?` | `string` |
| `placeholder?` | `string` |
| `poweredBy?` | `boolean` |
| `restartConversation?` | `boolean` |
| `sessionDuration?` | `number` |
| `startFirst?` | `boolean` |
| `stream?` | `boolean` |
| `theme?` | `string` |
| `title?` | `string` |
| `tools?` | `boolean` |
| `unfurl?` | `boolean` |
| `verbose?` | `boolean` |

#### Defined in

[integration/widget/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L39)

___

### WidgetIntegrationUpdateRequest

Ƭ **WidgetIntegrationUpdateRequest**\<\>: [`WidgetIntegrationOptions`](integration_widget_v1.md#widgetintegrationoptions) & {}

#### Defined in

[integration/widget/v1.js:126](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L126)

___

### WidgetIntegrationUpdateResponse

Ƭ **WidgetIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/widget/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L130)

## Functions

### createWidgetIntegration

▸ **createWidgetIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationCreateResponse`](integration_widget_v1.md#widgetintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`WidgetIntegrationOptions`](integration_widget_v1.md#widgetintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationCreateResponse`](integration_widget_v1.md#widgetintegrationcreateresponse)\>

#### Defined in

[integration/widget/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L110)

___

### deleteWidgetIntegration

▸ **deleteWidgetIntegration**(`client`, `widgetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationDeleteResponse`](integration_widget_v1.md#widgetintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `widgetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationDeleteResponse`](integration_widget_v1.md#widgetintegrationdeleteresponse)\>

#### Defined in

[integration/widget/v1.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L160)

___

### fetchWidgetIntegration

▸ **fetchWidgetIntegration**(`client`, `widgetId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`WidgetIntegrationFetchResponse`](integration_widget_v1.md#widgetintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `widgetId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`WidgetIntegrationFetchResponse`](integration_widget_v1.md#widgetintegrationfetchresponse), `never`\>

#### Defined in

[integration/widget/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L88)

___

### listWidgetIntegrations

▸ **listWidgetIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`WidgetIntegrationListResponse`](integration_widget_v1.md#widgetintegrationlistresponse), [`WidgetIntegrationListStreamItem`](integration_widget_v1.md#widgetintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`WidgetIntegrationListRequest`](integration_widget_v1.md#widgetintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`WidgetIntegrationListResponse`](integration_widget_v1.md#widgetintegrationlistresponse), [`WidgetIntegrationListStreamItem`](integration_widget_v1.md#widgetintegrationliststreamitem)\>

#### Defined in

[integration/widget/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L69)

___

### updateWidgetIntegration

▸ **updateWidgetIntegration**(`client`, `widgetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationUpdateResponse`](integration_widget_v1.md#widgetintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `widgetId` | `string` |
| `request` | [`WidgetIntegrationOptions`](integration_widget_v1.md#widgetintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationUpdateResponse`](integration_widget_v1.md#widgetintegrationupdateresponse)\>

#### Defined in

[integration/widget/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L137)
