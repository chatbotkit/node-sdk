[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/email](../modules/integration_email.md) / EmailIntegrationClient

# Class: EmailIntegrationClient

[integration/email](../modules/integration_email.md).EmailIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`EmailIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_email.EmailIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_email.EmailIntegrationClient.md#clientfetch)
- [create](integration_email.EmailIntegrationClient.md#create)
- [delete](integration_email.EmailIntegrationClient.md#delete)
- [fetch](integration_email.EmailIntegrationClient.md#fetch)
- [list](integration_email.EmailIntegrationClient.md#list)
- [setup](integration_email.EmailIntegrationClient.md#setup)
- [update](integration_email.EmailIntegrationClient.md#update)

## Constructors

### constructor

• **new EmailIntegrationClient**(`options`): [`EmailIntegrationClient`](integration_email.EmailIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`EmailIntegrationClient`](integration_email.EmailIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/email/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/index.js#L21)

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

[client.js:250](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L250)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationCreateResponse`](../modules/integration_email_v1.md#emailintegrationcreateresponse)\>

Creates a new email integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`EmailIntegrationCreateRequest`](../modules/integration_email_v1.md#emailintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationCreateResponse`](../modules/integration_email_v1.md#emailintegrationcreateresponse)\>

#### Defined in

[integration/email/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/index.js#L51)

___

### delete

▸ **delete**(`emailId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationDeleteResponse`](../modules/integration_email_v1.md#emailintegrationdeleteresponse)\>

Deletes a email integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emailId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationDeleteResponse`](../modules/integration_email_v1.md#emailintegrationdeleteresponse)\>

#### Defined in

[integration/email/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/index.js#L72)

___

### fetch

▸ **fetch**(`emailId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationFetchResponse`](../modules/integration_email_v1.md#emailintegrationfetchresponse)\>

Fetches a email integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emailId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationFetchResponse`](../modules/integration_email_v1.md#emailintegrationfetchresponse)\>

#### Defined in

[integration/email/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`EmailIntegrationListResponse`](../modules/integration_email_v1.md#emailintegrationlistresponse), [`EmailIntegrationListStreamItem`](../modules/integration_email_v1.md#emailintegrationliststreamitem)\>

Retrieves a list of all email integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`EmailIntegrationListRequest`](../modules/integration_email_v1.md#emailintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`EmailIntegrationListResponse`](../modules/integration_email_v1.md#emailintegrationlistresponse), [`EmailIntegrationListStreamItem`](../modules/integration_email_v1.md#emailintegrationliststreamitem)\>

#### Defined in

[integration/email/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/index.js#L31)

___

### setup

▸ **setup**(`emailId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationSetupResponse`](../modules/integration_email_v1.md#emailintegrationsetupresponse)\>

Setups a email integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emailId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationSetupResponse`](../modules/integration_email_v1.md#emailintegrationsetupresponse)\>

#### Defined in

[integration/email/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/index.js#L82)

___

### update

▸ **update**(`emailId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationUpdateResponse`](../modules/integration_email_v1.md#emailintegrationupdateresponse)\>

Updates a email integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emailId` | `string` |
| `request` | [`EmailIntegrationUpdateRequest`](../modules/integration_email_v1.md#emailintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationUpdateResponse`](../modules/integration_email_v1.md#emailintegrationupdateresponse)\>

#### Defined in

[integration/email/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/index.js#L62)
