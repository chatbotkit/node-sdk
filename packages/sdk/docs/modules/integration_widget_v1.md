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

[integration/widget/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L94)

___

### WidgetIntegrationCreateResponse

Ƭ **WidgetIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/widget/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L98)

___

### WidgetIntegrationDeleteResponse

Ƭ **WidgetIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/widget/v1.js:148](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L148)

___

### WidgetIntegrationFetchResponse

Ƭ **WidgetIntegrationFetchResponse**\<\>: [`WidgetInegrationInstance`](integration_widget_v1.md#widgetinegrationinstance) & {}

#### Defined in

[integration/widget/v1.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L77)

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

[integration/widget/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L49)

___

### WidgetIntegrationListResponse

Ƭ **WidgetIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`WidgetInegrationInstance`](integration_widget_v1.md#widgetinegrationinstance)[] |

#### Defined in

[integration/widget/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L51)

___

### WidgetIntegrationListStreamItem

Ƭ **WidgetIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`WidgetInegrationInstance`](integration_widget_v1.md#widgetinegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/widget/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L56)

___

### WidgetIntegrationListStreamType

Ƭ **WidgetIntegrationListStreamType**\<\>: [`WidgetIntegrationListStreamItem`](integration_widget_v1.md#widgetintegrationliststreamitem)

#### Defined in

[integration/widget/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L58)

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

[integration/widget/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L120)

___

### WidgetIntegrationUpdateResponse

Ƭ **WidgetIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/widget/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L124)

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

[integration/widget/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L104)

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

[integration/widget/v1.js:154](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L154)

___

### fetchWidgetIntegration

▸ **fetchWidgetIntegration**(`client`, `widgetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationFetchResponse`](integration_widget_v1.md#widgetintegrationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `widgetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WidgetIntegrationFetchResponse`](integration_widget_v1.md#widgetintegrationfetchresponse)\>

#### Defined in

[integration/widget/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L83)

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

[integration/widget/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L64)

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

[integration/widget/v1.js:131](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L131)
