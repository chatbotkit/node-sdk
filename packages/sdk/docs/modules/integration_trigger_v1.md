[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/trigger/v1

# Module: integration/trigger/v1

## Table of contents

### Type Aliases

- [BotConfig](integration_trigger_v1.md#botconfig)
- [BotRef](integration_trigger_v1.md#botref)
- [BotRefOrConfig](integration_trigger_v1.md#botreforconfig)
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

### BotConfig

Ƭ **BotConfig**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `model?` | `string` |
| `moderation?` | `boolean` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |

#### Defined in

[integration/trigger/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L25)

___

### BotRef

Ƭ **BotRef**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |

#### Defined in

[integration/trigger/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L16)

___

### BotRefOrConfig

Ƭ **BotRefOrConfig**\<\>: [`BotRef`](integration_trigger_v1.md#botref) \| [`BotConfig`](integration_trigger_v1.md#botconfig)

#### Defined in

[integration/trigger/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L27)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/trigger/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L4)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/trigger/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L10)

___

### TriggerIntegrationCreateRequest

Ƭ **TriggerIntegrationCreateRequest**\<\>: [`TriggerIntegrationOptions`](integration_trigger_v1.md#triggerintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/trigger/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L93)

___

### TriggerIntegrationCreateResponse

Ƭ **TriggerIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/trigger/v1.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L97)

___

### TriggerIntegrationDeleteResponse

Ƭ **TriggerIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/trigger/v1.js:152](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L152)

___

### TriggerIntegrationFetchResponse

Ƭ **TriggerIntegrationFetchResponse**\<\>: [`TriggerIntegrationInstance`](integration_trigger_v1.md#triggerintegrationinstance) & {}

#### Defined in

[integration/trigger/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L74)

___

### TriggerIntegrationInstance

Ƭ **TriggerIntegrationInstance**\<\>: [`TriggerIntegrationOptions`](integration_trigger_v1.md#triggerintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/trigger/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L42)

___

### TriggerIntegrationInvokeRequest

Ƭ **TriggerIntegrationInvokeRequest**\<\>: `object`

#### Defined in

[integration/trigger/v1.js:192](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L192)

___

### TriggerIntegrationInvokeResponse

Ƭ **TriggerIntegrationInvokeResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/trigger/v1.js:196](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L196)

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

[integration/trigger/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L46)

___

### TriggerIntegrationListResponse

Ƭ **TriggerIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TriggerIntegrationInstance`](integration_trigger_v1.md#triggerintegrationinstance)[] |

#### Defined in

[integration/trigger/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L48)

___

### TriggerIntegrationListStreamItem

Ƭ **TriggerIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TriggerIntegrationInstance`](integration_trigger_v1.md#triggerintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/trigger/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L53)

___

### TriggerIntegrationListStreamType

Ƭ **TriggerIntegrationListStreamType**\<\>: [`TriggerIntegrationListStreamItem`](integration_trigger_v1.md#triggerintegrationliststreamitem)

#### Defined in

[integration/trigger/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L55)

___

### TriggerIntegrationOptions

Ƭ **TriggerIntegrationOptions**\<\>: [`BotRefOrConfig`](integration_trigger_v1.md#botreforconfig) & \{ `authenticate?`: `boolean` ; `description?`: `string` ; `meta?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> ; `name?`: `string` ; `sessionDuration?`: `number` ; `triggerSchedule?`: ``"never"`` \| ``"quarterhourly"`` \| ``"halfhourly"`` \| ``"hourly"`` \| ``"daily"`` \| ``"weekly"`` \| ``"monthly"``  }

#### Defined in

[integration/trigger/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L36)

___

### TriggerIntegrationSetupResponse

Ƭ **TriggerIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/trigger/v1.js:173](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L173)

___

### TriggerIntegrationUpdateRequest

Ƭ **TriggerIntegrationUpdateRequest**\<\>: [`TriggerIntegrationOptions`](integration_trigger_v1.md#triggerintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/trigger/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L122)

___

### TriggerIntegrationUpdateResponse

Ƭ **TriggerIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/trigger/v1.js:126](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L126)

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

[integration/trigger/v1.js:103](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L103)

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

[integration/trigger/v1.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L158)

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

[integration/trigger/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L80)

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

[integration/trigger/v1.js:203](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L203)

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

[integration/trigger/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L61)

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

[integration/trigger/v1.js:179](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L179)

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

[integration/trigger/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L133)
