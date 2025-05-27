[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/support](../modules/integration_support.md) / SupportIntegrationClient

# Class: SupportIntegrationClient

[integration/support](../modules/integration_support.md).SupportIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SupportIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_support.SupportIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_support.SupportIntegrationClient.md#clientfetch)
- [create](integration_support.SupportIntegrationClient.md#create)
- [delete](integration_support.SupportIntegrationClient.md#delete)
- [fetch](integration_support.SupportIntegrationClient.md#fetch)
- [list](integration_support.SupportIntegrationClient.md#list)
- [update](integration_support.SupportIntegrationClient.md#update)

## Constructors

### constructor

• **new SupportIntegrationClient**(`options`): [`SupportIntegrationClient`](integration_support.SupportIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`SupportIntegrationClient`](integration_support.SupportIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/support/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L20)

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
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:308](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L308)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationCreateResponse`](../modules/integration_support_v1.md#supportintegrationcreateresponse)\>

Creates a new support integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SupportIntegrationCreateRequest`](../modules/integration_support_v1.md#supportintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationCreateResponse`](../modules/integration_support_v1.md#supportintegrationcreateresponse)\>

#### Defined in

[integration/support/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L50)

___

### delete

▸ **delete**(`supportId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationDeleteResponse`](../modules/integration_support_v1.md#supportintegrationdeleteresponse)\>

Deletes a support integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `supportId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationDeleteResponse`](../modules/integration_support_v1.md#supportintegrationdeleteresponse)\>

#### Defined in

[integration/support/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L71)

___

### fetch

▸ **fetch**(`supportId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SupportIntegrationFetchResponse`](../modules/integration_support_v1.md#supportintegrationfetchresponse), `never`\>

Fetches a support integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `supportId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SupportIntegrationFetchResponse`](../modules/integration_support_v1.md#supportintegrationfetchresponse), `never`\>

#### Defined in

[integration/support/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L40)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SupportIntegrationListResponse`](../modules/integration_support_v1.md#supportintegrationlistresponse), [`SupportIntegrationListStreamItem`](../modules/integration_support_v1.md#supportintegrationliststreamitem)\>

Retrieves a list of all support integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`SupportIntegrationListRequest`](../modules/integration_support_v1.md#supportintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SupportIntegrationListResponse`](../modules/integration_support_v1.md#supportintegrationlistresponse), [`SupportIntegrationListStreamItem`](../modules/integration_support_v1.md#supportintegrationliststreamitem)\>

#### Defined in

[integration/support/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L30)

___

### update

▸ **update**(`supportId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationUpdateResponse`](../modules/integration_support_v1.md#supportintegrationupdateresponse)\>

Updates a support integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `supportId` | `string` |
| `request` | [`SupportIntegrationOptions`](../modules/integration_support_v1.md#supportintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SupportIntegrationUpdateResponse`](../modules/integration_support_v1.md#supportintegrationupdateresponse)\>

#### Defined in

[integration/support/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/index.js#L61)
