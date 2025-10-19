[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/whatsapp/v1

# Module: integration/whatsapp/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_whatsapp_v1.md#chatbotkitclient)
- [ResponsePromise](integration_whatsapp_v1.md#responsepromise)
- [WhatsAppIntegrationCreateRequest](integration_whatsapp_v1.md#whatsappintegrationcreaterequest)
- [WhatsAppIntegrationCreateResponse](integration_whatsapp_v1.md#whatsappintegrationcreateresponse)
- [WhatsAppIntegrationDeleteResponse](integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)
- [WhatsAppIntegrationFetchResponse](integration_whatsapp_v1.md#whatsappintegrationfetchresponse)
- [WhatsAppIntegrationInstance](integration_whatsapp_v1.md#whatsappintegrationinstance)
- [WhatsAppIntegrationListRequest](integration_whatsapp_v1.md#whatsappintegrationlistrequest)
- [WhatsAppIntegrationListResponse](integration_whatsapp_v1.md#whatsappintegrationlistresponse)
- [WhatsAppIntegrationListStreamItem](integration_whatsapp_v1.md#whatsappintegrationliststreamitem)
- [WhatsAppIntegrationListStreamType](integration_whatsapp_v1.md#whatsappintegrationliststreamtype)
- [WhatsAppIntegrationOptions](integration_whatsapp_v1.md#whatsappintegrationoptions)
- [WhatsAppIntegrationSetupResponse](integration_whatsapp_v1.md#whatsappintegrationsetupresponse)
- [WhatsAppIntegrationUpdateRequest](integration_whatsapp_v1.md#whatsappintegrationupdaterequest)
- [WhatsAppIntegrationUpdateResponse](integration_whatsapp_v1.md#whatsappintegrationupdateresponse)

### Functions

- [createWhatsAppIntegration](integration_whatsapp_v1.md#createwhatsappintegration)
- [deleteWhatsAppIntegration](integration_whatsapp_v1.md#deletewhatsappintegration)
- [fetchWhatsAppIntegration](integration_whatsapp_v1.md#fetchwhatsappintegration)
- [listWhatsAppIntegrations](integration_whatsapp_v1.md#listwhatsappintegrations)
- [setupWhatsAppIntegration](integration_whatsapp_v1.md#setupwhatsappintegration)
- [updateWhatsAppIntegration](integration_whatsapp_v1.md#updatewhatsappintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/whatsapp/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/whatsapp/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L8)

___

### WhatsAppIntegrationCreateRequest

Ƭ **WhatsAppIntegrationCreateRequest**\<\>: [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/whatsapp/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L85)

___

### WhatsAppIntegrationCreateResponse

Ƭ **WhatsAppIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L89)

___

### WhatsAppIntegrationDeleteResponse

Ƭ **WhatsAppIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:140](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L140)

___

### WhatsAppIntegrationFetchResponse

Ƭ **WhatsAppIntegrationFetchResponse**\<\>: [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance) & {}

#### Defined in

[integration/whatsapp/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L66)

___

### WhatsAppIntegrationInstance

Ƭ **WhatsAppIntegrationInstance**\<\>: [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number` ; `verifyToken`: `string`  }

#### Defined in

[integration/whatsapp/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L29)

___

### WhatsAppIntegrationListRequest

Ƭ **WhatsAppIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/whatsapp/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L38)

___

### WhatsAppIntegrationListResponse

Ƭ **WhatsAppIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance)[] |

#### Defined in

[integration/whatsapp/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L40)

___

### WhatsAppIntegrationListStreamItem

Ƭ **WhatsAppIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/whatsapp/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L45)

___

### WhatsAppIntegrationListStreamType

Ƭ **WhatsAppIntegrationListStreamType**\<\>: [`WhatsAppIntegrationListStreamItem`](integration_whatsapp_v1.md#whatsappintegrationliststreamitem)

#### Defined in

[integration/whatsapp/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L47)

___

### WhatsAppIntegrationOptions

Ƭ **WhatsAppIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessToken?` | `string` |
| `attachments?` | `boolean` |
| `botId?` | `string` |
| `contactCollection?` | `boolean` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `phoneNumberId?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/whatsapp/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L22)

___

### WhatsAppIntegrationSetupResponse

Ƭ **WhatsAppIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:161](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L161)

___

### WhatsAppIntegrationUpdateRequest

Ƭ **WhatsAppIntegrationUpdateRequest**\<\>: [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/whatsapp/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L112)

___

### WhatsAppIntegrationUpdateResponse

Ƭ **WhatsAppIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L116)

## Functions

### createWhatsAppIntegration

▸ **createWhatsAppIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationCreateResponse`](integration_whatsapp_v1.md#whatsappintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`WhatsAppIntegrationCreateRequest`](integration_whatsapp_v1.md#whatsappintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationCreateResponse`](integration_whatsapp_v1.md#whatsappintegrationcreateresponse)\>

#### Defined in

[integration/whatsapp/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L95)

___

### deleteWhatsAppIntegration

▸ **deleteWhatsAppIntegration**(`client`, `whatsappId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationDeleteResponse`](integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationDeleteResponse`](integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)\>

#### Defined in

[integration/whatsapp/v1.js:146](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L146)

___

### fetchWhatsAppIntegration

▸ **fetchWhatsAppIntegration**(`client`, `whatsappId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`WhatsAppIntegrationFetchResponse`](integration_whatsapp_v1.md#whatsappintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`WhatsAppIntegrationFetchResponse`](integration_whatsapp_v1.md#whatsappintegrationfetchresponse), `never`\>

#### Defined in

[integration/whatsapp/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L72)

___

### listWhatsAppIntegrations

▸ **listWhatsAppIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`WhatsAppIntegrationListResponse`](integration_whatsapp_v1.md#whatsappintegrationlistresponse), [`WhatsAppIntegrationListStreamItem`](integration_whatsapp_v1.md#whatsappintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`WhatsAppIntegrationListRequest`](integration_whatsapp_v1.md#whatsappintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`WhatsAppIntegrationListResponse`](integration_whatsapp_v1.md#whatsappintegrationlistresponse), [`WhatsAppIntegrationListStreamItem`](integration_whatsapp_v1.md#whatsappintegrationliststreamitem)\>

#### Defined in

[integration/whatsapp/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L53)

___

### setupWhatsAppIntegration

▸ **setupWhatsAppIntegration**(`client`, `whatsappId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationSetupResponse`](integration_whatsapp_v1.md#whatsappintegrationsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationSetupResponse`](integration_whatsapp_v1.md#whatsappintegrationsetupresponse)\>

#### Defined in

[integration/whatsapp/v1.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L167)

___

### updateWhatsAppIntegration

▸ **updateWhatsAppIntegration**(`client`, `whatsappId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationUpdateResponse`](integration_whatsapp_v1.md#whatsappintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |
| `request` | [`WhatsAppIntegrationUpdateRequest`](integration_whatsapp_v1.md#whatsappintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationUpdateResponse`](integration_whatsapp_v1.md#whatsappintegrationupdateresponse)\>

#### Defined in

[integration/whatsapp/v1.js:123](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L123)
