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

[integration/whatsapp/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L92)

___

### WhatsAppIntegrationCreateResponse

Ƭ **WhatsAppIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L96)

___

### WhatsAppIntegrationDeleteResponse

Ƭ **WhatsAppIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:151](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L151)

___

### WhatsAppIntegrationFetchResponse

Ƭ **WhatsAppIntegrationFetchResponse**\<\>: [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance) & {}

#### Defined in

[integration/whatsapp/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L74)

___

### WhatsAppIntegrationInstance

Ƭ **WhatsAppIntegrationInstance**\<\>: [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/whatsapp/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L42)

___

### WhatsAppIntegrationListRequest

Ƭ **WhatsAppIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[integration/whatsapp/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L46)

___

### WhatsAppIntegrationListResponse

Ƭ **WhatsAppIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance)[] |

#### Defined in

[integration/whatsapp/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L48)

___

### WhatsAppIntegrationListStreamItem

Ƭ **WhatsAppIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/whatsapp/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L53)

___

### WhatsAppIntegrationListStreamType

Ƭ **WhatsAppIntegrationListStreamType**\<\>: [`WhatsAppIntegrationListStreamItem`](integration_whatsapp_v1.md#whatsappintegrationliststreamitem)

#### Defined in

[integration/whatsapp/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L55)

___

### WhatsAppIntegrationOptions

Ƭ **WhatsAppIntegrationOptions**\<\>: [`BotRefOrConfig`](integration_whatsapp_v1.md#botreforconfig) & \{ `accessToken?`: `string` ; `description?`: `string` ; `meta?`: `Record`\<`string`, `any`\> ; `name?`: `string` ; `phoneNumberId?`: `string` ; `sessionDuration?`: `number`  }

#### Defined in

[integration/whatsapp/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L36)

___

### WhatsAppIntegrationSetupResponse

Ƭ **WhatsAppIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:172](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L172)

___

### WhatsAppIntegrationUpdateRequest

Ƭ **WhatsAppIntegrationUpdateRequest**\<\>: [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/whatsapp/v1.js:121](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L121)

___

### WhatsAppIntegrationUpdateResponse

Ƭ **WhatsAppIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L125)

## Functions

### createWhatsAppIntegration

▸ **createWhatsAppIntegration**(`client`, `request`): `Promise`\<[`WhatsAppIntegrationCreateResponse`](integration_whatsapp_v1.md#whatsappintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`WhatsAppIntegrationCreateRequest`](integration_whatsapp_v1.md#whatsappintegrationcreaterequest) |

#### Returns

`Promise`\<[`WhatsAppIntegrationCreateResponse`](integration_whatsapp_v1.md#whatsappintegrationcreateresponse)\>

#### Defined in

[integration/whatsapp/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L102)

___

### deleteWhatsAppIntegration

▸ **deleteWhatsAppIntegration**(`client`, `whatsappId`): `Promise`\<[`WhatsAppIntegrationDeleteResponse`](integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |

#### Returns

`Promise`\<[`WhatsAppIntegrationDeleteResponse`](integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)\>

#### Defined in

[integration/whatsapp/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L157)

___

### fetchWhatsAppIntegration

▸ **fetchWhatsAppIntegration**(`client`, `whatsappId`): `Promise`\<[`WhatsAppIntegrationFetchResponse`](integration_whatsapp_v1.md#whatsappintegrationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |

#### Returns

`Promise`\<[`WhatsAppIntegrationFetchResponse`](integration_whatsapp_v1.md#whatsappintegrationfetchresponse)\>

#### Defined in

[integration/whatsapp/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L80)

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

[integration/whatsapp/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L61)

___

### setupWhatsAppIntegration

▸ **setupWhatsAppIntegration**(`client`, `whatsappId`): `Promise`\<[`WhatsAppIntegrationSetupResponse`](integration_whatsapp_v1.md#whatsappintegrationsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |

#### Returns

`Promise`\<[`WhatsAppIntegrationSetupResponse`](integration_whatsapp_v1.md#whatsappintegrationsetupresponse)\>

#### Defined in

[integration/whatsapp/v1.js:178](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L178)

___

### updateWhatsAppIntegration

▸ **updateWhatsAppIntegration**(`client`, `whatsappId`, `request`): `Promise`\<[`WhatsAppIntegrationUpdateResponse`](integration_whatsapp_v1.md#whatsappintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |
| `request` | [`WhatsAppIntegrationUpdateRequest`](integration_whatsapp_v1.md#whatsappintegrationupdaterequest) |

#### Returns

`Promise`\<[`WhatsAppIntegrationUpdateResponse`](integration_whatsapp_v1.md#whatsappintegrationupdateresponse)\>

#### Defined in

[integration/whatsapp/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L132)
