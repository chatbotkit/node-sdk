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

[integration/whatsapp/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L23)

___

### BotRef

Ƭ **BotRef**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |

#### Defined in

[integration/whatsapp/v1.js:14](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L14)

___

### BotRefOrConfig

Ƭ **BotRefOrConfig**\<\>: [`BotRef`](integration_whatsapp_v1.md#botref) \| [`BotConfig`](integration_whatsapp_v1.md#botconfig)

#### Defined in

[integration/whatsapp/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L25)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: `ChatBotKitClient`

#### Defined in

[integration/whatsapp/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: `ResponsePromise`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/whatsapp/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L8)

___

### WhatsAppIntegrationCreateRequest

Ƭ **WhatsAppIntegrationCreateRequest**\<\>: [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions) & {}

#### Defined in

[integration/whatsapp/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L87)

___

### WhatsAppIntegrationCreateResponse

Ƭ **WhatsAppIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:91](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L91)

___

### WhatsAppIntegrationDeleteResponse

Ƭ **WhatsAppIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:136](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L136)

___

### WhatsAppIntegrationFetchResponse

Ƭ **WhatsAppIntegrationFetchResponse**\<\>: [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance)

#### Defined in

[integration/whatsapp/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L71)

___

### WhatsAppIntegrationInstance

Ƭ **WhatsAppIntegrationInstance**\<\>: \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions)

#### Defined in

[integration/whatsapp/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L40)

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

[integration/whatsapp/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L44)

___

### WhatsAppIntegrationListResponse

Ƭ **WhatsAppIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance)[] |

#### Defined in

[integration/whatsapp/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L46)

___

### WhatsAppIntegrationListStreamItem

Ƭ **WhatsAppIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/whatsapp/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L51)

___

### WhatsAppIntegrationListStreamType

Ƭ **WhatsAppIntegrationListStreamType**\<\>: [`WhatsAppIntegrationListStreamItem`](integration_whatsapp_v1.md#whatsappintegrationliststreamitem)

#### Defined in

[integration/whatsapp/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L53)

___

### WhatsAppIntegrationOptions

Ƭ **WhatsAppIntegrationOptions**\<\>: [`BotRefOrConfig`](integration_whatsapp_v1.md#botreforconfig) & \{ `accessToken?`: `string` ; `description?`: `string` ; `meta?`: `Record`\<`string`, `any`\> ; `name?`: `string` ; `phoneNumberId?`: `string` ; `sessionDuration?`: `number`  }

#### Defined in

[integration/whatsapp/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L34)

___

### WhatsAppIntegrationSetupResponse

Ƭ **WhatsAppIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L157)

___

### WhatsAppIntegrationUpdateRequest

Ƭ **WhatsAppIntegrationUpdateRequest**\<\>: [`WhatsAppIntegrationOptions`](integration_whatsapp_v1.md#whatsappintegrationoptions) & {}

#### Defined in

[integration/whatsapp/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L110)

___

### WhatsAppIntegrationUpdateResponse

Ƭ **WhatsAppIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L114)

## Functions

### createWhatsAppIntegration

▸ **createWhatsAppIntegration**(`client`, `request`): `Promise`\<[`WhatsAppIntegrationCreateResponse`](integration_whatsapp_v1.md#whatsappintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`WhatsAppIntegrationCreateRequest`](integration_whatsapp_v1.md#whatsappintegrationcreaterequest) |

#### Returns

`Promise`\<[`WhatsAppIntegrationCreateResponse`](integration_whatsapp_v1.md#whatsappintegrationcreateresponse)\>

#### Defined in

[integration/whatsapp/v1.js:97](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L97)

___

### deleteWhatsAppIntegration

▸ **deleteWhatsAppIntegration**(`client`, `whatsappId`): `Promise`\<[`WhatsAppIntegrationDeleteResponse`](integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `whatsappId` | `string` |

#### Returns

`Promise`\<[`WhatsAppIntegrationDeleteResponse`](integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)\>

#### Defined in

[integration/whatsapp/v1.js:142](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L142)

___

### fetchWhatsAppIntegration

▸ **fetchWhatsAppIntegration**(`client`, `whatsappId`): `Promise`\<[`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `whatsappId` | `string` |

#### Returns

`Promise`\<[`WhatsAppIntegrationInstance`](integration_whatsapp_v1.md#whatsappintegrationinstance)\>

#### Defined in

[integration/whatsapp/v1.js:77](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L77)

___

### listWhatsAppIntegrations

▸ **listWhatsAppIntegrations**(`client`, `request?`): `ResponsePromise`\<[`WhatsAppIntegrationListResponse`](integration_whatsapp_v1.md#whatsappintegrationlistresponse), [`WhatsAppIntegrationListStreamItem`](integration_whatsapp_v1.md#whatsappintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request?` | [`WhatsAppIntegrationListRequest`](integration_whatsapp_v1.md#whatsappintegrationlistrequest) |

#### Returns

`ResponsePromise`\<[`WhatsAppIntegrationListResponse`](integration_whatsapp_v1.md#whatsappintegrationlistresponse), [`WhatsAppIntegrationListStreamItem`](integration_whatsapp_v1.md#whatsappintegrationliststreamitem)\>

#### Defined in

[integration/whatsapp/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L59)

___

### setupWhatsAppIntegration

▸ **setupWhatsAppIntegration**(`client`, `whatsappId`): `Promise`\<[`WhatsAppIntegrationSetupResponse`](integration_whatsapp_v1.md#whatsappintegrationsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `whatsappId` | `string` |

#### Returns

`Promise`\<[`WhatsAppIntegrationSetupResponse`](integration_whatsapp_v1.md#whatsappintegrationsetupresponse)\>

#### Defined in

[integration/whatsapp/v1.js:163](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L163)

___

### updateWhatsAppIntegration

▸ **updateWhatsAppIntegration**(`client`, `whatsappId`, `request`): `Promise`\<[`WhatsAppIntegrationUpdateResponse`](integration_whatsapp_v1.md#whatsappintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `whatsappId` | `string` |
| `request` | [`WhatsAppIntegrationUpdateRequest`](integration_whatsapp_v1.md#whatsappintegrationupdaterequest) |

#### Returns

`Promise`\<[`WhatsAppIntegrationUpdateResponse`](integration_whatsapp_v1.md#whatsappintegrationupdateresponse)\>

#### Defined in

[integration/whatsapp/v1.js:121](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/whatsapp/v1.js#L121)
