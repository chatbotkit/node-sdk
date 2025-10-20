[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/trigger/v1

# Module: integration/trigger/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_trigger_v1.md#chatbotkitclient)
- [ResponsePromise](integration_trigger_v1.md#responsepromise)
- [TriggerIntegrationCreateRequest](integration_trigger_v1.md#triggerintegrationcreaterequest)
- [TriggerIntegrationCreateResponse](integration_trigger_v1.md#triggerintegrationcreateresponse)
- [TriggerIntegrationDeleteResponse](integration_trigger_v1.md#triggerintegrationdeleteresponse)
- [TriggerIntegrationFetchResponse](integration_trigger_v1.md#triggerintegrationfetchresponse)
- [TriggerIntegrationInstance](integration_trigger_v1.md#triggerintegrationinstance)
- [TriggerIntegrationInvokeRequest](integration_trigger_v1.md#triggerintegrationinvokerequest)
- [TriggerIntegrationInvokeResponse](integration_trigger_v1.md#triggerintegrationinvokeresponse)
- [TriggerIntegrationListRequest](integration_trigger_v1.md#triggerintegrationlistrequest)
- [TriggerIntegrationListResponse](integration_trigger_v1.md#triggerintegrationlistresponse)
- [TriggerIntegrationListStreamItem](integration_trigger_v1.md#triggerintegrationliststreamitem)
- [TriggerIntegrationListStreamType](integration_trigger_v1.md#triggerintegrationliststreamtype)
- [TriggerIntegrationOptions](integration_trigger_v1.md#triggerintegrationoptions)
- [TriggerIntegrationSetupResponse](integration_trigger_v1.md#triggerintegrationsetupresponse)
- [TriggerIntegrationUpdateRequest](integration_trigger_v1.md#triggerintegrationupdaterequest)
- [TriggerIntegrationUpdateResponse](integration_trigger_v1.md#triggerintegrationupdateresponse)

### Functions

- [createTriggerIntegration](integration_trigger_v1.md#createtriggerintegration)
- [deleteTriggerIntegration](integration_trigger_v1.md#deletetriggerintegration)
- [fetchTriggerIntegration](integration_trigger_v1.md#fetchtriggerintegration)
- [invokeTriggerIntegration](integration_trigger_v1.md#invoketriggerintegration)
- [listTriggerIntegrations](integration_trigger_v1.md#listtriggerintegrations)
- [setupTriggerIntegration](integration_trigger_v1.md#setuptriggerintegration)
- [updateTriggerIntegration](integration_trigger_v1.md#updatetriggerintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/trigger/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/trigger/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L8)

___

### TriggerIntegrationCreateRequest

Ƭ **TriggerIntegrationCreateRequest**\<\>: [`TriggerIntegrationOptions`](integration_trigger_v1.md#triggerintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/trigger/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L83)

___

### TriggerIntegrationCreateResponse

Ƭ **TriggerIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/trigger/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L87)

___

### TriggerIntegrationDeleteResponse

Ƭ **TriggerIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/trigger/v1.js:138](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L138)

___

### TriggerIntegrationFetchResponse

Ƭ **TriggerIntegrationFetchResponse**\<\>: [`TriggerIntegrationInstance`](integration_trigger_v1.md#triggerintegrationinstance) & {}

#### Defined in

[integration/trigger/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L64)

___

### TriggerIntegrationInstance

Ƭ **TriggerIntegrationInstance**\<\>: [`TriggerIntegrationOptions`](integration_trigger_v1.md#triggerintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/trigger/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L27)

___

### TriggerIntegrationInvokeRequest

Ƭ **TriggerIntegrationInvokeRequest**\<\>: `object`

#### Defined in

[integration/trigger/v1.js:178](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L178)

___

### TriggerIntegrationInvokeResponse

Ƭ **TriggerIntegrationInvokeResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/trigger/v1.js:182](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L182)

___

### TriggerIntegrationListRequest

Ƭ **TriggerIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/trigger/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L36)

___

### TriggerIntegrationListResponse

Ƭ **TriggerIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TriggerIntegrationInstance`](integration_trigger_v1.md#triggerintegrationinstance)[] |

#### Defined in

[integration/trigger/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L38)

___

### TriggerIntegrationListStreamItem

Ƭ **TriggerIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TriggerIntegrationInstance`](integration_trigger_v1.md#triggerintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/trigger/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L43)

___

### TriggerIntegrationListStreamType

Ƭ **TriggerIntegrationListStreamType**\<\>: [`TriggerIntegrationListStreamItem`](integration_trigger_v1.md#triggerintegrationliststreamitem)

#### Defined in

[integration/trigger/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L45)

___

### TriggerIntegrationOptions

Ƭ **TriggerIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authenticate?` | `boolean` |
| `blueprintId?` | `string` |
| `botId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `sessionDuration?` | `number` |
| `triggerSchedule?` | ``"never"`` \| ``"quarterhourly"`` \| ``"halfhourly"`` \| ``"hourly"`` \| ``"daily"`` \| ``"weekly"`` \| ``"monthly"`` |

#### Defined in

[integration/trigger/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L21)

___

### TriggerIntegrationSetupResponse

Ƭ **TriggerIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/trigger/v1.js:159](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L159)

___

### TriggerIntegrationUpdateRequest

Ƭ **TriggerIntegrationUpdateRequest**\<\>: [`TriggerIntegrationOptions`](integration_trigger_v1.md#triggerintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/trigger/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L110)

___

### TriggerIntegrationUpdateResponse

Ƭ **TriggerIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/trigger/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L114)

## Functions

### createTriggerIntegration

▸ **createTriggerIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationCreateResponse`](integration_trigger_v1.md#triggerintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`TriggerIntegrationCreateRequest`](integration_trigger_v1.md#triggerintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationCreateResponse`](integration_trigger_v1.md#triggerintegrationcreateresponse)\>

#### Defined in

[integration/trigger/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L93)

___

### deleteTriggerIntegration

▸ **deleteTriggerIntegration**(`client`, `triggerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationDeleteResponse`](integration_trigger_v1.md#triggerintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `triggerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationDeleteResponse`](integration_trigger_v1.md#triggerintegrationdeleteresponse)\>

#### Defined in

[integration/trigger/v1.js:144](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L144)

___

### fetchTriggerIntegration

▸ **fetchTriggerIntegration**(`client`, `triggerId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TriggerIntegrationFetchResponse`](integration_trigger_v1.md#triggerintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `triggerId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TriggerIntegrationFetchResponse`](integration_trigger_v1.md#triggerintegrationfetchresponse), `never`\>

#### Defined in

[integration/trigger/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L70)

___

### invokeTriggerIntegration

▸ **invokeTriggerIntegration**(`client`, `triggerId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationInvokeResponse`](integration_trigger_v1.md#triggerintegrationinvokeresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `triggerId` | `string` |
| `request` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationInvokeResponse`](integration_trigger_v1.md#triggerintegrationinvokeresponse)\>

#### Defined in

[integration/trigger/v1.js:189](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L189)

___

### listTriggerIntegrations

▸ **listTriggerIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TriggerIntegrationListResponse`](integration_trigger_v1.md#triggerintegrationlistresponse), [`TriggerIntegrationListStreamItem`](integration_trigger_v1.md#triggerintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TriggerIntegrationListRequest`](integration_trigger_v1.md#triggerintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TriggerIntegrationListResponse`](integration_trigger_v1.md#triggerintegrationlistresponse), [`TriggerIntegrationListStreamItem`](integration_trigger_v1.md#triggerintegrationliststreamitem)\>

#### Defined in

[integration/trigger/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L51)

___

### setupTriggerIntegration

▸ **setupTriggerIntegration**(`client`, `triggerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationSetupResponse`](integration_trigger_v1.md#triggerintegrationsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `triggerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationSetupResponse`](integration_trigger_v1.md#triggerintegrationsetupresponse)\>

#### Defined in

[integration/trigger/v1.js:165](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L165)

___

### updateTriggerIntegration

▸ **updateTriggerIntegration**(`client`, `triggerId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationUpdateResponse`](integration_trigger_v1.md#triggerintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `triggerId` | `string` |
| `request` | [`TriggerIntegrationUpdateRequest`](integration_trigger_v1.md#triggerintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationUpdateResponse`](integration_trigger_v1.md#triggerintegrationupdateresponse)\>

#### Defined in

[integration/trigger/v1.js:121](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L121)
