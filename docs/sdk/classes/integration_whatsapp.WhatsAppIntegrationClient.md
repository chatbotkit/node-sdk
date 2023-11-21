[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/whatsapp](../modules/integration_whatsapp.md) / WhatsAppIntegrationClient

# Class: WhatsAppIntegrationClient

[integration/whatsapp](../modules/integration_whatsapp.md).WhatsAppIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- `ChatBotKitClient`

  ↳ **`WhatsAppIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_whatsapp.WhatsAppIntegrationClient.md#constructor)

### Properties

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
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`WhatsAppIntegrationClient`](integration_whatsapp.WhatsAppIntegrationClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[integration/whatsapp/index.js:21](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/integration/whatsapp/index.js#L21)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L189)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): `ResponsePromise`\<`T`, `U`\>

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

`ResponsePromise`\<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L206)

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

[integration/whatsapp/index.js:51](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/integration/whatsapp/index.js#L51)

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

[integration/whatsapp/index.js:72](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/integration/whatsapp/index.js#L72)

___

### fetch

▸ **fetch**(`whatsappId`): `Promise`\<[`WhatsAppIntegrationInstance`](../modules/integration_whatsapp_v1.md#whatsappintegrationinstance)\>

Fetches a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

`Promise`\<[`WhatsAppIntegrationInstance`](../modules/integration_whatsapp_v1.md#whatsappintegrationinstance)\>

#### Defined in

[integration/whatsapp/index.js:41](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/integration/whatsapp/index.js#L41)

___

### list

▸ **list**(`request?`): `ResponsePromise`\<[`WhatsAppIntegrationListResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationlistresponse), [`WhatsAppIntegrationListStreamItem`](../modules/integration_whatsapp_v1.md#whatsappintegrationliststreamitem)\>

Retrieves a list of all whatsapp integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`WhatsAppIntegrationListRequest`](../modules/integration_whatsapp_v1.md#whatsappintegrationlistrequest) |

#### Returns

`ResponsePromise`\<[`WhatsAppIntegrationListResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationlistresponse), [`WhatsAppIntegrationListStreamItem`](../modules/integration_whatsapp_v1.md#whatsappintegrationliststreamitem)\>

#### Defined in

[integration/whatsapp/index.js:31](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/integration/whatsapp/index.js#L31)

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

[integration/whatsapp/index.js:82](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/integration/whatsapp/index.js#L82)

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

[integration/whatsapp/index.js:62](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/integration/whatsapp/index.js#L62)
