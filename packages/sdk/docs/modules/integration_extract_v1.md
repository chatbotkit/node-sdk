[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/extract/v1

# Module: integration/extract/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_extract_v1.md#chatbotkitclient)
- [ExtractInegrationInstance](integration_extract_v1.md#extractinegrationinstance)
- [ExtractIntegrationCreateRequest](integration_extract_v1.md#extractintegrationcreaterequest)
- [ExtractIntegrationCreateResponse](integration_extract_v1.md#extractintegrationcreateresponse)
- [ExtractIntegrationDeleteResponse](integration_extract_v1.md#extractintegrationdeleteresponse)
- [ExtractIntegrationFetchResponse](integration_extract_v1.md#extractintegrationfetchresponse)
- [ExtractIntegrationListRequest](integration_extract_v1.md#extractintegrationlistrequest)
- [ExtractIntegrationListResponse](integration_extract_v1.md#extractintegrationlistresponse)
- [ExtractIntegrationListStreamItem](integration_extract_v1.md#extractintegrationliststreamitem)
- [ExtractIntegrationListStreamType](integration_extract_v1.md#extractintegrationliststreamtype)
- [ExtractIntegrationOptions](integration_extract_v1.md#extractintegrationoptions)
- [ExtractIntegrationUpdateRequest](integration_extract_v1.md#extractintegrationupdaterequest)
- [ExtractIntegrationUpdateResponse](integration_extract_v1.md#extractintegrationupdateresponse)
- [ResponsePromise](integration_extract_v1.md#responsepromise)

### Functions

- [createExtractIntegration](integration_extract_v1.md#createextractintegration)
- [deleteExtractIntegration](integration_extract_v1.md#deleteextractintegration)
- [fetchExtractIntegration](integration_extract_v1.md#fetchextractintegration)
- [listExtractIntegrations](integration_extract_v1.md#listextractintegrations)
- [updateExtractIntegration](integration_extract_v1.md#updateextractintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/extract/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L2)

___

### ExtractInegrationInstance

Ƭ **ExtractInegrationInstance**\<\>: [`ExtractIntegrationOptions`](integration_extract_v1.md#extractintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/extract/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L26)

___

### ExtractIntegrationCreateRequest

Ƭ **ExtractIntegrationCreateRequest**\<\>: [`ExtractIntegrationOptions`](integration_extract_v1.md#extractintegrationoptions) & \{ `botId`: `string`  }

#### Defined in

[integration/extract/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L74)

___

### ExtractIntegrationCreateResponse

Ƭ **ExtractIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/extract/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L78)

___

### ExtractIntegrationDeleteResponse

Ƭ **ExtractIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/extract/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L128)

___

### ExtractIntegrationFetchResponse

Ƭ **ExtractIntegrationFetchResponse**\<\>: [`ExtractInegrationInstance`](integration_extract_v1.md#extractinegrationinstance) & {}

#### Defined in

[integration/extract/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L58)

___

### ExtractIntegrationListRequest

Ƭ **ExtractIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/extract/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L30)

___

### ExtractIntegrationListResponse

Ƭ **ExtractIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ExtractInegrationInstance`](integration_extract_v1.md#extractinegrationinstance)[] |

#### Defined in

[integration/extract/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L32)

___

### ExtractIntegrationListStreamItem

Ƭ **ExtractIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ExtractInegrationInstance`](integration_extract_v1.md#extractinegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/extract/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L37)

___

### ExtractIntegrationListStreamType

Ƭ **ExtractIntegrationListStreamType**\<\>: [`ExtractIntegrationListStreamItem`](integration_extract_v1.md#extractintegrationliststreamitem)

#### Defined in

[integration/extract/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L39)

___

### ExtractIntegrationOptions

Ƭ **ExtractIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `description?` | `string` |
| `expiresIn?` | `number` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `schema?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `syncSchedule?` | `string` |

#### Defined in

[integration/extract/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L20)

___

### ExtractIntegrationUpdateRequest

Ƭ **ExtractIntegrationUpdateRequest**\<\>: [`ExtractIntegrationOptions`](integration_extract_v1.md#extractintegrationoptions) & {}

#### Defined in

[integration/extract/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L100)

___

### ExtractIntegrationUpdateResponse

Ƭ **ExtractIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/extract/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L104)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/extract/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L8)

## Functions

### createExtractIntegration

▸ **createExtractIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ExtractIntegrationCreateResponse`](integration_extract_v1.md#extractintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`ExtractIntegrationCreateRequest`](integration_extract_v1.md#extractintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ExtractIntegrationCreateResponse`](integration_extract_v1.md#extractintegrationcreateresponse)\>

#### Defined in

[integration/extract/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L84)

___

### deleteExtractIntegration

▸ **deleteExtractIntegration**(`client`, `extractId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ExtractIntegrationDeleteResponse`](integration_extract_v1.md#extractintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `extractId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ExtractIntegrationDeleteResponse`](integration_extract_v1.md#extractintegrationdeleteresponse)\>

#### Defined in

[integration/extract/v1.js:134](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L134)

___

### fetchExtractIntegration

▸ **fetchExtractIntegration**(`client`, `extractId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ExtractIntegrationFetchResponse`](integration_extract_v1.md#extractintegrationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `extractId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ExtractIntegrationFetchResponse`](integration_extract_v1.md#extractintegrationfetchresponse)\>

#### Defined in

[integration/extract/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L64)

___

### listExtractIntegrations

▸ **listExtractIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ExtractIntegrationListResponse`](integration_extract_v1.md#extractintegrationlistresponse), [`ExtractIntegrationListStreamItem`](integration_extract_v1.md#extractintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`ExtractIntegrationListRequest`](integration_extract_v1.md#extractintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ExtractIntegrationListResponse`](integration_extract_v1.md#extractintegrationlistresponse), [`ExtractIntegrationListStreamItem`](integration_extract_v1.md#extractintegrationliststreamitem)\>

#### Defined in

[integration/extract/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L45)

___

### updateExtractIntegration

▸ **updateExtractIntegration**(`client`, `extractId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ExtractIntegrationUpdateResponse`](integration_extract_v1.md#extractintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `extractId` | `string` |
| `request` | [`ExtractIntegrationOptions`](integration_extract_v1.md#extractintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ExtractIntegrationUpdateResponse`](integration_extract_v1.md#extractintegrationupdateresponse)\>

#### Defined in

[integration/extract/v1.js:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L111)
