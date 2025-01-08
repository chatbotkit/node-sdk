[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/trigger](../modules/integration_trigger.md) / TriggerIntegrationClient

# Class: TriggerIntegrationClient

[integration/trigger](../modules/integration_trigger.md).TriggerIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`TriggerIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_trigger.TriggerIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_trigger.TriggerIntegrationClient.md#clientfetch)
- [create](integration_trigger.TriggerIntegrationClient.md#create)
- [delete](integration_trigger.TriggerIntegrationClient.md#delete)
- [fetch](integration_trigger.TriggerIntegrationClient.md#fetch)
- [invoke](integration_trigger.TriggerIntegrationClient.md#invoke)
- [list](integration_trigger.TriggerIntegrationClient.md#list)
- [setup](integration_trigger.TriggerIntegrationClient.md#setup)
- [update](integration_trigger.TriggerIntegrationClient.md#update)

## Constructors

### constructor

• **new TriggerIntegrationClient**(`options`): [`TriggerIntegrationClient`](integration_trigger.TriggerIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`TriggerIntegrationClient`](integration_trigger.TriggerIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/trigger/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/index.js#L22)

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

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:222](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L222)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationCreateResponse`](../modules/integration_trigger_v1.md#triggerintegrationcreateresponse)\>

Creates a new trigger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TriggerIntegrationCreateRequest`](../modules/integration_trigger_v1.md#triggerintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationCreateResponse`](../modules/integration_trigger_v1.md#triggerintegrationcreateresponse)\>

#### Defined in

[integration/trigger/index.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/index.js#L52)

___

### delete

▸ **delete**(`triggerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationDeleteResponse`](../modules/integration_trigger_v1.md#triggerintegrationdeleteresponse)\>

Deletes a trigger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `triggerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationDeleteResponse`](../modules/integration_trigger_v1.md#triggerintegrationdeleteresponse)\>

#### Defined in

[integration/trigger/index.js:73](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/index.js#L73)

___

### fetch

▸ **fetch**(`triggerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationFetchResponse`](../modules/integration_trigger_v1.md#triggerintegrationfetchresponse)\>

Fetches a trigger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `triggerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationFetchResponse`](../modules/integration_trigger_v1.md#triggerintegrationfetchresponse)\>

#### Defined in

[integration/trigger/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/index.js#L42)

___

### invoke

▸ **invoke**(`triggerId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationInvokeResponse`](../modules/integration_trigger_v1.md#triggerintegrationinvokeresponse)\>

Invoke a trigger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `triggerId` | `string` |
| `request` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationInvokeResponse`](../modules/integration_trigger_v1.md#triggerintegrationinvokeresponse)\>

#### Defined in

[integration/trigger/index.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/index.js#L94)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`TriggerIntegrationListResponse`](../modules/integration_trigger_v1.md#triggerintegrationlistresponse), [`TriggerIntegrationListStreamItem`](../modules/integration_trigger_v1.md#triggerintegrationliststreamitem)\>

Retrieves a list of all trigger integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`TriggerIntegrationListRequest`](../modules/integration_trigger_v1.md#triggerintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`TriggerIntegrationListResponse`](../modules/integration_trigger_v1.md#triggerintegrationlistresponse), [`TriggerIntegrationListStreamItem`](../modules/integration_trigger_v1.md#triggerintegrationliststreamitem)\>

#### Defined in

[integration/trigger/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/index.js#L32)

___

### setup

▸ **setup**(`triggerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationSetupResponse`](../modules/integration_trigger_v1.md#triggerintegrationsetupresponse)\>

Setups a trigger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `triggerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationSetupResponse`](../modules/integration_trigger_v1.md#triggerintegrationsetupresponse)\>

#### Defined in

[integration/trigger/index.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/index.js#L83)

___

### update

▸ **update**(`triggerId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationUpdateResponse`](../modules/integration_trigger_v1.md#triggerintegrationupdateresponse)\>

Updates a trigger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `triggerId` | `string` |
| `request` | [`TriggerIntegrationUpdateRequest`](../modules/integration_trigger_v1.md#triggerintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TriggerIntegrationUpdateResponse`](../modules/integration_trigger_v1.md#triggerintegrationupdateresponse)\>

#### Defined in

[integration/trigger/index.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/index.js#L63)
