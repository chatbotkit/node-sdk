[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/extract](../modules/integration_extract.md) / ExtractIntegrationClient

# Class: ExtractIntegrationClient

[integration/extract](../modules/integration_extract.md).ExtractIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ExtractIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_extract.ExtractIntegrationClient.md#constructor)

### Methods

- [create](integration_extract.ExtractIntegrationClient.md#create)
- [delete](integration_extract.ExtractIntegrationClient.md#delete)
- [extend](integration_extract.ExtractIntegrationClient.md#extend)
- [fetch](integration_extract.ExtractIntegrationClient.md#fetch)
- [list](integration_extract.ExtractIntegrationClient.md#list)
- [update](integration_extract.ExtractIntegrationClient.md#update)

## Constructors

### constructor

• **new ExtractIntegrationClient**(`options`): [`ExtractIntegrationClient`](integration_extract.ExtractIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ExtractIntegrationClient`](integration_extract.ExtractIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/extract/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L20)

## Methods

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new extract integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/extract/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L50)

___

### delete

▸ **delete**(`extractId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a extract integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extractId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/extract/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L71)

___

### extend

▸ **extend**(`extensionOptions`): [`ExtractIntegrationClient`](integration_extract.ExtractIntegrationClient.md)

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

[`ExtractIntegrationClient`](integration_extract.ExtractIntegrationClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`extractId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a extract integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extractId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/extract/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L40)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all extract integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`ExtractIntegrationListRequest`](../modules/integration_extract_v1.md#extractintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/extract/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L30)

___

### update

▸ **update**(`extractId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a extract integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extractId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/extract/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L61)
