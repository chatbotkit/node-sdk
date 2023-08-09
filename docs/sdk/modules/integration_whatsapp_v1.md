[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/whatsapp/v1

# Module: integration/whatsapp/v1

## Table of contents

### Type Aliases

- [BotConfig](integration_whatsapp_v1.md#botconfig)
- [BotRef](integration_whatsapp_v1.md#botref)
- [BotRefOrConfig](integration_whatsapp_v1.md#botreforconfig)
- [ChatBotKitClient](integration_whatsapp_v1.md#chatbotkitclient)
- [WhatsappCreateRequest](integration_whatsapp_v1.md#whatsappcreaterequest)
- [WhatsappCreateResponse](integration_whatsapp_v1.md#whatsappcreateresponse)
- [WhatsappDeleteResponse](integration_whatsapp_v1.md#whatsappdeleteresponse)
- [WhatsappFetchResponse](integration_whatsapp_v1.md#whatsappfetchresponse)
- [WhatsappInstance](integration_whatsapp_v1.md#whatsappinstance)
- [WhatsappListResponse](integration_whatsapp_v1.md#whatsapplistresponse)
- [WhatsappListStreamItem](integration_whatsapp_v1.md#whatsappliststreamitem)
- [WhatsappListStreamType](integration_whatsapp_v1.md#whatsappliststreamtype)
- [WhatsappOptions](integration_whatsapp_v1.md#whatsappoptions)
- [WhatsappSetupResponse](integration_whatsapp_v1.md#whatsappsetupresponse)
- [WhatsappUpdateRequest](integration_whatsapp_v1.md#whatsappupdaterequest)
- [WhatsappUpdateResponse](integration_whatsapp_v1.md#whatsappupdateresponse)

### Functions

- [whatsappCreate](integration_whatsapp_v1.md#whatsappcreate)
- [whatsappDelete](integration_whatsapp_v1.md#whatsappdelete)
- [whatsappFetch](integration_whatsapp_v1.md#whatsappfetch)
- [whatsappList](integration_whatsapp_v1.md#whatsapplist)
- [whatsappSetup](integration_whatsapp_v1.md#whatsappsetup)
- [whatsappUpdate](integration_whatsapp_v1.md#whatsappupdate)

## Type Aliases

### BotConfig

Ƭ **BotConfig**<\>: `Object`

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

[integration/whatsapp/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L17)

___

### BotRef

Ƭ **BotRef**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |

#### Defined in

[integration/whatsapp/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L8)

___

### BotRefOrConfig

Ƭ **BotRefOrConfig**<\>: [`BotRef`](integration_whatsapp_v1.md#botref) \| [`BotConfig`](integration_whatsapp_v1.md#botconfig)

#### Defined in

[integration/whatsapp/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L19)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[integration/whatsapp/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L2)

___

### WhatsappCreateRequest

Ƭ **WhatsappCreateRequest**<\>: [`WhatsappOptions`](integration_whatsapp_v1.md#whatsappoptions)

#### Defined in

[integration/whatsapp/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L75)

___

### WhatsappCreateResponse

Ƭ **WhatsappCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L79)

___

### WhatsappDeleteResponse

Ƭ **WhatsappDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L116)

___

### WhatsappFetchResponse

Ƭ **WhatsappFetchResponse**<\>: [`WhatsappInstance`](integration_whatsapp_v1.md#whatsappinstance)

#### Defined in

[integration/whatsapp/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L62)

___

### WhatsappInstance

Ƭ **WhatsappInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`WhatsappOptions`](integration_whatsapp_v1.md#whatsappoptions)

#### Defined in

[integration/whatsapp/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L34)

___

### WhatsappListResponse

Ƭ **WhatsappListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`WhatsappInstance`](integration_whatsapp_v1.md#whatsappinstance)[] |

#### Defined in

[integration/whatsapp/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L38)

___

### WhatsappListStreamItem

Ƭ **WhatsappListStreamItem**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`WhatsappInstance`](integration_whatsapp_v1.md#whatsappinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/whatsapp/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L43)

___

### WhatsappListStreamType

Ƭ **WhatsappListStreamType**<\>: [`WhatsappListStreamItem`](integration_whatsapp_v1.md#whatsappliststreamitem)

#### Defined in

[integration/whatsapp/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L45)

___

### WhatsappOptions

Ƭ **WhatsappOptions**<\>: [`BotRefOrConfig`](integration_whatsapp_v1.md#botreforconfig) & { `accessToken?`: `string` ; `description?`: `string` ; `meta?`: `Record`<`string`, `any`\> ; `name?`: `string` ; `phoneNumberId?`: `string` ; `sessionDuration?`: `number`  }

#### Defined in

[integration/whatsapp/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L28)

___

### WhatsappSetupResponse

Ƭ **WhatsappSetupResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L133)

___

### WhatsappUpdateRequest

Ƭ **WhatsappUpdateRequest**<\>: [`WhatsappOptions`](integration_whatsapp_v1.md#whatsappoptions)

#### Defined in

[integration/whatsapp/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L94)

___

### WhatsappUpdateResponse

Ƭ **WhatsappUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/whatsapp/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L98)

## Functions

### whatsappCreate

▸ **whatsappCreate**(`client`, `request`): `Promise`<[`WhatsappCreateResponse`](integration_whatsapp_v1.md#whatsappcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`WhatsappOptions`](integration_whatsapp_v1.md#whatsappoptions) |

#### Returns

`Promise`<[`WhatsappCreateResponse`](integration_whatsapp_v1.md#whatsappcreateresponse)\>

#### Defined in

[integration/whatsapp/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L85)

___

### whatsappDelete

▸ **whatsappDelete**(`client`, `whatsappId`): `Promise`<[`WhatsappDeleteResponse`](integration_whatsapp_v1.md#whatsappdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `whatsappId` | `string` |

#### Returns

`Promise`<[`WhatsappDeleteResponse`](integration_whatsapp_v1.md#whatsappdeleteresponse)\>

#### Defined in

[integration/whatsapp/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L122)

___

### whatsappFetch

▸ **whatsappFetch**(`client`, `whatsappId`): `Promise`<[`WhatsappInstance`](integration_whatsapp_v1.md#whatsappinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `whatsappId` | `string` |

#### Returns

`Promise`<[`WhatsappInstance`](integration_whatsapp_v1.md#whatsappinstance)\>

#### Defined in

[integration/whatsapp/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L68)

___

### whatsappList

▸ **whatsappList**(`client`, `cursor?`): `ResponsePromise`<[`WhatsappListResponse`](integration_whatsapp_v1.md#whatsapplistresponse), [`WhatsappListStreamItem`](integration_whatsapp_v1.md#whatsappliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `cursor?` | `string` |

#### Returns

`ResponsePromise`<[`WhatsappListResponse`](integration_whatsapp_v1.md#whatsapplistresponse), [`WhatsappListStreamItem`](integration_whatsapp_v1.md#whatsappliststreamitem)\>

#### Defined in

[integration/whatsapp/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L51)

___

### whatsappSetup

▸ **whatsappSetup**(`client`, `whatsappId`): `Promise`<[`WhatsappSetupResponse`](integration_whatsapp_v1.md#whatsappsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `whatsappId` | `string` |

#### Returns

`Promise`<[`WhatsappSetupResponse`](integration_whatsapp_v1.md#whatsappsetupresponse)\>

#### Defined in

[integration/whatsapp/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L139)

___

### whatsappUpdate

▸ **whatsappUpdate**(`client`, `whatsappId`, `request`): `Promise`<[`WhatsappUpdateResponse`](integration_whatsapp_v1.md#whatsappupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `whatsappId` | `string` |
| `request` | [`WhatsappOptions`](integration_whatsapp_v1.md#whatsappoptions) |

#### Returns

`Promise`<[`WhatsappUpdateResponse`](integration_whatsapp_v1.md#whatsappupdateresponse)\>

#### Defined in

[integration/whatsapp/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/v1.js#L105)
