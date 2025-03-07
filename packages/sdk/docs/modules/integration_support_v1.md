[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/support/v1

# Module: integration/support/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_support_v1.md#chatbotkitclient)
- [ResponsePromise](integration_support_v1.md#responsepromise)
- [SupportInegrationInstance](integration_support_v1.md#supportinegrationinstance)
- [SupportIntegrationCreateRequest](integration_support_v1.md#supportintegrationcreaterequest)
- [SupportIntegrationCreateResponse](integration_support_v1.md#supportintegrationcreateresponse)
- [SupportIntegrationDeleteResponse](integration_support_v1.md#supportintegrationdeleteresponse)
- [SupportIntegrationFetchResponse](integration_support_v1.md#supportintegrationfetchresponse)
- [SupportIntegrationListRequest](integration_support_v1.md#supportintegrationlistrequest)
- [SupportIntegrationListResponse](integration_support_v1.md#supportintegrationlistresponse)
- [SupportIntegrationListStreamItem](integration_support_v1.md#supportintegrationliststreamitem)
- [SupportIntegrationListStreamType](integration_support_v1.md#supportintegrationliststreamtype)
- [SupportIntegrationOptions](integration_support_v1.md#supportintegrationoptions)
- [SupportIntegrationUpdateRequest](integration_support_v1.md#supportintegrationupdaterequest)
- [SupportIntegrationUpdateResponse](integration_support_v1.md#supportintegrationupdateresponse)

### Functions

- [createSupportIntegration](integration_support_v1.md#createsupportintegration)
- [deleteSupportIntegration](integration_support_v1.md#deletesupportintegration)
- [fetchSupportIntegration](integration_support_v1.md#fetchsupportintegration)
- [listSupportIntegrations](integration_support_v1.md#listsupportintegrations)
- [updateSupportIntegration](integration_support_v1.md#updatesupportintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/support/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/support/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L8)

___

### SupportInegrationInstance

Ƭ **SupportInegrationInstance**\<\>: [`SupportIntegrationOptions`](integration_support_v1.md#supportintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/support/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L26)

___

### SupportIntegrationCreateRequest

Ƭ **SupportIntegrationCreateRequest**\<\>: [`SupportIntegrationOptions`](integration_support_v1.md#supportintegrationoptions) & \{ `botId`: `string`  }

#### Defined in

[integration/support/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L75)

___

### SupportIntegrationCreateResponse

Ƭ **SupportIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/support/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L79)

___

### SupportIntegrationDeleteResponse

Ƭ **SupportIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/support/v1.js:129](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L129)

___

### SupportIntegrationFetchResponse

Ƭ **SupportIntegrationFetchResponse**\<\>: [`SupportInegrationInstance`](integration_support_v1.md#supportinegrationinstance) & {}

#### Defined in

[integration/support/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L58)

___

### SupportIntegrationListRequest

Ƭ **SupportIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/support/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L30)

___

### SupportIntegrationListResponse

Ƭ **SupportIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SupportInegrationInstance`](integration_support_v1.md#supportinegrationinstance)[] |

#### Defined in

[integration/support/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L32)

___

### SupportIntegrationListStreamItem

Ƭ **SupportIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SupportInegrationInstance`](integration_support_v1.md#supportinegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/support/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L37)

___

### SupportIntegrationListStreamType

Ƭ **SupportIntegrationListStreamType**\<\>: [`SupportIntegrationListStreamItem`](integration_support_v1.md#supportintegrationliststreamitem)

#### Defined in

[integration/support/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L39)

___

### SupportIntegrationOptions

Ƭ **SupportIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `description?` | `string` |
| `email?` | `string` |
| `expiresIn?` | `number` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `syncSchedule?` | `string` |

#### Defined in

[integration/support/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L20)

___

### SupportIntegrationUpdateRequest

Ƭ **SupportIntegrationUpdateRequest**\<\>: [`SupportIntegrationOptions`](integration_support_v1.md#supportintegrationoptions) & {}

#### Defined in

[integration/support/v1.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L101)

___

### SupportIntegrationUpdateResponse

Ƭ **SupportIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/support/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L105)

## Functions

### createSupportIntegration

▸ **createSupportIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationCreateResponse`](integration_support_v1.md#supportintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`SupportIntegrationCreateRequest`](integration_support_v1.md#supportintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationCreateResponse`](integration_support_v1.md#supportintegrationcreateresponse)\>

#### Defined in

[integration/support/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L85)

___

### deleteSupportIntegration

▸ **deleteSupportIntegration**(`client`, `supportId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationDeleteResponse`](integration_support_v1.md#supportintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `supportId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationDeleteResponse`](integration_support_v1.md#supportintegrationdeleteresponse)\>

#### Defined in

[integration/support/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L135)

___

### fetchSupportIntegration

▸ **fetchSupportIntegration**(`client`, `supportId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SupportIntegrationFetchResponse`](integration_support_v1.md#supportintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `supportId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SupportIntegrationFetchResponse`](integration_support_v1.md#supportintegrationfetchresponse), `never`\>

#### Defined in

[integration/support/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L64)

___

### listSupportIntegrations

▸ **listSupportIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SupportIntegrationListResponse`](integration_support_v1.md#supportintegrationlistresponse), [`SupportIntegrationListStreamItem`](integration_support_v1.md#supportintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SupportIntegrationListRequest`](integration_support_v1.md#supportintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SupportIntegrationListResponse`](integration_support_v1.md#supportintegrationlistresponse), [`SupportIntegrationListStreamItem`](integration_support_v1.md#supportintegrationliststreamitem)\>

#### Defined in

[integration/support/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L45)

___

### updateSupportIntegration

▸ **updateSupportIntegration**(`client`, `supportId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationUpdateResponse`](integration_support_v1.md#supportintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `supportId` | `string` |
| `request` | [`SupportIntegrationOptions`](integration_support_v1.md#supportintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationUpdateResponse`](integration_support_v1.md#supportintegrationupdateresponse)\>

#### Defined in

[integration/support/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L112)
