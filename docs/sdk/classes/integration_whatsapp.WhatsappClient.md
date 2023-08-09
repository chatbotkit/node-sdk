[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/whatsapp](../modules/integration_whatsapp.md) / WhatsappClient

# Class: WhatsappClient

[integration/whatsapp](../modules/integration_whatsapp.md).WhatsappClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`WhatsappClient`**

## Table of contents

### Constructors

- [constructor](integration_whatsapp.WhatsappClient.md#constructor)

### Properties

- [secret](integration_whatsapp.WhatsappClient.md#secret)
- [url](integration_whatsapp.WhatsappClient.md#url)

### Methods

- [clientFetch](integration_whatsapp.WhatsappClient.md#clientfetch)
- [create](integration_whatsapp.WhatsappClient.md#create)
- [delete](integration_whatsapp.WhatsappClient.md#delete)
- [fetch](integration_whatsapp.WhatsappClient.md#fetch)
- [list](integration_whatsapp.WhatsappClient.md#list)
- [setup](integration_whatsapp.WhatsappClient.md#setup)
- [update](integration_whatsapp.WhatsappClient.md#update)

## Constructors

### constructor

• **new WhatsappClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[integration/whatsapp/index.js:15](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/index.js#L15)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:182](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/client.js#L182)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:184](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/client.js#L184)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `U`\>(`path`, `options?`): `ResponsePromise`<`T`, `U`\>

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
| `options.data?` | `Record`<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/client.js#L201)

___

### create

▸ **create**(`request`): `Promise`<[`WhatsappCreateResponse`](../modules/integration_whatsapp_v1.md#whatsappcreateresponse)\>

Creates a new whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`WhatsappOptions`](../modules/integration_whatsapp_v1.md#whatsappoptions) |

#### Returns

`Promise`<[`WhatsappCreateResponse`](../modules/integration_whatsapp_v1.md#whatsappcreateresponse)\>

#### Defined in

[integration/whatsapp/index.js:45](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/index.js#L45)

___

### delete

▸ **delete**(`whatsappId`): `Promise`<[`WhatsappDeleteResponse`](../modules/integration_whatsapp_v1.md#whatsappdeleteresponse)\>

Deletes a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

`Promise`<[`WhatsappDeleteResponse`](../modules/integration_whatsapp_v1.md#whatsappdeleteresponse)\>

#### Defined in

[integration/whatsapp/index.js:66](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/index.js#L66)

___

### fetch

▸ **fetch**(`whatsappId`): `Promise`<[`WhatsappInstance`](../modules/integration_whatsapp_v1.md#whatsappinstance)\>

Fetches a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

`Promise`<[`WhatsappInstance`](../modules/integration_whatsapp_v1.md#whatsappinstance)\>

#### Defined in

[integration/whatsapp/index.js:35](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/index.js#L35)

___

### list

▸ **list**(`cursor?`): `ResponsePromise`<[`WhatsappListResponse`](../modules/integration_whatsapp_v1.md#whatsapplistresponse), [`WhatsappListStreamItem`](../modules/integration_whatsapp_v1.md#whatsappliststreamitem)\>

Retrieves a list of all existing whatsapp integrations associated with this client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |

#### Returns

`ResponsePromise`<[`WhatsappListResponse`](../modules/integration_whatsapp_v1.md#whatsapplistresponse), [`WhatsappListStreamItem`](../modules/integration_whatsapp_v1.md#whatsappliststreamitem)\>

#### Defined in

[integration/whatsapp/index.js:25](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/index.js#L25)

___

### setup

▸ **setup**(`whatsappId`): `Promise`<[`WhatsappSetupResponse`](../modules/integration_whatsapp_v1.md#whatsappsetupresponse)\>

Setups a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

`Promise`<[`WhatsappSetupResponse`](../modules/integration_whatsapp_v1.md#whatsappsetupresponse)\>

#### Defined in

[integration/whatsapp/index.js:76](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/index.js#L76)

___

### update

▸ **update**(`whatsappId`, `request`): `Promise`<[`WhatsappUpdateResponse`](../modules/integration_whatsapp_v1.md#whatsappupdateresponse)\>

Updates a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |
| `request` | [`WhatsappOptions`](../modules/integration_whatsapp_v1.md#whatsappoptions) |

#### Returns

`Promise`<[`WhatsappUpdateResponse`](../modules/integration_whatsapp_v1.md#whatsappupdateresponse)\>

#### Defined in

[integration/whatsapp/index.js:56](https://github.com/chatbotkit/node-sdk/blob/90b5df9/packages/sdk/src/integration/whatsapp/index.js#L56)
