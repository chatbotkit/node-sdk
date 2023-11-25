[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/whatsapp](../modules/integration_whatsapp.md) / WhatsAppIntegrationClient

# Class: WhatsAppIntegrationClient

[integration/whatsapp](../modules/integration_whatsapp.md).WhatsAppIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`WhatsAppIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_whatsapp.WhatsAppIntegrationClient.md#constructor)

### Properties

- [endpoints](integration_whatsapp.WhatsAppIntegrationClient.md#endpoints)
- [secret](integration_whatsapp.WhatsAppIntegrationClient.md#secret)
- [url](integration_whatsapp.WhatsAppIntegrationClient.md#url)

### Methods

- [clientFetch](integration_whatsapp.WhatsAppIntegrationClient.md#clientfetch)
- [create](integration_whatsapp.WhatsAppIntegrationClient.md#create)
- [delete](integration_whatsapp.WhatsAppIntegrationClient.md#delete)
- [fetch](integration_whatsapp.WhatsAppIntegrationClient.md#fetch)
- [list](integration_whatsapp.WhatsAppIntegrationClient.md#list)
- [setup](integration_whatsapp.WhatsAppIntegrationClient.md#setup)
- [update](integration_whatsapp.WhatsAppIntegrationClient.md#update)

## Constructors

### constructor

• **new WhatsAppIntegrationClient**(`options`): [`WhatsAppIntegrationClient`](integration_whatsapp.WhatsAppIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`WhatsAppIntegrationClient`](integration_whatsapp.WhatsAppIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/whatsapp/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L21)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L201)

___

### secret

• **secret**: `string`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[secret](client.ChatBotKitClient.md#secret)

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L189)

___

### url

• **url**: `URL`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[url](client.ChatBotKitClient.md#url)

#### Defined in

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L191)

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
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L211)

___

### create

▸ **create**(`request`): `Promise`\<[`WhatsAppIntegrationCreateResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationcreateresponse)\>

Creates a new whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`WhatsAppIntegrationCreateRequest`](../modules/integration_whatsapp_v1.md#whatsappintegrationcreaterequest) |

#### Returns

`Promise`\<[`WhatsAppIntegrationCreateResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationcreateresponse)\>

#### Defined in

[integration/whatsapp/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L51)

___

### delete

▸ **delete**(`whatsappId`): `Promise`\<[`WhatsAppIntegrationDeleteResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)\>

Deletes a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

`Promise`\<[`WhatsAppIntegrationDeleteResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)\>

#### Defined in

[integration/whatsapp/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L72)

___

### fetch

▸ **fetch**(`whatsappId`): `Promise`\<[`WhatsAppIntegrationFetchResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationfetchresponse)\>

Fetches a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

`Promise`\<[`WhatsAppIntegrationFetchResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationfetchresponse)\>

#### Defined in

[integration/whatsapp/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`WhatsAppIntegrationListResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationlistresponse), [`WhatsAppIntegrationListStreamItem`](../modules/integration_whatsapp_v1.md#whatsappintegrationliststreamitem)\>

Retrieves a list of all whatsapp integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`WhatsAppIntegrationListRequest`](../modules/integration_whatsapp_v1.md#whatsappintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`WhatsAppIntegrationListResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationlistresponse), [`WhatsAppIntegrationListStreamItem`](../modules/integration_whatsapp_v1.md#whatsappintegrationliststreamitem)\>

#### Defined in

[integration/whatsapp/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L31)

___

### setup

▸ **setup**(`whatsappId`): `Promise`\<[`WhatsAppIntegrationSetupResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationsetupresponse)\>

Setups a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

`Promise`\<[`WhatsAppIntegrationSetupResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationsetupresponse)\>

#### Defined in

[integration/whatsapp/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L82)

___

### update

▸ **update**(`whatsappId`, `request`): `Promise`\<[`WhatsAppIntegrationUpdateResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationupdateresponse)\>

Updates a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |
| `request` | [`WhatsAppIntegrationUpdateRequest`](../modules/integration_whatsapp_v1.md#whatsappintegrationupdaterequest) |

#### Returns

`Promise`\<[`WhatsAppIntegrationUpdateResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationupdateresponse)\>

#### Defined in

[integration/whatsapp/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L62)
