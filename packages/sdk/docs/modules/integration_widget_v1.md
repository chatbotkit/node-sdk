[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/widget/v1

# Module: integration/widget/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_widget_v1.md#chatbotkitclient)
- [ResponsePromise](integration_widget_v1.md#responsepromise)
- [WidgetIntegrationCreateRequest](integration_widget_v1.md#widgetintegrationcreaterequest)
- [WidgetIntegrationCreateRequestBody](integration_widget_v1.md#widgetintegrationcreaterequestbody)
- [WidgetIntegrationCreateResponse](integration_widget_v1.md#widgetintegrationcreateresponse)
- [WidgetIntegrationCreateResponseBody](integration_widget_v1.md#widgetintegrationcreateresponsebody)
- [WidgetIntegrationDeleteRequest](integration_widget_v1.md#widgetintegrationdeleterequest)
- [WidgetIntegrationDeleteRequestBody](integration_widget_v1.md#widgetintegrationdeleterequestbody)
- [WidgetIntegrationDeleteResponse](integration_widget_v1.md#widgetintegrationdeleteresponse)
- [WidgetIntegrationDeleteResponseBody](integration_widget_v1.md#widgetintegrationdeleteresponsebody)
- [WidgetIntegrationFetchResponse](integration_widget_v1.md#widgetintegrationfetchresponse)
- [WidgetIntegrationListRequest](integration_widget_v1.md#widgetintegrationlistrequest)
- [WidgetIntegrationListResponse](integration_widget_v1.md#widgetintegrationlistresponse)
- [WidgetIntegrationListStreamType](integration_widget_v1.md#widgetintegrationliststreamtype)
- [WidgetIntegrationSetupRequest](integration_widget_v1.md#widgetintegrationsetuprequest)
- [WidgetIntegrationSetupRequestBody](integration_widget_v1.md#widgetintegrationsetuprequestbody)
- [WidgetIntegrationSetupResponse](integration_widget_v1.md#widgetintegrationsetupresponse)
- [WidgetIntegrationSetupResponseBody](integration_widget_v1.md#widgetintegrationsetupresponsebody)
- [WidgetIntegrationUpdateRequest](integration_widget_v1.md#widgetintegrationupdaterequest)
- [WidgetIntegrationUpdateRequestBody](integration_widget_v1.md#widgetintegrationupdaterequestbody)
- [WidgetIntegrationUpdateResponse](integration_widget_v1.md#widgetintegrationupdateresponse)
- [WidgetIntegrationUpdateResponseBody](integration_widget_v1.md#widgetintegrationupdateresponsebody)

### Functions

- [createWidgetIntegration](integration_widget_v1.md#createwidgetintegration)
- [deleteWidgetIntegration](integration_widget_v1.md#deletewidgetintegration)
- [fetchWidgetIntegration](integration_widget_v1.md#fetchwidgetintegration)
- [listWidgetIntegrations](integration_widget_v1.md#listwidgetintegrations)
- [setupWidgetIntegration](integration_widget_v1.md#setupwidgetintegration)
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

### WidgetIntegrationCreateRequest

Ƭ **WidgetIntegrationCreateRequest**\<\>: [`WidgetIntegrationCreateRequestBody`](integration_widget_v1.md#widgetintegrationcreaterequestbody)

#### Defined in

[integration/widget/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L55)

___

### WidgetIntegrationCreateRequestBody

Ƭ **WidgetIntegrationCreateRequestBody**\<\>: `operations`[``"createWidgetIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/widget/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L53)

___

### WidgetIntegrationCreateResponse

Ƭ **WidgetIntegrationCreateResponse**\<\>: [`WidgetIntegrationCreateResponseBody`](integration_widget_v1.md#widgetintegrationcreateresponsebody)

#### Defined in

[integration/widget/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L59)

___

### WidgetIntegrationCreateResponseBody

Ƭ **WidgetIntegrationCreateResponseBody**\<\>: `operations`[``"createWidgetIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/widget/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L57)

___

### WidgetIntegrationDeleteRequest

Ƭ **WidgetIntegrationDeleteRequest**\<\>: [`WidgetIntegrationDeleteRequestBody`](integration_widget_v1.md#widgetintegrationdeleterequestbody)

#### Defined in

[integration/widget/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L110)

___

### WidgetIntegrationDeleteRequestBody

Ƭ **WidgetIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteWidgetIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/widget/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L108)

___

### WidgetIntegrationDeleteResponse

Ƭ **WidgetIntegrationDeleteResponse**\<\>: [`WidgetIntegrationDeleteResponseBody`](integration_widget_v1.md#widgetintegrationdeleteresponsebody)

#### Defined in

[integration/widget/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L114)

___

### WidgetIntegrationDeleteResponseBody

Ƭ **WidgetIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteWidgetIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/widget/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L112)

___

### WidgetIntegrationFetchResponse

Ƭ **WidgetIntegrationFetchResponse**\<\>: `operations`[``"fetchWidgetIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/widget/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L37)

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

[integration/widget/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L17)

___

### WidgetIntegrationListResponse

Ƭ **WidgetIntegrationListResponse**\<\>: `operations`[``"listWidgetIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/widget/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L19)

___

### WidgetIntegrationListStreamType

Ƭ **WidgetIntegrationListStreamType**\<\>: `operations`[``"listWidgetIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/widget/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L21)

___

### WidgetIntegrationSetupRequest

Ƭ **WidgetIntegrationSetupRequest**\<\>: [`WidgetIntegrationSetupRequestBody`](integration_widget_v1.md#widgetintegrationsetuprequestbody)

#### Defined in

[integration/widget/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L135)

___

### WidgetIntegrationSetupRequestBody

Ƭ **WidgetIntegrationSetupRequestBody**\<\>: `operations`[``"setupWidgetIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/widget/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L133)

___

### WidgetIntegrationSetupResponse

Ƭ **WidgetIntegrationSetupResponse**\<\>: [`WidgetIntegrationSetupResponseBody`](integration_widget_v1.md#widgetintegrationsetupresponsebody)

#### Defined in

[integration/widget/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L139)

___

### WidgetIntegrationSetupResponseBody

Ƭ **WidgetIntegrationSetupResponseBody**\<\>: `operations`[``"setupWidgetIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/widget/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L137)

___

### WidgetIntegrationUpdateRequest

Ƭ **WidgetIntegrationUpdateRequest**\<\>: [`WidgetIntegrationUpdateRequestBody`](integration_widget_v1.md#widgetintegrationupdaterequestbody)

#### Defined in

[integration/widget/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L82)

___

### WidgetIntegrationUpdateRequestBody

Ƭ **WidgetIntegrationUpdateRequestBody**\<\>: `operations`[``"updateWidgetIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/widget/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L80)

___

### WidgetIntegrationUpdateResponse

Ƭ **WidgetIntegrationUpdateResponse**\<\>: [`WidgetIntegrationUpdateResponseBody`](integration_widget_v1.md#widgetintegrationupdateresponsebody)

#### Defined in

[integration/widget/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L86)

___

### WidgetIntegrationUpdateResponseBody

Ƭ **WidgetIntegrationUpdateResponseBody**\<\>: `operations`[``"updateWidgetIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/widget/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L84)

## Functions

### createWidgetIntegration

▸ **createWidgetIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/widget/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L65)

___

### deleteWidgetIntegration

▸ **deleteWidgetIntegration**(`client`, `widgetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `widgetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/widget/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L120)

___

### fetchWidgetIntegration

▸ **fetchWidgetIntegration**(`client`, `widgetId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `widgetId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/widget/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L43)

___

### listWidgetIntegrations

▸ **listWidgetIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`WidgetIntegrationListRequest`](integration_widget_v1.md#widgetintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/widget/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L27)

___

### setupWidgetIntegration

▸ **setupWidgetIntegration**(`client`, `widgetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `widgetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/widget/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L145)

___

### updateWidgetIntegration

▸ **updateWidgetIntegration**(`client`, `widgetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `widgetId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/widget/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/widget/v1.js#L93)
