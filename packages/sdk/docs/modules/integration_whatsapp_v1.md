[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/whatsapp/v1

# Module: integration/whatsapp/v1

## Table of contents

### Type Aliases

- [BotConfig](integration_whatsapp_v1.md#botconfig)
- [BotRef](integration_whatsapp_v1.md#botref)
- [BotRefOrConfig](integration_whatsapp_v1.md#botreforconfig)
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

[integration/whatsapp/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L25)

___

### BotRef

Ƭ **BotRef**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |

#### Defined in

[integration/whatsapp/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L16)

___

### BotRefOrConfig

Ƭ **BotRefOrConfig**\<\>: [`BotRef`](integration_whatsapp_v1.md#botref) \| [`BotConfig`](integration_whatsapp_v1.md#botconfig)

#### Defined in

[integration/whatsapp/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L27)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/whatsapp/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L4)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/whatsapp/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L10)

___

### WhatsAppIntegrationCreateRequest

Ƭ **WhatsAppIntegrationCreateRequest**\<\>: [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/whatsapp/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L94)

___

### WhatsAppIntegrationCreateResponse

Ƭ **WhatsAppIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L98)

___

### WhatsAppIntegrationDeleteResponse

Ƭ **WhatsAppIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:153](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L153)

___

### WhatsAppIntegrationFetchResponse

Ƭ **WhatsAppIntegrationFetchResponse**\<\>: [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance) & {}

#### Defined in

[integration/whatsapp/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L76)

___

### WhatsAppIntegrationInstance

Ƭ **WhatsAppIntegrationInstance**\<\>: [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number` ; `verifyToken`: `string`  }

#### Defined in

[integration/whatsapp/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L44)

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

[integration/whatsapp/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L48)

___

### WhatsAppIntegrationListResponse

Ƭ **WhatsAppIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance)[] |

#### Defined in

[integration/whatsapp/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L50)

___

### WhatsAppIntegrationListStreamItem

Ƭ **WhatsAppIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/whatsapp/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L55)

___

### WhatsAppIntegrationListStreamType

Ƭ **WhatsAppIntegrationListStreamType**\<\>: [`WhatsAppIntegrationListStreamItem`](integration_whatsapp_v1.md#whatsappintegrationliststreamitem)

#### Defined in

[integration/whatsapp/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L57)

___

### WhatsAppIntegrationOptions

Ƭ **WhatsAppIntegrationOptions**\<\>: [`BotRefOrConfig`](integration_whatsapp_v1.md#botreforconfig) & \{ `accessToken?`: `string` ; `attachments?`: `boolean` ; `description?`: `string` ; `meta?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> ; `name?`: `string` ; `phoneNumberId?`: `string` ; `sessionDuration?`: `number`  }

#### Defined in

[integration/whatsapp/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L37)

___

### WhatsAppIntegrationSetupResponse

Ƭ **WhatsAppIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:174](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L174)

___

### WhatsAppIntegrationUpdateRequest

Ƭ **WhatsAppIntegrationUpdateRequest**\<\>: [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/whatsapp/v1.js:123](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L123)

___

### WhatsAppIntegrationUpdateResponse

Ƭ **WhatsAppIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:127](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L127)

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

[integration/whatsapp/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L104)

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

[integration/whatsapp/v1.js:159](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L159)

___

### fetchWhatsAppIntegration

▸ **fetchWhatsAppIntegration**(`client`, `whatsappId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationFetchResponse`](integration_whatsapp_v1.md#whatsappintegrationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationFetchResponse`](integration_whatsapp_v1.md#whatsappintegrationfetchresponse)\>

#### Defined in

[integration/whatsapp/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L82)

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

[integration/whatsapp/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L63)

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

[integration/whatsapp/v1.js:180](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L180)

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

[integration/whatsapp/v1.js:134](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L134)
