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

- [create](integration_whatsapp.WhatsAppIntegrationClient.md#create)
- [delete](integration_whatsapp.WhatsAppIntegrationClient.md#delete)
- [extend](integration_whatsapp.WhatsAppIntegrationClient.md#extend)
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

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/whatsapp/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L51)

___

### delete

▸ **delete**(`whatsappId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/whatsapp/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L72)

___

### extend

▸ **extend**(`extensionOptions`): [`WhatsAppIntegrationClient`](integration_whatsapp.WhatsAppIntegrationClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`WhatsAppIntegrationClient`](integration_whatsapp.WhatsAppIntegrationClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`whatsappId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/whatsapp/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all whatsapp integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`WhatsAppIntegrationListRequest`](../modules/integration_whatsapp_v1.md#whatsappintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/whatsapp/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L31)

___

### setup

▸ **setup**(`whatsappId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Setups a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/whatsapp/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L82)

___

### update

▸ **update**(`whatsappId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a whatsapp integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `whatsappId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/whatsapp/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/index.js#L62)
