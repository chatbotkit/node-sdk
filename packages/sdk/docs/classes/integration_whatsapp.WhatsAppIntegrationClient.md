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
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`WhatsAppIntegrationClient`](integration_whatsapp.WhatsAppIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/whatsapp/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L21)

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

[client.js:257](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L257)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationCreateResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationcreateresponse)\>

Creates a new whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`WhatsAppIntegrationCreateRequest`](../modules/integration_whatsapp_v1.md#whatsappintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationCreateResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationcreateresponse)\>

#### Defined in

[integration/whatsapp/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L51)

___

### delete

▸ **delete**(`whatsappId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationDeleteResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)\>

Deletes a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationDeleteResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)\>

#### Defined in

[integration/whatsapp/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L72)

___

### fetch

▸ **fetch**(`whatsappId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`WhatsAppIntegrationFetchResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationfetchresponse), `never`\>

Fetches a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`WhatsAppIntegrationFetchResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationfetchresponse), `never`\>

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

▸ **setup**(`whatsappId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationSetupResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationsetupresponse)\>

Setups a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationSetupResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationsetupresponse)\>

#### Defined in

[integration/whatsapp/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L82)

___

### update

▸ **update**(`whatsappId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationUpdateResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationupdateresponse)\>

Updates a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |
| `request` | [`WhatsAppIntegrationUpdateRequest`](../modules/integration_whatsapp_v1.md#whatsappintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WhatsAppIntegrationUpdateResponse`](../modules/integration_whatsapp_v1.md#whatsappintegrationupdateresponse)\>

#### Defined in

[integration/whatsapp/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L62)
